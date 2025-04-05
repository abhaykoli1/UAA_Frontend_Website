import axios from "axios";
import config from "./config";

// Add a home query
export const addHomeQuery = async (queryData, setLoading = null) => {
  try {
    if (setLoading) setLoading(true);
    const response = await axios.post(
      `${config.API_BASE_URL}/add-home-query`,
      queryData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding home query:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Failed to add home query. Please try again.";
    throw new Error(errorMessage);
  } finally {
    if (setLoading) setLoading(false);
  }
};

// Get all home queries
export const getAllHomeQueries = async (setLoading = null) => {
  try {
    if (setLoading) setLoading(true);
    const response = await axios.get(`${config.API_BASE_URL}/get-all-queries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all home queries:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Failed to fetch home queries. Please try again.";
    throw new Error(errorMessage);
  } finally {
    if (setLoading) setLoading(false);
  }
};
