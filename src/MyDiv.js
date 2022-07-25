import React from 'react'
import FavoriteLanguage from './FavoriteLanguage';

function MyDiv({name, handleOnClick}){
  return (
    <>
        <li>{name} <FavoriteLanguage language={'Ruby'}/> <button onClick={handleOnClick}>Click Me</button></li>
    </>
  )
}

export default MyDiv