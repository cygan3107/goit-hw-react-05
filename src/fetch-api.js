import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "MSoInhVl3-KskBuK4thjHUt9xq_tuBAEidONWRVRnSw";

export const FetchImages = async (word, page = 1) => {
  const response = await axios.get(
    `search/photos?client_id=${accessKey}&per_page=12&page=${page}&query=${word}`
  );

  return response.data.results;
};
