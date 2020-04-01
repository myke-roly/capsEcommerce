import React, { useState, useContext } from 'react';
import { FaShippingFast, FaExchangeAlt, FaPhoneVolume, FaCommentDots, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import ItemsCarousel from 'react-items-carousel';
import { WrapperMain, WrapperGrid, ItemsInfo, Items, ItemsProducts, ItemProduct } from './styled';
import { Container } from '../../styled';
import Button from '../../utils/Button';
import {ContextMobile } from '../../context/MobileContext';

export default () => {

  const contextMobile = useContext(ContextMobile)
  const {modeMobile} = contextMobile

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

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

      <ItemsInfo>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={modeMobile ? 1 : 4}
          infiniteLoop={true}
          gutter={12} 
          minimumPlaceholderTime={1000}
          leftChevron={<FaChevronLeft />}
          rightChevron={<FaChevronRight />}
          chevronWidth={15}
        >
          <Items>
            <FaShippingFast />
            <span>Envio Gratis</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, minus.</p>
          </Items>
          <Items>
            <FaExchangeAlt />
            <span>Devoluciones</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, minus.</p>
          </Items>
          <Items>
            <FaPhoneVolume />
            <span>Contacto Telefonico</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, minus.</p>
          </Items>
          <Items>
            <FaCommentDots />
            <span>Centro de ayuda</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, minus.</p>
          </Items>
        </ItemsCarousel>
      </ItemsInfo>

      <ItemsProducts>
        <ItemsCarousel
          requestToChangeActive={setActiveImgIndex}
          activeItemIndex={activeImgIndex}
          numberOfCards={modeMobile ? 1 : 4}
          minimumPlaceholderTime={1000}
          leftChevron={<FaChevronLeft />}
          rightChevron={<FaChevronRight />}
        >
          <ItemProduct>
            <img src="./img-girl.jpeg" alt="img-girl" />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
            <p>$ 750.00 <small> GRATIS</small></p><Button text="Comprar" color="secondary" />
          </ItemProduct>
          <ItemProduct>
            <img src="./cap-girl-2.jpg" alt="img-girl"  />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
            <p>$ 1550.00 <small> GRATIS</small></p><Button text="Comprar" color="secondary" />
          </ItemProduct>
          <ItemProduct>
            <img src="./cap-girl-3.jpeg" alt="img-girl"  />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
            <p>$ 650.00 <small> GRATIS</small></p><Button text="Comprar" color="secondary" />
          </ItemProduct>
          <ItemProduct>
            <img src="./cap-girl-6.jpeg" alt="img-girl" />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
            <p>$ 550.00 <small> GRATIS</small></p><Button text="Comprar" color="secondary" />
          </ItemProduct>
        </ItemsCarousel>
      </ItemsProducts>
    </WrapperMain>
  );
};
