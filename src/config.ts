const base_url = "https://api.syosetu.com/novelapi/api/?libtype=2"

const default_search = {
    biggenre: {
        biggenre: [],
        notbiggenre: []
    },
    subcategory: {
        subcategory: [],
        notsubcategory: []
    },
    word: {
        word: [],
        notword: []
    }
}

const config = {
    base_url: base_url,
    default_search: default_search
}


export default config
