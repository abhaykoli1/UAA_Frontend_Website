import axios from "axios";
import config from "./config";

// Get all samples
export const getAllSamples = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/all-sample`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all samples:", error);
    throw error;
  }
};

// Search samples by query
export const searchSample = async (query) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/search/sample/${query}`
    );
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
      `${config.API_BASE_URL}/get-sample-perticuler/${title}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching sample by title:", error);
    throw error;
  }
};
