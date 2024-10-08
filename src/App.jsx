import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieCast } from "./components/MovieCast/MovieCast";
import { MovieReviews } from "./components/MovieReviews/MovieReviews";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { MoviePage } from "./pages/MoviePage";
import { NotFound } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
