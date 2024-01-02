import React from "react";
import { BarChart } from "./BarChart";

const UserAnalytics = () => {
  return (
    <div>
      <div className="w-4/6 mt-5 shadow-lg p-5 rounded-lg">
        <BarChart></BarChart>
      </div>
      <div></div>
    </div>
  );
};

export default UserAnalytics;
