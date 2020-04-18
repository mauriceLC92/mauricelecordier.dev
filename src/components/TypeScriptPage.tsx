import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

export const TypeScriptPage: React.SFC<Props> = ({ children }) => (
  <div className="bg-gray-900 w-screen h-screen">
    <Link className='nav-item' to="/">
      Home
      </Link>
    {children}
  </div>
)

