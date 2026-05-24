let but = document.querySelector('button');
let counter=document.querySelector('.count');
let inner=document.querySelector('.inner');
let card=document.querySelector('.card');
let count=0;    
but.addEventListener('click',()=>{
    let random=30+Math.floor(Math.random()*50);
    let time=setInterval(()=>{
    count++;
    counter.innerHTML=count +'%';
    inner.style.width=count +'%';
    but.style.pointerEvents='none';
    but.style.opacity='0.5';
    },random);
    setTimeout(()=>{
        clearInterval(time);
        but.innerHTML="Downloaded";
        let p =document.createElement('p');
        p.innerHTML=`<em> Downloaded in ${random} sec </em>`;
        p.style.textAlign='center';
        card.appendChild(p);
    },random*100);
})