import { useState } from "react";
import {ReactComponent as Arrow} from "../../Assets/arrowDropdown.svg"

function Selector() {
    const [isActive, setIsActive] = useState(false)
    const [caseType, setCaseType] = useState("Кейсы по направлениям")

    function FilterVisibility(typ) {
        let findCards = document.querySelectorAll(typ);
        let allCards = document.querySelectorAll(".filterCard");
        let btn = document.querySelector(".hiddenCardButton")
        btn.click();
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.add("anywayHidden")
        }
        for (let i = 0; i < findCards.length; i++) {
            findCards[i].classList.remove("anywayHidden");
        }
        console.log(findCards);
    }

    return (  
        <div className="relative lg:absolute lg:top-[15px] min-w-[270px] max-w-[415px] lg:w-[415px] bg-accent lg:shadow-lg-2 lg:bg-white rounded-md">
            <div></div>
            <div className="items-center text-base font-semibold px-5 py-5 flex 
            justify-between select-none cursor-pointer
            text-black-2c
            lg:hover:text-accent
            transition-all"
            onClick={() => {setIsActive(!isActive)}}>
                {caseType}
                <Arrow className={`${isActive ? "rotate-180":""}`}></Arrow>
            </div>
            <div className={`${isActive ? "flex" : "hidden"} bg-white-f2f4 lg:bg-white px-5 flex-col`}>
                <div onClick={() => {FilterVisibility(".filterCard");setIsActive(!isActive);setCaseType("Все кейсы")}} 
                className="mb-3 mt-[14px] text-sm font-medium select-none cursor-pointer hover:text-accent
            transition-all">Все кейсы</div>
                <div onClick={() => {FilterVisibility(".Analyzing");setIsActive(!isActive);setCaseType("Аналитика и стратегия")}} 
                className="mb-3 text-sm font-medium select-none cursor-pointer hover:text-accent
            transition-all">Аналитика и стратегия</div>
                <div onClick={() => {FilterVisibility(".PO");setIsActive(!isActive);setCaseType("Разработка сайтов и ПО")}} 
                className="mb-3 text-sm font-medium select-none cursor-pointer hover:text-accent
            transition-all">Разработка сайтов и ПО</div>
                <div onClick={() => {FilterVisibility(".Traf");setIsActive(!isActive);setCaseType("Трафик")}} 
                className="mb-3 text-sm font-medium select-none cursor-pointer hover:text-accent
            transition-all">Трафик</div>
                <div onClick={() => {FilterVisibility(".PR");setIsActive(!isActive);setCaseType("PR")}} 
                className="mb-3 text-sm font-medium select-none cursor-pointer hover:text-accent
            transition-all">PR</div>
                <div onClick={() => {FilterVisibility(".Brending");setIsActive(!isActive);setCaseType("Брендинг")}} 
                className="mb-3 text-sm font-medium select-none cursor-pointer hover:text-accent
            transition-all">Брендинг</div>
            </div>
        </div>
    );
}

export default Selector;