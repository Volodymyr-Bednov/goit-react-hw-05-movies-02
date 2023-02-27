import { getDataApi } from 'components/Api/Api';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  const getCastInfo = async () => {
    const apiRequest = `movie/${movieId}/reviews`;
    const { data } = await getDataApi(apiRequest);
    setMovieReviews(data.results);
  };
  useEffect(() => {
    getCastInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul>
        {movieReviews.length ? (
          movieReviews.map(item => (
            <li key={nanoid()}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
