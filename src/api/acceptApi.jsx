import axios from "axios";
const Api_path = import.meta.env.VITE_API_PATH;
export const catagoryData = async () => {
  try {
    const response = await axios.get(`${Api_path}/category/explore`);
    return response.data.category;
  } catch (error) {
    console.error(error);
  }
};
export const recentReviews = async () => {
  try {
    const response = await axios.get(`${Api_path}/review/recent`);
    return response.data.recentReviews;
  } catch (error) {
    console.error(error);
  }
};
export const searchPreview = async ({ searchvalue }) => {
  try {
    const response = await axios.get(`${Api_path}/search/preview/`, {
      params: {
        search: searchvalue,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
