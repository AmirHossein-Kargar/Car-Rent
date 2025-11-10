import apiClient from "./apiClient";

export const getCars = async () => {
  try {
    const response = await apiClient.get("/cars");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error
  }
};
