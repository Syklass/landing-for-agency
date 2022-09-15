import AboutUsCard from "../cards/AboutUsCard";
import AboutImagesPcBoy from "../../Assets/aboutCompanyIcons/pcBoy.svg"
import AboutImagesPencil from "../../Assets/aboutCompanyIcons/pencil.svg"
import AboutImagesMass from "../../Assets/aboutCompanyIcons/massons.svg"
import AboutImagesCase from "../../Assets/aboutCompanyIcons/case.svg"
import AboutImagesAlarm from "../../Assets/aboutCompanyIcons/alarm.svg"
import AboutImagesDeals from "../../Assets/aboutCompanyIcons/deals.svg"

function AboutUsBlock() {
    return ( 
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
            <div className="lg:w-1/3 lg:mr-14">
                <h1 className="mb-6 text-violet-dark text-2xl lg:text-4xl font-semibold">О компании</h1>
                <p className="mb-6 text-black-11  font-normal lg:font-medium text-sm lg:text-2xl">Маркетинговое агентство Cleverra - это филиал российского агентства, с 2009 на рынке.  Мы компания с продуктовой аналитикой, дизайном, веб- и мобильной разработкой.</p>
                <a className="ml-auto w-28 hidden text-center text-lg font-medium lg:block border-b border-accent text-accent first-letter:" href="#">Подробнее...</a>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:flex-row lg:flex-wrap">
                <AboutUsCard
                text="Начинаем работу в день обращения" 
                img={AboutImagesPcBoy}
                imgClasses="ml-1 mb-1"
                />
                <AboutUsCard
                text="Реализация проекта «Под ключ» внутри агенства, без привлечения внешних субподрядчиков" 
                img={AboutImagesPencil}
                imgClasses="ml-1"
                />
                <AboutUsCard
                text="Работаем с 27 ноября 2009 года" 
                img={AboutImagesMass}
                />
                <AboutUsCard
                text="Более 1500 реализованных проектов, более 300 кейсов представлено на сайте" 
                img={AboutImagesCase}
                />
                <AboutUsCard
                text="Эксперты на 11 телеканалах, более 300 публикаций 
                в печатных и электронных СМИ" 
                img={AboutImagesAlarm}
                />
                <AboutUsCard
                text="Нам доверяют и нас рекомендуют, такие бренды, как Splat, OTTO, Dekok, Гиперглобус, Мегафон" 
                img={AboutImagesDeals}
                imgClasses="mt-1"
                />
            </div>
        </div>
    );
}

export default AboutUsBlock;