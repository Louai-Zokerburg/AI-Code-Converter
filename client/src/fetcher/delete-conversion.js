import axios from 'axios';
import { baseUrl } from '../constants';

export const deleteConversionFetcher = async (token, id) => {
  const url = `${baseUrl}/history/${id}`;

  let response = { success: null, error: null };

  try {
    const res = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    response = { ...response, success: res.data.success };
  } catch (error) {
    console.log(error);
    response = { ...response, error: error.message };
  }

  return response;
};
