import { ListItem, MovieLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
export const MoviesList = ({ data }) => {
  const { pathname, search } = useLocation();
  return (
    <>
      <ul>
        {data.map(movie => (
          <ListItem key={movie.id}>
            <MovieLink
              to={`/movies/${movie.id}`}
              state={{ from: pathname + search }}
            >
              {movie.title}
            </MovieLink>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
