import axiosInstance from "@/src/shared/lib/axios";

export const getTales = async () => {
  try {
    const response = await axiosInstance.get("tales");
    return response.data;
  } catch (error) {
    console.error("Error fetching tales:", error);
    throw error;
  }
};
