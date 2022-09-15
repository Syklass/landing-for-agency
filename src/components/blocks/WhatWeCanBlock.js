import WhatWeCanCard from "../cards/WhatWeCanCard";
import BaseIcon from "../../Assets/aboutCompanyIcons/case.svg"

function WhatWeCanBlock() {
    return (  
            <div className="">
				<div className="flex flex-wrap">
                    <div className="WhaWeCanWrapper1">
                        <WhatWeCanCard
                        name="IT"
                        count="5 направлений"
                        className="Wrap1-1"
                        dirName="IT"
                        icon={BaseIcon}
                        />
                        <WhatWeCanCard
                        name="PR"
                        count="5 направлений"
                        className="Wrap1-2"
                        dirName="PR"
                        icon={BaseIcon}
                        />
                    </div>
                    <div className="WhaWeCanWrapper2">
                        <WhatWeCanCard
                        name="SMM"
                        count="6 направлений"
                        className="Wrap2-1"
                        dirName="SMM"
                        icon={BaseIcon}
                        />
                        <WhatWeCanCard
                        name="Трафик"
                        count="5 направлений"
                        className="Wrap2-2"
                        dirName="Traffic"
                        icon={BaseIcon}
                        />
                    </div>
                    <div className="WhaWeCanWrapper3">
                        <WhatWeCanCard
                        name="Брендинг и креатив"
                        count="9 направлений"
                        className="Wrap3-1"
                        dirName="Brending"
                        icon={BaseIcon}
                        />
                        <WhatWeCanCard
                        name="Исследования и стратегии"
                        count="5 направлений"
                        className="Wrap3-2"
                        dirName="Research"
                        icon={BaseIcon}
                        />
                    </div>
				</div>
			</div>
    );
}

export default WhatWeCanBlock;