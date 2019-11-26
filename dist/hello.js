"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'hello world';
exports.random = function () {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 1:
            return 'hello one';
        case 2:
            return 'hello two';
        default:
            // 0 case
            return 'hello zero';
    }
};
//# sourceMappingURL=hello.js.map