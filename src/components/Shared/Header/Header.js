import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import img from '../../../assets/Icons/Black And White Rakia Design Studio Logo (2).png'

const Header = () => {
    return (
        <Navbar
            fluid={ true }
            rounded={ true }
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={ `${img}` }
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Get Resume
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={ true }
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Projects
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Blogs
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;