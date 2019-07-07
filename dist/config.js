"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base_url = "https://api.syosetu.com/novelapi/api/?libtype=2";
exports.bigGenreStr = {
    1: "恋愛",
    2: "ファンタジー",
    3: "文芸",
    4: "SF",
    98: "その他",
    99: "ノンジャンル"
};
exports.bigGenreNum = {
    "恋愛": 1,
    "ファンタジー": 2,
    "文芸": 3,
    "SF": 4,
    "その他": 98,
    "ノンジャンル": 99
};
exports.GenreStr = {
    101: "異世界",
    102: "現実世界",
    201: "ハイファンタジー",
    202: "ローファンタジー",
    301: "純文学",
    302: "ヒューマンドラマ",
    303: "歴史",
    304: "推理",
    205: "ホラー",
    206: "アクション",
    207: "ホラコメディー",
    401: "VRゲーム",
    402: "宇宙",
    403: "空想科学",
    404: "パニック",
    9801: "ノンジャンル",
    9901: "童話",
    9902: "詩",
    9903: "エッセイ",
    9904: "リプレイ",
    9999: "その他"
};
exports.GenreNum = {
    "異世界": 101,
    "現実世界": 102,
    "ハイファンタジー": 201,
    "ローファンタジー": 202,
    "純文学": 301,
    "ヒューマンドラマ": 302,
    "歴史": 303,
    "推理": 304,
    "ホラー": 205,
    "アクション": 206,
    "ホラコメディー": 207,
    "VRゲーム": 401,
    "宇宙": 402,
    "空想科学": 403,
    "パニック": 404,
    "ノンジャンル": 9801,
    "童話": 9901,
    "エッセイ": 9902,
    "リプレイ": 9904,
    "その他": 9999
};
exports.Order = [
    {
        key: 'new',
        value: '新着更新順'
    },
    {
        key: 'favnovelcnt',
        value: 'ブックマーク数の多い順'
    },
    {
        key: 'reviewcnt',
        value: 'レビュー数の多い順'
    },
    {
        key: 'hyoka',
        value: '総合ポイントの高い順'
    },
    {
        key: 'hyokaasc',
        value: '総合ポイントの低い順'
    },
    {
        key: 'impressioncnt',
        value: '感想の多い順'
    },
    {
        key: 'hyokacnt',
        value: '評価者数の多い順'
    },
    {
        key: 'hyokacntasc',
        value: '評価者数の少ない順'
    },
    {
        key: 'weekly',
        value: '週間ユニークユーザの多い順'
    },
    {
        key: 'lengthdesc',
        value: '小説本文の文字数が多い順'
    },
    {
        key: 'lengthasc',
        value: '小説本文の文字数が少ない順'
    },
    {
        key: 'ncodedesc',
        value: '新着投稿順'
    },
    {
        key: 'old',
        value: '更新が古い順'
    }
];
