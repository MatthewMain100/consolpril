const number0Films=+prompt("Сколько фильмов вы уже посмотрели", '');
const personalMovieDB={
    count: number0Films,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};
const a=prompt("один из последних просмотренных фильмов?",''),
      b=prompt("на сколько оцените его?",''),
      c=prompt("один из последних просмотренных фильмов?",''),
      d=prompt("на сколько оцените его?",'');
      personalMovieDB.movies[a]=b;
      personalMovieDB.movies[c]=d;
      console.log(personalMovieDB);