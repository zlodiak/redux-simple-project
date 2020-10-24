import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Link} from "react-router-dom";

import './App.css';
import Page1smart from './components/Page1/Page1smart';
import Page2smart from './components/Page2/Page2smart';
import Page3smart from './components/Page3/Page3smart';
import Page4smart from './components/Page4/Page4smart';
import Page5 from './components/Page5/Page5';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          <Link to="/page3">Page3</Link>
          <Link to="/page4">Page4</Link>
          <Link to="/page5">materialUI</Link>
        </header>
        <main>
          <Route exact path='/'       render={ () => <Page1smart/> }/>
          <Route exact path='/page1'  render={ () => <Page1smart/> }/>
          <Route exact path='/page2'  render={ () => <Page2smart/> }/>
          <Route exact path='/page3'  render={ () => <Page3smart/> }/>
          <Route exact path='/page4'  render={ () => <Page4smart/> }/>
          <Route exact path='/page5'  render={ () => <Page5/> }/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
