import { describe, it } from "mocha";
import * as yomou from "../src/index";
import { assert } from "chai"

describe('pickup', () => {
    it('pickup()', async () => {
        const a = await yomou.Pickup();
       console.log(JSON.stringify(a).substring(1,40),"...")
  } );
})

