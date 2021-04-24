import { GrLinkedin, GrGithub, GrInstagram, GrFacebook } from 'react-icons/gr'
import { FaDev } from 'react-icons/fa';

const skillsIcons = [
    {
        icon: <i className="devicon-html5-plain-wordmark colored"></i>
    },
    {
        icon: <i className="devicon-css3-plain-wordmark colored"></i>
    },
    {
        icon: <i className="devicon-javascript-plain colored"></i>
    },
    {
        icon: <i className="devicon-bootstrap-plain colored"></i>
    },
    {
        icon: <i className="devicon-cplusplus-plain colored"></i>
    },
    {
        icon: <i className="devicon-react-original colored"></i>
    },
    {
        icon: <i className="devicon-express-original colored"></i>
    },
    {
        icon: <i className="devicon-nodejs-plain colored"></i>
    },
    {
        icon: <i className="devicon-mongodb-plain-wordmark colored"></i>
    },

];


const projectData = [
    {
        name: "🛒 D-Cart ",
        description: "A Basic E-commerce website with all functionality.",
        category: "MERN",
        liveDemo: "https://d-cart.netlify.app/",
        githubLink: "#"
    },
    {
        name: "📊 Expense Tracker",
        description: "A Simple expense tracker made in ReactJs with Bootstrap.",
        category: "ReactJs",
        liveDemo: "https://i-m-divyansh.github.io/expensetracker/",
        githubLink: "https://github.com/i-m-Divyansh/expensetracker"
    },
    {
        name: "🗒 Notekeeper",
        description: "A Simple yet Powerful Webapp for keeping Notes Safe & Secure.",
        category: "MERN",
        liveDemo: "https://dnotekeeper.netlify.app/",
        githubLink: "#"
    },
    {
        name: "🎬 Netflix-Home-Clone",
        description: "A Netflix Homepage clone made in ReactJs with a smooth-scroll & tmdb Api",
        category: "ReactJs",
        liveDemo: "https://i-m-divyansh.github.io/netflix-clone/",
        githubLink: "https://github.com/i-m-Divyansh/netflix-clone"
    },
    {
        name: "📄 Signup-form",
        description: "A Simple signup form with Redux and custom validations.",
        category: "ReactJs",
        liveDemo: "https://dsignup.netlify.app/",
        githubLink: "https://github.com/i-m-Divyansh/Signup-form"
    },
];


const social_Links = [
    {
        icon: <GrGithub />,
        link: "https://github.com/i-m-Divyansh"
    },
    {
        icon: <GrLinkedin />,
        link: "https://www.linkedin.com/in/divyansh-basera-217496180/"
    },
    {
        icon: <GrFacebook />,
        link: "https://www.facebook.com/divyansh.k.basera/"
    },
    {
        icon: <FaDev />,
        link: "https://dev.to/imdivyansh"
    },
    {
        icon: <GrInstagram />,
        link: "https://www.instagram.com/introvertcoder.in/"
    },
]

const nav_Links = [
    {
        name: "About",
        id: "#about"
    },
    {
        name: "Skills",
        id: "#skills"
    },
    {
        name: "Projects",
        id: "#projects"
    },

    {
        name: "Blogs",
        id: '#blogs'
    },
    {
        name: "Contact",
        id: "#contact"
    },
]

export { skillsIcons, projectData, social_Links, nav_Links };