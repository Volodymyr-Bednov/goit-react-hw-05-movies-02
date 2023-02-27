import { Route, Routes } from 'react-router-dom';
import Cast from 'pages/Cast';
//import Home from 'pages/Home';
//import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';
//import { PageHeader } from './PageHeader/PageHeader';
import { lazy } from 'react';
import MainLayout from 'Layouts/MainLayout';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          {/*  */}
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>

          {/*  */}
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
