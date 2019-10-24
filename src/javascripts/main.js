import '../styles/main.scss';

const XO = (str) => {
  const regex = /[x, o]/gi;
  const charArray = str.match(regex);
  let x = 0;
  let o = 0;
  if (charArray === null) {
    return true;
  }
  for (let i = 0; i < charArray.length; i += 1) {
    if (charArray[i] === 'x' || charArray[i] === 'X') {
      x += 1;
    } else if (charArray[i] === 'o' || charArray[i] === 'O') {
      o += 1;
    }
  }
  if (x === o) {
    return true;
  }
  return false;
};

const init = () => {
  console.error(`${XO('ooxx')}`); // => true
  console.error(`${XO('xooxx')}`); // => false
  console.error(`${XO('ooxXm')}`); // => true
  console.error(`${XO('zpzpzpp')}`); // => true // when no 'x' and 'o' is present should return true
  console.error(`${XO('zzoo')}`); // => false
};

init();


// const giveAmount = (array, letter) => {
//   let amount = 0;
//   array.forEach((index) => {
//     if (index.toLowerCase() === letter.toLowerCase()) {
//       amount += 1;
//     }
//   });
//   return amount;
// };

// const XO = (str) => {
//   const regex = /[A-Z]/gi;
//   const charArray = str.match(regex);
//   const exes = giveAmount(charArray, 'x');
//   const ohs = giveAmount(charArray, 'o');
//   if (exes === ohs) {
//     return true;
//   }
//   return false;
// };
