const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const bin = {
    10: ".",
    11: "-",
    "**": "",
  };

  let arr = [];

  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.substr(i, 10));
  }

  for (let i = 0; i < arr.length; i++) {
    let letter = [];
    for (let j = 0; j < arr[i].length; j += 2) {
      letter.push(bin[arr[i].substr(j, 2)]);
    }
    arr[i] = letter.join("") ? MORSE_TABLE[letter.join("")] : " ";
  }
  return arr.join("");
}

module.exports = {
  decode,
};
