'use strict';
const box=document.getElementById('box'),
     btns= document.getElementsByTagName('button'),
     circles=document.getElementsByClassName('circle'),
     hearts=document.querySelectorAll('.heart'),
     oneHeart=document.querySelectorAll('.heart'),
     wrapper=  document.querySelector('wrapper');
     //console.dir(box);
     box.style.backgroundColor='pink';
     btns[1].style.backgroundColor='red';
     hearts.forEach(item=>{
         item.style.backgroundColor='pink';
     });
      const div=document.createElement('div');
     div.classList.add('black');
      document.body.append(div);
     // wrapper.append(div);
    //    wrapper.prepend(div);
    // hearts[0].after(div);
    // circles[0].remove();
     hearts[0].replaceWith(circles[0]);
     div.innerHTML='hello friend';
    div.insertAdjacentHTML("afterrbegin",'<h2>Hello </h2>');