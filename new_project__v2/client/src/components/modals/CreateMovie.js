import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createMovie } from '../../http/movieAPI';

const CreateMovie = ({show,onHide}) => {
  const[namemovie,setNamemovie]=useState('')
  const[defaultprice,setDefaultprice]=useState(0)
  const[img,setImg]=useState(null)
  
  const selectFile = e =>{
    setImg(e.target.files[0])
  }
  const addMovie =()=>{
    const formData = new FormData()
    formData.append('namemovie',namemovie)
    formData.append('defaultprice',`${defaultprice}`)
    formData.append('img',img)
    createMovie(formData).then(data=>onHide())
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
          Добавить фильм
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={namemovie}
            onChange={e=>setNamemovie(e.target.value)}
            className='mt-3'
            placeholder='Введите название фильма'
            />
            <Form.Control
            value={defaultprice}
            onChange={e=>setDefaultprice(e.target.value)}
            className='mt-3'
            placeholder='Введите стоимость билета'
            type='number'
            />
            <Form.Control
            className='mt-3'
            type='file'
            onChange={selectFile}
            />
            <hr/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addMovie}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateMovie;