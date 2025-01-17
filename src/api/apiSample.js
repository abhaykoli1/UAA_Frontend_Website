import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8080/api/v1"; // Replace with your actual backend URL

// Get all samples
export const getAllSamples = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all-sample`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all samples:", error);
    throw error;
  }
};

// Search samples by query
export const searchSample = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/sample/${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching samples:", error);
    throw error;
  }
};

// Get a specific sample by title
export const getSampleByTitle = async (title) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/get-sample-perticuler/${title}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching sample by title:", error);
    throw error;
  }
};
