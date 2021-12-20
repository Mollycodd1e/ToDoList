import React, {useState} from 'react';
import Header from '../header/header.jsx';
import MainList from '../main-list/main-list.jsx';
import MainInstruction from '../main-instruction/main-instruction.jsx';

function Main() {

  const [instruction, setInstruction] = useState(false);

  return (
    <div className="body-wrapper">
      <Header instruction={instruction} instructionHandler={setInstruction}/>
      <main className="main-page">
      {instruction === false ?
        <MainList />
        : <MainInstruction />
      }
      </main>
    </div>
  )
}

export default Main;
