import {
  financeData,
  CustomersData,
  NewDealsData,
  StatesData,
} from "../../data/dashboard.data";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { StarRate } from "@mui/icons-material";
import { useState } from "react";
import GrowthChart from "./GrowthChart";

const Dashboard = () => {
  const [selectedInterval, setSelectedInterval] = useState("yearly");
  const isActive = true;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full flex-grow p-4">
      {/* Using data to loop over similar dataset */}

      <div className="sm:col-span-2 md:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {financeData?.map((item, index) => {
        return (
          <div className={`card flex flex-col w-full ${item?.isProgress ?'items-center':''}`} key={index}>
            <p className="text-lg font-semibold">{item.title}</p>
            <div className="flex flex-col mt-8 mb-12">
              {item?.isProgress && (
                <div className="bg-orange-100 h-5 mb-6 rounded-full overflow-hidden w-full">
                  <div
                    className="bg-orange-300 h-full  rounded-full text-white text-center leading-6"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              )}
              <div
                className="text-5xl  tracking-tight w-full font-semibold"
              >
                {item.percent}%
              </div>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
            <button className={`mt-auto text-xs flex items-center text-orange-700 ${item?.isProgress ?'text-center':''} `}>
              {item.action}
              <ArrowRightAltOutlinedIcon className="text-xs" />
            </button>
          </div>
        );
      })}
      </div>

      {/* Customer and Growth row */}
      <div className="sm:col-span-2 md:col-span-4 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card flex flex-col gap-3">
            <div className="flex justify-between items-center  w-full">
              <p className="text-lg font-semibold">Customers</p>
              <p className="text-sm">
                Sort by <b>Newest</b>
                <KeyboardArrowDownOutlinedIcon />
              </p>
            </div>
            {CustomersData?.map((custoter, index) => {
              return (
                <div className="flex flex-col items-baseline " key={index}>
                  <div
                    className={`flex justify-between w-full ${
                      isActive == custoter.isActive ? "bg-orange-50" : ""
                    } p-5 rounded-2xl`}
                  >
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="capitalize">{custoter.name}</p>
                        <p className="text-slate-500 text-xs capitalize">
                          {custoter.shopName}
                        </p>
                      </div>
                    </div>
                    {isActive == custoter.isActive ? (
                      <div className="flex gap-4 items-center">
                        <SmsOutlinedIcon sx={{ fontSize: ".9rem" }} />
                        <StarBorderOutlinedIcon sx={{ fontSize: ".9rem" }} />
                        <ModeEditOutlineOutlinedIcon
                          sx={{ fontSize: ".9rem" }}
                        />
                        <div>|</div>
                        <MoreVertOutlinedIcon sx={{ fontSize: ".9rem" }} />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
            <button className="mt-auto text-xs flex items-center text-orange-700">
              All Customers
              <ArrowRightAltOutlinedIcon className="text-xs" />
            </button>
          </div>

          {/* Growth Chart */}
          <div className="flex flex-col w-full h-full gap-4">
            <div className="card">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Growth</p>
                <select
                  id="interval"
                  className=" text-gray-900 text-sm p-2.5 outline-none cursor-pointer"
                  value={selectedInterval}
                  onChange={(e) => setSelectedInterval(e.target.value)}
                >
                  <option value="yearly" >
                    Yearly
                  </option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <div>
                <GrowthChart selectedInterval={selectedInterval} />
              </div>
            </div>

            <div className="flex-auto grid grid-cols-3 gap-4">
              <div className="card flex flex-col justify-between ">
                <div className="text-lg font-semibold leading-none tracking-tight text-slate-500 ">
                  Top month
                </div>
                <div>
                  <p className="text-xl text-orange-800 font-bold">Novermber</p>
                  <p className="text-orange-500">2023</p>
                </div>
              </div>
              <div className="card flex flex-col justify-between">
                <div className="text-lg font-semibold leading-none tracking-tight text-slate-500">
                  Top year
                </div>
                <div>
                  <p className="text-xl text-orange-800 font-bold ">2023</p>

                  <p className="text-sm">96K sold so far</p>
                </div>
              </div>
              <div className="card flex flex-col justify-between">
                <div className="text-lg font-semibold leading-none tracking-tight text-slate-500">
                  Top buyer{" "}
                </div>
                <div className="mt-1 text-sm font-medium ">
                  <div className="w-6 h-6">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="font-semibold">Mohd Sharif</p>
                  <p className="text-xs tracking-tight text-slate-500">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:col-span-2 md:col-span-4 flex flex-wrap gap-4">
        <div className=" flex flex-col gap-1 card">
          <p className="font-bold">Chats</p>
          <p className="text-sm text-slate-600">2 unread message</p>
          <div className="flex gap-4 mt-3">
            {CustomersData.map((customer, index) => {
              return (
                <div
                  className={`relative w-12 h-12 p-3 rounded-2xl ${
                    customer.newChat ? "bg-orange-50" : ""
                  }`}
                  key={index}
                >
                  <img
                    src={customer.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card ">
          <p className="font-bold mb-3">Top States</p>
          <div className="flex flex-col gap-3 w-80 overflow-x overflow-hidden">
            {StatesData.map((state, index) => {
              return (
                <div
                  className={`flex justify-between  bg-gradient-to-r from-orange-300 to-orange-100 p-1 px-2 rounded-md`}
                  style={{ width: `${state.width}%` }} key={index}
                >
                  <p className="font-bold">{state.code} </p>
                  <p>{state.value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 card">
          <p className="font-bold mb-3">New Deals</p>
          <div className="flex flex-wrap gap-3">
            {NewDealsData.map((deal, index) => {
              return (
                <div className="bg-orange-50 p-3 rounded-xl" key={index}>
                  <span className="border border-orange-400 p-.5 roundede-xl text-orange-400 rounded-md mr-2">
                    <span className="p-1 text-center">+</span>
                  </span>
                  <span className="capitalize text-orange-800 font-medium text-sm">
                    {deal.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
