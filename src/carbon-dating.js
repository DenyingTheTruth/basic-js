const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return typeof sampleActivity === "string" &&
    parseFloat(sampleActivity) &&
    parseFloat(sampleActivity) > 0 &&
    parseFloat(sampleActivity) < 15
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
          (0.693 / HALF_LIFE_PERIOD)
      )
    : false;
};
