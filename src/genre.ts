export {
    CreateGenreQuery
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
