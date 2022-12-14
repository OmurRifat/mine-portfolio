import React from 'react';
import img1 from '../../assets/Images/Screenshot_2.png'
import img2 from '../../assets/Images/Screenshot_7.png'
import img3 from '../../assets/Images/Screenshot_8.png'
import img4 from '../../assets/Images/Screenshot_9.png'
import img5 from '../../assets/Images/Screenshot_10.png'
import { Carousel } from 'flowbite-react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectDetails2 = () => {
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
                        <PhotoView src={ img5 }>
                            <img
                                src={ img5 }
                                alt="..."
                            />
                        </PhotoView>
                    </Carousel>
                </PhotoProvider>
            </div>
            <h4 className=' text-2xl font-bold text-purple-700 mt-5 '>Key Features Are:</h4>
            <ul>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Online Book Management Site.</li>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Single Page Application.</li>
                <li className=' ml-5 mt-2 text-lg'> ={ '>' } Database Integration, Implementing Authentication & Authorization, Secure
                    Token using JWT.</li>
            </ul>
            <a href="https://book-store-36.web.app/"><button className=' px-8 py-4 bg-purple-600 rounded-lg text-white font-bold ml-4 mt-4 hover:bg-purple-800'>Live Site</button></a>
            <a href="https://github.com/OmurRifat/book-store-client"><button className=' px-8 py-4 bg-purple-600 rounded-lg text-white font-bold ml-4 mt-4 hover:bg-purple-800'>Code Link</button></a>
        </div>
    );
};

export default ProjectDetails2;