import axios from "axios";

const Base_Url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromAPI = async (url) => {
  let {data} = await axios.get(`${Base_Url}/${url}`,options);
  return data;
}