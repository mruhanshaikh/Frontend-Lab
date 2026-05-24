let like = document.getElementById('like');
let reduce=92;

like.addEventListener('dblclick',()=>{
    let icon=setInterval(()=>{
        reduce--;
        like.style.top=reduce+'%';
        like.style.rotate='10deg';
    },20)
    setTimeout(()=>{
        like.style.opacity='0.5';
    },200);
    setTimeout(()=>{
        clearInterval(icon);
        reduce=92;
        like.style.top=reduce+'%';
        like.style.rotate='0deg';
        like.style.opacity='1.1';
    },1800)
})