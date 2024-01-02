import React from "react";
import { TopBar } from "../TopBar";
import TotalStats from "./TotalStats";
import UserAnalytics from "./UserAnalytics";
import UserGrowth from "./UserGrowth";
import MostAciveUsers from "./MostAciveUsers";
import DoughNutChart from "./DoughNutChart";
import Reviews from "./Reviews";
import UsersCountryChart from "./UsersCountryChart";

const Dashboard = () => {
  return (
    <div className="px-5 overflow-y-scroll  max-h-screen">
      {/* Top bar */}
      <TopBar title={"Dashboard"}></TopBar>

      {/* Total stats */}
      <TotalStats></TotalStats>

      {/* User analytis */}
      <UserAnalytics></UserAnalytics>

      {/* user growth , active users, users */}
      <div className="flex space-x-10 mt-10">
        <div className="w-[33%] h-[300px] shadow-md p-5 rounded-lg">
          <UserGrowth></UserGrowth>
        </div>
        <div className="w-[33%] h-[300px] shadow-md p-5 rounded-lg">
          <MostAciveUsers></MostAciveUsers>
        </div>
        <div className="w-[33%] h-[300px] shadow-md p-5 rounded-lg">
          <DoughNutChart></DoughNutChart>
        </div>
      </div>

      {/* Reviews & user country*/}
      <div className="flex space-x-10 mt-10">
        <div className="w-2/4 h-[400px] shadow-lg rounded-md">
          <Reviews></Reviews>
        </div>
        <div className="w-2/4 h-[400px] shadow-lg rounded-md p-10 mb-10">
          <UsersCountryChart></UsersCountryChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
