import { Carousel } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img1 from '../../assets/Images/Screenshot_1.png'
import img2 from '../../assets/Images/Screenshot_4.png'
import img3 from '../../assets/Images/Screenshot_5.png'
import img4 from '../../assets/Images/Screenshot_6.png'

const ProjectDetails1 = () => {
    return (
        <div>
            <div className=" h-60 sm:h-64 xl:h-80 2xl:h-96">
                <PhotoProvider>
                    <Carousel>
                        <PhotoView src={ img1 }>
                            <img
                                src={ img1 }
                                alt="..."
                            />
                        </PhotoView>
                        <PhotoView src={ img2 }>
                            <img
                                src={ img2 }
                                alt="..."
                            />
                        </PhotoView>
                        <PhotoView src={ img3 }>
                            <img
                                src={ img3 }
                                alt="..."
                            />
                        </PhotoView>
                        <PhotoView src={ img4 }>
                            <img
                                src={ img4 }
                                alt="..."
                            />
                        </PhotoView>
                    </Carousel>
                </PhotoProvider>
            </div>
            <h4 className=' text-2xl font-bold text-purple-700 mt-5 '>Key Features Are:</h4>
            <ul>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Online Based Camera Reselling Platform.</li>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Single Page Application with Admin, Seller & Buyer Dashboard.</li>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Database Integration, Implementing Authentication & Authorization, Secure
                    Token using JWT.</li>
            </ul>
            <button className=' px-8 py-4 bg-purple-600 rounded-lg text-white font-bold ml-4 mt-4 hover:bg-purple-800'>Live Site</button>
            <button className=' px-8 py-4 bg-purple-600 rounded-lg text-white font-bold ml-4 mt-4 hover:bg-purple-800'>Code Link</button>
        </div>
    );
};

export default ProjectDetails1;