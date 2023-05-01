import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'flowbite-react';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='my-5 px-72'>
            <div className='text-center'>
                <img src={logo} className='mx-auto' alt="" />
                <h2><small className='text-lg font-semibold text-slate-500'>Journalism Without Fear or Favour</small></h2>
                <p className='text-lg font-semibold text-slate-600'>{moment().format("dddd, MMMM Do, YYYY")}</p>
                <div className='flex gap-5'>
                    <Button color="dark">
                        Latest News
                    </Button>
                    <Marquee className='text-red-500 font-semibold  ' speed={50}>
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>


            </div>
        </div>
    );
};

export default Header;