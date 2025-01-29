import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});

export const requestProblem = async (id: number) => {
  return await instance.get(`/api/problem?problemId=${id}`);
};
