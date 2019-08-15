import {describe, it} from "mocha";
import yomoujs from "../src/index";
import {assert} from "chai";

describe("Novel", () => {
  it("getNovel('n4845ec') ==「「神と呼ばれ、魔王と呼ばれても」」", async () => {
    const novel = await yomoujs.getNovel("n4845ec");
    console.log(novel);
    assert.equal(novel.title, "「「神と呼ばれ、魔王と呼ばれても」」");
  });
});
