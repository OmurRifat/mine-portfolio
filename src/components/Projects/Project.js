import { Card } from 'flowbite-react';
import React from 'react';
import img1 from '../../assets/Images/Screenshot_1.png'
import img2 from '../../assets/Images/Screenshot_2.png'
import img3 from '../../assets/Images/Screenshot_3.png'

const Project = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-3 mt-10'>
            <div className="max-w-sm">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={ img1 }
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Camera Finder - A Camera Reselling Website
                    </h5>
                    <button className=' px-8 py-4 bg-purple-600 font-bold text-white rounded-lg'>
                        View Details
                    </button>
                </Card>
            </div>
            <div className="max-w-sm">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={ img2 }
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Book Store - An Online Book Store
                    </h5>
                    <button className=' px-8 py-4 bg-purple-600 font-bold text-white rounded-lg'>
                        View Details
                    </button>
                </Card>
            </div>
            <div className="max-w-sm">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={ img3 }
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Education Care - An Online Learning Platform
                    </h5>
                    <button className=' px-8 py-4 bg-purple-600 font-bold text-white rounded-lg'>
                        View Details
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default Project;