const { isSouthAfricanIDValid } = require("./helper_functions..js");

function isIdNumberValid(idStr) {
  return isSouthAfricanIDValid(idStr);
}

module.exports = { isIdNumberValid };