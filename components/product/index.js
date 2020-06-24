import React, { useState, useContext, useRef, useCallback, useEffect } from 'react';
import { WrapperProduct, Images, Detail, Section } from './styled';
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
  const refColor = useRef(null);
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
  
  const selectColor = color => {
    refColor.current = color;
  }

  return (
    <>
      {modal && <ModalCart closeModal={closeModal} />}
      <WrapperProduct modeMobile={modeMobile}>
        <Images>
          <img src={data.images[0]} alt="img" />
        </Images>
        <Detail>
          <Title title={data.title} />
          <Section>
            <h4 className="price">${data.price}.00</h4>
          </Section>
          <hr />
          <Section>
            <h4>Colores: </h4>
            <p>
              {data.colors.map((color, index) => (
                <span
                  key={index}
                  className="color"
                  id={color}
                  style={{ background: color }}
                  onClick={(e) => selectColor(e.target.id)}
                ></span>
              ))}
            </p>
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
          <Button
            size="block"
            text="Agregar al carrito"
            color="tercero"
            onClick={() => addToCart(data._id, quantity, refColor.current, data.price, totalPriceProduct)}
          />
          <Section>
            <span>
              <h4>Descripcion: </h4>
              <p className="description">{data.description}</p>
            </span>
          </Section>
        </Detail>
      </WrapperProduct>
    </>
  );
};

export default React.memo(Product);
