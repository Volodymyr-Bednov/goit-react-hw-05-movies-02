import { ListItem, MovieLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
export const MoviesList = ({ data }) => {
  const { pathname, search } = useLocation();
  return (
    <>
      <ul>
        {data.map(movie => (
          <ListItem key={nanoid()}>
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
