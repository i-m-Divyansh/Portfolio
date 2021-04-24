import React, { useState, useEffect } from 'react';
import "../App.css";
import { nav_Links } from '../Data';
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {

    // useState hook
    const [ChangeNavbar, setChangeNavbar] = useState(false);

    // useEffect
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setChangeNavbar(true);
            } else setChangeNavbar(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    // logo
    const logo = "<DivyAnsh/>";

    // return
    return (
        <section>

            <>
                <nav className={`navbar navbar-dark navbar-expand-md myNavbar ${ChangeNavbar && "myCardNavbar"}`}>
                    <div className="container d-flex align-items-center ">
                        <h3 className="myLogo"><a href="#">{logo}</a></h3>
                        <button data-toggle="collapse" className="navbar-toggler mySideBtn" data-target="#navcol-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className=""><RiMenu3Fill /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav text-center text-white ml-auto myUl">
                                {
                                    nav_Links.map((item, i) =>
                                        <li key={i} className="nav-item" role="presentation">
                                            <a href={item.id} className="nav-link" to="/cart">{item.name}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </section>
    )
}


export default Navbar;
