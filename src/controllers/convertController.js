import { StatusCodes } from 'http-status-codes';
import { Configuration, OpenAIApi } from 'openai';

import { BadRequestError } from '../errors/bad-request-error.js';

import conversionModel from '../models/conversionModel.js';

import { newConversion } from '../utils/conversion.js';

const generatePrompt = (sourceLang, targetLang, sourceCode) => {
  return `convert this piece of code: ${sourceCode} from ${sourceLang.trim()} programming language to ${targetLang.trim()} programming language and return back only the converted code and explaination write it in comments using the target language`;
};

const convert = async (req, res) => {
  const { id } = req.params;

  console.log('the id is: ' + id);

  const { sourceLang, sourceCode, targetLang } = req.body;

  if (!sourceLang || !sourceCode || !targetLang)
    throw new BadRequestError('Invalid Request Arguments');

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant that translates Code from to any programming language',
      },
      {
        role: 'user',
        content: generatePrompt(sourceLang, targetLang, sourceCode),
      },
    ],
    temperature: 0,
  });

  const targetCode = completion.data.choices[0].message.content;

  const conversion = await conversionModel.findByIdAndUpdate(
    id,
    {
      sourceCode,
      sourceLang,
      targetCode,
      targetLang,
    },
    { new: true }
  );

  res.status(StatusCodes.CREATED).json({ success: true, conversion });
};

const getCurrentCenversions = async (req, res) => {
  const conversion = await conversionModel
    .find({})
    .sort({ createdAt: -1 })
    .limit(1);

  res.status(StatusCodes.OK).json({ success: true, conversion: conversion[0] });
};

const createNewConversion = async (req, res) => {
  const { userId } = req;

  const conversion = await conversionModel.create({
    sourceLang: newConversion.sourceLang,
    sourceCode: newConversion.sourceCode,
    targetLang: newConversion.targetLang,
    targetCode: newConversion.targetCode,
    createdBy: userId,
  });

  res.status(StatusCodes.OK).json({ success: true, conversion });
};

const updateConversion = async (req, res) => {};

export { convert, getCurrentCenversions, createNewConversion };
