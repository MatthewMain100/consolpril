const number0Films=+prompt("Сколько фильмов вы уже посмотрели", '');
const personalMovieDB={
    count: number0Films,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};
      for(let i=0;i<2;i++) { 
      const a=prompt("один из последних просмотренных фильмов?",'');
    const b=prompt("на сколько оцените его?",'');
  }

   console.log(personalMovieDB);

   function first(){
     setTimeout(function(){
     console.log(1);
   },500);
  }
  first();
function LearnJS(lang,callback){
  console.log(`hhh:${lang}`);
  callback();
}
LearnJS('javascript',function(){
  console.log('hdufb');
});
const oldArray=['a','b','c'];
const newArray=oldArray.slice();
newArray[1]='piska';
console.log(oldArray);
console.log(newArray);
const video=['ff','gg','kk'],
blogs=['ff1','gg1','kk1'],
socialmedia=[...video, ...blogs];
console.log(socialmedia);