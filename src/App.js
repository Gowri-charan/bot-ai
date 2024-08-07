import React from 'react';
import Header from './components/Header';
import Conversations from './components/Conversations';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Conversations />
        <Chat />
      </div>
    </div>
  );
};

export default App;