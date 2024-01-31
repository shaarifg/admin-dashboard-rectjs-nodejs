import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useContext } from "react";
import { CollapsedState } from "../../comp/vertical-navigation/VerticalNavigation";

const User = () => {
  const user = {
    photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    isAdmin: true,
    name: "Mohd Sharif",
  };

  const collapsed = useContext(CollapsedState)
  console.log(collapsed)
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex-1 flex gap-3 items-center jus">
        <div className="h-8 w-8 rounded-full">
        <img
          className=" object-cover"
          src={user.photo} // Replace with the actual source of the user's photo
          alt={`${user.name}'s photo`}
          />
          </div>
        {!collapsed&&<div>
          <p className="text-md font-semibold">{user.name}</p>
          {user.isAdmin && (
            <p className="text-xs bg-orange-300 rounded-2xl text-center max-w-min px-2  tracking-tight font-semibold">Admin</p>
          )}
        </div>}
      </div>
      <ul className="flex flex-col gap-3">
        <li className=" flex items-center gap-3 hover:bg-orange-50 rounded-full p-2">
          <SettingsSuggestOutlinedIcon  className="text-gray-500" />
          {!collapsed&&<a href="">Settings</a>}
        </li>
        <li className=" flex items-center gap-3 hover:bg-orange-50 rounded-full p-2 text-red-700 ">
          <LogoutOutlinedIcon  className=" text-red-700"/>
          {!collapsed&&<a href="">Logout</a>}
        </li>
      </ul>
    </div>
  );
};

export default User;
