import React from "react";
import ReactApexChart from "react-apexcharts";

const Charts = ({ topRatedMovies }) => {
  const moviesRated = topRatedMovies.map((movie) => {
    return {
      name: movie.title,
      votes: movie.vote_average,
      vote_count: movie.vote_count,
    };
  });

  const topTenMovies = moviesRated.slice(0, 10);

  const series = [
    {
      name: "Votes",
      data: topTenMovies.map((movie) => movie.votes),
      movieName: topTenMovies.map((movie) => movie.name),
    },
    {
      name: "Vote Count",
      data: topTenMovies.map((movie) => movie.vote_count),
    },
  ];

  const options = {
    colors: ["#a50000", "#d80202"],

    chart: {
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "13px",
        colors: ["#fff9f2"],
      },
    },

    tooltip: {
      theme: "dark",
      shared: true,
      intersect: false,
      colors: ["#519ca5", "#00ceed"],
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " votes";
          }
          return y;
        },
      },
    },

    xaxis: {
      categories: topTenMovies.map((movie) => movie.name),

      labels: {
        show: true,
        style: {
          colors: "#ffffff",
          fontSize: "12px",
          fontFamily: "Helvetica",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },

    title: {
      text: "Top 10 Movies",
      margin: 40,
      offsetY: 20,
      style: {
        color: "#ffffff",
        fontSize: "2rem",
        fontFamily: "Helvetica",
        fontWeight: 700,
      },
    },

    legend: {
      position: "right",

      markers: {
        width: 24,
        height: 24,
        strokeWidth: 0,
        strokeColor: "#fff9f2",
        fillColors: undefined,
        radius: 2,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
        },
    },
  };

  return (
    <div className="charts-container">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default Charts;
