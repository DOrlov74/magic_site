import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
//import '../scss/App.scss';
import Content from './content';
import Cards from './cards';
import Footer from './footer';
import UserProvider from '../components/user-provider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <Content />
          <Cards />
          <Footer/>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
