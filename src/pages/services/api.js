import axios from "axios";

const BASE_URL = 'https://dummyjson.com';

export const getAllUsers = () => {
  return axios.get(`${BASE_URL}/users`);
}

export const getSingleUser = (id) => {
  return axios.get(`${BASE_URL}/users/${id}`);
}

export const getSingleUserPosts = (id) => {
  return axios.get(`${BASE_URL}/users/${id}/posts`);
}

export const getSingleUserTodos = (id) => {
  return axios.get(`${BASE_URL}/users/${id}/todos`);
}