import { getDataApi } from 'components/Api/Api';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { DetailContent } from 'components/DetailContent/DetailContent';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState('');
  const [isReplied, setIsReplied] = useState(false);

  const getDetailData = async () => {
    const apiRequest = `movie/${movieId}`;
    const { data } = await getDataApi(apiRequest);
    setDetailsMovie(data);
    setIsReplied(true);
  };

  useEffect(() => {
    getDetailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ButtonBack />
      {isReplied && (
        <DetailContent detailsMovie={detailsMovie} isReplied={isReplied} />
      )}
    </>
  );
};

export default MovieDetails;
