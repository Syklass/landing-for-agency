import React from "react";
import PhoneBlock from "../blocks/PhoneBlock";
import EmailBlock from "../blocks/EmailBlock";
import SocialsBlock from "../blocks/SocialsBlock";
import Button from "../base/Button";
import SvgLogoCleverra from "../../Assets/logosvg.svg"

function Footer() {
	return (
		<div className="flex flex-col justify-between w-full py-6 mt-auto lg:py-8 md:flex-row bg-white-f9 padding-x">
			<div className="mb-8">
				<a className="block w-24 mb-6 lg:w-36" href="/">
				<img src={SvgLogoCleverra} className="min-w-[126px] min-h-[46px] max-w-[126px] max-h-[46px] mb-[18px]" alt="Клевера" />
				</a>
				<a className="pb-2 border-b-2 border-black text-black-2d" href="/">
					Политика конфиденциальности
				</a>
				<div className="hidden mt-8 md:block text-black-2d">
					<div className="mb-14">
						Разработано агенством{" "}
						<a className="font-semibold text-violet-dark" href="/">
							Cleverra
						</a>
					</div>
					<div className="">© 2009-2022 Cleverra Все права защищены</div>
				</div>
			</div>
			<div className="flex-col hidden gap-2 font-semibold mt-7 md:flex text-black-2d">
				<a href="/services">Услуги</a>
				<a href="/#why">Почему мы?</a>
				<a href="/cases">Кейсы</a>
				<a href="/#reviews">Отзывы</a>
				<a href="/#contacts">Контакты</a>
			</div>
			<div className="flex flex-col gap-1 mb-8 lg:gap-8">
				<div id="contacts" className="font-semibold text-violet-dark">Контакты</div>
				<PhoneBlock />
				<EmailBlock />
				<SocialsBlock />
			</div>
			<div className="pt-4 border-t md:hidden lg:border-t-0 border-black-e7 text-black-2d">
				<div className="mb-8 text-center">© 2009-2022 Cleverra Все права защищены</div>
				<div className="text-center">
					Разработано агенством
					<a className="font-semibold text-violet-dark" href="/">
						Cleverra
					</a>
				</div>
			</div>
			<div className="hidden lg:block">
				<Button className="px-12 py-6">А может кофе?</Button>
			</div>
		</div>
	);
}

export default Footer;
