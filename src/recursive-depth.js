module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      let max = count;
      arr.forEach(el => {
        let currentCount = this.calculateDepth(el);
        if (currentCount > max) max = currentCount;
      });
      count = ++max;
    }
    return count;
  }
};
