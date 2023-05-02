import { Button, ListGroup } from 'flowbite-react';
import React from 'react';
import { FaBeer, FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Qzone from '../Q-Zone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className='mb-2 mt-2'>
                <button className='bg-white text-blue-600 gap-2 text-lg w font-semibold w-full flex items-center justify-center border border-blue-600 rounded-lg py-3 '>
                    <FaGoogle></FaGoogle>   Login With Google
                </button>
            </div>
            <div>
                <button className='bg-white text-gray-600 font-semibold gap-2 text-lg w-full flex items-center justify-center border border-gray-600 rounded-lg py-3 '>
                    <FaGithub></FaGithub> Login With GitHub
                </button>
            </div>
            <div className="text-center">
                <h2 className='p-2'>Find us</h2>
                <ListGroup>
                    <ListGroup.Item                       
                    >
                        Profile
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Settings
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Messages
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Download
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;