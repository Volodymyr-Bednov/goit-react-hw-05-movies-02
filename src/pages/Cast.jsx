import { getDataApi } from 'components/Api/Api';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { defaultStaticPath } from '../routerPaths/paths';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isActiveCast, setIsActiveCast] = useState(false);
  const [tmdbImageSrv, setTmdbImageSrv] = useState('');
  const [noImage, setNoImage] = useState('');

  const getCastInfo = async () => {
    const apiRequest = `movie/${movieId}/credits`;
    const { data } = await getDataApi(apiRequest);
    setMovieCast(data.cast);
    setIsActiveCast(true);
  };

  useEffect(() => {
    setTmdbImageSrv(defaultStaticPath.tmdbImageSrv);
    setNoImage(defaultStaticPath.noImage);
    getCastInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul>
        {
          isActiveCast &&
            movieCast.map(item => (
              <li key={nanoid()}>
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
            ))

          // <p>We don't have any cast for this movie.</p>
        }
      </ul>
    </div>
  );
};

export default Cast;
