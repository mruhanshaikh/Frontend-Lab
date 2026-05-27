let box=document.querySelector('.box');
let but=document.querySelector('button');
but.addEventListener('click',()=>{
   let r = Math.floor(Math.random()*256);
   let g = Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);
   box.style.backgroundColor=`rgb(${r},${g},${b})`; 
   box.style.boxShadow=`0rem 0rem 1rem 1rem rgba(${r},${r},${r})`;
})