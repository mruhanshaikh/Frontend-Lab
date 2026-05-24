let body=document.querySelector('body');
let cursor= document.querySelector('img');
body.addEventListener('mousemove',(el)=>{
    cursor.style.top=el.y+"px";
    cursor.style.left=el.x+"px";
})