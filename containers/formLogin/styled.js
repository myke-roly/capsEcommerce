import styled from 'styled-components';

export const Form = styled.main`
  background: url('./cap-girl-7.jpeg') no-repeat center center/cover;
  min-height: 90vh;
  padding: 2rem 0;
  
  & > div {
    display: ${(props) => (props.modeMobile ? 'block' : 'flex')};

    form {
      opacity: .9;
    }
  }
`;