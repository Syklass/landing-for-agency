import React from 'react'
import { useState } from 'react'
import ModalRewiew from '../base/ModalReview'

function FeedbackCard({feedbackName,feedbackText,feedbackCompany,logoImage,feedbackLink}) {
    const [modalIsActive, setModalIsActive] = useState(true)
    return (
        <div className="bg-white-fb shadow-lg-2 mr-3 lg:mr-5 min-w-caseCard p-3 m-5 lg:px-7 lg:py-4">
            <div className="flex items-center justify-between mb-3 lg:mb-6">
                <div className="w-3/4">
                    <h1 className="text-sm font-semibold to-blue-1e">{feedbackName}</h1>
                    <h1 className="text-sm font-normal text-gray-b3">{feedbackCompany}</h1>
                </div>
                <img src={logoImage} alt="ЛОГО"></img>
            </div>
            <p className="text-xs lg:text-sm font-normal text-black-11 mb-6 lg:mb-4">{feedbackText}</p>
            <a className="text-xs lg:text-sm text-accent cursor-pointer border-b border-accent" 
            onClick={() => {
                setModalIsActive(!modalIsActive);
            }}>Показать оригинал</a>
            {/* <div className={`${modalIsActive ? "block" : "hidden"} flex items-start justify-center`}>
                <ModalRewiew/>
            </div> */}
        </div>
    )
}

export default FeedbackCard