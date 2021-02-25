import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movies,inputsearch,rating,AddMovie }) => {
  return (
    <div className="movieList">
     { movies.filter((el)=>
     el.title.toUpperCase().includes(inputsearch.toUpperCase())
     &&
       el.rating >= rating
     ).map(
       (el)=> <MovieCard movie={el} key={el.id} />
       
     )
     }
      <MovieCard  className="addMovieBtn" AddMovie={AddMovie} addCard={true}/>
    </div>


     

  );
};

export default MovieList;
