import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8080/api/v1"; // Replace with your FastAPI server URL

// Add Service
export const addService = async (serviceData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/add-service`,
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
    const response = await axios.get(`${API_BASE_URL}/get-allService`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all services:", error);
    throw error.response.data;
  }
};

// Get Single Service
export const getServiceByTitle = async (value) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-service/${value}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service by title:", error);
    throw error.response.data;
  }
};
