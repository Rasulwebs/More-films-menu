import React from "react";
import { useState, useEffect } from "react";

import Charts from "../components/charts/Charts";
import Footer from '../components/footer/Footer';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const StatsPage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

  useEffect(() => {
    const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
    };

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <>
      <Charts topRatedMovies={topMovies} />
      <Footer />
    </>
  );
};

export default StatsPage;