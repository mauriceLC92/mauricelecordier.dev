import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// "postbuild": "purgecss --css build/static/css/*.css --content build/static/index.html build/static/js/*.js --out build/static/css",
// see the puregeCSS guides from the repo under react
const App: React.FC = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center">
      <p className='text-6xl text-gray-200 text-center hover:text-white'>Maurice Le Cordier</p>
      <p className='text-5xl mb-1 text-gray-200 text-center'>Welcome to my slice of the Web</p>
      <a href={'https://github.com/mauriceLC92'}>
        <FontAwesomeIcon icon={faGithub} color='white' size='4x' />
      </a>
      <br />
      <nav className='flex'>
        <p className='nav-item'>about |</p>
        <p className='nav-item'>notes |</p>
        <p className='nav-item'>projects |</p>
      </nav>
    </div>
  );
}

export default App;
