import React from 'react';
import Header from './header';
//import '../scss/App.scss';
import Content from './content';
import Cards from './cards';
//import Appointment from './appointment';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Cards />
    </div>
  );
}

export default App;
