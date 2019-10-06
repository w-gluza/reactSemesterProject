import React from 'react';
import './main.scss';

// components imports
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <header>{/* <h1> {this.props.t('header.h1')}</h1> */}</header>
    </>
  );
}

export default App;
