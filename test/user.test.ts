import {describe, it} from "mocha";
import yomoujs from "../src/index";
import {assert} from "chai";

describe("User", () => {
  it('getUser("570481") == PiusProxy', async () => {
    const user = await yomoujs.getUser("1017640");
    console.log(user);
    assert.equal(user.username, "PiusProxy");
  });
});
