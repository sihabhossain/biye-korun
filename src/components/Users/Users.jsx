import React from "react";
import { TopBar } from "../TopBar";
import UsersTable from "./UsersTable";
import filterIcon from "../../assets/filter.png";
import { Search } from "lucide-react";

const Users = () => {
  return (
    <div className="px-5">
      <TopBar title={"Users"}></TopBar>

      {/* Header */}
      <div className="bg-white h-[875px] mt-7 rounded-lg p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-semibold">User List</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <div className="relative">
                <input
                  className="pl-3  w-[300px] outline-none rounded-lg py-3 bg-[#F5F5F5]"
                  type="search"
                  placeholder="search..."
                />

                <div className="absolute top-3 right-4">
                  <Search></Search>
                </div>
              </div>
            </div>

            <div>
              <button className="text-white bg-gradient-to-r from-[#CF1867] via-[#DF1E52] to-[#FA272F]  rounded-lg btn btn-ghost">
                <img src={filterIcon} alt="" /> <p>Filter</p>
              </button>
            </div>
          </div>
        </div>

        <UsersTable></UsersTable>
      </div>
    </div>
  );
};

export default Users;
