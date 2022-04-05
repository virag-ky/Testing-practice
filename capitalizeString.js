function capitalizeString(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const newString = str.substring(1);

  return firstLetter + newString;
}

module.exports = capitalizeString;
