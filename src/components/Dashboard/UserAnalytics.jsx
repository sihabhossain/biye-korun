import React from "react";
import { BarChart } from "./BarChart";
import TimeOnSite from "./TimeOnSite";

const UserAnalytics = () => {
  return (
    <div className="flex space-x-10 mt-10">
      <div className="w-4/6 max-h-[500px]  shadow-md p-5 rounded-lg">
        <BarChart></BarChart>
      </div>
      <div className="w-2/6 max-h-[500px] ">
        <TimeOnSite></TimeOnSite>
      </div>
    </div>
  );
};

export default UserAnalytics;
