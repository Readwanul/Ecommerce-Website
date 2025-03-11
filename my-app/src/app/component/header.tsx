import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
import React from "react";

const Header =()=> {

    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <FaFacebookSquare/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <FaTwitterSquare/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <FaInstagramSquare/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <FaLinkedin/>
                        </div>
                    </div>
                    <div className="text-gray-500 text-[20px]">
                        <b>Free Shipping</b>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
  
};

export default Header;