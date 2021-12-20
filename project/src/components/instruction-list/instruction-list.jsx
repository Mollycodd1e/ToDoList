import React from 'react';
import {InstructionsList} from '../../const';
import InstructionItem from '../instruction-item/instruction-item.jsx';

function InstructionList() {
  return (
    <ul className="main-page__instruction-list">
      {InstructionsList.map((item, index) =>
        <InstructionItem key={index} index={index} item={item} />
      )}
    </ul>
  )
}

export default InstructionList;
