import {describe, it} from "mocha";
import * as yomou from "../src/index";
import {assert} from "chai";

describe("Novel", () => {
  it("getNovel('n4845ec') ==「「神と呼ばれ、魔王と呼ばれても」」", async () => {
    const a = await yomou.getNovel("n4845ec");
    assert.equal(a.title, "「「神と呼ばれ、魔王と呼ばれても」」");
  });
});
