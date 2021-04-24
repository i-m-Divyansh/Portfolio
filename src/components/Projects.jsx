import React, { useState } from 'react';
import { projectData } from "../Data";
import { GoMarkGithub } from "react-icons/go";
import { ImEye } from "react-icons/im";
import CategoriesComponent from './CategoryComponent';

const allCategories = projectData.map((project) => project.category)
const uniqueCategories = ['All', ...new Set(allCategories)]

const Projects = () => {

    // Hooks
    const [MyProjects, setMyProjects] = useState(projectData);
    const [Categories] = useState([...uniqueCategories]);
    const [ActiveBtn, setActiveBtn] = useState('All')

    // project filtering method
    const projectHandler = (Category) => {
        if (Category === 'All') {
            setActiveBtn("All");
            setMyProjects(projectData);
            return 0;
        }
        const newItems = projectData.filter((item) => item.category === Category)
        setActiveBtn(Category);
        setMyProjects(newItems);
    }

    // return
    return (
        <section id="projects" className="component_gap upper_gap">

            <div className='container mb-5'>
                <h1 className="text-center mb-5 myHeading">My Projects</h1>
                <CategoriesComponent
                    Categories={Categories}
                    projectHandler={projectHandler}
                    ActiveBtn={ActiveBtn}
                />
                <div>
                    {
                        MyProjects.map((project, index) => <div key={index} className="col-md-10 mx-auto card text-center borderEffect p-5 mb-4">
                            <div>
                                <div className=" mb-5">
                                    <h1 className="mb-3">{project.name}</h1>
                                    <h5>{project.description}</h5>
                                </div>
                                <div className="d-flex justify-content-around align-items-center">
                                    <div className="col-md-6">
                                        <h3>
                                            <a className="no-decoration-link"
                                                target="#"
                                                href={project.liveDemo}
                                            >View Demo </a>
                                            <ImEye />
                                        </h3>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="github_link">
                                            <a className=" no-decoration-link"
                                                target="#"
                                                href={project.githubLink}
                                            >View Code </a>
                                            <GoMarkGithub />
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
            </div>

        </section>
    )
}

export default Projects;
