import { describe, it } from "mocha";
import { BigGenreName, BigGenreNumber } from '../src/genre';
import { assert } from "chai"

describe('genre', () => {
    describe('BigGenreName(number: number)', () => {
        it('1 => 恋愛', () => { assert.equal(BigGenreName(1), "恋愛"); });
        it('3 => 文芸', () => { assert.equal(BigGenreName(3), "文芸"); });
        it('23 => 未分類', () => { assert.equal(BigGenreName(23), "未分類"); });
    })
    describe('BigGenreNumber(string: string)', () => {
        it('文芸 => 3', () => { assert.equal(BigGenreNumber("文芸"), 3); });
        it('ノンジャンル => 99', () => { assert.equal(BigGenreNumber("ノンジャンル"), 99); });
        it('あかさたな => 99', () => { assert.equal(BigGenreNumber("あかさたな"), 99); });
    })
})