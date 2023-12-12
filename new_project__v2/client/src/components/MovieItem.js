import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {useNavigate} from 'react-router-dom';
import { MOVIE_ROUTE } from '../utils/consts';

const MovieItem = ({movie}) => {
  const history = useNavigate()
  return (
    <Col md={4} className={'mt-3'} onClick={() => history(MOVIE_ROUTE + '/'+ movie.id)}>
      <Card style={{width:380, cursor:'pointer' }} border={'light'}>
        <Image width={380} height={220} src={process.env.REACT_APP_API_URL + movie.img}/>
        <div>
            <div className='fs-3 fw-bold font-monospace'>{movie.namemovie}</div>
            <div className='fs-5 font-monospace'>Цена билета: {movie.defaultprice} рублей</div>
            
        </div>
        <div className='text-black-50 fw-bold '>Есть билеты</div>
      </Card>
    </Col>
  );
};

export default MovieItem;