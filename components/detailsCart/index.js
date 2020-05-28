import React from 'react';
import { Items, Item, Detail, WrapperDetails } from './styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Trash } from 'react-feather';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import Button from '../../common/Button';

const DetailsCart = ({ data }) => {
  const totalPrice = React.useRef(0);
  const router = useRouter();

  function getTotalPrice(priceItem) {
    totalPrice.current += priceItem; 
  }

  function deleteItemToCookies(id) {
    const items = Cookie.getJSON('IDItem');
    const updateItems = items.filter(item => id !== item.id);
    Cookie.set('IDItem', updateItems);
  }

  return (
    <WrapperDetails>
      <Items>
        {data.length !== 0 && (
          data.map(item => (
            <Item key={item._id}>
              <img src={item.images ? item.images[0] : ''} alt={item.title} />
              <div className="content">
                <Link href={`/producto/[id]/`} as={`/producto/${item._id}`}>
                  <a>{item.title}</a>
                </Link>
                <p className="count">
                  <span className="btn">-</span>
                  <span id="quantity">1</span>
                  <span className="btn">+</span>
                </p>
              </div>
              <p className="price">{item.price}{getTotalPrice(item.price)}</p>
              <Trash size={17} onClick={() => deleteItemToCookies(item._id)} />
            </Item>
          ))
        )}
      </Items>
      <Detail>
        <div className="descuento">
          <p>¿Tenes un código de descuento?</p>
          <input type="text" placeholder="Codigo" />
          <button>Aplicar</button>
        </div>
        <div className="summary">
          <p className="subtotal">Subtotal <span>{totalPrice.current}</span></p>
          <p className="total">Total <span>{totalPrice.current}</span></p>
          <hr />
          <Button color="default" text="Finalizar Compra" /><br />
          <Button color="dark" text="Seguir comprando" onClick={() => router.push('/productos')} />
        </div>
      </Detail>
    </WrapperDetails>
  )
}

DetailsCart.propTypes = {
  data: PropTypes.array,
  totalPrice: PropTypes.number
}

export default DetailsCart
