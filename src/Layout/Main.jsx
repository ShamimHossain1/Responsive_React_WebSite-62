import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import LeftNav from '../pages/Shared/Leftnav/LeftNav';
import RightNav from '../pages/Shared/Rightnav/RightNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-12 gap-4">
                <div className=" bg-slate-500 col-span-3 ">
                    <LeftNav></LeftNav>

                </div>
                <div className="bg-slate-500 col-span-6">
                    <h2>Main coming</h2>

                </div>
                <div className="bg-slate-500 col-span-3">
                    <RightNav></RightNav>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;