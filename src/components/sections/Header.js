import React, { useState } from "react";
import Button from "../base/Button";
import PhoneBlock from "../blocks/PhoneBlock";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import SvgLogoCleverra from "../../Assets/logosvg.svg"

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div className="mb-10 lg:mb-[84px] fixed top-0 z-10 w-screen h-20 bg-white lg:h-40 lg:pt-4 lg:z-0 lg:static padding-x">
			<div className="flex items-center justify-between w-full h-full drop-shadow-xl">
				<a className="block w-16 mb-1 lg:w-36 lg:mb-4" href="/">
					<img src={SvgLogoCleverra} className="min-w-[123px] min-h-[46px] max-w-[123px] max-h-[46px] mb-[18px]" alt="Клевера" />
				</a>
				<div className="items-center justify-between hidden w-full h-full lg:flex">
					<div className="flex justify-center font-medium lg:ml-10 xl:ml-20 lg:gap-4 xl:gap-8 text-black-2c">
						<a href="/services">Услуги</a>
						<a href="/#why">Почему мы?</a>
						<a href="/cases">Кейсы</a>
						<a href="/#reviews">Отзывы</a>
						<a href="/#contacts">Контакты</a>
					</div>
					<div className="flex items-center lg:gap-4 xl:gap-8">
						<PhoneBlock />
						<Button className="px-8 py-4 w-42">А может кофе?</Button>
					</div>
				</div>
				<div className="w-8 h-8 lg:hidden text-violet-dark" onClick={handleClick}>
					{isOpen ? <XIcon /> : <MenuIcon />}
				</div>
			</div>
			<div
				className={
					isOpen
						? "flex flex-col absolute bg-white drop-shadow-lg text-black-2c w-full -ml-6 px-6 pb-2 lg:hidden header-nav"
						: "hidden"
				}
			>
				<a href="/services">Услуги</a>
				<a href="/#why">Почему мы?</a>
				<a href="/cases">Кейсы</a>
				<a href="/#reviews">Отзывы</a>
				<a href="/#contacts">Контакты</a>
				<div className="py-2">
					<PhoneBlock />
				</div>
				<Button className="w-full py-4">А может кофе?</Button>
			</div>
		</div>
	);
}

export default Header;
