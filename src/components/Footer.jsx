import React from 'react'

const Footer = () => {

    const myName = "Divyansh";
    const currentYear = new Date().getFullYear();

    // return
    return (
        <div className="myFooter col">
            <h6> © copyrights {currentYear} | Made By
             <span><a target="#" href="https://www.facebook.com/divyansh.k.basera/"> {myName} </a></span>
             with 💕 & ReactJs.</h6>
        </div>
    )
}

export default Footer;
