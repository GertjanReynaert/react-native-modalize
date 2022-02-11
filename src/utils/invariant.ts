const genericMessage = 'Invariant Violation "react-native-modalize"';

const {
  setPrototypeOf = (obj: any, proto: any): any => {
    obj.__proto__ = proto;
    return obj;
  },
} = Object;

class InvariantError extends Error {
  constructor(message: string | number = genericMessage) {
    super(`${message}`);

    setPrototypeOf(this, InvariantError.prototype);
  }
}

export const invariant = (condition: any, message?: string | number): void => {
  if (condition) {
    throw new InvariantError(message);
  }
};
