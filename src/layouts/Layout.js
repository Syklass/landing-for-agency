import React from "react";
import Header from "../components/sections/Header";
import Request from "../components/sections/Request";
import Footer from "../components/sections/Footer";
// import ModalRewiew from "../../src/components/base/ModalReview"

function Layout({ content }) {
	return (
		// <div>
		// 	<ModalRewiew
		// 	companyName="Генеральный директор «Академия спорта»"
		// 	name="Л.А. Калмыкова,"
		// 	text="Сеть семейных фитнес-клубов «Академия спорта» выражает свою благодарность компании «Умное Рекламное Агентство» в лице генерального директора Анастасии Борисовны Комаровой, которая зарекомендовала себя как надежный деловой партнер. Мы очень довольны результатами нашего сотрудничества и надеемся на дальнейшую совместную работу."/>
		// </div>
		<div className="relative flex flex-col h-screen">
			<Header />
			<div className="flex-grow pt-24 pb-4 padding-x lg:pt-4">{content}</div>
			<Request />
			<Footer />
		</div>
	);
}

export default Layout;
