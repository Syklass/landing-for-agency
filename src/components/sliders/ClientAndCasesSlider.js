import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../cards/Card";
import MagaBack from "../../Assets/cardImg/megaphone.svg"


const resizeMethod = (setterFunk) => {
    let width = window.innerWidth
    if (width >= 1400) {
        setterFunk(92)
    }
    else if (width >= 850){
        setterFunk(89)
    }
    else if (width >= 700){
        setterFunk(87)
    }
    else if (width >= 550){
        setterFunk(84)
    }
    else if (width >= 450){
        setterFunk(79)
    }
    else {
        setterFunk(false)
    }
}





function PrevArrow(props) {
    const {className, style, onClick, index} = props;
    const [posPrc, setPosPrc] = useState(92)
    const [isDisabled, setIsDisabled] = useState(true)
    const goResize = () => {
        resizeMethod(setPosPrc)
    }
    useEffect(() => {
        goResize()
        window.addEventListener("resize", goResize)
        return () => {
            window.removeEventListener("resize", goResize)
        }
    },[])



    useEffect(() => {
        setIsDisabled(index < 1)
    }, [index])

    return (
        <div style={posPrc ? {...style, position:"absolute", top:"-90px", left:`${posPrc}%`}: {display:"none"}} onClick={() => {
            if(!isDisabled) onClick()
        }} className={`${className}`}>
            <svg className="mr-7" style={{cursor:"pointer"}} width="43" height="16" viewBox="0 0 43 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616
                         7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159
                          1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM43
                           7L1 7V9L43 9V7Z" fill={isDisabled ?"#B3B3B3":"black"}/>
            </svg>
        </div>
    );
}

function NextArrow(props) {
    const {className, style, onClick, index, stopIndex} = props;
    const [posPrc, setPosPrc] = useState(true)
    const [isDisabled, setIsDisabled] = useState()

    const goResize = () => {
        resizeMethod(setPosPrc)
    }
    useEffect(() => {
        goResize()
        window.addEventListener("resize", goResize)
        return () => {
            window.removeEventListener("resize", goResize)
        }
    },[])

    useEffect(() => {
        if (index > 0 && stopIndex) {
            setIsDisabled(index === stopIndex)
        }
    }, [index])

    return (
        <div style={posPrc ?{...style, position:"absolute", top:"-90px", right:"2%"}: {display:"none"}} onClick={() => {
            if(!isDisabled) onClick()
        }} className={`${className}`}>
            <svg style={{cursor:"pointer"}} width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.7071 8.70711C43.0976 8.31658 43.0976 7.68342 42.7071 7.29289L36.3431 0.928932C35.9526
                         0.538408 35.3195 0.538408 34.9289 0.928932C34.5384 1.31946 34.5384 1.95262 34.9289 2.34315L40.5858
                          8L34.9289 13.6569C34.5384 14.0474 34.5384 14.6805 34.9289 15.0711C35.3195 15.4616 35.9526 15.4616
                           36.3431 15.0711L42.7071 8.70711ZM0 9L42 9V7L0 7L0 9Z" fill={isDisabled ?"#B3B3B3":"black"}/>
            </svg>
        </div>
    );
}



function ClientAndCasesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextStopIndex, setNextStopIndex] = useState(0)

    const data = [
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"0"},
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"1"},
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"2"},
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"3"},
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"4"},
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"5"},
        {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов",caseId:"6"},
            {projectName:"Мегафон",statusText:"Завершен", status:"ready", imgSrc:MagaBack, resultInNumber:"12",
                resultDescription:"идей для привлечения новых клиентов",caseId:"7"},
    ]

    

    const resizeHandler = () => {
        if (window.innerWidth > 1024) {
            setNextStopIndex(data.length - 4 + 0.8)
        }
        else if (window.innerWidth <= 1024 && window.innerWidth > 670) {
            setNextStopIndex(data.length - 3 + 0.8)
        }
        else if (window.innerWidth <= 670 && window.innerWidth > 385) {
            setNextStopIndex(data.length - 2 + 0.8)
        }
        else {
            setNextStopIndex(data.length - 1)
        }
    }

    useEffect(() => {
        resizeHandler()
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [])

    const slides = data.map((el, i) => {
        return <div key={i} className="">
            <Card name={el.projectName} status={el.statusText}
                  statusColor={el.status}
                  imgBackground={el.imgSrc}
                  resultInNumber={el.resultInNumber}
                  resultDescription={el.resultDescription}
                  caseId={el.caseId}
            />
        </div>
    })

    const onGoNextSlide = (index) => {
        console.log(index)
        setCurrentIndex(index)
    }

    const settings = {
        arrows: true,
        infinite: false,
        dots: false,
        speed: 500,
        nextArrow: <NextArrow index = {currentIndex} stopIndex = {nextStopIndex}/>,
        prevArrow: <PrevArrow index = {currentIndex}/>,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        afterChange: onGoNextSlide,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1.2,
                }
            },
            {
                breakpoint: 385,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };



    return (
        <div style={{position: "relative"}}>
            <div className="pb-[54px] flex items-center">
                <div className="flex-1"><h2 className="">Кейсы и клиенты</h2></div>
            </div>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div>
    );
}

export default ClientAndCasesSlider;
