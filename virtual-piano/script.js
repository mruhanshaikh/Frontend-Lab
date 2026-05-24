const sounds = {
  a1: new Audio('assets/A6.mp3'),
  a2: new Audio('assets/Ab2.mp3'),
  b1: new Audio('assets/Bb3.mp3'),
  c1: new Audio('assets/C1.mp3'),
  c2: new Audio('assets/C5.mp3'),
  d1: new Audio('assets/D6.mp3'),
  d2: new Audio('assets/Db2.mp3'),
  e1: new Audio('assets/Eb3.mp3'),
  f1: new Audio('assets/F4.mp3'),
  g1: new Audio('assets/G5.mp3'),
  g2: new Audio('assets/Gb1.mp3')
};
function playNote(audio) {
  const clone = audio.cloneNode(); 
  clone.play();
}

const keyMap = {
  a: 'a1',
  '1': 'a2',
  s: 'b1',
  '2': 'c1',
  d: 'c2',
  f: 'd1',
  '3': 'd2',
  g: 'e1',
  '4': 'f1',
  ' ': 'g1', 
  '7': 'g2',
  h: 'a1',
  '8': 'a2',
  j: 'b1',
  k: 'c1',
  '9': 'c2',
  l: 'd1',
  '0': 'd2',
  ';': 'e1'
};

const idMap = {
  a: 'a1',
  one: 'a2',
  s: 'b1',
  two: 'c1',
  d: 'c2',
  f: 'd1',
  three: 'd2',
  g: 'e1',
  four: 'f1',
  space: 'g1',
  seven: 'g2',
  h: 'a1',
  eight: 'a2',
  j: 'b1',
  k: 'c1',
  nine: 'c2',
  l: 'd1',
  zero: 'd2',
  ';': 'e1'
};

document.body.addEventListener('keydown', (e) => {
  const note = keyMap[e.key];
  if (note) playNote(sounds[note]);
});
 document.querySelectorAll(".white-box, .black-box").forEach((el)=>{
    el.addEventListener('pointerdown',()=>{
       if(idMap[el.id])playNote(sounds[idMap[el.id]])
    });
 });
