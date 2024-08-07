import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Bot AI</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Conversations</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
        </ul>
      </nav>
      <button className="toggle-button" onClick={() => console.log('Toggle button clicked!')}>
        Toggle Light/Dark Mode
      </button>
    </header>
  );
};

export default Header;