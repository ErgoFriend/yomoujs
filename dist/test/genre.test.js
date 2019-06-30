"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const genre_1 = require("../src/genre");
const chai_1 = require("chai");
mocha_1.describe('genre', () => {
    mocha_1.describe('BigGenreName(number: number)', () => {
        mocha_1.it('1 => 恋愛', () => { chai_1.assert.equal(genre_1.BigGenreName(1), "恋愛"); });
        mocha_1.it('3 => 文芸', () => { chai_1.assert.equal(genre_1.BigGenreName(3), "文芸"); });
        mocha_1.it('23 => 未分類', () => { chai_1.assert.equal(genre_1.BigGenreName(23), "未分類"); });
    });
    mocha_1.describe('BigGenreNumber(string: string)', () => {
        mocha_1.it('文芸 => 3', () => { chai_1.assert.equal(genre_1.BigGenreNumber("文芸"), 3); });
        mocha_1.it('ノンジャンル => 99', () => { chai_1.assert.equal(genre_1.BigGenreNumber("ノンジャンル"), 99); });
        mocha_1.it('あかさたな => 99', () => { chai_1.assert.equal(genre_1.BigGenreNumber("あかさたな"), 99); });
    });
});
