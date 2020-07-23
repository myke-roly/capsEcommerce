import React from 'react';
import { SubtitleStyle, Edit } from '../styled';

const Subtitle = ( { step, subtitle,showModificar, nextStep, setShowModificar }) => {
  const showTextModificar = () => {
    nextStep(Number(step));
    setShowModificar(false)
  }
  return (
    <SubtitleStyle showModificar={showModificar}>
      <h3><span>{ step }</span> { subtitle }</h3>
      {showModificar && <Edit onClick={showTextModificar}>Modificar</Edit>}
    </SubtitleStyle>
  );
};

export default Subtitle;
