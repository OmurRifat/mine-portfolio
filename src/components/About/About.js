import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import img1 from '../../assets/Images/rifat_3-removebg-preview (2).png'

const About = () => {
    return (
        <div className=' flex items-center justify-center'>
            <div className=' flex-1'>
                <h2 className=' text-4xl font-semibold '>Hey, This is <span className=' font-bold text-purple-700'>H. M. Jabed Omur Rifat</span></h2>
                <TypeAnimation
                    sequence={ ['MERN Stack Developer', 1000, 'Frontend Developer', 1000, 'React.js Developer', 1000] }
                    //  Replacing previous Text
                    wrapper="h4"
                    className=' font-bold text-2xl flex-nowrap text-purple-900 mt-2 mb-4'
                    repeat={ Infinity }
                />
                <p>
                    I am H. M. Jabed Omur Rifat from Comilla, Bangladesh. Currently I am working on MERN Stack projects where I use all the necessary technologies related to the MERN project. Previously I learned developing web applications from Programming Hero. Apart from that, currently I am studing at Khulna  University in Electronics and Communication Engineering discipline. I am very much confident to cope up with new or updated technoliges. There are some words that are relevant to descrive myself like, repenter, self-criticizer, optimist, positive. Oh, one more thing I forgot to mention is that I love to dream, I always dream beyond my limits which fuels me to work hard.
                </p>
                <Link to='/contact'><button className=' px-8 py-4 bg-purple-600 hover:bg-purple-800 rounded-lg text-white font-bold my-4'>Get In Tuch</button></Link>
            </div>
            <div className='flex-1 '>
                <img className=' mx-auto ' src={ img1 } alt="" />
            </div>

        </div>
    );
};

export default About;