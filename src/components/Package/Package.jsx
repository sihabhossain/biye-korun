import React from "react";
import { TopBar } from "../TopBar";
import { Search } from "lucide-react";
import filterIcon from "../../assets/filter.png";
import plus from "../../assets/plus.png";
import update from "../../assets/update.png";
import PackageTable from "./PackageTable";

const Package = () => {
  return (
    <div className="px-5">
      <TopBar title={"Package"}></TopBar>

      {/* Header */}
      <div className="bg-white h-[875px] mt-7 rounded-lg p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-semibold">Package List</h2>
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

            <div className="flex items-center space-x-5">
              <button className="text-white bg-gradient-to-r from-[#CF1867] via-[#DF1E52] to-[#FA272F]  rounded-lg btn btn-ghost">
                <img src={filterIcon} alt="" /> <p>Filter</p>
              </button>
              <button className="text-white bg-[#076A49] rounded-lg btn btn-ghost">
                <img src={plus} alt="" /> <p>Create New Package</p>
              </button>
              <button className="text-white bg-[#076A49]  rounded-lg btn btn-ghost">
                <img src={update} alt="" /> <p>Update Default Package</p>
              </button>
            </div>
          </div>
        </div>

        <PackageTable></PackageTable>
      </div>
    </div>
  );
};

export default Package;
