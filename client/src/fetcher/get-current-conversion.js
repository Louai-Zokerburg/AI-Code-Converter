import axios from 'axios';
import { baseUrl } from '../constants';

export const getCurrentConversionFetcher = async (token) => {
  const url = `${baseUrl}/current`;

  let response = { conversion: null, error: null };

  try {
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    response = { ...response, conversion: res.data.conversion };
  } catch (error) {
    response = { ...response, error: error.message };
  }

  return response;
};
