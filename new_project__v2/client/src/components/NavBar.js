import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from '../utils/consts'
import {Button, Container} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut=()=>{
      user.setUser({})
      user.setIsAuth(false)
    }
  return (
    <Navbar bg="dark" data-bs-theme="dark">  
    <Container>
        <NavLink style ={{color:'white', textDecoration: 'none'}} className= 'fs-4 fw-bold font-monospace'to ={MAIN_ROUTE}>Кино в Ростове-на-Дону</NavLink>
          {user.isAuth ?
          <Nav className="ms-auto " style={{color:'white'}}>
            <Button
             variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>
              Админ панель
              </Button>
            <Button
             variant={"outline-light"}className='ms-4' onClick={() => logOut()}>
              Выйти
             </Button>
          </Nav> 
          : 
          <Nav className="ms-auto" style={{color:'white'}}>
            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
            
          </Nav> 
          }
          </Container>     
          
      </Navbar>
  );
});

export default NavBar;