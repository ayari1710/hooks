import React from "react";
import MovieCard from "./MovieCard";
import {Link}from 'react-router-dom'
const MovieList = ({movies,inputsearch,rating,AddMovie }) => {
  return (
    <div className="movieList">
     { movies.filter((el)=>
     el.title.toUpperCase().includes(inputsearch.toUpperCase())
     &&
       el.rating >= rating
     ).map(
       (el)=><Link to={{pathname:`/bandeannonce/${el.id}`,state:{el:el}}}  key={el.id} style={{margin:"2%"}}> <MovieCard movie={el} />
 </Link>       
     )
     }
      <MovieCard  className="addMovieBtn" AddMovie={AddMovie} addCard={true}/>
    </div>


     

  );
};

export default MovieList;
