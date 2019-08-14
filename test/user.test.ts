import {describe, it} from "mocha";
import * as yomou from "../src/index";
import {assert} from "chai";

describe("User", () => {
  it('getUser("570481") == しまもん', async () => {
    const user = await yomou.getUser("570481");
    assert.equal(user.username, "しまもん");
  });
});
