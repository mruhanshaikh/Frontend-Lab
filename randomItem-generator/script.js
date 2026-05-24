let main = document.querySelector("main");
let btn = document.querySelector("button");
const motivationWords = [
  "Focus", "Discipline", "Consistency", "Growth", "Strength",
  "Believe", "Persist", "Courage", "Vision", "Purpose",
  "Resilience", "Patience", "Momentum", "Drive", "Commitment",
  "Confidence", "Clarity", "Energy", "Ambition", "Hustle",
  "Grind", "Execute", "Progress", "Endurance", "Dedication",
  "Mindset", "Action", "Fearless", "Determination", "Power",
  "Calm", "Adapt", "Overcome", "Thrive", "Balance",
  "Grit", "Stability", "Create", "Build", "Achieve",
  "Advance", "Evolve", "Win", "Push", "Rise",
  "Mastery", "Disrupt", "Innovate", "Bold",
  "Relentless", "Sharp", "Unstoppable", "Control", "Focus",
  "Precision", "Discipline", "Intent", "Flow", "Execute",
  "Strive", "Lead", "Conquer", "Perform", "Dominate",
  "Optimize", "Strengthen", "Persist", "Endure", "Commit",
  "Awaken", "Fuel", "Forge", "Ascend", "Empower",
  "Elevate", "Breakthrough", "Momentum", "Climb", "Charge",
  "Attack", "Stamina", "Resolve", "Drive", "Peak"
];
btn.addEventListener("click", () => {
  let div = document.createElement("div");
  let p = document.createElement("p");
  div.appendChild(p);
  let word=Math.floor(Math.random()*motivationWords.length);
  p.innerHTML =motivationWords[word];
//   div.style.height = "200px";
//   div.style.width = "50px";
     div.style.padding="10px 20px";
  div.style.borderRadius = "0.5rem";
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  div.style.backgroundColor = `rgb(${r},${g},${b})`;
  main.appendChild(div);
  div.style.position = "absolute";
  let x=Math.floor(Math.random()*100);
  let y=Math.floor(Math.random()*100);
  div.style.left=x+'%';
  div.style.top=y+'%';
  div.style.left = x + "%";
  div.style.top = y + "%";
//   let z = Math.floor(Math.random() * 360);
//   div.style.rotate = z + "deg";
    let scale=Math.random()*(3-0.5)+0.5;
    div.style.scale=scale;
    div.style.transition = "all 0.6s ease";
});

