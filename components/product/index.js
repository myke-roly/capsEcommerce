import React, { useState, useContext, useRef, useCallback, useEffect } from 'react';
import { WrapperProduct, Images, MainImage, Carrousel, Detail, Section } from './styled';
import Button from '../../common/Button';
import { ContextMobile } from '../../context/MobileContext';
import Title from '../../common/Title';
import ModalCart from '../../common/ModalCart';
import { ContextProducts } from '../../context/';
import { ToggleLeft } from 'react-feather';

const Product = ({ data }) => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const contextProducts = useContext(ContextProducts);
  const {  modal, closeModal, addToCart } = contextProducts;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectColor] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [totalPriceProduct, setTotalPriceProduct] = useState(data.price);
  
  useEffect(() => {
    setTotalPriceProduct(data.price * quantity);
  }, [quantity])

  const incrementQuantity = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const decrementQuantity = useCallback(() => {
    if(quantity === 1) return;
    setQuantity(quantity - 1);
  }, [quantity]);

  function showColors() {
    return data.colors.map((color, index) => (
      <span
        key={index}
        className={`color ${color === selectedColor && 'color-selected'}`}
        id={color}
        style={{ background: color }}
        onClick={(e) => setSelectColor(e.target.id)}
      ></span>
    ))
  }

  function showImages() {
    return data.images.map((image, index) => (
      <figure key={index} onClick={() => setMainImage(index)}>
        <img src={image} alt="gorra" />
      </figure>
    ))
  }

  return (
    <>
      {modal && <ModalCart closeModal={closeModal} />}
      <WrapperProduct modeMobile={modeMobile}>
        <Images>
          <MainImage><img onClick={(e) => e.target.classList.toggle('scale') } src={data.images[mainImage]} alt="Gorra" /></MainImage>
          <Carrousel>{showImages()}</Carrousel>
        </Images>
        <Detail>
          <Title title={data.title} />
          <h4 className="price">$ {data.price}.00</h4>
          <Section>
            <h4>Colores: </h4>
            <p>{showColors()}</p>
          </Section>
          <Section>
            <h4>Talle: </h4>
            <p>{data.talles}</p>
          </Section>
          <Section>
            <h4>Cantidad:</h4>
            <p>
              <span onClick={decrementQuantity}>-</span>
              <span className="quantity">{quantity}</span>
              <span onClick={incrementQuantity}>+</span>
            </p>
          </Section>
          <Section>
            <span>
              <h4>Descripcion: </h4>
              <p className="description">{data.description}</p>
            </span>
          </Section>
          <Button
            size="block"
            text="Agregar al carrito"
            color="secondary"
            onClick={() => addToCart(data._id, quantity, selectedColor, data.price, totalPriceProduct)}
          />
        </Detail>
      </WrapperProduct>
    </>
  );
};

export default React.memo(Product);
