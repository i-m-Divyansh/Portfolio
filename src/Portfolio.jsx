import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blogs from './components/Blogs'

const Portfolio = () => {
    return (
        <div className="container-fluifd">
            <Navbar />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio;
