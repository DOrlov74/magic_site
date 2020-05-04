import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
//import '../scss/App.scss';
import Content from './content';
import Cards from './cards';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
        <Cards />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
