// 大ジャンル
function CategoryName(number: number): string {
    let category_name
    switch (number) {
        case 1: //code block statement1;
            category_name = "恋愛"
            break;
        case 2: //code block statement2;
            category_name = "ファンタジー"
            break;
        case 3: //code block statement3;
            category_name = "文芸"
            break;
        case 4: //code block statement4;
            category_name = "SF"
            break;
        case 98: //code block statement98;
            category_name = "その他"
            break;
        case 99: //code block statement99;
            category_name = "ノンジャンル"
            break;
        default:
            //default block statement;
            category_name = "未分類"
    }
    return category_name
}

function CategoryNumber(string: string): number {
    let category_number
    switch (string) {
        case "恋愛": //code block statement1;
            category_number = 1
            break;
        case "ファンタジー": //code block statement2;
            category_number = 2
            break;
        case "文芸": //code block statement3;
            category_number = 3
            break;
        case "SF": //code block statement4;
            category_number = 4
            break;
        case "その他": //code block statement98;
            category_number = 98
            break;
        case "ノンジャンル": //code block statement99;
            category_number = 99
            break;
        default:
            //default block statement;
            category_number = 99
    }
    return category_number
}

//ジャンル
function SubCategoryName(number: number): string {
    let category_name
    switch (number) {
    //  恋愛
        case 101:
            category_name = "異世界"
            break;
        case 102:
            category_name = "現実世界"
            break;
    //  ファンタジー
        case 201:
            category_name = "ハイファンタジー"
            break;
        case 202:
            category_name = "ローファンタジー"
            break;
    //  文芸
        case 301:
            category_name = "純文学"
            break;
        case 302:
            category_name = "ヒューマンドラマ"
            break;
        case 303:
            category_name = "歴史"
            break;
        case 304:
            category_name = "推理"
            break;
        case 304:
            category_name = "ホラー"
            break;
        case 305:
            category_name = "アクション"
            break;
        case 306:
            category_name = "コメディー"
            break;
    //  SF
        case 401:
            category_name = "VRゲーム"
            break;
        case 402:
            category_name = "宇宙"
            break;
        case 403:
            category_name = "空想科学"
            break;
        case 404:
            category_name = "パニック"
            break;
    //  その他
        case 9901:
            category_name = "童話"
            break;
        case 9902:
            category_name = "詩"
            break;
        case 9903:
            category_name = "エッセイ"
            break;
        case 9904:
            category_name = "リプレイ"
            break;
    //  ノンジャンルs
        case 9999:
            category_name = "ノンジャンル"
            break;
        default:
            category_name = "ノンジャンル"
    }
    return category_name
}

function SubCategoryNumber(string: string): number {
    let sub_category_number
    switch (string) {
        //  恋愛
            case "異世界":
                sub_category_number = 101
                break;
            case "現実世界":
                sub_category_number = 102
                break;
        //  ファンタジー
            case "ハイファンタジー":
                sub_category_number = 201
                break;
            case "ローファンタジー":
                sub_category_number = 202
                break;
        //  文芸
            case "純文学":
                sub_category_number = 301
                break;
            case "ヒューマンドラマ":
                sub_category_number = 302
                break;
            case "歴史":
                sub_category_number = 303
                break;
            case "推理":
                sub_category_number = 304
                break;
            case "ホラー":
                sub_category_number = 304
                break;
            case "アクション":
                sub_category_number = 305
                break;
            case "コメディー":
                sub_category_number = 306
                break;
        //  SF
            case "VRゲーム":
                sub_category_number = 401
                break;
            case "宇宙":
                sub_category_number = 402
                break;
            case "空想科学":
                sub_category_number = 403
                break;
            case "パニック":
                sub_category_number = 404
                break;
        //  その他
            case "童話":
                sub_category_number = 9901
                break;
            case "詩":
                sub_category_number = 9902
                break;
            case "エッセイ":
                sub_category_number = 9903
                break;
            case "リプレイ":
                sub_category_number = 9904
                break;
        //  ノンジャンルs
            case "ノンジャンル":
                sub_category_number = 9999
                break;
            default:
                sub_category_number = 9999
        }
    return sub_category_number
}