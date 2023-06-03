/**
 * @typedef {string} ErrorMessage[]
 */
export class WeatheryTypeError extends TypeError {
  /**
   *
   * @param  {...ErrorMessage} message The Error Message
   */
  constructor(...message) {
    if (
      !Array.isArray(message) ||
      message.some((msg) => typeof msg !== "string")
    ) {
      throw new TypeError(
        `Expected message to be an array of strings, but got ${typeof message} instead.`
      );
    }
    super(message.join(" "));
    this.name = "WeatheryTypeError";
    this.message = message.join(" ");
  }
}

export class WeatheryRangeError extends RangeError {
  /**
   *
   * @param  {number} statusCode The status code
   * @param  {...ErrorMessage} message The error message
   */
  constructor(statusCode, ...message) {
    if (
      !Array.isArray(message) ||
      message.some((msg) => typeof msg !== "string")
    ) {
      throw new TypeError(
        `Expected message to be an array of strings, but got ${typeof message} instead.`
      );
    }
    super(message.join(" "));
    this.name = "WeatheryRangeError";
    this.message = message.join(" ");

    const error = Error();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, WeatheryRangeError);
    } else {
      error.stack = new Error().stack;
    }
    this.stack += `\n\nStatusCode Stack:\nStatus Code: ${statusCode}\n${error.stack}`;
  }
}
