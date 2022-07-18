module.exports = function toReadable (number) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number <= 19) {
    return ones[number];
  }

  if (number >= 20 && number < 100 && number.toString()[1] != 0) {
    return tens[number.toString()[0]] + ' ' + ones[number.toString()[1]];
  }

  if (number >= 20 && number < 100 && number.toString()[1] == 0) {
    return tens[number.toString()[0]];
  }

  if (number >= 100 && number < 1000 && number % 100 === 0) {
    return ones[number.toString()[0]] + ' hundred';
  }

  if (number > 100 && number < 1000 && number.toString()[1] == 0) {
    return ones[number.toString()[0]] + ' hundred' +  ' ' + ones[number.toString().slice(2)];
  }

  if (number > 100 && number < 1000 && number.toString()[1] == 1) {
    return ones[number.toString()[0]] + ' hundred' +  ' ' + ones[number.toString().slice(1)];
  }

  if (number > 100 && number < 1000 && number.toString()[1] >= 2 && number.toString()[2] == 0) {
    return ones[number.toString()[0]] + ' hundred' +  ' ' + tens[number.toString()[1]] ;
  }

  if (number > 100 && number < 1000 && number.toString()[1] >= 2 && number.toString()[2] != 0) {
    return ones[number.toString()[0]] + ' hundred' +  ' ' + tens[number.toString()[1]] + ' ' + ones[number.toString()[2]];
  }
}
