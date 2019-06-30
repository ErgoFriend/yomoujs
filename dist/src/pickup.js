"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ky_universal_1 = require("ky-universal");
function PickUp() {
    (async () => {
        const parsed = await ky_universal_1.default('https://api.syosetu.com/novelapi/api/?ispickup=1&order=hyoka&lim=200').json();
        console.log(parsed);
        //=> 'delectus aut autem
    })();
}
exports.PickUp = PickUp;
PickUp();
