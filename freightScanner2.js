function scan(arr) {
  let retArr = [];
  arr.forEach((element, index) => {
    if (element === 'contraband') {
      retArr.push(index)
    }
  });

  return retArr;
}