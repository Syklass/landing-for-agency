import React from "react";
import TextWithIcon from "../base/TextWithIcon";
import phoneLogo from "../../Assets/phone.svg"

function PhoneBlock(props) {
	return <TextWithIcon className={props.className} href="tel:+78007006129" text="8 (800) 700-61-29" src={phoneLogo} alt="телефон" />;
}

export default PhoneBlock;
