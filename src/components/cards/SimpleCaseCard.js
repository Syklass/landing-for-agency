import React from "react";

function SimpleCaseCard(props) {
	return (
		<div
			className="relative h-full p-5 text-white sm:h-80 lg:h-96 rounded-xl aspect-square"
			style={{ backgroundColor: props.bgcolor}}
		>
			<div className="mb-4 h-1/2">
				<img className="h-full mx-auto" src={props.src} alt={props.alt} />
			</div>
			<div className="font-semibold text-sm lg:text-lg">{props.children}</div>
			<a className="absolute pb-1 font-semibold border-b bottom-5 text-sm lg:text-base" href={`cases/${props.caseId}`}>
				Посмотреть кейс
			</a>
		</div>
	);
}

export default SimpleCaseCard;
