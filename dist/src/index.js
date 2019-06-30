"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'name';
__export(require("./hoge"));
function hi(name) {
    console.log(`Hello ${name}`);
}
function Search(config) {
}
exports.default = hi;
