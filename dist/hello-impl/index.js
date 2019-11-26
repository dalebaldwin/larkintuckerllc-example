"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/prefer-default-export */
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
