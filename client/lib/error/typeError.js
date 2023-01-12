const throwError = (message) => {
  throw new Error(message);
};

const throwSyntaxError = (message) => {
  throw new SyntaxError(message);
};

const throwReferenceError = (message) => {
  throw new ReferenceError(message);
};

const throwTypeError = (message) => {
  throw new TypeError(message);
};
