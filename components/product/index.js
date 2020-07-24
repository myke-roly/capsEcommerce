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
  const [error, setError] = useState('');
  
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
        onClick={(e) => {
          setSelectColor(e.target.id)
          setError('')
        }}
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

  function addProduct() {
    if(!selectedColor) {
      setError('Tienes que elegir un color');
      return;
    }
    addToCart(data._id, data.title, data.images[0], quantity, data.talle, selectedColor, data.price, totalPriceProduct)
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
            <small>{error && error}</small>
          </Section>
          <Section>
            <h4>Talle: </h4>
            <p>{data.talles}</p>
          </Section>
          <Section>
            <h4>Cantidad:</h4>
            <section className="quantity">
              <span onClick={decrementQuantity}>-</span>
              <span>{quantity}</span>
              <span onClick={incrementQuantity}>+</span>
            </section>
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
            onClick={addProduct}
          />
        </Detail>
      </WrapperProduct>
    </>
  );
};

export default React.memo(Product);
