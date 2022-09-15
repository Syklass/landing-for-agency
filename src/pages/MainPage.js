import React from "react";
import Layout from "../layouts/Layout";
import Button from "../components/base/Button";
import SimpleCaseSlider from "../components/sliders/SimpleCaseSlider";
import ClientFeedbacks from "../components/sliders/ClientFeedbacks";
import ClientAndCasesSlider from "../components/sliders/ClientAndCasesSlider";
import AboutUsBlock from "../components/blocks/AboutUsBlock";
import RunningLine from "../components/blocks/RunningLine";
import ClientReviewSlider from "../components/sliders/ClientReviewSlider";
import Marquee from "react-fast-marquee";
import WhatWeCanBlock from "../components/blocks/WhatWeCanBlock"

function MainPage() {
	const Content = (
		<>
			<div className="flex flex-col lg:flex-row mb-14">
				<div className="lg:w-1/2 lg:pr-10">
					<h1 className="mb-3 text-2xl font-bold uppercase lg:text-4xl xl:text-5xl lg:mb-6">
						12 лет мы <br/> <a className="text-2xl font-bold uppercase text-accent lg:text-4xl xl:text-5xl lg:mb-6">продвигаем бренды</a> на Российском рынке.
						Теперь мы и в Казахстане.
					</h1>
					<div className="mb-6 text-sm lg:mb-8">
						Обеспечиваем полный цикл маркетинга: помогаем вывести на рынок новые бренды, проводим
						маркетинговые исследования, разрабатываем стратегии, делаем сайты и IT-продукты,
						приводим трафик и клиентов, ведем аналитику и статистику и даем гарантию на результат.
					</div>
					<Button className="w-full mb-10 p-7 lg:w-auto">Получить предложение</Button>
				</div>
				<div className="lg:w-1/2">
					<SimpleCaseSlider/>
				</div>
			</div>
			<div className="mb-14">
				<AboutUsBlock/>
			</div>
			<Marquee gradientWidth={50} speed={150} className="select-none mb-14 h-[80px] lg:h-[140px]">
				<div style={{color: "rgba(196, 196, 196, 0.5)"}}  className="text-6xl lg:text-[100px] whitespace-nowrap font-black">
				&nbsp;MARKETING&nbsp;AGENCY&nbsp;CLEVERRA
				</div>
				<div style={{color: "rgba(196, 196, 196, 0.5)"}}  className="text-6xl lg:text-[100px] whitespace-nowrap font-black">
				&nbsp;MARKETING&nbsp;AGENCY&nbsp;CLEVERRA
				</div>
			</Marquee>
			<div className="mb-14">
				<h2>Наши направления</h2>
				<WhatWeCanBlock/>
			</div>
			<div className="mb-14">
				<div>
					<ClientAndCasesSlider/>
				</div>
			</div>
			<div id="reviews" className="mb-14">
				<ClientReviewSlider/>
			</div>
		</>
	);

	return <Layout content={Content} />;
}

export default MainPage;
