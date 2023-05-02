import React from 'react';
import Header from '../pages/Shared/Header/Header';

import LeftNav from '../pages/Shared/Leftnav/LeftNav';
import RightNav from '../pages/Shared/Rightnav/RightNav';
import Foooter from '../pages/Shared/Footer/Foooter';


const Main = () => {
    return (
        <div className='my-5 px-72'>
            <Header></Header>
            <div className="grid grid-cols-12 gap-4 my-14">
                <div className=" col-span-3 ">
                    <LeftNav></LeftNav>

                </div>
                <div className="bg-slate-500 col-span-6">
                    <h2>Main coming</h2>

                </div>
                <div className=" col-span-3">
                    <RightNav></RightNav>

                </div>
            </div>
           <Foooter></Foooter>

        </div>
    );
};

export default Main;