import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bravenewcoin.p.rapidapi.com',
});

export const headers = {
  'content-type': 'application/json',
  'x-rapidapi-key': '29a1a39fc1mshd187e3727a4d2bfp17b959jsn6948f713f3e6',
  'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
  useQueryString: true,
};

export const data = {
  audience: 'https://api.bravenewcoin.com',
  client_id: 'oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY',
  grant_type: 'client_credentials',
};
