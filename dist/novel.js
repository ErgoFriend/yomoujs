"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
async function getNovel(ncode) {
    const res = await axios_1.default.get("https://api.syosetu.com/novelapi/api/?libtype=2&out=json&ncode=" + ncode, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        data: {}
    });
    return res.data[1];
}
exports.getNovel = getNovel;
