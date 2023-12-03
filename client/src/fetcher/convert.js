import axios from 'axios';
import { baseUrl } from '../constants';

export const convertFetcher = async (token, conversion) => {
  const url = `${baseUrl}/${conversion._id}`;

  let response = { conversion: null, error: null };

  try {
    const res = await axios.patch(
      url,
      {
        sourceLang: conversion.sourceLang,
        sourceCode: conversion.sourceCode,
        targetLang: conversion.targetLang,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    response = { ...response, conversion: res.data.conversion };
  } catch (error) {
    console.log(error);
    response = { ...response, error: error.message };
  }

  return response;
};
