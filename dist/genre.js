"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateGenreQuery(data) {
    return "&biggenre=" + data.big_genre.join("-") + "&notbiggenre=" + data.not_big_genre.join("-") + "&genre=" + data.genre.join("-") + "&notgenre=" + data.not_genre.join("-");
}
exports.CreateGenreQuery = CreateGenreQuery;
