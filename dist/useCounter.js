"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCounter = function (initialValue) {
    var _a = react_1.useState(initialValue), count = _a[0], setCount = _a[1];
    return [count, setCount];
};
exports.default = useCounter;
