import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchSearchPhoto = async (userQuery, page = 1) => {
  const urlSearchParams = {
    params: {
      query: userQuery,
      client_id: "l8xdQE6Jn13MnYMcD4UpAxY1HMTjQpAJUcEtBcXnH7A",
      orientation: "portrait",
      per_page: 12,
      page,
    },
  };

  try {
    const response = await axios.get("search/photos", urlSearchParams);

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
