import React, { useState, useContext } from 'react';
import { FaShippingFast, FaExchangeAlt, FaPhoneVolume, FaCommentDots, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import ItemsCarousel from 'react-items-carousel';
import { WrapperMain, WrapperGrid, ItemsInfo, ImageSliders, Items, ItemsImages, ImgagesSlider } from './styled';
import { Container } from '../../styled';
import Button from '../../utils/Button';
import {ContextMobile } from '../../context/MobileContext';

export default () => {

  const contextMobile = useContext(ContextMobile)
  const {mobile} = contextMobile

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
        <img src="./cap-girl-7.jpeg" alt="img-girl" />
      </WrapperGrid>

      <ItemsInfo>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={mobile ? 1 : 4}
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

      <ItemsImages>
        <ItemsCarousel
          requestToChangeActive={setActiveImgIndex}
          activeItemIndex={activeImgIndex}
          numberOfCards={mobile ? 1 : 4}
          minimumPlaceholderTime={3000}
          leftChevron={<FaChevronLeft />}
          rightChevron={<FaChevronRight />}
        >
          <Items>
            <img src="./img-girl.jpeg" alt="img-girl" />
          </Items>
          <Items>
            <img src="./cap-girl-2.jpg" alt="img-girl"  />
          </Items>
          <Items>
            <img src="./cap-girl-3.jpeg" alt="img-girl"  />
          </Items>
          <Items>
            <img src="./cap-girl-6.jpeg" alt="img-girl" />
          </Items>
        </ItemsCarousel>
      </ItemsImages>

      {/* Caroulsel */}

      <ImgagesSlider>
        <Carousel>
          <ImageSliders>
            <img src="./cap-girl-3.jpeg" alt="img-girl"  />
            <img src="./cap-girl-10.jpg" alt="img-girl"  />
            <img src="./cap-girl-6.jpeg" alt="img-girl" />
          </ImageSliders>
          <ImageSliders>
            <img src="./cap-girl-2.jpg" alt="img-girl"  />
            <img src="./cap-girl-3.jpeg" alt="img-girl"  />
            <img src="./cap-girl-5.jpg" alt="img-girl" />
          </ImageSliders>
          <ImageSliders>
            <img src="./cap-girl-7.jpeg" alt="img-girl"  />
            <img src="./cap-img-4.jpg" alt="img-girl"  />
            <img src="./img-girl.jpeg" alt="img-girl" />
          </ImageSliders>
        </Carousel>
      </ImgagesSlider>
    </WrapperMain>
  );
};
