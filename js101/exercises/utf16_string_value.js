/* UTF-16 String Value
*/

function utf16Value(string) {
  let sum = 0;
  let strVal = string.split('');
  for (let i = 0; i < strVal.length; i += 1) {
    sum += strVal[i].charCodeAt(0);
  }
  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811