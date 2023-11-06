import axios from "axios";
import {toast} from 'react-toastify';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/v1/tours/`;

// Create New Tour
const createTour = async (formData) => {

    const response = await axios.post(API_URL, formData);
    if(response.status === 201){
      toast.success('TOUR WAS SUCCEFULY CREATED');
    }else {
      toast.error(response.data.message);
    }
    return response.data;
  
};

// Get all tours
const getTours = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Tour
const deleteTour = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Tour
const getTour = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Tour
const updateTour = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const tourService = {
  createTour,
  getTours,
  getTour,
  deleteTour,
  updateTour,
};

export default tourService;