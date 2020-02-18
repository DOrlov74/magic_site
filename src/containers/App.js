import React from 'react';
import Header from './header';
//import '../scss/App.scss';
import Content from './content';
import Footer from './footer';
import Appointment from './appointment';

function App() {
  return (
    <div className="App">
      <Header />
      <Appointment />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
