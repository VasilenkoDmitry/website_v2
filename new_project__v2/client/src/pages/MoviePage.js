import React, { useContext, useEffect,useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Nav, NavLink, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Context } from '..';
import { LOGIN_ROUTE } from '../utils/consts';
import context from 'react-bootstrap/esm/AccordionContext';
import { observer } from 'mobx-react-lite';
import { fetchCinemas } from '../http/cinemaAPI';


const MoviePage = observer(() => {
  const {user} = useContext(Context)
  const {movie}=useContext(Context)
  const{cinema}=useContext(Context)
  
  useEffect(()=>{
    fetchCinemas().then(data => movie.setCinemas(data))
  },[])
  
  return (
    
    <Container>
    {user.isAuth ?
    <Nav className='d-flex justify-content-center align-items-center mt-5 fs-1 fw-bold font-monospace'>
      
    <div className='mt-5 fs-1 fw-bold font-monospace'>Расписание</div>
    
  <Col md={12} className='d-flex justify-content-center align-items-center mt-5'>  
      <Card style={{width:1200}}>
      <div >
      {movie.cinemas.map(cinema =>
      <ListGroup.Item className='fs-2 ms-4' key={cinema.id}>
        {cinema.namecinema} <Button variant='btn btn-outline-dark' className='fs-5 fw-bold font-monospace float-end ms-4 me-3 mt-3' > {cinema.seance_1}</Button>
      <Button variant='btn btn-outline-dark' className='fs-5 fw-bold font-monospace float-end ms-4 mt-3'>{cinema.seance_2}</Button>
      <Button variant='btn btn-outline-dark' className='fs-5 fw-bold font-monospace float-end ms-4 mt-3'>{cinema.seance_3}</Button>
      <a style ={{color:'black', textDecoration: 'none'}} className='fs-5  float-end mt-4'>Время начала сеанса:</a>
        <h1 className='fs-6 font-monospace '>{cinema.addres}</h1>
        
      </ListGroup.Item>
)}
      
      </div>
      </Card> 
      </Col> 
      
      </Nav>
      :
      <Nav className='d-flex justify-content-center align-items-center mt-5 fs-1  font-monospace'>
<h1 className='fw-bold'>Для доступа пройдите авторизацию!</h1>

      </Nav>
}
      </Container>
    
  );
});

export default MoviePage;