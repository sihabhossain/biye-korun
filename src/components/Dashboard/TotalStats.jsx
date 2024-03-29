import React from "react";
import totalUsers from "../../assets/totalUsers.png";
import totalMale from "../../assets/totalMale.png";
import totalFemale from "../../assets/totalFemale.png";
import newVisitor from "../../assets/newVisitor.png";
import percentage from "../../assets/userPercentage.png";
import { SingleStat } from "./SingleStat";

const Stats = [
  {
    title: "Total Users",
    total: 348561,
    logo: totalUsers,
    percentage: 21,
    bg: "#17C8B7",
  },
  {
    title: "Total Male",
    total: 223311,
    logo: totalMale,
    percentage: 59,
    bg: "#F97832",
  },
  {
    title: "Total Female",
    total: 145222,
    logo: totalFemale,
    percentage: 41,
    bg: "#AC81FE",
  },
  {
    title: "New Visitors",
    total: 53442,
    logo: newVisitor,
    percentage: 11,
    bg: "#4E87F8",
  },
];

const TotalStats = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <SingleStat
        title={"Total Users"}
        total={345623}
        percentage={percentage}
        bg={"bg-teal-500"}
        totalUsers={totalUsers}
      ></SingleStat>
      <SingleStat
        title={"Total Male"}
        total={245623}
        percentage={percentage}
        bg={"bg-orange-500"}
        totalUsers={totalMale}
      ></SingleStat>
      <SingleStat
        title={"Total Female  "}
        total={545623}
        percentage={percentage}
        bg={"bg-purple-500"}
        totalUsers={totalFemale}
      ></SingleStat>
      <SingleStat
        title={"New Visitor"}
        total={45623}
        percentage={percentage}
        bg={"bg-blue-500"}
        totalUsers={newVisitor}
      ></SingleStat>
    </div>
  );
};

export default TotalStats;
