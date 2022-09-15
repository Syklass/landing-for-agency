import React from 'react'
import checkboxSvg from '../../Assets/checkboxSvg.svg'



function CheckBox(props) {
    return (
        <div className={`w-full ${props.className}`}>
            <input id={props.id}  className="checkboxIcon_toggle hidden" type="checkbox"></input>
            <label className="checkboxLabel cursor-pointer flex items-center max-w-full" for={props.id}>
                <div className="checkboxBackground">
                    <img className="checkboxIcon" src={checkboxSvg}></img>
                </div>
                <h1 className="ml-3.5
                font-normal text-4x1 text-left">{props.text}</h1>
            </label>
        </div>
    )
}

export default CheckBox