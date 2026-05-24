let input = document.getElementById('input');
let defaulte = document.getElementById('defaulte');
let debouncing = document.getElementById('debouncing');
let throttling = document.getElementById('throttling');

function debounce(cb,delay){
    console.log('debounce');
    let timer;
    return function(...arg){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...arg);   
        },delay)
    }
}
function throttle(cb,delay){
    console.log('throttle');
    let timer = 0 ;
    return function(...arg){
        let now = Date.now();
        if(now-timer >=delay){
            timer=now;
             cb(...arg);  
        }
    }
}
let debouncerWrapper = debounce((accept)=>debouncing.textContent=accept.target.value,1000); 
let throttleWrapper =throttle((accept)=>throttling.textContent=accept.target.value,1000);

input.addEventListener('input',debouncerWrapper);
input.addEventListener('input',throttleWrapper);



