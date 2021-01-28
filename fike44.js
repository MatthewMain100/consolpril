window.addEventListener('DOMContentLoaded', function() {
const btn0d=document.querySelector(' .btn');
btn0d.addEventListener('click',()=>{
alert('матвей писькогрыз');
});
const btn=document.querySelector('.knopka');
btn.addEventListener('click',()=>{
});
 const knopka=document.querySelector('.knopka');
 const knopka1=document.querySelector('.knopka1');
 const knopka2=document.querySelector('.knopka2');
 const knopka3=document.querySelector('.knopka3');
 const pullup=document.querySelector('.pullup');
 const pullup1=document.querySelector('.pullup1');
 const pullup2=document.querySelector('.pullup2');
function bords(){
    pullup.style.display='none';
    pullup1.style.display='none';
    pullup2.style.display='none';
}
bords();
knopka.addEventListener('click',()=>{
    pullup1.style.display='block';
});
knopka3.addEventListener('click',()=>{
    pullup1.style.display='block';
});
knopka2.addEventListener('click',()=>{
    pullup.style.display='block';
});
knopka1.addEventListener('click',()=>{
    pullup2.style.display='block';
});
});