import React from 'react'
import { skillsIcons } from '../Data'
import '../App.css'


const Skills = () => {
    return (
        <section id="skills" className="component_gap upper_gap">

            <div className='m-4'>
                <div className="text-center mb-5">
                    <h1 className="myHeading">My Skills</h1>
                </div>
                <div className="container">
                    <div className=" row justify-content-center">
                        <div className=" col-lg-8 mx-auto">
                            <div className="row">
                                {skillsIcons.map((skill, index) => <div key={index} style={{ fontSize: '80px' }}
                                    className="borderEffect text-center col-lg-4 col-md-4 col-sm-6 p-3">{skill.icon}
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills
