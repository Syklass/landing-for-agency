import React from "react";
import TextWithIcon from "../base/TextWithIcon";
import mailLogo from "../../Assets/mail.svg"

function EmailBlock(props) {
	return <TextWithIcon className={props.className} href="mailto:info@cleverra.ru" text="info@cleverra.ru" src={mailLogo} alt="почта" />;
}

export default EmailBlock;
