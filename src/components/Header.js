import React from "react";
import Logo from "../assets/logo.jpg"
import Avatar from "../assets/image-avatar.png"
import Cartbtn from "../assets/icon-cart.svg"

const Header = () => {
    return (
        <>
            <header> 
                <div className="header-colLogo">
                    <img src={Logo} />
                    <nav className="menu-wrap">
                        <button className="menu-btn active">Collections</button>
                        <button className="menu-btn">Men</button>
                        <button className="menu-btn">Women</button>
                        <button className="menu-btn">About</button>
                        <button className="menu-btn">Contact</button>
                    </nav>
                </div>
                
                <div className="header-colData">
                    <div className="header-cartBtn">
                        <img src={Cartbtn}/>
                    </div>
                    <div className="header-userWrap">
                        <img src={Avatar}/>
                    </div>
                </div>
                </header>
        </>
    )
}

export default Header