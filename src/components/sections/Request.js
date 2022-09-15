import React from 'react'
import TextArea from '../base/TextArea'
import InputText from '../base/InputText'
import CheckBox from '../base/Checkbox'
import Button from '../base/Button'
import PhoneBlock from '../blocks/PhoneBlock'
import EmailBlock from '../blocks/EmailBlock'
import SocialsBlock from '../blocks/SocialsBlock'


function Request(props) {
	return (
        <div className={`mb-20 mt-14 lg:mt-[140px] lg:mb-[140px] w-full sm:padding-x ${props.className}`}>
            <div className="flex padding-x mx-auto lg:p-0 text-center lg:text-left flex-col lg:flex-row  w-full justify-between items-center lg:items-baseline">
                <div className="flex max-w-md flex-col">
                    <h1 className="font-semibold text-4xl mb-8">Оставьте заявку</h1>
                    <h2 className="font-normal text-lg mb-6">В честь выхода на рынок Казахстана проведем 100 аудитов и бизнес-разборов бесплатно, для первых 100 обратившихся клиентов</h2>
                    <h3 className="font-normal text-lg"><a className="font-semibold">Оставьте заявку</a> прямо сейчас, чтобы успеть оказаться в их числе.</h3>
                    <div className="hidden lg:block">
                        <div className="flex mt-16 mb-6">
                            <PhoneBlock />
                            <SocialsBlock className="ml-9"/>
                        </div>
                        <EmailBlock />
                    </div>
                </div>
                <div className="lg:ml-auto lg:w-1/2 flex flex-col items-center lg:items-baseline mt-8 lg:mt-0">
                    <div className="flex flex-col w-full lg:flex-row mb-4">
						<InputText className="w-full lg:w-1/2 mr-2" placeholder="Имя"></InputText>
						<InputText className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:mb-0 lg:ml-2" placeholder="Телефон"></InputText>
                    </div>
                    <InputText className="mb-5" placeholder="E-mail"></InputText>
                    <TextArea placeholder="Расскажите о проекте"></TextArea>
					<CheckBox className="mt-8" id="agreePersonal" text="Я даю согласие на обработку персональныx данных"></CheckBox>
					<CheckBox className="mt-3.5" id="agreeMessage" text="Я даю согласие на получение рассылких"></CheckBox>
                    <Button className="mt-11 w-72 p-7 lg:w-80" children="">Оставить заявку</Button>
                    <div className="lg:hidden flex flex-col items-center lg:items-baseline">
                            <PhoneBlock className="mt-8 mb-6" />
                            <SocialsBlock/>
                            <EmailBlock className="hidden"/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>



	)
}

export default Request