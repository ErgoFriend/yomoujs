import {describe, it} from "mocha";
import yomoujs from "../src/index";
import {assert} from "chai";

describe("genre", () => {
  const query = {
    big_genre: [1, 2],
    not_big_genre: [3, 4],
    genre: [5, 6],
    not_genre: [7, 8]
  };
  describe("CreateGenreQuery", () => {
    console.log("query:", JSON.stringify(query).substring(1, 35), "...");
    it("CreateGenreQuery(query)", () => {
      assert.equal(
        yomoujs.CreateGenreQuery(query),
        "&biggenre=1-2&notbiggenre=3-4&genre=5-6&notgenre=7-8"
      );
    });
  });
});
