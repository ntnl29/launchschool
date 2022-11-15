function leadingSubstrings(str) {
  let array = [];
  for (let length = 1; length <= str.length; length += 1) {
    array.push(str.slice(0, length));
  }
  return array;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]