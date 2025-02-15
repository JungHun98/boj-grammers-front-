import axios from 'axios';

const TIME_OUT = 15000;

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: TIME_OUT,
});

export const requestProblem = (id: number) => {
  return instance.get(`/api/problem?problemId=${id}`);
};
