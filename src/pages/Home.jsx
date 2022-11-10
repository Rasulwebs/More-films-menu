import React from 'react';

import TopRatedMovies from '../components/homepage-comp/TopRatedMovies';
import PopularMovies from '../components/homepage-comp/PopularMovies';
import UpcomingMovies from '../components/homepage-comp/UpcomingMovies';

import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <TopRatedMovies />
      <PopularMovies />
      <UpcomingMovies />
      <Footer />
    </>
  );
};

export default Home;