import React, { useState, useContext } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { FaShippingFast, FaExchangeAlt, FaPhoneVolume, FaCommentDots, FaLock, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';
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
          numberOfCards={modeMobile ? 1 : 3}
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
          </Items>
          <Items>
            <FaExchangeAlt />
            <span>Devoluciones</span>
          </Items>
          <Items>
            <FaPhoneVolume />
            <span>Contacto Telefonico</span>
          </Items>
          <Items>
            <FaCommentDots />
            <span>Centro de ayuda</span>
          </Items>
          <Items>
            <FaLock />
            <span>Sitio Seguro</span>
          </Items>
        </ItemsCarousel>
      </ItemsInfo>
  )
}

export default Services;