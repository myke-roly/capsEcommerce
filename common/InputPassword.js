import React, { useState } from 'react';
import styled from 'styled-components';
import { EyeOff, Eye } from 'react-feather';

const InputWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  margin: .5rem auto;
  border: 1px solid ${(props) => props.theme.color.default};
  input {
    margin: 0;
    border-color: transparent !important;
  }
  .btn-password {
    /* border: 1px solid green; */
    padding: .59rem 1rem;
    background: ${(props) => props.theme.color.primary};
    &:hover {
      background: ${(props) => props.theme.color.gray};
      transition: .3s;
      cursor: pointer;
    }
  }
`;

const InputPassword = ({value, onChange, id, name}) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <InputWrapper>
      <input 
        type={showInput ? 'text' : 'password'}
        onFocus={() => setShowInput(false)}
        placeholder="********"
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <div className="btn-password" onClick={() => setShowInput(p => !p)}>
        {showInput 
        ?<EyeOff size={14} /> 
        : <Eye size={14} />}
      </div>
    </InputWrapper>
  )
}

export default InputPassword;