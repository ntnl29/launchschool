/* Question 1

No, because the second function has a curly bracket with
nothing on the same line */

// Question 4

function isDotSeparatedIpAddress(inputString) {
  if ((String(inputString).split('.').length - 1) !== 3) {
    return false;
  } else {
    let dotSeparatedWords = inputString.split(".");
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

console.log(isDotSeparatedIpAddress('192.1.22.4'));