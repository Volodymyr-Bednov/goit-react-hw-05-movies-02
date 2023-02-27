import axios from 'axios';

const apiKey = '56dd70469223270b37ebfbc5f203adb4';
const apiUrl = 'https://api.themoviedb.org/3/';

export const getDataApi = async (apiRequest, params = {}) => {
  const data = await axios.get(`${apiUrl}${apiRequest}?api_key=${apiKey}`, {
    params,
  });

  return data;
};
