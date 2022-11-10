import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import Home from "./pages/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Search from "./components/search/Search";
import StatsPage from "./pages/StatsPage";

import './sass/main.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="search" element={<Search />} />
          <Route path="stats" element={<StatsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
