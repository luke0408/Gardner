export class BaseError extends Error {
  data: Data;

  constructor(data: Data) {
    super(data.message);
    this.data = data;
  }
}
