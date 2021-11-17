import axios from 'axios';
import ILoginValues from '../common/Interfaces/ILoginValues';

const baseUrl = process.env.REACT_APP_API_URL;

export const login = ({ username, password }: ILoginValues) =>
  axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      username,
      password,
    },
  });
