import { ListItem, MovieLink } from './MoviesList.styled';
export const MoviesList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(movie => (
          <ListItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
