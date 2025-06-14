class PercentCalculator {
  /**
   * Calculate what percentage one number is of another
   * @param {number} part - The part value
   * @param {number} whole - The whole value
   * @returns {number} The percentage
   */
  static percentOf(part, whole) {
    if (whole === 0) {
      throw new Error("Cannot divide by zero");
    }
    return (part / whole) * 100;
  }

  /**
   * Calculate a percentage of a number
   * @param {number} percent - The percentage (e.g., 25 for 25%)
   * @param {number} number - The number to calculate percentage of
   * @returns {number} The result
   */
  static calculatePercentage(percent, number) {
    return (percent / 100) * number;
  }

  /**
   * Add a percentage to a number
   * @param {number} number - The base number
   * @param {number} percent - The percentage to add
   * @returns {number} The result after adding percentage
   */
  static addPercent(number, percent) {
    return number + this.calculatePercentage(percent, number);
  }

  /**
   * Subtract a percentage from a number
   * @param {number} number - The base number
   * @param {number} percent - The percentage to subtract
   * @returns {number} The result after subtracting percentage
   */
  static subtractPercent(number, percent) {
    return number - this.calculatePercentage(percent, number);
  }

  /**
   * Calculate percentage change between two numbers
   * @param {number} oldValue - The original value
   * @param {number} newValue - The new value
   * @returns {number} The percentage change (positive for increase, negative for decrease)
   */
  static percentageChange(oldValue, newValue) {
    if (oldValue === 0) {
      throw new Error("Cannot calculate percentage change from zero");
    }
    return ((newValue - oldValue) / oldValue) * 100;
  }

  /**
   * Calculate percentage increase
   * @param {number} oldValue - The original value
   * @param {number} newValue - The new value
   * @returns {number} The percentage increase (returns 0 if decrease)
   */
  static percentageIncrease(oldValue, newValue) {
    const change = this.percentageChange(oldValue, newValue);
    return Math.max(0, change);
  }

  /**
   * Calculate percentage decrease
   * @param {number} oldValue - The original value
   * @param {number} newValue - The new value
   * @returns {number} The percentage decrease (returns 0 if increase)
   */
  static percentageDecrease(oldValue, newValue) {
    const change = this.percentageChange(oldValue, newValue);
    return Math.max(0, -change);
  }

  /**
   * Find what number a percentage represents
   * @param {number} percent - The percentage
   * @param {number} percentageValue - The value that represents the percentage
   * @returns {number} The whole number
   */
  static findWhole(percent, percentageValue) {
    if (percent === 0) {
      throw new Error("Cannot calculate with 0 percent");
    }
    return (percentageValue * 100) / percent;
  }

  /**
   * Calculate compound percentage (applying multiple percentages)
   * @param {number} initialValue - The starting value
   * @param {...number} percentages - Multiple percentages to apply
   * @returns {number} The final result after applying all percentages
   */
  static compound(initialValue, ...percentages) {
    return percentages.reduce((value, percent) => {
      return this.addPercent(value, percent);
    }, initialValue);
  }

  /**
   * Calculate the average of multiple percentages
   * @param {...number} percentages - The percentages to average
   * @returns {number} The average percentage
   */
  static average(...percentages) {
    if (percentages.length === 0) {
      throw new Error("No percentages provided");
    }
    return (
      percentages.reduce((sum, percent) => sum + percent, 0) /
      percentages.length
    );
  }

  /**
   * Round percentage to specified decimal places
   * @param {number} percentage - The percentage to round
   * @param {number} decimals - Number of decimal places (default: 2)
   * @returns {number} The rounded percentage
   */
  static round(percentage, decimals = 2) {
    return (
      Math.round(percentage * Math.pow(10, decimals)) / Math.pow(10, decimals)
    );
  }

  /**
   * Format percentage as string with % symbol
   * @param {number} percentage - The percentage to format
   * @param {number} decimals - Number of decimal places (default: 2)
   * @returns {string} Formatted percentage string
   */
  static format(percentage, decimals = 2) {
    return `${this.round(percentage, decimals)}%`;
  }
}

export default PercentCalculator;
