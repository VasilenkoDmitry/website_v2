import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieList from '../components/MovieList';
import { Context } from '..';
import { fetchMovies } from '../http/movieAPI';
import { observer } from 'mobx-react-lite';

const Main = observer(() => {
  const {movie} = useContext(Context)

  useEffect(()=>{
    fetchMovies().then(data => movie.setMovies(data))
  },[])

  return (
    <Container>
      <Row className='mt-5 pt-5 mb-5 pb-5'>
        <div>
          1-31 декабря
        </div>
        <Col md={12}>
          <MovieList/>
          
        
        </Col>
      </Row>
      
    </Container>
  );
});

export default Main;