import React from 'react';
import { SubtitleStyle } from '../styled';

const Subtitle = ( { option, subtitle,showModificar, setShowForm, setShowModificar }) => {
  const handleClick = () => {
    setShowForm(true);
    setShowModificar(false)
  }
  return (
    <SubtitleStyle>
      <h3><span>{ option }</span> { subtitle }</h3>
      {showModificar && <p onClick={handleClick}>Modificar</p>}
    </SubtitleStyle>
  );
};

export default Subtitle;
