import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "8c77f76911msh45cc4f160859a68p1ccf65jsn5e7459b3f3e1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(
    `${BASE_URL}/${url}`,
    options
  );

  return data;
};
