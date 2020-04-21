import React from 'react';

import './global.css';

import Header from './Pages/Header';
import Footer from './Pages/Footer';

import Routes from './routes';

function App() {
  return (
    <div>
      <Header>Home</Header>
        <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
