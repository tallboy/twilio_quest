function calculatePower(arr) {
  if (!arr.length)
    return 0;

  return arr.map(element => element * 2).reduce((current, next) => current + next);

}

console.log(calculatePower([2,4,3]))