import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div className=' mt-20'>
            <h4 className='text-3xl font-bold text-purple-600 text-center'>My Projects</h4>
            <div>
                <Project></Project>
            </div>
        </div>
    );
};

export default Projects;