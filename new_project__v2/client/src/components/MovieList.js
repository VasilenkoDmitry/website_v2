import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import MovieItem from './MovieItem';


const MovieList = observer(() => {
    const {movie} = useContext(Context)

  return (
    <Row className='d-flex'>
        
        {movie.movies.map(movie =>
            <MovieItem key={movie.id} movie={movie}/>
            )}
    </Row>
  );
});

export default MovieList;