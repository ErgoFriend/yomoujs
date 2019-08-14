"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const yaml = require("js-yaml");
async function Pickup(ispickup = 1, order = "hyoka", limit = 200) {
    const list = await axios_1.default.get("https://api.syosetu.com/novelapi/api/?libtype=2&ispickup=" +
        ispickup +
        "&order=" +
        order +
        "&lim=" +
        limit);
    const data = await yaml.safeLoad(list.data.toString());
    return data;
}
exports.Pickup = Pickup;
