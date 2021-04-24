import React from 'react'
import Typical from "react-typical";
import coding from '../images/coding.png'


const Banner = () => {
    return (
        <>
            <section id="home" className="component_gap upper_gap">
                <div className="container col-md-9 mx-auto">

                    <div className="row align-items-center mx-auto">
                        <div className="col-md-5">
                            <h2>Hi</h2>
                            <h1 className="myName">I'm Divyansh</h1>
                            <h1>
                                <Typical
                                    steps={['Learner', 1000, 'Tech Geek', 1000, 'Self Taught Developer', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h1>

                            <div className="d-flex align-items-center">
                                <button className="col m-2 myBtn no_lm">
                                    <a
                                        className="no-decoration-link"
                                        target='#'
                                        href="mailto:divyanshbasera36@gmail.com">
                                        Contact
                                </a>
                                </button>
                                <button className="col offBtn">
                                    <a
                                        className="no-decoration-link"
                                        target="#"
                                        href="https://drive.google.com/file/d/1TcaPV0LBOHb68tXUyW7S2BtVBWd2cX7F/view?usp=sharing">
                                        Resume
                                </a>
                                </button>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="image_div">
                                <img src={coding} alt="Banner_image" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Banner
