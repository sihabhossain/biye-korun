import React from "react";
import time70 from "../../assets/time70.png";
import time50 from "../../assets/time50.png";
import time15 from "../../assets/time15.png";

const TimeOnSite = () => {
  return (
    <div className="shadow-md p-10 cursor-pointer">
      <div>
        <h2 className="text-2xl font-semibold border-b-2 pb-10 mb-7 mt-3">
          Time on Site
        </h2>
      </div>

      <div className="space-y-20 ">
        <div>
          <img src={time70} alt="" />
        </div>
        <div>
          <img src={time50} alt="" />
        </div>
        <div>
          <img src={time15} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TimeOnSite;
