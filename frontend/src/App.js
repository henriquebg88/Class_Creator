import React from 'react';

import './global.css';

import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Header>Home</Header>

      <Login></Login>

      <Footer></Footer>
    </div>
  );
}

export default App;
