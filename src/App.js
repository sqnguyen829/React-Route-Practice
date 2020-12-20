import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import InitPage from './Components/InitPage'
import About from './Components/About'
import Test from './Components/Test'
import DogList from './Containers/DogList'
import DogDetails from './Components/DogDetails'
import { useHistory } from 'react-router'
import ClassCompTest from './Components/ClassCompTest'

function App() {
  let stuff = {
    something:'Hello world!'
  }

  let history = useHistory()

  return (
    <BrowserRouter>
      <Route exact path = '/' component={ () => <InitPage stuff={stuff} /> }/>
      <Route exact path = '/about' component={ About }/>
      <Route exact path = '/test' component={ Test }/>
      <Route exact path = '/dogs' component={ () => <DogList history = { history }/>}/>
      <Route exact path = '/dogs/:id' component={ DogDetails } />
      <Route exact path = '/classTesting' component={ ClassCompTest } />
    </BrowserRouter>
  );
}

export default App;
