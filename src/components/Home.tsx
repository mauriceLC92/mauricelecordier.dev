import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'

export const Home: React.SFC = () => {
  return <div>
    <NavBar />
    <div className='flex flex-col items-center justify-center' style={{ minHeight: '800px' }}>
      <div className="flex flex-col items-center justify-center">
        <p className='text-6xl text-gray-100 text-center hover:text-white'>
          Maurice Le Cordier
            </p>
        <p className='text-5xl mb-1 text-gray-100 text-center'>
          Welcome to my slice of the Web
            </p>
        <a href={'https://github.com/mauriceLC92'}>
          <FontAwesomeIcon icon={faGithub} color='white' size='4x' />
        </a>
        <br />
        <br />
        <nav>
          <ul className='flex'>
            <li className='nav-item hover:text-white'>
              <Link to="/typescript">TypeScript Wall</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
}
