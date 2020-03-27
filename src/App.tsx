import React from 'react';
// @ts-ignore
import githubLink from './GitHub-Mark-Light-32px.png';
// Todo - Swap out the github image link for a proper icon
// "postbuild": "purgecss --css build/static/css/*.css --content build/static/index.html build/static/js/*.js --out build/static/css",
// see the puregeCSS guides from the repo under react
const App: React.FC = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center">
      <p className='text-6xl text-gray-300'>Maurice Le Cordier</p>
      <p className='text-5xl mb-1 text-gray-300'>Welcome to my slice of the Web</p>
      <a href={'https://github.com/mauriceLC92'}>
        <img src={githubLink} alt="github link" />
      </a>
    </div>
  );
}

export default App;
