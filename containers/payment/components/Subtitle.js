import React from 'react';
import { SubtitleStyle } from '../styled';

const Subtitle = ( { option, subtitle }) => {
  return (
    <SubtitleStyle>
      <h3><span>{ option }</span> { subtitle }</h3>
      <p>Modificar</p>
    </SubtitleStyle>
  );
};

export default Subtitle;
