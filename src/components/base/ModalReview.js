import React from 'react';
import Logo from "../../Assets/modalReview/kavo.svg"
import Image from "../../Assets/modalReview/babaBejit.svg"
import Close from "../../Assets/modalReview/close.svg"

function ModalRewiew({companyLogo,name,companyName,text,img}) {
    return (  
        <div className="fixed flex items-center justify-center bg-black bg-opacity-50 w-[100vw] h-[100vh] fixed left-0 top-0">
            <div className=" bg-white min-w-[320px] max-w-[1024px] max-h-[800px] opacity-100 p-8 w-5/6">
                <div className="flex justify-end">
                    <img className="w-6 h-6" src={Close}></img>
                </div>
                <div>
                    <img className="h-16 w-16" src={Logo}></img>
                </div>
                <div className="flex flex-col lg:flex-row mt-6">
                    <div className="w-3/5">
                        <h1 className="text-sm font-semibold to-blue-1e">{name}</h1>
                        <h1 className="text-sm font-normal to-blue-1e">{companyName}</h1>
                        <p className="mt-6 text-xs lg:text-sm font-normal text-black-11 mb-6 lg:mb-4">{text}</p>
                    </div>
                    <div className="w-2/5 flex justify-end items-end">
                        <img className="min-w-[300px] min-h-[300px] w-1/2" src={Image}></img>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ModalRewiew;