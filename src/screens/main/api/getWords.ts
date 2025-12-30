import axiosInstance from "@/src/shared/lib/axios";

export const getWords = async (query: string = "") => {
  try {
    const response = await axiosInstance.get("words/search", {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const getWordsByFirstLetter = async (letter: string) => {
  try {
    const response = await axiosInstance.get("words", {
      params: { first_letter: letter },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const getWordsByTale = async (taleId: number) => {
  try {
    const response = await axiosInstance.get(`tales/${taleId}`, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};
