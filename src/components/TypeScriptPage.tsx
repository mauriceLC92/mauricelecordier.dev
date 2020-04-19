import React from 'react';
import { NavBar } from './NavBar';

interface Props {
  children: React.ReactNode
}

export const TypeScriptPage: React.SFC<Props> = ({ children }) => (
  <div className="bg-gray-900 w-screen h-screen">
      <NavBar />
    {children}
  </div>
)

