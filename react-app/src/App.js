import React from 'react';
import MainGameContainer from './components/MainGameContainer';
import './App.css';
import Header from './components/Header';

const App = () => (
  <div className='container-fluid mainContainer'>
    <Header></Header>
    <MainGameContainer />
  </div>
);

export default App;
