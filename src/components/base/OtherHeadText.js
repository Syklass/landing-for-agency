function OtherHeadText({headerText, classNames}) {
    return (  
        <h1 className={`
        text-violet-dark 
        font-semibold text-2xl 
        lg:text-4xl ${classNames}`}>{headerText}</h1>
    );
}

export default OtherHeadText;