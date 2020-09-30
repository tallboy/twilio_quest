class Ducktypium {

  constructor(color) {
    this.color = this.isValidColor(color);
    this.calibrationSequence = [];
  }

  isValidColor(color) {
    const allowedColors = ['red', 'blue', 'yellow'];

    if (allowedColors.indexOf(color) === -1) {
      throw new Error('Invalid color')
    }

    return color;
  }


  refract(color) {

    const colorMap = {
      red: {
        blue: 'purple',
        red: 'red',
        yellow: 'orange'
      },
      blue: {
        blue: 'blue',
        red: 'purple',
        yellow: 'green'
      },
      yellow: {
        blue: 'green',
        red: 'orange',
        yellow: 'yellow'
      }
    }

    return colorMap[this.color][color];    
  }

  calibrate(numArr) {
    this.calibrationSequence = numArr.sort().map((element) => element * 3);
  }

}
