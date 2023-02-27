import { getDataApi } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { defaultStaticPath } from '../routerPaths/paths';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  const [isActiveCast, setIsActiveCast] = useState(false);

  const { tmdbImageSrv, noImage } = defaultStaticPath;

  // // get-movie-credits
  // // const apiRequest = 'movie/343611/credits';
  const getCastInfo = async () => {
    const apiRequest = `movie/${movieId}/credits`;
    const { data } = await getDataApi(apiRequest);
    setMovieCast(data.cast);
    setIsActiveCast(true);

    console.log(data);
  };
  useEffect(() => {
    getCastInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul>
        {isActiveCast &&
          movieCast.map(item => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.character}</p>

              <img
                src={
                  item.profile_path
                    ? `${tmdbImageSrv}w300${item.profile_path}`
                    : noImage
                }
                alt={item.name}
                width="150px"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
