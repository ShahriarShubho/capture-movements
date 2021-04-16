import React from 'react';
import Navbars from '../../ShareMultipleComponents/Navbar/Navbar';
import HeaderSlider from './HeaderSlider/HeaderSlider';

const Header = () => {
    return (
        <header>
           <Navbars/>
           <HeaderSlider/>
            <div className="d-flex justify-content-between p-4 bg-dark text-white">
            <h4>RETURN THE ORIGINAL FORM TO YOUR GADGET. CALL US</h4>
           <button className="btn-sm btn-primary font-weight-bold font-italic">CONTRACT US</button> 
            </div>
        </header>
    );
};

export default Header;