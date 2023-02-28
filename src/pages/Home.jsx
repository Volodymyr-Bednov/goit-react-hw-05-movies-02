import { getDataApi } from 'components/Api/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { HeaderPage } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isReplied, setIsReplied] = useState(false);

  const getTrending = async () => {
    const apiRequest = 'trending/movie/day';
    const { data } = await getDataApi(apiRequest);
    setTrendingMovies(data.results);
    setIsReplied(true);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div>
      <HeaderPage> Trending today</HeaderPage>
      {isReplied && <MoviesList data={trendingMovies} />}
    </div>
  );
};

export default Home;

// //trending
// const apiRequest = 'trending/movie/day';

// // search
// // const apiRequest = 'search/movie';
// // const params = { query: 'Jack Reacher' };

// // get-movie-details
// //const apiRequest = 'movie/343611';

// // get-movie-credits
// // const apiRequest = 'movie/343611/credits';

// // get-movie-reviews
// //const apiRequest = 'movie/343611/reviews';
// const res = await getDataApi(apiRequest, params);

// console.log(res);
