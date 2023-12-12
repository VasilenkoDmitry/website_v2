import { observer } from 'mobx-react-lite';
import React from 'react';
import { Image, NavLink } from 'react-bootstrap';
import geo from '../assets/geo.png'
const Footer = observer(() => {

  return (
    
    <body class="d-flex flex-column fixed-bottom">
  <footer id="sticky-footer" class="flex-shrink-0 py-3 bg-dark text-white-50">

    <div class="container">
      <h7>&copy; 2023
        <h7 class="ps-5 ">
          Пользовательское соглашение
        </h7>
        
        <h7 className='float-end'>
          
        
        <a style ={{color:'gray'}} href='https://yandex.ru/maps/geo/rostov_na_donu/53166035/?ll=39.749770%2C47.213300&z=12.23'>
        <Image src={geo}/>
          Ростов-на-Дону</a>
        </h7>
        
      </h7>
    </div>
    
  </footer>
</body>

   
  );
});

export default Footer;