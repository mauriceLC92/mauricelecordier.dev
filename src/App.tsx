import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { TypeScriptPage } from './components/TypeScriptPage';
import { NavBar } from './components/NavBar';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/typescript-notes' component={TypeScriptPage} />
    </Switch>
  );
}

const Home: React.SFC = () => {
  return (
    <div>
      <NavBar />
    <div className="h-screen flex flex-col items-center justify-center">
      <p className='text-6xl text-gray-50 text-center hover:text-white'>Maurice Le Cordier</p>
      <p className='text-5xl mb-1 text-gray-100 text-center'>Welcome to my slice of the Web</p>
      <a href={'https://github.com/mauriceLC92'}>
        <FontAwesomeIcon icon={faGithub} color='white' size='4x' />
      </a>
      <br />
      <br />
        <nav>
          <ul className='flex'>s
            <li className='nav-item'>
              <Link to="/typescript-notes">typeScript notes</Link>
            </li>
          </ul>
        </nav>
    </div>
    </div>
  )
}

export default App;
