import React, { createContext, useContext, useState } from "react";
import Logo from "../../components/logo/Logo";
import Search from "../../components/search/Search";
import Naviagtion from "../../components/navigation/Naviagtion";
import User from "../../components/user/User";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

export const CollapsedState = createContext(false)

const VerticalNavigation= () => {

  const [collapsed, setCollapsed] = useState<boolean>(false);


  return (
    <CollapsedState.Provider value={collapsed}>
    <div className={`flex flex-col bg-white text-black p-6 overflow-hidden ${
      collapsed ? "w-20 items-center" : "w-96"
    } transition-all`}>
      <Logo  />
      <Search  />
      <Naviagtion  />
      <div className="relative mt-auto">
      <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute bottom-56 -right-9  bg-gray-100 rounded-2xl w-10 p-1 text-gray-500"
        ><ChevronLeftOutlinedIcon sx={{fontSize:'1.2rem'}} className={` ${collapsed&&'rotate-180'}`}/></button>
        <User />
      </div>
    </div>
      </CollapsedState.Provider>
  );
};

export default VerticalNavigation;
