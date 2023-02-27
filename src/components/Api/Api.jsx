import axios from 'axios';

//const ApiUrl = "https://api.themoviedb.org/3/movie/550?api_key=56dd70469223270b37ebfbc5f203adb4"
const apiKey = '56dd70469223270b37ebfbc5f203adb4';
const apiUrl = 'https://api.themoviedb.org/3/';
// const apiRequest = 'trending/movie/week';
// const params = {};

//trending
// https://api.themoviedb.org/3/trending/movie/week?api_key=56dd70469223270b37ebfbc5f203adb4
// {apiUrl}{apiRequest}?api_key={apiKey}

// search
// https://api.themoviedb.org/3/search/movie?api_key=56dd70469223270b37ebfbc5f203adb4&query=Jack+Reacher
// ${apiUrl}search/movie?api_key=56dd70469223270b37ebfbc5f203adb4&query=Jack+Reacher
export const getDataApi = async (apiRequest, params = {}) => {
  const data = await axios.get(`${apiUrl}${apiRequest}?api_key=${apiKey}`, {
    params,
  });
  //const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=56dd70469223270b37ebfbc5f203adb4&query=Jack+Reacher`);
  //console.log(data);
  return data;
};

// export const getImageApi = async () => {
//   const
// }
