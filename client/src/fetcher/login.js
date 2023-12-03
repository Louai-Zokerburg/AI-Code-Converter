import axios from 'axios';
import { baseUrl } from '../constants';

export const loginFetcher = async (user) => {
  const url = `${baseUrl}/auth/login`;

  let response = { user: null, error: null };

  try {
    const res = await axios.post(url, user);

    response = { ...response, user: res.data.user };
  } catch (error) {
    response = { ...response, error: error.message };
  }

  return response;
};
