import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
                <img src={logo} className='mx-auto' alt="" />
                <h2><small className='text-lg font-semibold text-slate-500'>Journalism Without Fear or Favour</small></h2>
                <p className='text-lg font-semibold text-slate-600'>{moment().format("dddd, MMMM Do, YYYY")}</p>


            </div>
        </div>
    );
};

export default Header;