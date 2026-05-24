let teams = [
  {
    captain: "asset/dhoni.jpg",
    name: "Mahendra Singh Dhoni",
    logo: "asset/chennai-logo.jpg",
    trophy: 5,
    primary: "#ffcc00",     // CSK Yellow
  },
  {
    captain: "asset/kohli.jpg",
    name: "Virat Kohli",
    logo: "asset/rcb-logo.jpg",
    trophy: 1,
    primary: "#ff0000",     // RCB Red
  },
  {
    captain: "asset/rohit.jpg",
    name: "Rohit Sharma",
    logo: "asset/mumbai-logo.jpg",
    trophy: 5,
    primary: "#004c97",     // MI Blue
  },
  {
    captain: "asset/gautum.jpg",
    name: "Gautam Gambhir",
    logo: "asset/kkr-logo.jpg",
    trophy: 2,
    primary: "#3a0ca3",     // KKR Purple
  }
];

let btn=document.querySelector('button');
let card=document.querySelector('.card');
let item1=document.querySelector('.item1');
let h1=document.querySelector('h1');
let item2=document.querySelector('.item2');
let item3=document.querySelector('.item3');
let item4=document.querySelector('.item4');
btn.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*teams.length);
    item1.style.backgroundImage=`url(${teams[random].captain})`;
    h1.innerHTML=teams[random].name;
    item3.style.backgroundImage=`url(${teams[random].logo})`;
    let icons="";
    for(let i=0;i<teams[random].trophy;i++){
        icons+='<i class="ri-trophy-fill"></i>';
    }
    item4.innerHTML=icons;
    card.style.backgroundImage="none";
    item2.style.backgroundColor=teams[random].primary;
    card.style.backgroundImage="none";
    item4.style.backgroundColor=teams[random].primary;
})