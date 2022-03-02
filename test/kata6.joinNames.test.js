const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const array1 = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
    const array2 = [
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" }
    ];

    expect(joinNames(array1).toEqual("Bart, Lisa & Maggie"));
    expect(joinNames(array2).toEqual("Bart, Lisa, Maggie & Homer"));
  });
});
