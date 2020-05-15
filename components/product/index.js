import React, { useContext } from 'react';
import { WrapperProduct, Images, Detail, Section } from './styled';
import Button from '../../utils/Button';
import { ContextMobile } from '../../context/MobileContext';

const Product = ({ data }) => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <WrapperProduct modeMobile={modeMobile}>
      <Images>
        <img src={data.images[0]} alt="img" />
      </Images>
      <Detail>
        <h2>{data.title}</h2>
        <Section>
          <h4 className="price">${data.price}.00</h4>
        </Section>
        <hr/>
        <Section>
          <h4>Colores: </h4>
          <p>
            {data.colors.map((color, index) => (
              <span key={index} className="color" style={{ background: color }}></span>
            ))}
          </p>
        </Section>
        <Section>
          <h4>Talle: </h4>
          <p>{data.talles}</p>
        </Section>
        <Section>
          <h4>Cantidad:</h4>
          <input type="number" placeholder="1" />
        </Section>
        <Button text="Agregar al carrito" color="default" />
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
