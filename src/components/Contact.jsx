import React from 'react'
import { social_Links } from '../Data';
import myImg from "../images/myImg.jpg"


const Contact = () => {
    // return
    return (
        <section id="contact" className="component_gap upper_gap">
            <div className="container">

                <div className="profile_img_div mb-4">
                    <img src={myImg} alt="profile" />
                </div>
                <h4 className='text-center'>Say, Hi to me... 👋</h4>
                <div className="social_div">
                    {social_Links.map((link, index) => <h1
                        className="social_icon"
                        key={index}>
                        <a
                            target="#"
                            href={link.link}>{link.icon}
                        </a>
                    </h1>)}
                </div>

            </div>
        </section>
    )
}

export default Contact;
