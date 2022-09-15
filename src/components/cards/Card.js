import React from 'react'
import { useHistory } from "react-router-dom";
import ButtonSmall from "../base/ButtonSmall";

function Card({caseId, imgBackground,name,statusColor,time,stageColor,sphere,stage,status,resultInNumber,resultDescription, filter}) {
    return (
        
        <div className={`${filter} filterCard min-w-caseCard max-w-caseCard lg:w-auto flex flex-col md:mr-3 lg:mr-5 mb-5 lg:mb-7`}>
            <div
            style={{backgroundImage: `url(${imgBackground})`}} 
            className={`bg-center bg-cover bg-opacity-50 bg-no-repeat`}>
                <div className="bg-black bg-opacity-40 px-4 pt-7">
                    <div className='flex items-center justify-between mb-16'>
                            <h1 className='text-white
                            text-sm font-semibold lg:text-[22px]'>{name}</h1>
                            <h1 style={{ backgroundColor: statusColor=="ready" ? "#40CC80" : null}} className="text-white
                            text-sm
                            px-4
                            py-2
                            "
                            >{status}</h1>
                    </div>
                    <div className="flex mt-14">
                        <div className="flex flex-col">
                            <h1 className="text-white mb-3 text-xs lg:text-lg font-semibold">В работе:</h1>
                            <h1 className="text-white mb-3 text-xs lg:text-lg font-semibold">Этап:</h1>
                            <h1 className="text-white mb-3 text-xs lg:text-lg font-semibold">Сфера:</h1>
                        </div>
                        <div className="flex flex-col ml-8">
                            <h1 className="text-white mb-3 leading-4 lg:leading-7">{time}</h1>
                            <h1 className={`text-white mb-3 mb-3 leading-4 lg:leading-7 ${stageColor}`}>{stage}</h1>
                            <h1 className="text-white mb-3 mb-3 leading-4 lg:leading-7">{sphere}</h1>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="shadow-lg-3 px-4 pb-4">
                <h1 className="text-black-2c text-base font-semibold lg:text-lg mt-9 mb-3 ">Реузьтаты в цифрах</h1>
                <h1 className="text-black-2c text-4xl font-semibold mb-3">{resultInNumber}</h1>
                <h1 className="text-base text-black-2c font-normal mb-6">{resultDescription}</h1>
                <ButtonSmall onClick={()=>{window.open(`http://localhost:3000/cases/${caseId}`)}} text="Подробнее"/>
            </div>
        </div>
    )
}

export default Card