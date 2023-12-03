import jwt from 'jsonwebtoken';

import { UnAuthorizedError } from '../errors/unauthorized-error.js';

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    throw new UnAuthorizedError('Authorization Header Must be Provided');

  if (!authorization.startsWith('Bearer ')) {
    throw new UnAuthorizedError('Invalid Authrization Header');
  }

  const token = authorization.split(' ')[1];

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
    next();
  } catch (error) {
    throw new UnAuthorizedError('Access Unauthorized');
  }
};

export { authMiddleware };
