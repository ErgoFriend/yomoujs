declare const config: {
    base_url: string;
    default_search: {
        biggenre: {
            biggenre: never[];
            notbiggenre: never[];
        };
        subcategory: {
            subcategory: never[];
            notsubcategory: never[];
        };
        word: {
            word: never[];
            notword: never[];
        };
    };
    bigGenre: {
        number: number;
        word: string;
    }[];
    Genre: {
        number: number;
        word: string;
    }[];
};
export { config };
