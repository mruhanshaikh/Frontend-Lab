let textclass = document.querySelector(".text");
let text = textclass.innerHTML;

let textArray = text.split("");                  // precomputed
let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

let iteration = 0;

function textMatrix() {
  const str = textArray.map((char, i) => {
    if (i < iteration) {
      return char;
    }
    return letters[Math.floor(Math.random() * letters.length)];
  }).join("");

  textclass.innerHTML = str;
  iteration += 0.25;
  if (iteration > textArray.length) {
    clearInterval(interval);
    textclass.innerHTML = text;
  }
}
let interval = setInterval(textMatrix, 30);

