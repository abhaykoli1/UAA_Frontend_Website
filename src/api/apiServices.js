import axios from "axios";
import config from "./config";

// Add Service
export const addService = async (serviceData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/add-service`,
      serviceData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding service:", error);
    throw error.response.data;
  }
};

// Get All Services
export const getAllServices = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/get-allService`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all services:", error);
    throw error.response.data;
  }
};

// Get Single Service
export const getServiceByTitle = async (value) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/get-service/${value}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching service by title:", error);
    throw error.response.data;
  }
};
