import React from 'react';
import LeftBarSide from "./LeftBarSide.jsx";
import RightBarSide from "./RightBarSide.jsx";

const MasterLayout = (props) => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
               <div className="flex justify-between">
                   <div>
                       <LeftBarSide/>
                   </div>
                   <div className="mx-5 my-8">
                       {props.children}
                   </div>
                   <div className="">
                       <RightBarSide/>
                   </div>
               </div>
            </div>
        </>
    );
};

export default MasterLayout;