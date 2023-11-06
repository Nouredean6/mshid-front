import axios from "axios";
import {toast} from 'react-toastify';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/v1/users/`;


// Get all Users
const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a User
const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a User
const getUser = async (id) => {
  const response = await axios.get(API_URL+ id);
  return response.data;
};
// Update User
const updateUser = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const usersService = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};

export default usersService;