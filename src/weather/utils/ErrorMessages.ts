/**
 * Namespace for error messages.
 * @namespace
 */
const ErrorMessages = {
  /**
   * Error message for type mismatch.
   * @memberof ErrorMessages
   * @property {string} message - The error message with placeholders for expected type ({ex}) and received type ({re}).
   * @property {number} status - The HTTP status code for the error.
   */
  typeError: {
    message: `Expected type to be {ex} but received {re} instead.`,
    status: 400,
  },
  /**
   * Error message for invalid range.
   * @memberof ErrorMessages
   * @property {string} message - The error message with placeholders for the invalid range ({ra}) and the required range ({rae}).
   * @property {number} status - The HTTP status code for the error.
   */
  rangeError: {
    message: `Invalid range {ra}. Required: {rae}`,
    status: 400,
  },
};

export { ErrorMessages };
