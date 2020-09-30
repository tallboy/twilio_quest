function getFirstAmountSorted(arr, num) {
  return arr.sort().slice(0, num);
}

console.log(getFirstAmountSorted(['third', 'second', 'first'], 0))