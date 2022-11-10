import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';

import MovieCard from "../movie-card/MovieCard";

import "../../sass/movies-grid.sass";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getUpcomingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setUpcomingMovies(data.results);
  };

  useEffect(() => {
    const upcomingMoviesUrl = `${moviesURL}upcoming?${apiKey}`;
    
    getUpcomingMovies(upcomingMoviesUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Upcoming movies</h2>
      <motion.div whileTap={{cursor: 'grabbing'}} className="motion-container">
        <motion.div drag='x' dragConstraints={{right:0, left: -3500}} className="movies-container">
        {upcomingMovies.length > 0 && upcomingMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UpcomingMovies;