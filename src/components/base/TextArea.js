import React from 'react'


function TextArea(props) {
    return (
        <textarea 
        className={`
        font-normal text-4x1 bg-white-f9
        w-full p-4 resize-none
        h-28
        focus:outline-none ${props.className}`}
        placeholder={props.placeholder}>{props.text}</textarea>
    )
}

export default TextArea