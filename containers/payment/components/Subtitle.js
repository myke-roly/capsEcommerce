import React from 'react';
import { SubtitleStyle } from '../styled';

const Subtitle = ( { step, subtitle,showModificar, nextStep, setShowModificar }) => {
  const handleClick = () => {
    nextStep(Number(step));
    setShowModificar(false)
  }
  return (
    <SubtitleStyle>
      <h3><span>{ step }</span> { subtitle }</h3>
      {showModificar && <p onClick={handleClick}>Modificar</p>}
    </SubtitleStyle>
  );
};

export default Subtitle;
