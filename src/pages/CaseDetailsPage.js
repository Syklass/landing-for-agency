import React from 'react'
import Layout from '../layouts/Layout'
import OtherHeadText from '../components/base/OtherHeadText'
import MegaphoneBack from "../Assets/cardImg/megaphone.svg"
import Alphabank from "../Assets/caseIdImages/alphabank.png"
import Button from '../components/base/Button'
import Card from '../components/cards/Card'
import marywayCardImg from "../Assets/cardImg/maryway.svg"
import alphabankCardImg from "../Assets/cardImg/alphabankCard.svg"
import Breadcrumb from '../components/base/Breadcrumb'

function CaseDetailsPage() {
    const allCasesData = [
        {caseId:0,caseHeadText:"Альфабак",
        status:"Завершен",
        target:"Разработать стильный, интуитивно понятный, продающий сайт бренда маркетингового агентства Cleverra",
        mission:"Разработать сайт, на котором будет собрана информация о маркетинговом агентстве Cleverra, всем перечне реализуемых агентством услуг, ценах, а также возможность отправить заявку на реализацию проекта, или назначить встречу со специалистом компании.",
        result:`Автоматизация получения заявок от заинтересованных клиентов, решение проблемы "неизвестной" цены, экономия времени сотрудников на "просчеты" проектов.`,
        img:Alphabank},
        
        {caseId:1,caseHeadText:"Банк",status:"Что то",
        target:"Что то"
        }
    ]
    var caseLink = window.location.pathname;
    var crumbLink
    var crumbName

    const cardInfo = allCasesData.map((el, i) => {
        if (caseLink==(`/cases/${el.caseId}`)) {
            crumbLink = el.caseId
            crumbName = el.caseHeadText;
            console.log(el.caseId)
            console.log(el.caseHeadText)
            return <div className="lg:flex mb-14 lg:mb-0">
                        <div className="lg:w-3/6">
                            <OtherHeadText
                            classNames="mb-6" headerText={el.caseHeadText!=undefined ? el.caseHeadText : "Данные отсутсвуют"}/>
                            <div className="mb-4 text-sm text-black-111 lg:text-[20px]"><span className="font-semibold">Статус работы: </span>{el.status!=undefined ? el.status : "Данные отсутсвуют"}</div>
                            <div className='mb-4 text-sm text-black-111 lg:text-[20px]'><span className="font-semibold">Цель: </span>{el.target!=undefined ? el.target : "Данные отсутсвуют"}</div>
                            <div className="mb-4 text-sm text-black-111 lg:text-[20px]"><span className="font-semibold">Задача: </span>{el.mission!=undefined ? el.mission : "Данные отсутсвуют"}</div>
                            <div className='mb-7 text-sm text-black-111 lg:text-[20px]'><span className="font-semibold ">Результаты: </span>{el.result!=undefined ? el.result : "Данные отсутсвуют"}</div>
                        </div>
                        <div className="lg:flex lg:w-full lg:justify-end">
                            <img className="rounded-[20px]" alt="Картинка" src={el.img!=undefined ? el.img : "Фото отсутсвует"}/>
                        </div>
                    </div>
        }
    })
    console.log(cardInfo);



    const Content = (
        <div>
            <div className="mb-8">
                <Breadcrumb links={[{name:"Главная",link:"/"},{name:"Кейсы",link:"/cases"},{name:crumbName,link:crumbLink,ends:true,}]}/>
            </div>
            {cardInfo}
            <Button
            className="hidden lg:block w-72 p-7 lg:w-80"
            children="Стать нашим клиентом"/>
            <div className="lg:mt-[140px]">
            <OtherHeadText classNames="mb-6 lg:mb-14" headerText="Реализованные проекты"/>
                <div className="flex flex-col lg:flex-row justify-center">
                    <Card caseId={0} imgBackground={MegaphoneBack} name="Мегафон"
                    resultDescription="идей для привлечения новых клиентов"
                    resultInNumber="12"
                    sphere="Онлайн - обучение"
                    stage="Исследование ниши"
                    time="2 часа"
                    status="Завершен"
                    statusColor="ready"/>
                    <Card caseId={0} imgBackground={marywayCardImg} name="MaryWay"
                    resultDescription="идей для привлечения новых клиентов"
                    resultInNumber="12"
                    sphere="Онлайн - обучение"
                    stage="Исследование ниши"
                    time="2 часа"
                    status="Завершен"
                    statusColor="ready"/>
                    <Card caseId={0} imgBackground={alphabankCardImg} name="Альфабанк"
                    resultDescription="идей для привлечения новых клиентов"
                    resultInNumber="12"
                    sphere="Онлайн - обучение"
                    stage="Исследование ниши"
                    time="2 часа"
                    status="Завершен"
                    statusColor="ready"/>
                </div>
            </div>
        </div>
        // <button className={props.className} onClick={props.onClick}>
        // {props.children}
    );
    return <Layout content={Content} />;
}

export default CaseDetailsPage