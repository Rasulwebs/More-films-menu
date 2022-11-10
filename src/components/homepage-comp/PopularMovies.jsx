import { useEffect, useState} from "react";
import MovieCard from "../movie-card/MovieCard";

import { motion } from 'framer-motion';

import "../../sass/movies-grid.sass";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPopularMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}popular?${apiKey}`;
    
    getPopularMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Popular movies</h2>
      <motion.div whileTap={{cursor: 'grabbing'}} className="motion-container"> 
        <motion.div drag='x' dragConstraints={{right:0, left: -3500}} className="movies-container">
          {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PopularMovies;