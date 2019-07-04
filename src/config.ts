const base_url = "https://api.syosetu.com/novelapi/api/?libtype=2"

const bigGenreStr = {
    1: "恋愛",
    2: "ファンタジー",
    3: "文芸",
    4: "SF",
    98: "その他",
    99: "ノンジャンル"
}

const bigGenreNum = {
    "恋愛": 1,
    "ファンタジー": 2,
    "文芸": 3,
    "SF": 4,
    "その他": 98,
    "ノンジャンル": 99
}

const GenreStr = {
    1: "恋愛",
    2: "ファンタジー",
    3: "文芸",
    4: "SF",
    98: "その他",
    99: "ノンジャンル"
}

const GenreNum = {
    "恋愛": 1,
    "ファンタジー": 2,
    "文芸": 3,
    "SF": 4,
    "その他": 98,
    "ノンジャンル": 99
}

const Genre = [
    {
        number: 101,
        word: "異世界"
    },
    {
        number: 102,
        word: "現実世界"
    },
    {
        number: 201,
        word: "ハイファンタジー"
    },
    {
        number: 202,
        word: "ローファンタジー"
    },
    {
        number: 301,
        word: "純文学"
    },
    {
        number: 302,
        word: "ヒューマンドラマ"
    },
    {
        number: 303,
        word: "歴史"
    },
    {
        number: 304,
        word: "推理"
    },
    {
        number: 205,
        word: "ホラー"
    },
    {
        number: 206,
        word: "アクション"
    },
    {
        number: 207,
        word: "ホラコメディー"
    },
    {
        number: 401,
        word: "VRゲーム"
    },
    {
        number: 402,
        word: "宇宙"
    },
    {
        number: 403,
        word: "空想科学"
    },
    {
        number: 404,
        word: "パニック"
    },
    {
        number: 9901,
        word: "童話"
    },
    {
        number: 9902,
        word: "詩"
    },
    {
        number: 9903,
        word: "エッセイ"
    },
    {
        number: 9904,
        word: "リプレイ"
    },
    {
        number: 9999,
        word: "その他"
    },
    {
        number: 9801,
        word: "ノンジャンル"
    },
]

const config = {
    base_url: base_url,
    default_search: default_search,
    bigGenre: bigGenre,
    Genre: Genre
}


export {
    config
}
