/**
 * Formats a number as currency.
 * @param {number} value - The value to format.
 * @returns {string} - The formatted currency string.
 */
const formatCurrency = (value) => {
  // Check if value is a valid number
  if (isNaN(value) || value === null || value === undefined) {
    value = 0; // Default to 0 if value is not valid
  }

  return `₹${Number(value).toFixed(2)}`; // Ensures two decimal places and converts value to a number
};

export default formatCurrency;
