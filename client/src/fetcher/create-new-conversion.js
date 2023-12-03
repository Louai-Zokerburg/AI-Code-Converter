import axios from 'axios';
import { baseUrl } from '../constants';

export const createNewConversionFetcher = async (token) => {
  const url = `${baseUrl}/new`;

  let response = { conversion: null, error: null };

  try {
    const res = await axios.post(
      url,
      {},
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
