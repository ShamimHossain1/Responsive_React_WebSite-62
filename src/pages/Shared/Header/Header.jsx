import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} className='mx-auto' alt="" />
                <h2><small className='text-lg font-semibold text-slate-500'>Journalism Without Fear or Favour</small></h2>
                <p className='text-lg font-semibold text-slate-600'>{moment().format("dddd, MMMM Do, YYYY")}</p>
                <div className='flex gap-5 bg-slate-200 py-2 px-5'>
                    <Button color="dark">
                        Latest
                    </Button>
                    <Marquee className='text-red-500 font-semibold  ' speed={50}>
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>

                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Flowbite
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Bonnie Green
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    name@flowbite.com
                                </span>
                            </Dropdown.Header>

                            <Dropdown.Item>
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                        <Button>Login</Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link
                            href="/navbars"
                            active={true}
                        >
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            About
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Services
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Pricing
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Contact
                        </Navbar.Link>
                    </Navbar.Collapse>
                    
                </Navbar>


            </div>
        </div>
    );
};

export default Header;