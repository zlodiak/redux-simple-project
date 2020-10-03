import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Link} from "react-router-dom";

import './App.css';
import Page1smart from './components/Page1/Page1smart';
import Page2smart from './components/Page2/Page2smart';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
        </header>
        <main>
          <Route exact path='/'       render={ () => <Page1smart/> }/>
          <Route exact path='/page1'  render={ () => <Page1smart/> }/>
          <Route exact path='/page2'  render={ () => <Page2smart/> }/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
