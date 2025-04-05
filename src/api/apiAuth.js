import axios from "axios";
import config from "./config";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/user-create`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error Register User:", error);
    throw error.response.data;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/user-login`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error Login:", error);
    throw error.response.data;
  }
};
