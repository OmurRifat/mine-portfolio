import { Carousel } from 'flowbite-react';
import React from 'react';
import img1 from '../../assets/Images/Screenshot_1.png'
import img2 from '../../assets/Images/Screenshot_4.png'
import img3 from '../../assets/Images/Screenshot_5.png'
import img4 from '../../assets/Images/Screenshot_6.png'

const ProjectDetails1 = () => {
    return (
        <div>
            <div className=" h-60 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src={ img1 }
                        alt="..."
                    />
                    <img
                        src={ img2 }
                        alt="..."
                    />
                    <img
                        src={ img3 }
                        alt="..."
                    />
                    <img
                        src={ img4 }
                        alt="..."
                    />
                </Carousel>
            </div>
            <h4 className=' text-2xl font-bold text-purple-700 mt-5 '>Key Features Are:</h4>
            <ul>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Online Based Camera Reselling Platform.</li>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Single Page Application with Admin, Seller & Buyer Dashboard.</li>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Database Integration, Implementing Authentication & Authorization, Secure
                    Token using JWT.</li>
            </ul>
        </div>
    );
};

export default ProjectDetails1;