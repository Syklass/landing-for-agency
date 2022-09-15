import Card from "../cards/Card";
import { useState,useEffect } from "react";
import Button from "../base/Button";
import MegaphoneBack from "../../Assets/cardImg/megaphone.svg"
import Selector from "../base/Selector";

function ClientAndCasesBlock() {
    const data = [
        {projectName:"PR",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"0", filter:"PR"},
        {projectName:"PR",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"1", filter:"PR"},
        {projectName:"PR",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"2", filter:"PR"},
        {projectName:"Analyzing",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"3", filter:"Analyzing"},
        {projectName:"Brending",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"4", filter:"Brending"},
        {projectName:"Brending",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"5", filter:"Brending"},
        {projectName:"Traf",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"5", filter:"Traf"},
        {projectName:"Traf",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"5", filter:"Traf"},
        {projectName:"Traf",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"5", filter:"Traf"},
        {projectName:"PO",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
            resultDescription:"идей для привлечения новых клиентов", caseId:"6", filter:"PO"},
            {projectName:"Analyzing",statusText:"Завершен", status:"ready", imgSrc:MegaphoneBack, resultInNumber:"12",
                resultDescription:"идей для привлечения новых клиентов", caseId:"7", filter:"Analyzing"},
    ]
	let counter = data.length
    const slides = data.map((el, i) => {
        return <div key={i} className={i>2?"hidden hiddenCard" : "block"}>
            <Card filter={el.filter} name={el.projectName} status={el.statusText}
					statusColor={el.status}
					imgBackground={el.imgSrc}
					resultInNumber={el.resultInNumber}
					resultDescription={el.resultDescription}
                    caseId={el.caseId}
            />
        </div>
    })
    return (
        <div>
            <div className="static lg:relative block lg:w-[420px] lg:h-[93px] mb-6 lg:mb-0 mt-7 lg:mt-0">
                <Selector/>
            </div>
            <div className="flex flex-col items-center mb-[140px]">
                <div className="flex flex-wrap justify-center">
                    {slides}
                </div>
                <Button className="mt-11 w-72 p-7 lg:w-80 hiddenCardButton" onClick={()=>{
                    var cardList = document.querySelectorAll(".hiddenCard")
                    for (let i = 0; i < cardList.length; i++) {
                        cardList[i].classList.remove("hidden")
                    }
                    document.querySelector(".hiddenCardButton").classList.add("hidden")
                }}
                children = {`Показать еще ${counter} кейсов`}
                />
            </div>
        </div>
    );
}

export default ClientAndCasesBlock;
