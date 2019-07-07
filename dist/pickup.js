"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const yaml = require("js-yaml");
async function Pickup(ispickup = 1, order = "hyoka", limit = 200) {
    return await node_fetch_1.default('https://api.syosetu.com/novelapi/api/?libtype=2&ispickup=' + ispickup + '&order=' + order + '&lim=' + limit)
        .then(res => res.text())
        .then(body => yaml.safeLoad(body))
        .then(json => json)
        .catch(function (err) {
        err;
    });
}
exports.Pickup = Pickup;
