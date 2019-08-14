export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Movie = {
    __typename?: "Movie";
    title: Scalars["String"];
    director: Scalars["String"];
};
export declare type Mutation = {
    __typename?: "Mutation";
    createRate: Rate;
    updateRate: Rate;
    deleteRate: Scalars["ID"];
};
export declare type MutationCreateRateArgs = {
    rateInput: RateInput;
};
export declare type MutationUpdateRateArgs = {
    rateInput: RateInput;
};
export declare type MutationDeleteRateArgs = {
    id: Scalars["ID"];
};
export declare type Novel = {
    __typename?: "Novel";
    writerInfo?: Maybe<Writer>;
    title: Scalars["String"];
    ncode: Scalars["String"];
    userid: Scalars["Int"];
    writer: Scalars["String"];
    story: Scalars["String"];
    biggenre: Scalars["Int"];
    genre: Scalars["Int"];
    gensaku: Scalars["String"];
    keyword: Scalars["String"];
    general_firstup: Scalars["String"];
    general_lastup: Scalars["String"];
    novel_type: Scalars["Int"];
    end: Scalars["Int"];
    general_all_no: Scalars["Int"];
    length: Scalars["Int"];
    time: Scalars["Int"];
    isstop: Scalars["Int"];
    isr15: Scalars["Int"];
    isbl: Scalars["Int"];
    isgl: Scalars["Int"];
    iszankoku: Scalars["Int"];
    istensei: Scalars["Int"];
    istenni: Scalars["Int"];
    pc_or_k: Scalars["Int"];
    global_point: Scalars["Int"];
    fav_novel_cnt: Scalars["Int"];
    review_cnt: Scalars["Int"];
    all_point: Scalars["Int"];
    all_hyoka_cnt: Scalars["Int"];
    sasie_cnt: Scalars["Int"];
    kaiwaritu: Scalars["Int"];
    novelupdated_at: Scalars["String"];
    updated_at: Scalars["String"];
};
export declare type Query = {
    __typename?: "Query";
    movies: Array<Movie>;
    novel: Novel;
    novels: Array<Novel>;
    writer: Writer;
};
export declare type QueryNovelArgs = {
    ncode: Scalars["String"];
};
export declare type QueryWriterArgs = {
    id: Scalars["String"];
};
export declare type Rate = {
    __typename?: "Rate";
    id: Scalars["ID"];
    rate: Scalars["Int"];
    title: Scalars["String"];
    body: Scalars["String"];
};
export declare type RateInput = {
    rate: Scalars["Int"];
    title: Scalars["String"];
    body: Scalars["String"];
};
export declare type Site = {
    __typename?: "Site";
    name: Scalars["String"];
    image: Scalars["String"];
    url: Scalars["String"];
};
export declare type Writer = {
    __typename?: "Writer";
    id: Scalars["String"];
    username: Scalars["String"];
    hurigana: Scalars["String"];
    site: Site;
    about: Scalars["String"];
    novels?: Maybe<Array<Novel>>;
};
