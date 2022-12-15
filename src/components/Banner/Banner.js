import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from '../../assets/Images/rifat_3-removebg-preview (2).png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div>
                <h2 className=' text-4xl font-semibold '>Hey, This is <span className=' font-bold text-purple-700'>H. M. Jabed Omur Rifat</span></h2>
                <TypeAnimation
                    sequence={ ['MERN Stack Developer', 1000, 'Frontend Developer', 1000, 'React.js Developer', 1000] }
                    //  Replacing previous Text
                    wrapper="h4"
                    className=' font-bold text-2xl flex-nowrap text-purple-900'
                    repeat={ Infinity }
                />
            </div>
            <div>
                <img src={ img } alt="" />
            </div>
        </div>
    );
};

export default Banner;