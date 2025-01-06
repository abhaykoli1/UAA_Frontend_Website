import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8080/api/v1"; // Replace with your FastAPI server URL

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user-create`, formData);
    return response.data;
  } catch (error) {
    console.error("Error Register User:", error);
    throw error.response.data;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user-login`, formData);
    return response.data;
  } catch (error) {
    console.error("Error Login:", error);
    throw error.response.data;
  }
};
