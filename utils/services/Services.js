import React, { useState, useContext } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { FaShippingFast, FaExchangeAlt, FaPhoneVolume, FaLock, FaCommentDots, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';
import { ItemsInfo, Items } from './styled';
import {ContextMobile} from '../../context/MobileContext';

const Services = () => {

  const contextMobile = useContext(ContextMobile)
  const {modeMobile} = contextMobile
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
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
          <Items>
            <FaLock />
            <span>Sitio Seguro</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, minus.</p>
          </Items>
        </ItemsCarousel>
      </ItemsInfo>
  )
}

export default Services;