import React from "react";
import statShadow from "../../assets/statsShadow.png";

export const SingleStat = ({ totalUsers, title, percentage, total, bg }) => {
  return (
    <div
      className={`${bg} p-5 rounded-md`}
      style={{ backgroundImage: `url(${statShadow})` }}
    >
      <div className=" flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img className="bg-white p-3 rounded-xl" src={totalUsers} alt="" />
          <h2 className="text-white text-[18px] font-semibold">{title}</h2>
        </div>

        <div>
          <img className="bg-white rounded-md" src={percentage} alt="" />
        </div>
      </div>

      <div className="text-white font-semibold text-3xl mt-5">{total}</div>
    </div>
  );
};
