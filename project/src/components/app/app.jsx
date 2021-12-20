import React from 'react';
import Main from '../main/main.jsx';
import {Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
