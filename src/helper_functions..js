const isSouthAfricanIDValid = (idNumber) => {
  if (idNumber.length !== 13) {
    return false;
  }

  return (
    isValidDatePattern(idNumber) &&
    isValidGender(idNumber) &&
    isValidCitizen(idNumber) &&
    isValidLuhnChecksum(idNumber)
  );
};
const isValidDatePattern = (idNumber) => {
  const year = parseInt(idNumber.substring(0, 2), 10);
  const month = parseInt(idNumber.substring(2, 4), 10);
  const day = parseInt(idNumber.substring(4, 6), 10);

  if (year < 0 || year > 99) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  if (day < 1 || day > 31) {
    return false;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    return false;
  }

  if (month === 2) {
    if (day > 29) {
      return false;
    }
    if (day === 29) {
      if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
        return false;
      }
    }
  }

  return true;
};

const isValidGender = (idStr) => {
  const genderDigits = parseFloat(idStr.substring(6, 10));

  return genderDigits > 0 && genderDigits < 9999;
};

const isValidCitizen = (idStr) =>
  parseInt(idStr[10]) === 0 || parseInt(idStr[10]) === 1;

const isValidLuhnChecksum = (number) => {
  const digits = number.slice(0, -1).split("").map(Number);
  const checksumDigit = Number(number.charAt(number.length - 1));
  digits.reverse();

  const checksum = digits.reduce((sum, digit, i) => {
    const doubled = i % 2 === 0 ? digit * 2 : digit;
    return sum + (doubled > 9 ? doubled - 9 : doubled);
  }, 0);

  const totalSum = checksum + checksumDigit;

  return totalSum % 10 === 0;
};

module.exports = { isSouthAfricanIDValid };