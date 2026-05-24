let x = 0, y = 0;
let rafId = null; // abhi koi kam nahi hai
document.body.addEventListener('pointermove',(e)=>{
  x = e.clientX;
  y = e.clientY;
    if (!rafId) {// agr koi kam nahi hai to ye kam kardo
    rafId = requestAnimationFrame(() => {// kam chal raha hai
      document.documentElement.style.setProperty('--x', x + 'px');
      document.documentElement.style.setProperty('--y', y + 'px');
      rafId = null;// ab free hu
    });
  }
});