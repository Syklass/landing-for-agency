import React from 'react'
import Layout from '../layouts/Layout'
import Card from '../components/cards/Card';
import ClientAndCasesBlock from '../components/sliders/ClientAndCasesBlock';
import OtherHeadText from '../components/base/OtherHeadText';
import Breadcrumb from '../components/base/Breadcrumb';


function CasesPage() {
    const Content = (
        <div>
            <div className="mb-6 lg:mb-12">
                <Breadcrumb
                links={[{name:"Главная",link:"/"},{name:"Кейсы",link:""}]}/>
            </div>
            <div className="mb-6">
                <OtherHeadText headerText="Кейсы" />
            </div>
            <div>
                <ClientAndCasesBlock
                cardDescriptions="123"
                />
            </div>
        </div>
    );

    return <Layout content={Content} />;
}

export default CasesPage