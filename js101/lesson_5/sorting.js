let words = ['go', 'ahead', 'and', 'jump'];

console.log(words.sort((a, b) => b.length - a.length));

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

console.log(scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
}));