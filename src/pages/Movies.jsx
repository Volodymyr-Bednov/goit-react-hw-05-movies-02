import { getDataApi } from 'components/Api/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [foundMovies, setfoundMovies] = useState([]);
  const [isReplied, setIsReplied] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('name') ?? '';

  const handlerSubmitForm = evt => {
    evt.preventDefault();
    if (!evt.target.elements.searchMovies.value.trim()) return;
    const searchWord = evt.target.elements.searchMovies.value;
    setSearchParams({ name: searchWord });
    evt.target.reset();
  };

  const getSearchMovieS = async searchWord => {
    const apiRequest = `search/movie`;
    const params = { query: searchWord };
    console.log('params', params);
    const { data } = await getDataApi(apiRequest, params);
    setfoundMovies(data.results);
    console.log('data.results', data.results);
    setIsReplied(true);
  };

  useEffect(() => {
    getSearchMovieS(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <SearchForm onHandlerSubmit={handlerSubmitForm} />
      <div>{isReplied && <MoviesList data={foundMovies} />}</div>
    </>
  );
};

export default Movies;
