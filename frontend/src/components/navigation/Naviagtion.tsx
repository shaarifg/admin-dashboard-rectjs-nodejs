import React, { useContext, useState } from "react";
import { NavigationData } from "../../data/navigation.data";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import Icon from '@mui/material/Icon';
import { CollapsedState } from "../../comp/vertical-navigation/VerticalNavigation";



const Naviagtion = () => {
  const collapsed = useContext(CollapsedState)
    const [showSubNav, setShowSubNav] = useState(null);
    const handleSubNavToggle = (index:any) => {
        setShowSubNav(showSubNav === index ? null : index);
      };
  return (
    <nav >
      <ul>
      {NavigationData.map((navItem, idx) => {
        const hasSubNav = navItem.childLabels && navItem.childLabels.length > 0;

        return (
          <li
            key={idx}
            className={`relative hover:bg-orange-50 hover:text-orange-700 p-3 text-sm ${!showSubNav?'rounded-full':'rounded-2xl' }`}
          >
            <div className="flex items-center gap-3">
              {/* Your icon component */}
              <Icon className="text-gray-500 hover:text-orange-400" sx={{fontSize:'1rem'}}>{navItem.icon}</Icon>
              {!collapsed&&<a href="#" > {navItem.label}</a>}
            </div>
            {hasSubNav &&!collapsed && (
              <div
                onClick={() => handleSubNavToggle(idx)}
                className="cursor-pointer"
              >
                <KeyboardArrowDownOutlinedIcon className={`absolute right-0 top-2 ${showSubNav&&'rotate-180'}`} />
              </div>
            )}
            {hasSubNav && !collapsed&& showSubNav === idx && (
              <div className="px-8">
                {navItem.childLabels?.map((subItem, subIdx) => (
                  <div key={subIdx} className="flex flex-col hover:text-orange-700">
                    {/* Your sub-item icon component */}
                    <Icon className="text-sm" >{subItem.icon}</Icon>
                    <a href="">{subItem.label}</a>
                  </div>
                ))}
              </div>
            )}
          </li>
        );
      })}
      </ul>
    </nav>
  );
};

export default Naviagtion;
