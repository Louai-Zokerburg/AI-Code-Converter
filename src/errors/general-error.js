import { StatusCodes } from 'http-status-codes';

export class GeneralError extends Error {
  constructor(msg) {
    super(msg);
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
