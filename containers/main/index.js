import React, { useState, useContext } from 'react';
import { WrapperMain, WrapperGrid } from './styled';
import Button from '../../utils/Button';
import Services from '../../components/services/Services';
import ProductsHome from '../../components/productsHome/';

const Main = () => {

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
      </WrapperGrid>

      <Services />
      <ProductsHome />
    </WrapperMain>
  );
};

export default Main;