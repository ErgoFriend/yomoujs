import { describe, it } from "mocha";
import * as yomou from "../src/index";
import { assert } from "chai"

describe('User', () => {
    it('getUser(570481) == しまもん', async () => {
        const user_name = await yomou.getUser(570481).then(data => yomou.getUserName(data));
        assert.equal(
            user_name,
            "しまもん"
        )
    })
})

