const { isIdNumberValid } = require("../src/validate_sa_id.js");

describe("isIdNumberValid function", () => {
  it("should return true when the string passed is in the correct format", () => {
    expect(isIdNumberValid("2001014800086")).toBe(true);
  });

  it("should return false when the string passed is less than 13 characters", () => {
    expect(isIdNumberValid("20010148006")).toBe(false);
  });

  it("should return false when the string passed is greater than 13 characters", () => {
    expect(isIdNumberValid("20010148000868")).toBe(false);
  });

  it("should return false when the string contains a character other than digits", () => {
    expect(isIdNumberValid("20010&4800086")).toBe(false);
  });

  it("should return false when the string contains an invalid input for the 2 digits denoting the year.", () => {
    expect(isIdNumberValid("#^01014800086")).toBe(false);
  });

  it("should return false when the string contains invalid inputs for the months", () => {
    expect(isIdNumberValid("20%&324800086")).toBe(false);
  });

  it("should return true when a leap year is passed", () => {
    expect(isIdNumberValid("0002298083185")).toBe(true);
  });

  it("should return false when the string contains invalid inputs for the days digit (non-existent days)", () => {
    expect(isIdNumberValid("2001324800086")).toBe(false);
  });

  it("should return false when the string passed is not a valid gender", () => {
    expect(isIdNumberValid("2001014%%%286")).toBe(false);
  });

  it("should return false when the string passed is not a valid resident", () => {
    expect(isIdNumberValid("2001014800986")).toBe(false);
  });

  it("should return false when the string passed does not meet the criteria for the Luhn algorithm", () => {
    expect(isIdNumberValid("2001014800080")).toBe(false);
  });
});