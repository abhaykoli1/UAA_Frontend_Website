import axios from "axios";
import config from "./config";

// Add Service
// export const addBlog = async (serviceData) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/add-service`,
//       serviceData
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error adding service:", error);
//     throw error.response.data;
//   }
// };

// Get All Services
export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/get-allblogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all services:", error);
    throw error.response.data;
  }
};

// Get Single Service
export const getBlogByTitle = async (value) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/get-blog/${value}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching service by title:", error);
    throw error.response.data;
  }
};
