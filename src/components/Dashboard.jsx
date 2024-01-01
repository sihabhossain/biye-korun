import React from "react";
import { TopBar } from "./TopBar";
import TotalStats from "./TotalStats";

const Dashboard = () => {
  return (
    <div className="px-5">
      {/* Top bar */}
      <TopBar title={"Dashboard"}></TopBar>

      {/* Total stats */}
      <TotalStats></TotalStats>
    </div>
  );
};

export default Dashboard;
