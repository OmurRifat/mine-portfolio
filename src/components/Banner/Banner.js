import React from 'react';
import { Link } from 'react-router-dom';
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
                    className=' font-bold text-2xl flex-nowrap text-purple-900 mt-2 mb-4'
                    repeat={ Infinity }
                />
                <p>
                    I am highly disciplined, and a quick learner. I am passionate about enhancing and developing my <br /> skills and making sure my projects are best fitted. You'll find me hardworking, always seeking improvement<br /> and betterment, and fiercely ambitious.
                </p>
                <Link to='/contact'><button className=' px-8 py-4 bg-purple-600 hover:bg-purple-800 rounded-lg text-white font-bold my-4'>Get In Tuch</button></Link>
            </div>
            <div>
                <img src={ img } alt="" />
            </div>
        </div>
    );
};

export default Banner;