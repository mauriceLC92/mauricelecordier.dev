import React from 'react';
import { NavBar } from './NavBar';
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

export const TypeScriptPage: React.FunctionComponent = () => {
  return <>
    <NavBar />
    <Wall>
      <WallPiece background='bg-gray-700'>
        You should make sure everything has a type, inferred when possible.
    </WallPiece>
      <WallPieceTooltip background='bg-orange-800' key={'typeLiteral'}>
        Type literal
    </WallPieceTooltip>
    </Wall>
  </>
}

interface WallPieceProps {
  children: React.ReactNode,
  background: string,
  key?: string, // temporary for now
}

/**
 * The idea here is to pass in a random background color and random size for the
 * component to expand in the wall 
 */
const WallPiece: React.FunctionComponent<WallPieceProps> = ({ children, background }) => {
  return <>
    <div className={`text-gray-200 px-3 py-2 mr-2 mb-2 ${background} rounded-md w-auto inline-block`}>
      {children}
    </div>
  </>
}

const WallPieceTooltip: React.FunctionComponent<WallPieceProps> = ({ children, background, key }) => {
  return <>
    <div data-tip data-for={key} className={`text-gray-200 px-3 py-2 mr-2 ${background} rounded-md w-auto inline-block`}>
      {children}
    </div>
    <ReactTooltip id={key} type="warning" effect="solid" className='bg-orange-800' backgroundColor='bg-organge-800'>
      <span>A type that represents a single value and nothing else</span>
    </ReactTooltip>
  </>
}

interface WallProps {
  children: React.ReactNode
}
/**
 * The wall should be reponsible for ensuring components within it wrap correctly
 */
export const Wall: React.FunctionComponent<WallProps> = ({ children }) => {
  return <div className='m-10 flex flex-col'>
    <FontAwesomeIcon
      data-tip data-for={'question-icon'}
      icon={faQuestionCircle}
      color='white'
      size='2x'
      className='mb-6'
    />
    <ReactTooltip id={'question-icon'} type="warning" effect="solid" className='bg-gray-800' backgroundColor='bg-gray-800'>
      <span>A living wall of TypeScript notes. Try hover over colored notes</span>
    </ReactTooltip>
    <div>
      {children}
    </div>
  </div>
}
