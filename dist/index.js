"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const pickup_1 = require("./pickup");
const genre_1 = require("./genre");
const user_1 = require("./user");
const novel_1 = require("./novel");
const yomoujs = {
    //./config
    base_url: config_1.base_url,
    bigGenreStr: config_1.bigGenreStr,
    bigGenreNum: config_1.bigGenreNum,
    GenreStr: config_1.GenreStr,
    GenreNum: config_1.GenreNum,
    Order: config_1.Order,
    //./pickup
    Pickup: pickup_1.Pickup,
    //./genre
    CreateGenreQuery: genre_1.CreateGenreQuery,
    //./user
    getUser: user_1.getUser,
    //./novel
    getNovel: novel_1.getNovel
};
exports.default = yomoujs;
