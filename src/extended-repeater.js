module.exports = function repeater(str, options) {
  if (!options.separator) {
    options.separator = "+";
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (typeof options["addition"] === "undefined") {
    return (String(str) + options.separator)
      .repeat(options.repeatTimes || 1)
      .slice(0, options.separator.length * -1);
  } else {
    return (
      String(str) +
      (String(options.addition) + options.additionSeparator)
        .repeat(options.additionRepeatTimes || 1)
        .slice(0, options.additionSeparator.length * -1) +
      options.separator
    )
      .repeat(options.repeatTimes || 1)
      .slice(0, options.separator.length * -1);
  }
};
