import {config} from "./config"

export {
    CreateGenreQuery,
    GetGenre
}

interface Genre {
    big_genre: Array<number>,
    not_big_genre: Array<number>,
    genre: Array<number>,
    not_genre: Array<number>
}

function CreateGenreQuery(data: Genre): string {
    return "&biggenre=" + data.big_genre.join("-") + "&notbiggenre=" + data.not_big_genre.join("-") + "&genre=" + data.genre.join("-") + "&notgenre=" + data.not_genre.join("-")
}

function GetGenre(): object {
    return {
        bigGenre: config.bigGenre,
        Genre: config.Genre
    }
}
// 大ジャンル
export function BigGenreName(number: number): string {
    let big_genre_name
    switch (number) {
        case 1: //code block statement1;
            big_genre_name = "恋愛"
            break;
        case 2: //code block statement2;
            big_genre_name = "ファンタジー"
            break;
        case 3: //code block statement3;
            big_genre_name = "文芸"
            break;
        case 4: //code block statement4;
            big_genre_name = "SF"
            break;
        case 98: //code block statement98;
            big_genre_name = "その他"
            break;
        case 99: //code block statement99;
            big_genre_name = "ノンジャンル"
            break;
        default:
            //default block statement;
            big_genre_name = "未分類"
    }
    return big_genre_name
}

export function BigGenreNumber(string: string): number {
    let big_genre_number
    switch (string) {
        case "恋愛": //code block statement1;
            big_genre_number = 1
            break;
        case "ファンタジー": //code block statement2;
            big_genre_number = 2
            break;
        case "文芸": //code block statement3;
            big_genre_number = 3
            break;
        case "SF": //code block statement4;
            big_genre_number = 4
            break;
        case "その他": //code block statement98;
            big_genre_number = 98
            break;
        case "ノンジャンル": //code block statement99;
            big_genre_number = 99
            break;
        default:
            //default block statement;
            big_genre_number = 99
    }
    return big_genre_number
}

//ジャンル
export function GenreName(number: number): string {
    let genre_name
    switch (number) {
    //  恋愛
        case 101:
            genre_name = "異世界"
            break;
        case 102:
            genre_name = "現実世界"
            break;
    //  ファンタジー
        case 201:
            genre_name = "ハイファンタジー"
            break;
        case 202:
            genre_name = "ローファンタジー"
            break;
    //  文芸
        case 301:
            genre_name = "純文学"
            break;
        case 302:
            genre_name = "ヒューマンドラマ"
            break;
        case 303:
            genre_name = "歴史"
            break;
        case 304:
            genre_name = "推理"
            break;
        case 305:
            genre_name = "ホラー"
            break;
        case 306:
            genre_name = "アクション"
            break;
        case 307:
            genre_name = "コメディー"
            break;
    //  SF
        case 401:
            genre_name = "VRゲーム"
            break;
        case 402:
            genre_name = "宇宙"
            break;
        case 403:
            genre_name = "空想科学"
            break;
        case 404:
            genre_name = "パニック"
            break;
    //  その他
        case 9901:
            genre_name = "童話"
            break;
        case 9902:
            genre_name = "詩"
            break;
        case 9903:
            genre_name = "エッセイ"
            break;
        case 9904:
            genre_name = "リプレイ"
            break;
        case 9999:
            genre_name = "その他"
            break;
    //  ノンジャンル
        case 9801:
            genre_name = "ノンジャンル"
            break;
        default:
            genre_name = "ノンジャンル"
    }
    return genre_name
}

export function GenreNumber(string: string): number {
    let genre_number
    switch (string) {
        //  恋愛
            case "異世界":
                genre_number = 101
                break;
            case "現実世界":
                genre_number = 102
                break;
        //  ファンタジー
            case "ハイファンタジー":
                genre_number = 201
                break;
            case "ローファンタジー":
                genre_number = 202
                break;
        //  文芸
            case "純文学":
                genre_number = 301
                break;
            case "ヒューマンドラマ":
                genre_number = 302
                break;
            case "歴史":
                genre_number = 303
                break;
            case "推理":
                genre_number = 304
                break;
            case "ホラー":
                genre_number = 304
                break;
            case "アクション":
                genre_number = 305
                break;
            case "コメディー":
                genre_number = 306
                break;
        //  SF
            case "VRゲーム":
                genre_number = 401
                break;
            case "宇宙":
                genre_number = 402
                break;
            case "空想科学":
                genre_number = 403
                break;
            case "パニック":
                genre_number = 404
                break;
        //  その他
            case "童話":
                genre_number = 9901
                break;
            case "詩":
                genre_number = 9902
                break;
            case "エッセイ":
                genre_number = 9903
                break;
            case "リプレイ":
                genre_number = 9904
                break;
            case "その他":
                genre_number = 9999
                break;
        //  ノンジャンル
            case "ノンジャンル":
                genre_number = 9801
                break;
            default:
                genre_number = 9801
        }
    return genre_number
}