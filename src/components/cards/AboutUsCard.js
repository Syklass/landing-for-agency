import React from 'react'
import CardIcons from '../base/CardIcons'

function AboutUsCard({text, img, imgClasses}) {
	return (
		<div style={{boxShadow:'0px 4px 20px rgba(0, 0, 0, 0.1)'}} className="px-5 py-4 mb-2 lg:mr-4 pb-16 w-72 lg:w-80 lg:h-auto">
			<div>
				<CardIcons
				img={img}
				imgClasses={imgClasses}
				className="mb-3"
				/>
				<p className="text-sm lg:text-base text-black-2c">{text}</p>
			</div>
		</div>
	)
}

export default AboutUsCard