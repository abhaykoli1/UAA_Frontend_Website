import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8080/api/v1";

// Add a home query
export const addHomeQuery = async (queryData, setLoading = null) => {
  try {
    if (setLoading) setLoading(true); // Set loading if function is provided
    const response = await axios.post(
      `${API_BASE_URL}/add-home-query`,
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
    const response = await axios.get(`${API_BASE_URL}/get-all-queries`);
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
