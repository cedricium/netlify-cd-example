import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site is hosted on GitHub and deployed using Netlify.
	</p>
        <a
          className="App-link"
          href="https://cedric.tech/blog/deploying-react-app-with-netlify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how it was done
        </a>
      </header>
    </div>
  );
}

export default App;
