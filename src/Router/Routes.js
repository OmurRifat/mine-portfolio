import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import ProjectDetails1 from "../components/ProjectDetails/ProjectDetails1";
import ProjectDetails2 from "../components/ProjectDetails/ProjectDetails2";
import ProjectDetails3 from "../components/ProjectDetails/ProjectDetails3";
import Projects from "../components/Projects/Projects";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blogs',
                element: <Blogs />

            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: '/project-details-1',
                element: <ProjectDetails1 />
            },
            {
                path: '/project-details-2',
                element: <ProjectDetails2 />
            },
            {
                path: '/project-details-3',
                element: <ProjectDetails3 />
            }
        ]
    }
])

export default router;