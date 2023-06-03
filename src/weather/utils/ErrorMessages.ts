const ErrorMessages = {
  typeError: {
    message: `Expected type to be {ex} but recieved {re} instead.`,
    status: 400,
  },
  rangeError: {
    message: `Invalid range {ra}. Required: {rae}`,
    status: 400,
  },
};

export { ErrorMessages };
