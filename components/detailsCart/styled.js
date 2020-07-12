import styled from 'styled-components';

export const WrapperDetails = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  grid-gap: 2rem;
  justify-content: space-between;

  @media (max-width: 760px) {
    display: block;
    font-size: 14px;
  }
`;

export const Items = styled.section`
  width: 100%;
  
  button {
    float: right;
    margin-bottom: 2rem;
  }
`;

export const Item = styled.div`
  border-top: 1px solid #eee;
  padding: 1rem;
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

export const Detail = styled.section`
  clear: both;
  p {
    color: ${({ theme }) => theme.color.dark};
    margin: .5rem 0;
  }

  .descuento {
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 1em 2rem;

    p {
      text-align: center;
      padding-bottom: .5rem;
    }
    
    input, button {
      padding: .8em;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.color.gray};
    }

    input {
      width: 60%;
      border-color: #ccc;
    }

    button {
      width: 36%;
      background: transparent;
      border-color: ${({ theme }) => theme.color.dark};
      color: 1px solid ${({ theme }) => theme.color.dark};
      cursor: pointer;
      margin-left: 2%;
    }
  }

  .summary {
    border-radius: 5px;
    background: ${({ theme }) => theme.color.primary};
    padding: 1.5rem;
    margin-top: 1.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, .2);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, .2);

    .desc {
      font-size: .9em;
      opacity: .8;
      color: ${({ theme }) => theme.color.secondary};
    }

    .subtotal {
      font-size: .9em;
      opacity: .8;
    }

    .total {
      font-weight: 600;
      font-size: 1.4em;
      margin: 1rem 0;
    }

    span {
      float: right;
    }

    button {
      margin: .8rem 0;
    }
    .back-to-products {
      text-align: center;
      color: ${({ theme }) => theme.color.default};
      border-bottom: 1px solid;
    }
  }
`;
