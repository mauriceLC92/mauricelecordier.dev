import React from 'react';
import { NavBar } from './NavBar';

interface Props {
  children: React.ReactNode
}

export const TypeScriptPage: React.SFC = () => {
  return <div>
    <NavBar />
  </div>
}

