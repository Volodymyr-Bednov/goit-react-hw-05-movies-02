import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { defaultStaticPath } from '../../routerPaths/paths';
import {
  AddationBlock,
  GenresItem,
  GenresList,
  HeaderPage,
  ImageBlock,
  MovieWrap,
  TextBlock,
} from './DetailContent.styled';
export const DetailContent = ({ detailsMovie }) => {
  const [tmdbImageSrv, setTmdbImageSrv] = useState('');
  const [noImage, setNoImage] = useState('');
  useEffect(() => {
    setTmdbImageSrv(defaultStaticPath.tmdbImageSrv);
    setNoImage(defaultStaticPath.noImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MovieWrap>
        <ImageBlock>
          <img
            src={
              detailsMovie.poster_path
                ? `${tmdbImageSrv}w300${detailsMovie.poster_path}`
                : noImage
            }
            alt={detailsMovie.original_title}
            width="300px"
          />
        </ImageBlock>
        <TextBlock>
          <HeaderPage>
            {` ${detailsMovie.original_title} (${new Date(
              detailsMovie.release_date
            ).getFullYear()})`}
          </HeaderPage>
          <p>User score: {Math.trunc(detailsMovie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{detailsMovie.overview}</p>

          <div>
            <h2>Genres</h2>
            <GenresList>
              {detailsMovie.genres.map(item => (
                <GenresItem key={item.id}>{item.name}</GenresItem>
              ))}
            </GenresList>
          </div>
        </TextBlock>
      </MovieWrap>
      <AddationBlock>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" replace>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" replace>
              Reviews
            </NavLink>
          </li>
        </ul>
      </AddationBlock>
      <Outlet />
    </>
  );
};
