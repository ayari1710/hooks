import Footer from "./Components/Footer";
import MovieList from "./Components/MovieList";
import React, { useState } from "react";
import listMovies from "./MovieData";
import FilterByName from "./Components/FilterByName";
import Rating from './Components/Rating'

const Movieapp = () => {
  const [movies, setMovies] = useState(listMovies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputsearch, setinputsearch] = useState("")
  const [rating, setRating] = useState(1);

  const AddMovie  = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="movieApp">
      <div className="filter">
      <Rating  filterRate={true }rating={rating } setRating={setRating} />
      <FilterByName     inputsearch={inputsearch}  setinputsearch={setinputsearch}/>
      </div>
      
      <MovieList
        movies={movies}
        inputsearch={inputsearch}
        rating={rating }
        AddMovie={AddMovie}
      />

      <Footer />
    </div>
  );
};

export default Movieapp;
