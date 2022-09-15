import React from 'react'
import Telega from '../../Assets/socials/tg.svg'
import Vkontakte from '../../Assets/socials/vk.svg'
import Insta from '../../Assets/socials/ig.svg'
import Facebook from '../../Assets/socials/fb.svg'

function SocialsBlock(props) {
    return (
        <div className={`flex items-center gap-3 social-block ${props.className}`}>
            <a href="/">
                <img src={Telega} alt="телеграм"/>
            </a>
            <a href="/">
                <img src={Vkontakte} alt="вконтакте"/>
            </a>
            <a href="/">
                <img src={Insta} alt="инстаграм"/>
            </a>
            <a href="/">
                <img src={Facebook} alt="фейсбук"/>
            </a>
        </div>
    )
}

export default SocialsBlock