const numberToReversedDigits = number => {
  return number
    .toString()
    .split("")
    .reverse()
    .map(Number);
};

// 1) Convert number to string so we can reverse()
// 2) Split the string into an Array
// 3) Reverse the Array
// 4) Create new array converting every element to a Number

module.exports = numberToReversedDigits;
