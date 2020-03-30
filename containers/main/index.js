import React from 'react';
import { FaShippingFast, FaExchangeAlt, FaPhoneVolume, FaCommentDots  } from 'react-icons/fa';
import { WrapperMain, WrapperGrid, ItemsInfo } from './styled';
import { Container } from '../../styled';
import Button from '../../utils/Button'; 

export default () => {
  return (
    <WrapperMain>
      <WrapperGrid>
        <img src="./cap-man.jpeg" alt="img-girl" />
        <div className="section-content">
          <h2>Si quieres estar a la moda estas en el lugar corretco!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            magnam maxime assumenda similique saepe illum dignissimos debitis
            quibusdam tenetur sit corrupti odit dolorem pariatur. Non tempore
            voluptas fugit modi eveniet?
          </p>
          <Button text="Ver Productos" color="secondary" />
        </div>
        <img src="./cap-girl-7.jpeg" alt="img-girl" />
      </WrapperGrid>

      <ItemsInfo>
        {/* <Container> */}
          <ul>
            <li><FaShippingFast /><span>Envio Gratis</span></li>
            <li><FaExchangeAlt /><span>Devoluciones</span></li>
            <li><FaPhoneVolume /><span>Contacto Telefonico</span></li>
            <li><FaCommentDots /><span>Centro de ayuda</span></li>
          </ul>
        {/* </Container> */}
      </ItemsInfo>
    </WrapperMain>
  );
};
