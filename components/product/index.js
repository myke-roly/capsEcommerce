import React, { useContext, useState, useEffect } from 'react';
import { WrapperProduct, Images, Detail, Section } from './styled';
import Button from '../../utils/Button';
import { ContextMobile } from '../../context/MobileContext';
import Cookie from 'js-cookie';
import Title from '../../utils/Title';
import { parseCookies } from '../../libs/parseCookies';

const Product = ({ data }) => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  function addItemToCart() {
    let newItems = [];
    newItems.push({id: data._id});
    const items = Cookie.getJSON('IDItem')
    if(items) {
      items.filter(item => item.id !== data._id ? newItems.push(item) : null);
      console.log(items);
    }
    Cookie.set('IDItem', newItems);
  }

  return (
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
                style={{ background: color }}
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
            <span>-</span>
            <span className="quantity">1</span>
            <span>+</span>
          </p>
        </Section>
        <Button
          text="Agregar al carrito"
          color="tercero"
          onClick={addItemToCart}
        />
        <Section>
          <span>
            <h4>Descripcion: </h4>
            <p className="description">{data.description}</p>
          </span>
        </Section>
      </Detail>
    </WrapperProduct>
  );
};

export default Product;
