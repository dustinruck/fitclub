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
exports.Carousel = void 0;
var CarouselItem_1 = require("./CarouselItem");
var Indicators_1 = require("./Indicators");
var util_1 = require("./util");
var Styled_1 = require("./Styled");
var react_1 = __importStar(require("react"));
var Carousel = function (props) {
    var _a = (0, react_1.useState)({
        active: 0,
        prevActive: 0,
        next: true
    }), state = _a[0], setState = _a[1];
    /** Used to set carousel's height. It is being set by the CarouselItems */
    var _b = (0, react_1.useState)(), childrenHeight = _b[0], setChildrenHeight = _b[1];
    var _c = (0, react_1.useState)(false), paused = _c[0], setPaused = _c[1];
    var sanitizedProps = (0, util_1.sanitizeProps)(props);
    // componentDidMount & onIndexChange
    (0, react_1.useEffect)(function () {
        var index = sanitizedProps.index, changeOnFirstRender = sanitizedProps.changeOnFirstRender;
        setNext(index, true, changeOnFirstRender);
    }, [sanitizedProps.index]);
    (0, util_1.useInterval)(function () {
        var autoPlay = sanitizedProps.autoPlay;
        if (autoPlay && !paused) {
            next(undefined);
        }
    }, sanitizedProps.interval);
    var next = function (event) {
        var children = sanitizedProps.children, cycleNavigation = sanitizedProps.cycleNavigation;
        var last = Array.isArray(children) ? children.length - 1 : 0;
        var nextActive = state.active + 1 > last ? (cycleNavigation ? 0 : state.active) : state.active + 1;
        setNext(nextActive, true);
        if (event)
            event.stopPropagation();
    };
    var prev = function (event) {
        var children = sanitizedProps.children, cycleNavigation = sanitizedProps.cycleNavigation;
        var last = Array.isArray(children) ? children.length - 1 : 0;
        var nextActive = state.active - 1 < 0 ? (cycleNavigation ? last : state.active) : state.active - 1;
        setNext(nextActive, false);
        if (event)
            event.stopPropagation();
    };
    var setNext = function (index, isNext, runCallbacks) {
        if (runCallbacks === void 0) { runCallbacks = true; }
        var onChange = sanitizedProps.onChange, children = sanitizedProps.children, strictIndexing = sanitizedProps.strictIndexing;
        if (Array.isArray(children)) {
            if (strictIndexing && index > children.length - 1)
                index = children.length - 1;
            if (strictIndexing && index < 0)
                index = 0;
        }
        else {
            index = 0;
        }
        if (runCallbacks) {
            if (isNext !== undefined)
                isNext ? sanitizedProps.next(index, state.active) : sanitizedProps.prev(index, state.active);
            onChange(index, state.active);
        }
        if (isNext === undefined) {
            isNext = index > state.active;
        }
        setState({
            active: index,
            prevActive: state.active,
            next: isNext
        });
    };
    var children = sanitizedProps.children, sx = sanitizedProps.sx, className = sanitizedProps.className, height = sanitizedProps.height, stopAutoPlayOnHover = sanitizedProps.stopAutoPlayOnHover, animation = sanitizedProps.animation, duration = sanitizedProps.duration, swipe = sanitizedProps.swipe, navButtonsAlwaysInvisible = sanitizedProps.navButtonsAlwaysInvisible, navButtonsAlwaysVisible = sanitizedProps.navButtonsAlwaysVisible, cycleNavigation = sanitizedProps.cycleNavigation, fullHeightHover = sanitizedProps.fullHeightHover, navButtonsProps = sanitizedProps.navButtonsProps, navButtonsWrapperProps = sanitizedProps.navButtonsWrapperProps, NavButton = sanitizedProps.NavButton, NextIcon = sanitizedProps.NextIcon, PrevIcon = sanitizedProps.PrevIcon, indicators = sanitizedProps.indicators, indicatorContainerProps = sanitizedProps.indicatorContainerProps, indicatorIconButtonProps = sanitizedProps.indicatorIconButtonProps, activeIndicatorIconButtonProps = sanitizedProps.activeIndicatorIconButtonProps, IndicatorIcon = sanitizedProps.IndicatorIcon;
    var showButton = function (next) {
        if (next === void 0) { next = true; }
        if (cycleNavigation)
            return true;
        var last = Array.isArray(children) ? children.length - 1 : 0;
        if (next && state.active === last)
            return false;
        if (!next && state.active === 0)
            return false;
        return true;
    };
    return (react_1.default.createElement(Styled_1.StyledRoot, { sx: sx, className: className, onMouseOver: function () { stopAutoPlayOnHover && setPaused(true); }, onMouseOut: function () { stopAutoPlayOnHover && setPaused(false); }, onFocus: function () { stopAutoPlayOnHover && setPaused(true); }, onBlur: function () { stopAutoPlayOnHover && setPaused(false); } },
        react_1.default.createElement(Styled_1.StyledItemWrapper, { style: { height: height ? height : childrenHeight } }, Array.isArray(children) ?
            children.map(function (child, index) {
                return (react_1.default.createElement(CarouselItem_1.CarouselItem, { key: "carousel-item" + index, state: state, index: index, maxIndex: children.length - 1, child: child, animation: animation, duration: duration, swipe: swipe, next: next, prev: prev, height: height, setHeight: setChildrenHeight }));
            })
            :
                react_1.default.createElement(CarouselItem_1.CarouselItem, { key: "carousel-item0", state: state, index: 0, maxIndex: 0, child: children, animation: animation, duration: duration, height: height, setHeight: setChildrenHeight })),
        !navButtonsAlwaysInvisible && showButton(true) &&
            react_1.default.createElement(Styled_1.StyledButtonWrapper, __assign({ "$next": true, "$prev": false, "$fullHeightHover": fullHeightHover }, navButtonsWrapperProps), NavButton !== undefined ?
                NavButton(__assign({ onClick: next, next: true, prev: false }, navButtonsProps))
                :
                    react_1.default.createElement(Styled_1.StyledIconButton, __assign({ "$alwaysVisible": navButtonsAlwaysVisible, "$fullHeightHover": fullHeightHover, onClick: next, "aria-label": "Next" }, navButtonsProps), NextIcon)),
        !navButtonsAlwaysInvisible && showButton(false) &&
            react_1.default.createElement(Styled_1.StyledButtonWrapper, __assign({ "$next": false, "$prev": true, "$fullHeightHover": fullHeightHover }, navButtonsWrapperProps), NavButton !== undefined ?
                NavButton(__assign({ onClick: prev, next: false, prev: true }, navButtonsProps))
                :
                    react_1.default.createElement(Styled_1.StyledIconButton, __assign({ "$alwaysVisible": navButtonsAlwaysVisible, "$fullHeightHover": fullHeightHover, onClick: prev, "aria-label": "Previous" }, navButtonsProps), PrevIcon)),
        indicators ?
            react_1.default.createElement(Indicators_1.Indicators, { length: Array.isArray(children) ? children.length : 0, active: state.active, press: setNext, indicatorContainerProps: indicatorContainerProps, indicatorIconButtonProps: indicatorIconButtonProps, activeIndicatorIconButtonProps: activeIndicatorIconButtonProps, IndicatorIcon: IndicatorIcon }) : null));
};
exports.Carousel = Carousel;
exports.default = exports.Carousel;
