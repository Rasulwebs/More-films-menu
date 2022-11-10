import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { RatingComponent } from "../../components/rating/Rating";
import {
  BsGraphUp,
  BsCalendarCheck,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../../components/movie-card/MovieCard";
import Footer from '../../components/footer/Footer';

import "./movie-details.sass";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page-container">
      {movie && (
        <>
          <div className="movie-page">
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
              <h3>
                <BsCalendarCheck className="icon"/> Release Date :
              </h3>
              <p>{formatCurrency(movie.release_date)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp className="icon"/> Revenue:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit className="icon"/> Run Time:
              </h3>
              <p>{movie.runtime} minutes</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill className="icon"/> Summary:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div>
            <RatingComponent />
          </div>
          <Link to="/" className="back-link">
            Back to home
          </Link>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Movie;