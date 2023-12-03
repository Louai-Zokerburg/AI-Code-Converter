import { StatusCodes } from 'http-status-codes';

export class UnAuthorizedError extends Error {
  constructor(msg) {
    super(msg);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}
