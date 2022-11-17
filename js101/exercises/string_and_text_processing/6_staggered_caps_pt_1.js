// function staggeredCase(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i += 1) {
//     if (i % 2 === 0) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i].toLowerCase();
//     }
//   }
//   return result;
// }

function staggeredCase(string) {
  return string.split('').map((char, i) => {
    if (i % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"