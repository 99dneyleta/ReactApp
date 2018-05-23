import axios from 'axios';


const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "" ,
});

export default client;

export function authHeader() {
  return {
    Authorization: 'Basic dGVzdDp0ZXN0',
  };
}