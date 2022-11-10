import { useEffect, useState} from "react";
import { motion } from 'framer-motion';

import MovieCard from "../movie-card/MovieCard";

import "../../sass/movies-grid.sass";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const TopRatedMovies = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top rated movies</h2>
      <motion.div whileTap={{cursor: 'grabbing'}} className="motion-container">
          <motion.div drag='x' dragConstraints={{right:0, left: -3500}} className="movies-container">
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
          </motion.div>
      </motion.div>
    </div>
  );
};

export default TopRatedMovies;