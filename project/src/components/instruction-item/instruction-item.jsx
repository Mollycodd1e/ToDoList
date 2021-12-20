import React from 'react';

function InstructionList(props) {

  const {index, item} = props;

  return (
    <li>
      <span>{index + 1}.</span>
      {item}
    </li>
  )
}

export default InstructionList;
