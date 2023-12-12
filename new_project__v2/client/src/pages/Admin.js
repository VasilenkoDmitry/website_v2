import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateCinema from '../components/modals/CreateCinema';
import CreateMovie from '../components/modals/CreateMovie';
import { Context } from '..';

const Admin = () => {
  const {user}=useContext(Context)
  const [movieVisible,setMovieVisible]= useState(false)
  const [cinemaVisible,setCinemaVisible]= useState(false)
  return (
    <Container className="d-flex flex-column">
      
      <Button variant='outline-dark' className='mt-2 p-2' onClick={()=>setMovieVisible(true)}>Добавить фильм</Button>
      <Button variant='outline-dark' className='mt-2 p-2' onClick={()=>setCinemaVisible(true)}>Добавить кинотеатр</Button>
      <CreateCinema show={cinemaVisible} onHide={()=>setCinemaVisible(false)}/>
      <CreateMovie show={movieVisible} onHide={()=>setMovieVisible(false)}/>
    </Container>
  );
};

export default Admin;
//<CreateCinema show={cinemaVisible} onHide={()=>setCinemaVisible(false)}/>
//<Button variant='outline-dark' className='mt-2 p-2' onClick={()=>setCinemaVisible(true)}>Добавить кинотеатр</Button>