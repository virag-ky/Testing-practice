function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error("string length must be greater than 1 and less then 11");
  }
  return string.length;
}

module.exports = stringLength;
