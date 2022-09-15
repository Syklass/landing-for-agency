import React from "react";
import Slider from "react-slick";
import SimpleCaseCard from "../cards/SimpleCaseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MegaBack from "../../Assets/cases/megafon.png"

function SimpleCaseSlider() {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1.4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.2,
				}
			}
		]
	};

	return (
		<div className="mb:-mx-6">
			<Slider {...settings}>
				<div className="mb:px-4">
					<SimpleCaseCard caseId="0" bgcolor="#00B856" src={MegaBack}>
						Помощь в развитии компании Мегафон на рынке Таджикистана
					</SimpleCaseCard>
				</div>
				<div className="mb:px-4">
					<SimpleCaseCard caseId="1" bgcolor="#DD002E" src={MegaBack}>
						Более 5 лет работы над продвижением брендов Splat, Iney, Innova, BioMio, Heya и др
					</SimpleCaseCard>
				</div>
				<div className="mb:px-4">
					<SimpleCaseCard caseId="2" bgcolor="#00B856" src={MegaBack}>
						Помощь в развитии компании Мегафон на рынке Таджикистана
					</SimpleCaseCard>
				</div>
				<div className="mb:px-4">
					<SimpleCaseCard caseId="3" bgcolor="#DD002E" src={MegaBack}>
						Более 5 лет работы над продвижением брендов Splat, Iney, Innova, BioMio, Heya и др
					</SimpleCaseCard>
				</div>
			</Slider>
		</div>
	);
}

export default SimpleCaseSlider;
