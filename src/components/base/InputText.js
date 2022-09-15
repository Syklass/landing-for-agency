import React from 'react'


function InputText(props) {
    return (
        <input 
        className={`
        font-normal text-4x1 bg-white-f9
        h-16 p-4 w-full
        focus:outline-none ${props.className}`} 
        placeholder={props.placeholder}>{props.text}</input>
    )
}

export default InputText