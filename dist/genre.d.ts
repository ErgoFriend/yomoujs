export { CreateGenreQuery };
interface Genre {
    big_genre: Array<number>;
    not_big_genre: Array<number>;
    genre: Array<number>;
    not_genre: Array<number>;
}
declare function CreateGenreQuery(data: Genre): string;
