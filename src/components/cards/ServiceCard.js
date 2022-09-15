import React, {useEffect, useState} from "react";
import okIcon from "../../Assets/Icons/okIcon.svg"
import Button from "../base/Button";

const ServiceCard = ({headText, structSrtArr, methodsStrArr, DetailStrArr, priceText}) => { //для использования во flex контейнере


    const [pathNum, setPathNum] = useState(0)
    const [list, setList] = useState([])

    const formList = (arr) => {
        setList(arr?.length > 0 ? arr.map((el, i) => <div className='flex text-start pb-6'>
            <p className="mr-2 text-[#00A5E0] text-[20px] mb:text-sm font-bold">{i + 1 + '.'}</p>
            <p>{el}</p>
        </div>): "Не передан массив строк")
    }
    useEffect(() =>{

        switch (pathNum) {
            case 0: {
                formList(structSrtArr)
            } break;
            case 1: {
                formList(methodsStrArr)
            } break
            case 2: {
                formList(DetailStrArr)
            }
        }
    }, [pathNum])



    return <div className="shadow-lg-3 w-[50%] mdl:w-[70%] mx-3 mdl:mx-0 mdl:mb-5 min-w-[270px] pb-[70px] mb:pb-[28px]">
        <div className="w-[100%] h-[110px] mb:h-[70px] bg-[#1E0849] flex justify-center items-center mb-[55px] mb:mb-[28px]">
            <p className="text-white text-2xl mb:text-base">{headText || "Заголовок не передан"}</p>
        </div>
        <div className="flex items-center pb-11 mb:pb-[29px]">
            <div className="rounded-[50%] h-11 w-11 mb:h-[30px] mb:w-[30px] bg-[#40CC80] flex justify-center items-center ml-9 mb:mr-2 mb:ml-3 mr-3"><img src={okIcon} alt=""/></div>
            <p className="text-2xl mb:text-[14px]">{`Стоимость - ${priceText || "НЕТ"} руб`}</p>
        </div>
        <div className="flex pb-10 mb:px-2 px-8 text-xl select-none flex-wrap mb:text-xs">
            <p style = {{color: pathNum === 0 ? "black" : "#C4C4C4", cursor:"pointer"}} onClick={() => setPathNum(0)} className="px-2 ">Структура</p>
            <p style = {{color: pathNum === 1 ? "black" : "#C4C4C4", cursor:"pointer"}} onClick={() => setPathNum(1)} className="px-2 ">Методология</p>
            <p style = {{color: pathNum === 2 ? "black" : "#C4C4C4", cursor:"pointer"}} onClick={() => setPathNum(2)} className="px-2 ">Детализация</p>
        </div>
       <div className='px-8 pb-[70px] mb:pb-[24px] text-lg mb:text-xs'>
           <p>{list || null}</p>
       </div>
        <div className="flex justify-center">
            <Button className = 'py-8 mb:px-[20px] mb:py-[15px] px-[77px] mx-auto' onClick={() => {}}> {/*Заглушка на onClick*/}
                <p className="font-bold text-[20px] mb:text-[12px]">Консультация</p>
            </Button>
        </div>
    </div>
}

export default ServiceCard