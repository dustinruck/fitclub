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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicators = void 0;
var react_1 = __importStar(require("react"));
var Styled_1 = require("./Styled");
var Indicators = function (props) {
    var IndicatorIcon = (0, react_1.useMemo)(function () { return props.IndicatorIcon !== undefined ? props.IndicatorIcon : react_1.default.createElement(Styled_1.StyledFiberManualRecordIcon, null); }, [props.IndicatorIcon]);
    var completeListIfRequired = (0, react_1.useCallback)(function (arrayOfIcons) {
        while (arrayOfIcons.length < props.length) {
            var index = 0;
            arrayOfIcons.push(arrayOfIcons[index]);
            index += 1;
        }
    }, [props.length]);
    var _a = props.indicatorIconButtonProps, indicatorIconButtonClass = _a.className, indicatorIconButtonStyle = _a.style, indicatorIconButtonProps = __rest(_a, ["className", "style"]);
    var _b = props.activeIndicatorIconButtonProps, activeIndicatorIconButtonClass = _b.className, activeIndicatorIconButtonStyle = _b.style, activeIndicatorIconButtonProps = __rest(_b, ["className", "style"]);
    var indicators = [];
    var _loop_1 = function (i) {
        var className = i === props.active ?
            indicatorIconButtonClass + " " + activeIndicatorIconButtonClass :
            "" + indicatorIconButtonClass;
        var style = i === props.active ?
            Object.assign({}, indicatorIconButtonStyle, activeIndicatorIconButtonStyle) :
            indicatorIconButtonStyle;
        var restProps = i === props.active ?
            Object.assign({}, indicatorIconButtonProps, activeIndicatorIconButtonProps) :
            indicatorIconButtonProps;
        if (restProps['aria-label'] === undefined)
            restProps['aria-label'] = 'carousel indicator';
        var createIndicator = function (IndicatorIcon) {
            return (react_1.default.createElement(Styled_1.StyledIndicatorIconButton, __assign({ "$active": i === props.active, key: i, className: className, style: style, onClick: function () { props.press(i); } }, restProps, { "aria-label": restProps['aria-label'] + " " + (i + 1) }), IndicatorIcon));
        };
        Array.isArray(IndicatorIcon)
            ? indicators.push(createIndicator(IndicatorIcon[i])) && completeListIfRequired(IndicatorIcon)
            : indicators.push(createIndicator(IndicatorIcon));
    };
    for (var i = 0; i < props.length; i++) {
        _loop_1(i);
    }
    var _c = props.indicatorContainerProps, indicatorContainerClass = _c.className, indicatorContainerStyle = _c.style, indicatorContainerProps = __rest(_c, ["className", "style"]);
    return (react_1.default.createElement(Styled_1.StyledIndicators, __assign({ className: indicatorContainerClass, style: indicatorContainerStyle }, indicatorContainerProps), indicators));
};
exports.Indicators = Indicators;
