import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import ModalAddMovie from './AddMovie'

const MovieCard = ({ movie ,AddMovie, addCard}) => {
  console.log(addCard);
  
  return (
  
addCard ?
      <Card className="movieCard">
        <Card.Body >
          <Card.Title className="addMovieBtn">
            <ModalAddMovie AddMovie={AddMovie} />
          </Card.Title>
        </Card.Body>
      </Card>
      :
      <Card className="movieCard">
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
          <Rating filterRate={false} movieRating={movie.rating} />
        </Card.Body>
      </Card>
    )
}

export default MovieCard