import React from 'react';
import './App.css';
import githubLink from './GitHub-Mark-Light-32px.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Maurice Le Cordier</h1>
        <h3>Welcome to my slice of the Web</h3>
        <a href={'https://github.com/mauriceLC92'}>
        <img src={githubLink} alt="github link"  />
        </a>
      </header>
    </div>
  );
}

export default App;
