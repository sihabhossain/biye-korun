import React from "react";
import notifyIcon from "../assets/notify.png";
import user from "../assets/user.png";
import { ChevronDown } from "lucide-react";

export const TopBar = ({ title }) => {
  return (
    <div className="w-[78vw] flex items-center justify-between ">
      {/* Title */}
      <div className="text-2xl text-[#575A61] font-semibold ">{title}</div>

      <div className="flex items-center space-x-3">
        {/* Icon */}
        <div>
          <div className="dropdown">
            <div tabIndex={0}>
              <img
                className="bg-white p-2 rounded-full cursor-pointer"
                src={notifyIcon}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <a>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
            </ul>
          </div>
        </div>

        {/* user */}

        <div className="dropdown">
          <div tabIndex={0}>
            <div className="flex items-center bg-white py-1 px-2 cursor-pointer rounded-md">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex items-center">
                <h2 className="text-[#575A61] font-semibold mx-2">
                  Shiblu Ahmed
                </h2>

                <ChevronDown className="text-[#575A61]"></ChevronDown>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a className="text-orange-700 ">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
