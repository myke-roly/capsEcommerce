import React from 'react';
import { SubtitleStyle, Edit } from '../styled';
import { Edit as IconEdit } from 'react-feather';

const Subtitle = ( { step, subtitle,showModificar, nextStep, setShowModificar, Icon }) => {
  const showTextModificar = () => {
    nextStep(Number(step));
    setShowModificar(false)
  }
  return (
    <SubtitleStyle showModificar={showModificar}>
      <h3><span>{ step }</span><Icon size="14" /> { subtitle }</h3>
      {showModificar && <Edit onClick={showTextModificar}><small>Modificar</small> <IconEdit size="14" /></Edit>}
    </SubtitleStyle>
  );
};

export default Subtitle;
