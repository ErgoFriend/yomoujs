import { describe, it } from "mocha";
import * as yomou from "../src/index";
import { assert } from "chai"

describe('Syousetu', () => {
    it('getSyousetu(n4845ec) ==「「神と呼ばれ、魔王と呼ばれても」」', async () => {
          const a = await yomou.getSyousetu('n4845ec');
          assert.equal(
            a.title,
            "「「神と呼ばれ、魔王と呼ばれても」」"
        )
    } );
})

