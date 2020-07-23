import styled from 'styled-components';

export const Error = styled.small`
  color: red;
  font-size: .8em;
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
    color: ${({ theme }) => theme.color.tercero};
    font-weight: 500;
    font-size: 1em;

    span {
    background: ${({ showModificar, theme }) => showModificar ? theme.color.secondary : ''};
    color: ${({ showModificar, theme }) => showModificar ? theme.color.primary : theme.color.tercero };
    display: inline-block;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.tercero};
    font-size: 1.2em;
    font-weight: bold;
    height: 30px;
    margin-right: 1rem;
    text-align: center;
    width: 30px;
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

//
// ─── PERSONAL DATA ──────────────────────────────────────────────────────────────
//

export const InfoWrapper = styled.div`
  /* background: #eeefff; */
  border-radius: 7px;
  padding: 1rem;
  width: 100%;
  p {
    font-size: 0.9em;
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
  text-align: center;
  border: 2px solid ${({ theme }) => theme.color.default};
  padding: 1rem;
  margin: .5rem 0;
  label {
    margin-left: .5rem 
  }
`;