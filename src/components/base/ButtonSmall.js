import React from 'react'

function ButtonSmall(props) {
  return (
    <button 
    className={`
    text-xs lg:text-base py-2 px-4 font-semibold 
    text-white rounded bg-accent ${props.className}`}
    onClick={props.onClick}>{props.text}
    </button>
  )
}

export default ButtonSmall