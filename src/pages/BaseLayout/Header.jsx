import React from "react";
import LogoPMI from "../../assets/LogoPMI.png"
import HeaderItem from "./HeaderItem";
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (

    <div className='w-full h-20 border-b-2 border-red-500'>
      <div className='flex justify-between'>
        <img className='h-16 pl-3 pt-3' src={LogoPMI} alt="logoPMI"/>

        <div className='flex flex-row-reverse'>
            <HeaderItem title="Login" path="/login" />
            <HeaderItem title="Project" path="/project" />
            <HeaderItem title="Emergencies" path="/emergencies" />
            <HeaderItem title="Relawan" path="/relawan" />
            <HeaderItem title="Home" path="/" />
        </div>
      </div>

      <div className="p-5 w-full mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;