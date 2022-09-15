import React from "react";

function TextWithIcon(props) {
	return (
		<a className={`flex text-black-2c ${props.className}`} href={props.href}>
			<img className="w-6 h-6 mr-3" src={props.src} alt={props.alt} />
			{props.text}
		</a>
	);
}

export default TextWithIcon;
