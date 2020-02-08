import React from 'react';
import Header from './header';
import '../scss/App.scss';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
