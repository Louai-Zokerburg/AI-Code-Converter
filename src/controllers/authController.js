import { StatusCodes } from 'http-status-codes';

import userModel from '../models/userModel.js';
import conversionModel from '../models/conversionModel.js';

import { BadRequestError } from '../errors/bad-request-error.js';
import { UnAuthorizedError } from '../errors/unauthorized-error.js';
import { NotFoundError } from '../errors/not-found-error.js';

import { defaultConversion } from '../utils/conversion.js';

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    throw new BadRequestError('Invalid Credentials');

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    throw new BadRequestError('User Already Exists');
  }

  const newUser = await userModel.create({ username, email, password });

  const token = await newUser.createJwt();

  await conversionModel.create({
    ...defaultConversion,
    createdBy: newUser._id,
  });

  return res.status(StatusCodes.CREATED).json({
    success: true,
    user: {
      username: newUser.username,
      email: newUser.email,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw new BadRequestError('Invalid Credentials');

  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    throw new NotFoundError('User Does Not Exist');
  }

  const passMatch = await user.comparePass(password);

  if (!passMatch) {
    throw new UnAuthorizedError('Email Or Password Wrong');
  }

  const token = await user.createJwt();

  return res.status(StatusCodes.OK).json({
    success: true,
    user: {
      email: user.email,
      username: user.username,
      token,
    },
  });
};

export { register, login };
