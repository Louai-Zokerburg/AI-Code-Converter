import axios from 'axios';
import { baseUrl } from '../constants';

export const getConversionsFetcher = async (token) => {
  const url = `${baseUrl}/history/`;

  let response = { conversions: null, error: null };

  try {
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    response = { ...response, conversions: res.data.history };
  } catch (error) {
    response = { ...response, error: error.message };
  }

  return response;
};
