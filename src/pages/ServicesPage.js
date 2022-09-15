import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout'
import OtherHeadText from '../components/base/OtherHeadText';
import ServiceCard from '../components/cards/ServiceCard';
import MarketingImg from "../Assets/deals/marketing/market1.png"
import Breadcrumb from '../components/base/Breadcrumb';

function ServicesPage() {
    const [dealType, setDealType] = useState("Аналитика и стратегия")


    const Content = (
        <div>
            <div className="mb-7">
                <Breadcrumb links={[{name:"Главная",link:"/"},{name:"Услуги",link:"",ends:true,}]}/>
            </div>
            <div className="mb-4">
                <OtherHeadText
                headerText="Услуги" />
            </div>
            <p className="mb-5">Задачи которые мы <a>можем решить:</a></p>
            <div className="w-3/4 flex flex-wrap items-center">
                <button className='px-7 py-5 bg-white-f9 text-black rounded-none mr-5 mb-4 hover:bg-accent' onClick={() => setDealType("Аналитика и стратегия")}>АНАЛИТИКА И СТРАТЕГИЯ</button>
                <button className='px-7 py-5 bg-white-f9 text-black rounded-none mr-5 mb-4 hover:bg-accent' onClick={() => setDealType("Маркетинговые исследования")}>МАРКЕТИНГОВЫЕ ИССЛЕДОВАНИЯ</button>
                <button className='px-7 py-5 bg-white-f9 text-black rounded-none mr-5 mb-4 hover:bg-accent' onClick={() => setDealType("Разработка сайтов и ПО")}>РАЗРАБОТКА САЙТОВ И ПО</button>
                <button className='px-7 py-5 bg-white-f9 text-black rounded-none mr-5 mb-4 hover:bg-accent' onClick={() => setDealType("PR")}>PR</button>
                <button className='px-7 py-5 bg-white-f9 text-black rounded-none mr-5 mb-4 hover:bg-accent' onClick={() => setDealType("Трафик")}>ТРАФИК</button>
                <button className='px-7 py-5 bg-white-f9 text-black rounded-none mr-5 mb-4 hover:bg-accent' onClick={() => setDealType("Брендинг")}>БРЕНДИНГ</button>
            </div>
            <div className={`${dealType == "Маркетинговые исследования" ? "block" : "hidden"}`}>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="lg:w-2/5">
                        <h2 className='mb-4 lg:mb-6'>{dealType}</h2>
                        <p> С чего начать подготовку вывода бренда на рынок?
                            <br/> <br/>Проведение маркетингового исследования до начала проведения маркетинговой кампании позволяет сузить направленность рекламного воздействия и, благодаря этому, сократить рекламный бюджет до 10 раз, а увеличить эффективность кампании минимум втрое!<br /><br />
                            Но вести мониторинг рынка следует не только перед рекламными активностями. При оценке объемов продаж отсутствие мониторинга нередко вводит
                            в заблуждение.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:w-1/2">
                        <img src={MarketingImg}></img>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-stretch lg:flex-row mt-14 lg:mt-24">
                    <ServiceCard
                        headText="Обзор рынка"
                        priceText="70 000"
                        structSrtArr={[
                            "Оценка емкости и потенциала рынка: территория в целом и по отдельным регионам Тенденции развития рынка на ближайшие 3-5 лет;",
                            "Структура каналов продаж, сложившаяся на рынке;",
                            "Сегментирование клиентов, оценка их финансовой емкости;",
                            "Важность критериев потребительского выбора;",
                            "Матрица привлекательности рынка;",
                            "Рекомендации"]}
                    />
                    <ServiceCard
                        priceText="70 000"
                        headText="Потребительский анализ"
                        structSrtArr={[
                            "Портрет целевой аудитории Сегментация целевой аудитории;",
                            "Определение финансовой емкости сегментов;",
                            "Определение ключевых факторов потребительского выбора;",
                            "Оценка уровня удовлетворенности клиентов компании (индекс NPS);",
                            "Рекомендации"
                        ]}
                    />
                </div>
            </div>
            <div className={`${dealType != "Маркетинговые исследования" ? "block" : "hidden"}`}>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="lg:w-2/5">
                        <h2>{dealType}</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={MarketingImg}></img>
                    </div>
                </div>
            </div>
        </div>
    );

    return <Layout content={Content} />;
}

export default ServicesPage