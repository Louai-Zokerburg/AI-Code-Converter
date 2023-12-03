import axios from 'axios';
import { baseUrl } from '../constants';

export const registerFetcher = async (user) => {
  const url = `${baseUrl}/auth/register`;

  let response = { user: null, error: null };

  try {
    const res = await axios.post(url, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response = { ...response, user: res.data.user };
  } catch (error) {
    response = { ...response, error: error.message };
  }

  return response;
};
