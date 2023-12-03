import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.status = StatusCodes.NOT_FOUND;
  }
}
