import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

//components
import Home from './Pages/Home'
import Redirect from './Pages/Redirect'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (<Home />)} />
        <Route path="/redirect" render={() => (<Redirect />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
