import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
// Register User
export const registerUser = async (values) => {

  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/auth/register`,
      values,
      { withCredentials: true }
    );

    // if (response.statusText === "Created") {
    //   toast.success("User Registered successfully");
    // }
    if (response.statusText === "OK") {
      // await dispatch(SET_LOGIN(true));
      toast.success("User Registered successfully");
    }
    return response.status;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return error;
  }
};

// Login User
export const loginUser = async (values) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/auth/login`,
      values
    );
    if (response.status === 200) {
      toast.success("Login Successful...");
      return response.data;
    } else {
      toast.error("Login Failed");
      throw new Error("Login Failed");
    }
    
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    throw error;
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    console.log(" trying to log out");
    await axios.get(`${BACKEND_URL}/api/v1/auth/logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/auth/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Get User Profile
export const getUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/auth/getuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Update Profile
export const updateUser = async (formData) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/v1/auth/update-user`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


