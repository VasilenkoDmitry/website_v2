import React, { useContext, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { createCinemas } from '../../http/cinemaAPI';

const CreateCinema = ({show,onHide}) => {
    
    const[namecinema,setNamecinema]=useState('')
    const[addres,setAddres]=useState('')
    const[seance_1,setSeance_1]=useState('')
    const[seance_2,setSeance_2]=useState('')
    const[seance_3,setSeance_3]=useState('')

    const addCinema =()=>{
      const formData = new FormData()
      formData.append('namecinema',namecinema)
      formData.append('addres',addres)
      formData.append('seance_1',seance_1)
      formData.append('seance_2',seance_2)
      formData.append('seance_3',seance_3)
      createCinemas(formData).then(data=>onHide())
    }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить кинотеарт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Control
            value={namecinema}
            onChange={e=>setNamecinema(e.target.value)}
            className='mt-3'
            placeholder='Введите название кинотеатра'
            />
            <Form.Control
            value={addres}
            onChange={e=>setAddres(e.target.value)}
            className='mt-3'
            placeholder='Введите адрес кинотеатра'
            />
            <Form.Control
            value={seance_3}
            onChange={e=>setSeance_3(e.target.value)}
            className='mt-3'
            placeholder='Введите время начала первого сеанса'
            />
            <Form.Control
            value={seance_2}
            onChange={e=>setSeance_2(e.target.value)}
            className='mt-3'
            placeholder='Введите время начала второго сеанса'
            />
            <Form.Control
            value={seance_1}
            onChange={e=>setSeance_1(e.target.value)}
            className='mt-3'
            placeholder='Введите время начала третьего сеанса'
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addCinema}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCinema;