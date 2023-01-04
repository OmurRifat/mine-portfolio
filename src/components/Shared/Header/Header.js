import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/Icons/Black And White Rakia Design Studio Logo (2).png'

const Header = () => {
    return (
        <Navbar
            fluid={ true }
            rounded={ true }
        >
            <Link to="/">
                <img
                    src={ `${img}` }
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
            </Link>
            <div className="flex md:order-2 ">
                <a
                    href="https://drive.google.com/u/0/uc?id=1tLGRCEK5lJ0eu44NnkN5MjQz_IjiQDxL&export=download"
                >
                    <button className=' bg-purple-600 hover:bg-purple-800 text-white font-medium px-7 py-3 rounded-lg'>
                        Get Resume
                    </button>
                </a>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link
                    to="/"
                    active={ true }
                >
                    Home
                </Link>
                <Link to="/projects">
                    Projects
                </Link>
                <Link to="/blogs">
                    Blogs
                </Link>
                <Link to="/about">
                    About
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;