"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselItem = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = __importStar(require("react"));
var Styled_1 = require("./Styled");
var CarouselItem = function (_a) {
    var animation = _a.animation, next = _a.next, prev = _a.prev, swipe = _a.swipe, state = _a.state, index = _a.index, maxIndex = _a.maxIndex, duration = _a.duration, child = _a.child, height = _a.height, setHeight = _a.setHeight;
    var slide = animation === 'slide';
    var fade = animation === 'fade';
    var dragProps = {
        drag: 'x',
        layout: true,
        onDragEnd: function (event, info) {
            if (!swipe)
                return;
            if (info.offset.x > 0)
                prev && prev();
            else if (info.offset.x < 0)
                next && next();
            event.stopPropagation();
        },
        dragElastic: 0,
        dragConstraints: { left: 0, right: 0 }
    };
    var divRef = (0, react_1.useRef)(null);
    var checkAndSetHeight = (0, react_1.useCallback)(function () {
        if (index !== state.active)
            return;
        if (!divRef.current)
            return;
        if (divRef.current.offsetHeight === 0) {
            setTimeout(function () { return checkAndSetHeight(); }, 100);
        }
        else {
            setHeight(divRef.current.offsetHeight);
        }
    }, [setHeight, state.active, index, divRef]);
    // Set height on every child change
    (0, react_1.useEffect)(function () {
        checkAndSetHeight();
    }, [checkAndSetHeight]);
    var variants = {
        leftwardExit: {
            x: slide ? '-100%' : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: 'relative'
        },
        leftOut: {
            x: slide ? '-100%' : undefined,
            opacity: fade ? 0 : undefined,
            display: 'none',
            zIndex: 0,
            // position: 'relative'
        },
        rightwardExit: {
            x: slide ? '100%' : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: 'relative'
        },
        rightOut: {
            x: slide ? '100%' : undefined,
            opacity: fade ? 0 : undefined,
            display: 'none',
            zIndex: 0,
            // position: 'relative'
        },
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1,
            // position: 'relative'
        },
    };
    // Handle animation directions and opacity given based on active, prevActive and this item's index
    var active = state.active, isNext = state.next, prevActive = state.prevActive;
    var animate = 'center';
    if (index === active)
        animate = 'center';
    else if (index === prevActive) {
        animate = isNext ? 'leftwardExit' : 'rightwardExit';
        if (active === maxIndex && index === 0)
            animate = 'rightwardExit';
        if (active === 0 && index === maxIndex)
            animate = 'leftwardExit';
    }
    else {
        animate = index < active ? 'leftOut' : 'rightOut';
        if (active === maxIndex && index === 0)
            animate = 'rightOut';
        if (active === 0 && index === maxIndex)
            animate = 'leftOut';
    }
    duration = duration / 1000;
    return (react_1.default.createElement(Styled_1.StyledItem, null,
        react_1.default.createElement(framer_motion_1.AnimatePresence, { custom: isNext },
            react_1.default.createElement(framer_motion_1.motion.div, __assign({}, (swipe && dragProps), { style: { height: '100%' } }),
                react_1.default.createElement(framer_motion_1.motion.div, { custom: isNext, variants: variants, animate: animate, transition: {
                        x: { type: "tween", duration: duration, delay: 0 },
                        opacity: { duration: duration },
                    }, style: { position: 'relative', height: '100%' } },
                    react_1.default.createElement("div", { ref: divRef, style: { height: height } }, child))))));
};
exports.CarouselItem = CarouselItem;
