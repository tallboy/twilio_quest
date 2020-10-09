function calculateMass(arr) {
  return arr.reduce((accumulator, item) => accumulator + item.length, 0) 
}