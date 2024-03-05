// This function generates a number between 1 and 6
function dice() {
  const MIN = 1;
  const MAX = 6;
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

console.log(dice());

module.exports = dice
