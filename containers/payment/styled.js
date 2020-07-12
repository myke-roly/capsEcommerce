import styled from 'styled-components';

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
    /* background: ${({ theme }) => theme.color.tercero}; */
    display: inline-block;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.tercero};
    color: ${({ theme }) => theme.color.tercero};
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

  
export const DetailAddress = styled.div`
  display: flex;
  div {
    width: 98%;
    margin-right: 2%;
  }
`;