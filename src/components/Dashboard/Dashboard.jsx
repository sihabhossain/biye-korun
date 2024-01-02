import React from "react";
import { TopBar } from "../TopBar";
import TotalStats from "./TotalStats";
import UserAnalytics from "./UserAnalytics";

const Dashboard = () => {
  return (
    <div className="px-5">
      {/* Top bar */}
      <TopBar title={"Dashboard"}></TopBar>

      {/* Total stats */}
      <TotalStats></TotalStats>

      {/* User analytis */}
      <UserAnalytics></UserAnalytics>
    </div>
  );
};

export default Dashboard;
