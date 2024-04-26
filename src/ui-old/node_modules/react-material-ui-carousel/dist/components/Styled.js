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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButtonWrapper = exports.StyledIconButton = exports.StyledIndicatorIconButton = exports.StyledFiberManualRecordIcon = exports.StyledIndicators = exports.StyledItemWrapper = exports.StyledItem = exports.StyledRoot = void 0;
var FiberManualRecord_1 = __importDefault(require("@mui/icons-material/FiberManualRecord"));
var material_1 = require("@mui/material");
exports.StyledRoot = (0, material_1.styled)("div")({
    position: "relative",
    overflow: "hidden",
});
exports.StyledItem = (0, material_1.styled)("div")({
    position: "absolute",
    height: "100%",
    width: '100%',
    //    flexGrow: 1
});
exports.StyledItemWrapper = (0, material_1.styled)("div")({
    position: 'relative',
    width: '100%',
    height: '100%',
});
exports.StyledIndicators = (0, material_1.styled)("div")({
    width: "100%",
    marginTop: "10px",
    textAlign: "center"
});
exports.StyledFiberManualRecordIcon = (0, material_1.styled)(FiberManualRecord_1.default)({
    fontSize: "15px",
});
exports.StyledIndicatorIconButton = (0, material_1.styled)(material_1.IconButton, { shouldForwardProp: function (propName) { return !propName.startsWith('$'); } })(function (_a) {
    var $active = _a.$active;
    return ({
        cursor: "pointer",
        transition: "200ms",
        padding: 0,
        color: $active ? "#494949" : "#afafaf",
        '&:hover': {
            color: $active ? "#494949" : "#1f1f1f",
        },
        '&:active': {
            color: $active ? "#494949" : "#1f1f1f",
        }
    });
});
exports.StyledIconButton = (0, material_1.styled)(material_1.IconButton, { shouldForwardProp: function (propName) { return !propName.startsWith('$'); } })(function (_a) {
    var $alwaysVisible = _a.$alwaysVisible;
    return ({
        margin: "0 10px",
        position: "relative",
        backgroundColor: "#494949",
        top: "calc(50% - 20px) !important",
        color: "white",
        fontSize: "30px",
        transition: "200ms",
        cursor: "pointer",
        opacity: $alwaysVisible ? '1' : '0',
        '&:hover': {
            opacity: "0.6 !important",
        },
    });
});
exports.StyledButtonWrapper = (0, material_1.styled)("div", { shouldForwardProp: function (propName) { return !propName.startsWith('$'); } })(function (_a) {
    var $next = _a.$next, $prev = _a.$prev, $fullHeightHover = _a.$fullHeightHover;
    return (__assign(__assign(__assign({ position: "absolute", height: "100px", backgroundColor: "transparent", zIndex: 1, top: "calc(50% - 70px)", '&:hover': {
            '& button': {
                backgroundColor: "black",
                filter: "brightness(120%)",
                opacity: "0.4"
            }
        } }, ($fullHeightHover ? {
        height: "100%",
        top: "0"
    } : undefined)), ($next ? { right: 0 } : undefined)), ($prev ? { left: 0 } : undefined)));
});
