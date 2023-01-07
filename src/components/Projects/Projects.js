import React from 'react';
import Project from './Project';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => {
    return (
        <div className=' mt-20'>
            <AnimationOnScroll animateIn="animate__flip">
                <h4 className='text-3xl font-bold text-purple-600 text-center animate__animated animate__flip'>My Projects</h4>
            </AnimationOnScroll>
            <div>
                <Project></Project>
            </div>
        </div>
    );
};

export default Projects;