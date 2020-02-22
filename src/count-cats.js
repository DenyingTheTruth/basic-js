module.exports = function countCats(matrix) {
  return matrix && matrix.length
    ? matrix.reduce((a, b) => [...a, ...b]).filter(el => el == "^^").length
    : 0;
};
