"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
function getUserName(user) {
    let result2 = user.match(/ユーザネーム<\/dt>\n<dd>([\s\S]*?)<\/dd>/i);
    if (result2) {
        return result2 !== null ? result2[1] : "";
    }
    return "";
}
exports.getUserName = getUserName;
async function getUser(id) {
    const data = await node_fetch_1.default('https://mypage.syosetu.com/' + id)
        .then(res => res.text())
        .then(data => data.match(/<dl class="profile">[\s\S]*?<\/dl>/i))
        .then(result => result !== null ? result[0] : "");
    return data;
}
exports.getUser = getUser;
//getUser(531083).then(data => console.log(getUserName(data)))
