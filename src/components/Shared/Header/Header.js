import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import img from '../../../assets/Icons/Black And White Rakia Design Studio Logo (2).png'

const Header = () => {
    return (
        <Navbar
            fluid={ true }
            rounded={ true }
        >
            <Navbar.Brand href="/">
                <img
                    src={ `${img}` }
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <button className=' bg-purple-700 text-white font-medium px-7 py-3 rounded-lg'>
                    Get Resume
                </button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={ true }
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/projects">
                    Projects
                </Navbar.Link>
                <Navbar.Link href="/blogs">
                    Blogs
                </Navbar.Link>
                <Navbar.Link href="/about">
                    About
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;