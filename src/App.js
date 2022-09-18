import React from 'react';
import './App.scss'; 
import Header from './components/Header';
import WrapInfo from './components/Wrapinfo';

function App() {
  return (
    <div className='wrap-main'>
      <Header/>
      <WrapInfo />
    </div>
  );
}

export default App;
