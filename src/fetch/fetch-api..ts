import axios, { AxiosResponse } from "axios";

const serverPath = "https://api.unsplash.com/search/photos/";
const key = "l8xdQE6Jn13MnYMcD4UpAxY1HMTjQpAJUcEtBcXnH7A";

export const getGalleryByQuery = async <T>(
  topic: string,
  currentPage: number
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get<T>(serverPath, {
    params: {
      client_id: key,
      query: topic,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return response.data;
};
