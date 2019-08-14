"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const node_html_parser_1 = require("node-html-parser");
const URL = "https://mypage.syosetu.com/";
const getUser = async (id) => {
    let site = {
        name: "",
        image: "",
        url: ""
    };
    let user = {
        id: "",
        username: "",
        hurigana: "",
        site: site,
        about: ""
    };
    try {
        const response = await axios_1.default.get(URL + id + "/");
        //console.log(typeof response.data);
        const root = await node_html_parser_1.parse(response.data);
        if (root instanceof node_html_parser_1.HTMLElement) {
            const list = root.querySelector("dl").childNodes;
            let preNode = "";
            list.forEach((node) => {
                if (node instanceof node_html_parser_1.HTMLElement) {
                    const textNode = node.childNodes;
                    //console.log(node)
                    if (textNode !== undefined) {
                        switch (preNode) {
                            case "ユーザＩＤ":
                                user.id = textNode[0].rawText;
                                break;
                            case "ユーザネーム":
                                user.username = textNode[0].rawText;
                                break;
                            case "フリガナ":
                                user.hurigana = textNode[0].rawText;
                                break;
                            case "サイト":
                                user.site.name = textNode[1].childNodes[0].rawText.replace(/\r?\n/g, "");
                                //user.site.url = textNode[1].rawAttrs;
                                const siteElm = textNode[1];
                                if (siteElm instanceof node_html_parser_1.HTMLElement) {
                                    // console.log(
                                    //   siteElm.rawAttributes.href.replace(/\/\?jumplink=/g, "")
                                    // );
                                    user.site.url = siteElm.rawAttributes.href.replace(/\/\?jumplink=/g, "");
                                }
                                const imageElm = siteElm.childNodes[2];
                                if (imageElm instanceof node_html_parser_1.HTMLElement) {
                                    // console.log("imagePath:", imageElm.rawAttributes.src);
                                    user.site.image = imageElm.rawAttributes.src;
                                }
                                //   console.dir(textNode[1].childNodes, {depth: 1});
                                break;
                            case "自己紹介":
                                user.about = node.rawText;
                            // user.about = textNode[0].rawText;
                            default:
                        }
                        preNode = textNode[0].rawText;
                    }
                    //console.log(node.childNodes[0].TextNode.rawText);
                }
            });
        }
        // console.log(user);
    }
    catch (e) {
        console.log("ERROR!", e);
    }
    return user;
};
exports.getUser = getUser;
//getUser(531083).then(data => console.log(getUserName(data)))
