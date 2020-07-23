import styled from 'styled-components';

export const Error = styled.small`
  color: red;
  font-size: .8em;
`;

export const PaymentWrapperStyles = styled.div`
  padding-bottom: 2rem;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const SubtitleStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eeefff;

  h3 {
    color: ${({ theme }) => theme.color.dark};
    font-weight: 400;
    font-size: .85em;

    span {
      background: ${({ showModificar, theme }) => showModificar ? theme.color.default : ''};
      color: ${({ showModificar, theme }) => showModificar ? theme.color.primary : theme.color.default };
      display: inline-block;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.color.default};
      font-size: 1.2em;
      font-weight: bold;
      height: 25px;
      margin-right: .7rem;
      text-align: center;
      width: 25px;
    }
  }

  p {
    color: ${({ theme }) => theme.color.secondary};
    font-size: .9em;
  }
`;

export const Edit = styled.p`
  cursor: pointer;
`;

export const DataStyles = styled.div`
  margin: 1rem auto;
  /* border-left: 2px solid #ccc; */
  width: auto;
  padding: .5rem;
  padding-left: 1rem;
  p{
    font-size: .85em;
    color: ${({ theme }) => theme.color.default};
    font-family: Tahoma;
    letter-spacing: .7px;
    line-height: 1.7;
  }
`;

//
// ─── PERSONAL DATA ──────────────────────────────────────────────────────────────
//

export const InfoWrapper = styled.div`
  /* background: #eeefff; */
  border-radius: 7px;
  padding: 1rem;
  width: 100%;
  p {
    font-size: 0.8em;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.color.default};
  }
  .CP {
    display: block;
    width: 100px;
  }
`;

export const Input = styled.div`
  margin: 1rem 0;
  label {
    font-size: 0.7em;
  }
  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: inline-block;
    padding: 0.7rem 1rem;
    width: 100%;
  }
  .phone {
    display: flex;
    .code {
      width: 50px;
      margin-right: 1rem;
    }
  }
`;
//
// ─── DETALLES DE ENVIO ──────────────────────────────────────────────────────────
//

  
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: block;
    width: 49%;
    select {
      width: 100%;
    }
  }
`;

//
// ─── METHOD PAYMENT ─────────────────────────────────────────────────────────────
//

export const MethodsPaymentStyle = styled.div`
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cecece;
    padding: 1rem;
    margin: .7rem 0;
    label {
      margin-left: .5rem 
    }
    img {
      margin-left: .5rem; 
    }
  }
  .whatsapp {
    width: 25px;
  }
  .mercadoPago {
    width: 60px;
  }
  button {
    margin-top: 1.5rem;
  }
`;