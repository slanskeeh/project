/* Объявляем переменную с вопросом, на который отвечает пользователь */
const numberOfFilms = +prompt('Сколько фильмов уже посмотрел?', '');

/* Создаём объект, в котором записаны некоторые свойства */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* Задаём пользователю по два раза вопросы, используя технические переменные */
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оценишь?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оценишь?', '');

/* Заносим ответы в объект через ключ - ответ */
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);