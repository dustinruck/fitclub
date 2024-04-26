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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = exports.sanitizeProps = exports.sanitizeNavProps = void 0;
var NavigateBefore_1 = __importDefault(require("@mui/icons-material/NavigateBefore"));
var NavigateNext_1 = __importDefault(require("@mui/icons-material/NavigateNext"));
var react_1 = __importStar(require("react"));
;
var sanitizeNavProps = function (props) {
    var _a = props || {}, className = _a.className, style = _a.style, rest = __rest(_a, ["className", "style"]);
    return props !== undefined ? __assign({ style: props.style !== undefined ? props.style : {}, className: props.className !== undefined ? props.className : "" }, rest) : __assign({ style: {}, className: "" }, rest);
};
exports.sanitizeNavProps = sanitizeNavProps;
var sanitizeProps = function (props) {
    var animation = props.animation !== undefined ? props.animation : "fade";
    var duration = props.duration !== undefined ? props.duration : (animation === "fade" ? 500 : 200);
    return {
        sx: props.sx !== undefined ? props.sx : {},
        className: props.className !== undefined ? props.className : "",
        children: props.children ? props.children : [],
        height: props.height,
        index: props.index !== undefined ? props.index : 0,
        strictIndexing: props.strictIndexing !== undefined ? props.strictIndexing : true,
        autoPlay: props.autoPlay !== undefined ? props.autoPlay : true,
        stopAutoPlayOnHover: props.stopAutoPlayOnHover !== undefined ? props.stopAutoPlayOnHover : true,
        interval: props.interval !== undefined ? props.interval : 4000,
        animation: animation,
        duration: duration,
        swipe: props.swipe !== undefined ? props.swipe : true,
        navButtonsAlwaysInvisible: props.navButtonsAlwaysInvisible !== undefined ? props.navButtonsAlwaysInvisible : false,
        navButtonsAlwaysVisible: props.navButtonsAlwaysVisible !== undefined ? props.navButtonsAlwaysVisible : false,
        cycleNavigation: props.cycleNavigation !== undefined ? props.cycleNavigation : true,
        fullHeightHover: props.fullHeightHover !== undefined ? props.fullHeightHover : true,
        navButtonsWrapperProps: (0, exports.sanitizeNavProps)(props.navButtonsWrapperProps),
        navButtonsProps: (0, exports.sanitizeNavProps)(props.navButtonsProps),
        NavButton: props.NavButton,
        NextIcon: props.NextIcon !== undefined ? props.NextIcon : react_1.default.createElement(NavigateNext_1.default, null),
        PrevIcon: props.PrevIcon !== undefined ? props.PrevIcon : react_1.default.createElement(NavigateBefore_1.default, null),
        indicators: props.indicators !== undefined ? props.indicators : true,
        indicatorContainerProps: (0, exports.sanitizeNavProps)(props.indicatorContainerProps),
        indicatorIconButtonProps: (0, exports.sanitizeNavProps)(props.indicatorIconButtonProps),
        activeIndicatorIconButtonProps: (0, exports.sanitizeNavProps)(props.activeIndicatorIconButtonProps),
        IndicatorIcon: props.IndicatorIcon,
        onChange: props.onChange !== undefined ? props.onChange : function () { },
        changeOnFirstRender: props.changeOnFirstRender !== undefined ? props.changeOnFirstRender : false,
        next: props.next !== undefined ? props.next : function () { },
        prev: props.prev !== undefined ? props.prev : function () { },
    };
};
exports.sanitizeProps = sanitizeProps;
var useInterval = function (callback, delay) {
    var savedCallback = (0, react_1.useRef)(function () { });
    // Remember the latest callback.
    (0, react_1.useEffect)(function () {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    (0, react_1.useEffect)(function () {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
        return function () { };
    }, [delay]);
};
exports.useInterval = useInterval;
