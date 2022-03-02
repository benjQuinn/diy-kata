const humanCatDogYears = number => {
  let cat = 0;
  let dog = 0;

  for (let i = 0; i < number; i++) {
    if (i === 1) {
      cat += 15;
      dog += 15;
    } else if (i === 2) {
      cat += 9;
      dog += 9;
    } else {
      cat += 4;
      dog += 5;
    }
  }
  return [number, cat, dog];
};

module.exports = humanCatDogYears;

// Goes through the loop in human years and adds to accumulator every time code block is executed

// e.g if number passed in is 3, first codeblock executes (0 + 15) and then second  code block executes (15 + 9) and then third and final code block executes (14 + 4)

//     returns [3, 28, 29]
