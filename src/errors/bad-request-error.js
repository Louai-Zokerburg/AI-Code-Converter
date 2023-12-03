import { StatusCodes } from 'http-status-codes';

export class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
    this.status = StatusCodes.BAD_REQUEST;
  }
}
