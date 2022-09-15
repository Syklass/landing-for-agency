import CardIcons from "../base/CardIcons";
import React, {useEffect, useState} from "react";
function WhatWeCanCard({name,count,icon,className,dirName}) {
    const [isOpen, setOpen] = useState(false)

    const data =[{
        it:["Landing page","Многостраничные сайты","Платформы с прямой пользовательской логикой"
        ,"CRM со сложной логикой сущностей","Индивидуальные проекты",],
        pr:["Инициирование публикаций в СМИ","Освещение мероприятий","Инфоповоды"
        ,"SERM/ORM","Блогеры",],
        smm:["Создание и оформление аккаунтов и сообществ","Ведение контента","Настройка и ведение таргета"
        ,"Работа с блогерами","Размещение релкамных постов в пабликах"
        ,"Проведение конкурсов/розыгрышей",],
        traffic:["Таргет","Контекст","SEO-аудит","SEO оптимизация","SEO продвижение",],
        brending:["Нейминг","Разработка логотипа","Визуальный брендбук","Комплексный брендбук"
        ,"Гайдлайн","Дизайн-макеты для сайтов",
        "Креативы для соц.сетей","Креативы для таргета и контекста","Макеты полиграфии",],
        research:["Обзор рынка","Анализ конкурентов","Анализ ЦА","Разработка маркетинговой стратегии",],
    }]

    const dirs = data.map((el,i)=>{
        return <div>{el}</div>
    })

    // const slides = data.map((el, i) => {
    //     return <div key={i} className={i>2?"hidden hiddenCard" : "block"}>
    //         <Card filter={el.filter} name={el.projectName} status={el.statusText}
    //                 statusColor={el.status}
    //                 imgBackground={el.imgSrc}
    //                 resultInNumber={el.resultInNumber}
    //                 resultDescription={el.resultDescription}
    //                 caseId={el.caseId}
    //         />
    //     </div>
    // })
    return (  
        <div onClick={(el)=>{
            console.log(el.currentTarget.classList)
            if (!isOpen) {
                if (el.currentTarget.classList.contains("Wrap1-1")) {
                    document.querySelector(".Wrap1-2").classList.add("hidden")
                }
                if (el.currentTarget.classList.contains("Wrap1-2")) {
                    document.querySelector(".Wrap1-1").classList.add("hidden")
                }
                setOpen(!isOpen)
            }
            else{
                if (el.currentTarget.classList.contains("Wrap1-1")) {
                    document.querySelector(".Wrap1-2").classList.remove("hidden")
                }
                else if(el.currentTarget.classList.contains("Wrap1-2")){
                    document.querySelector(".Wrap1-1").classList.remove("hidden")
                }
                setOpen(!isOpen)
            }
            if (!isOpen) {
                if (el.currentTarget.classList.contains("Wrap2-1")) {
                    document.querySelector(".Wrap2-2").classList.add("hidden")
                }
                if (el.currentTarget.classList.contains("Wrap2-2")) {
                    document.querySelector(".Wrap2-1").classList.add("hidden")
                }
                setOpen(!isOpen)
            }
            else{
                if (el.currentTarget.classList.contains("Wrap2-1")) {
                    document.querySelector(".Wrap2-2").classList.remove("hidden")
                }
                else if(el.currentTarget.classList.contains("Wrap2-2")){
                    document.querySelector(".Wrap2-1").classList.remove("hidden")
                }
                setOpen(!isOpen)
            }
            if (!isOpen) {
                if (el.currentTarget.classList.contains("Wrap3-1")) {
                    document.querySelector(".Wrap3-2").classList.add("hidden")
                }
                if (el.currentTarget.classList.contains("Wrap3-2")) {
                    document.querySelector(".Wrap3-1").classList.add("hidden")
                }
                setOpen(!isOpen)
            }
            else{
                if (el.currentTarget.classList.contains("Wrap3-1")) {
                    document.querySelector(".Wrap3-2").classList.remove("hidden")
                }
                else if(el.currentTarget.classList.contains("Wrap3-2")){
                    document.querySelector(".Wrap3-1").classList.remove("hidden")
                }
                setOpen(!isOpen)
            }
            


        }} className={`${className} cardBody mx-3 my-2 flex flex-wrap`}>
            <div
            style={{boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"}} 
            className={`cardMain max-w-caseCard min-w-[415px] min-h-[228px] py-6 px-6 cursor-pointer 
            ${isOpen ? "hidden" : "block"}`}>
                <div className="flex items-center justify-between mb-20">
                    <h1 className="text-black-2c text-base lg:text-2xl font-semibold">{name}</h1>
                    <CardIcons
                    img={icon}
                    imgClasses=""
                    />
                </div>
                <h2 className="text-black-2c text-sm lg:text-lg font-medium">{count}</h2>
            </div>
            <div
            className={`
            p-4 lg:py-10 cardExtend
            max-w-caseCard min-w-[415px] 
            bg-accent cursor-pointer min-h-[464px]
            ${isOpen ? "block" : "hidden"}`}>
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-white text-base lg:text-2xl font-semibold">{name}</h1>
                    <div className="max-w-[48px] max-h-[48px]">
                        <CardIcons
                        img={icon}
                        imgClasses=""
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-8">
                        <div className="mb-2 text-white font-semibold text-lg">По типу проекта</div>
                        <span className="h-[1px] w-full bg-white block"></span>
                    </div>
                    <div className="text-lg font-medium text-white">
                        <div className={`${dirName}`}>{()=>{
                        }}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeCanCard;