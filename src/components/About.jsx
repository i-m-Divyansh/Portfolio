import React from 'react'
import profile1 from '../images/profile1.png'


const About = () => {

    const mySelf =
        "A Introvert Who loves to code in Dark (Js Mostly) , Small Eyes Big Dreams (Self-Motivated💪) , Wrote a piece of code 3 years ago, it was fun so that’s what I have been doing till date. Also, a addicted music lover & gymfreak.😄"

    //
    return (
        <section id='about' className="component_gap upper_gap">
            <div className="container">
                <h1 className="myHeading">About</h1>

                <div className="col-md-10 row mx-auto d-flex align-items-center">

                    <div className="col-md-6 image_div">
                        <img src={profile1} alt="myImg" />
                    </div>

                    <div className="col-md-6 text-center">
                        <h2>A Little about myself</h2>
                        <p style={{ fontFamily: 'Seorge ui' }}>{mySelf}</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
