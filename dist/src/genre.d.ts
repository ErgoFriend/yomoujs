export { CreateGenreQuery, GetGenre };
interface Genre {
    big_genre: Array<number>;
    not_big_genre: Array<number>;
    genre: Array<number>;
    not_genre: Array<number>;
}
declare function CreateGenreQuery(data: Genre): string;
declare function GetGenre(): object;
export declare function BigGenreName(number: number): string;
export declare function BigGenreNumber(string: string): number;
export declare function GenreName(number: number): string;
export declare function GenreNumber(string: string): number;
