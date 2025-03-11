import React from "react";

interface ImgProps {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<ImgProps> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="relative outline-none border-none">
            {/* Image */}
            <img src={img} alt={mainTitle} className="py-1 w-full h-80" />

            {/* Text Overlay */}
            <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]
            -translate-y-[50%] space-y-2 lg:space-y-4 bg-orange-100 sm:bg-transparent p-4 sm:p-0
             rounded-lg sm:rounded-none">
                <h3 className="text-accent text-[24px] lg:text-[28px] font-bold">{title}</h3>
                <p className="text-lg font-semibold">{mainTitle}</p>
                <p className="text-xl font-bold text-red-500">${price}</p>
            </div>
        </div>
    );
};

export default Slide;
