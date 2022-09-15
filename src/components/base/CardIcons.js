function CardIcons({img, imgClasses, className}) {
    return ( 
        <div className={`w-14 h-14 rounded-full bg-white-f9 
        flex items-center justify-center ${className}`}>
            <img src={img} alt="img" className={`w-8 h-8 select-none ${imgClasses}`}/>
        </div>
    );
}

export default CardIcons;