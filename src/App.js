import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import InitPage from './Components/InitPage'
import About from './Components/About'
import Test from './Components/Test'

function App() {
  let stuff = {
    something:'Hello world!'
  }
  return (
    <BrowserRouter>
      <Route exact path = '/' component={() => <InitPage stuff={stuff}/>}/>
      <Route exact path = '/about' component={ About }/>
      <Route exact path = '/test' component={ Test }/>
    </BrowserRouter>
  );
}

export default App;
