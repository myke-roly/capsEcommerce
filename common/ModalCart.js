import React, { useContext } from 'react'
import styled from 'styled-components';
import DetailsCart from '../components/detailsCart';
import { ContextProducts } from '../context/ProductsContext';
import { useFetchById } from '../hooks/useFetchById';
import { parseCookies } from '../libs/parseCookies';
import Link from 'next/link';
import { Trash } from 'react-feather';

const WrapperModal = styled.div`
  max-width: 350px;
  width: 350px;
  padding:.5rem;
  background: ${({ theme }) => theme.color.primary};
  box-shadow: -2px 4px 4px rgba(0,0,0,0.3) ;
  position: fixed;
  top: 7vh;
  right: 0;
  z-index: 150;
`;

export const Item = styled.div`
  border-top: 1px solid #eee;
  padding-top: .5rem;
  margin-bottom: 1.5rem;
  display: flex;
  /* flex: 1 .5 1 1; */
  justify-content: space-between;
  align-items: center;

  .content {
    width: 50%;

    a {
      margin: 0 .5em;
      color: ${({ theme }) => theme.color.default};
      font-size: .85em;
      text-transform: capitalize;
      ::-moz-selection {color: gold;background: #333;}
      ::selection {color: gold;background: #333;}

      &:hover {
        text-decoration: underline;
      }
    }
    
    .count {
      margin: 0 .5rem;
      margin-top: .7rem;

      text-align: left;

      .btn {
        border-radius: 50%;
        padding: 0 .3em;
        text-align: center;
        /* background: #eee; */
        color: #555;
        cursor: pointer;
      }

      #quantity {
        border: 1px solid #ccc;
        padding: .3em .8em;
        margin: 0 .5em;
        font-size: .9em;
      }
    }
  }

  img {
    width: 5em;
    padding: .5em;
    border-radius: 10px;
  }

  .price {
    margin: 0 .5em;
    font-size: 1em;
  }

  svg { 
    cursor: pointer;
    width: 2em;
    padding: 0 .5em;

    &:hover {
      color: ${({ theme }) => theme.color.error};
      transform: scale(1.2);
    }
  }
`; 

const ModalCart = () => {
  const context = useContext(ContextProducts);
  const { products, getProducts } = context;
  const ids = parseCookies();
  const { filterProducts } = useFetchById(products, ids);

  React.useEffect(() => {
    getProducts()
  }, []);

  return (
    <WrapperModal>
      {filterProducts.length !== 0 && (
          filterProducts.map(item => (
            <Item key={item._id}>
              <img width={{width: '50px'}} src={item.images ? item.images[0] : ''} alt={item.title} />
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
              {/* <p className="price">{item.price}{getTotalPrice(item.price)}</p> */}
              <Trash size={17} onClick={() => deleteItemToCookies(item._id)} />
            </Item>
          ))
        )}
    </WrapperModal>
  )
}

export default ModalCart;