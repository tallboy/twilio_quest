function scan(arr) {
  let result = 0;
  arr.forEach(element => {
    if (element === 'contraband')
      result++;
  });

  return result;
}