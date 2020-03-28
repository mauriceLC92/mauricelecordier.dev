import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// "postbuild": "purgecss --css build/static/css/*.css --content build/static/index.html build/static/js/*.js --out build/static/css",
// see the puregeCSS guides from the repo under react
const App: React.FC = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center">
      <p className='text-6xl text-gray-300 text-center'>Maurice Le Cordier</p>
      <p className='text-5xl mb-1 text-gray-300 text-center'>Welcome to my slice of the Web</p>
      <a href={'https://github.com/mauriceLC92'}>
        <FontAwesomeIcon icon={faGithub} color='white' size='4x' />
      </a>
    </div>
  );
}

export default App;
