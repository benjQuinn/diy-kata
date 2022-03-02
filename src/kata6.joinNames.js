const joinNames = namesObj => {
  namesObj.reduce((acc, person, index) => {
    if (index < namesObj.length - 1) {
      return `${acc + person.name}, `;
    }
    return `${acc}& ${person.name}`;
  }, "");
};

module.exports = joinNames;
