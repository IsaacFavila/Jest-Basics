function sum(a, b) {
  return a + b;
}
function reverseString(str) {
  return str.split('').reverse().join('');
}

function rockPaperScissors(rounds = 3) {
  var rps = ['R', 'P', 'S'];
  var combos = [];
  function play(playedSoFar = '') {
    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }
    rps.forEach(function(currentRound) {
      play(playedSoFar + currentRound);
    });
  };
  play();
  return combos;
};

function bestCohort(str) {
  if (str === 'RFE5') return true;
  return false;
}
module.exports = {
  sum,
  reverseString,
  rockPaperScissors,
  bestCohort
}