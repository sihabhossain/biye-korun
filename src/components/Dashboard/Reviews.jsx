import React from "react";
import positive from "../../assets/positive.png";
import negative from "../../assets/negative.png";
import noReview from "../../assets/noReview.png";

const Reviews = () => {
  return (
    <div className=" p-10 cursor-pointer">
      <div>
        <h2 className="text-2xl font-semibold border-b-2 pb-5 mb-7 mt-3">
          Reviews
        </h2>
      </div>

      <div className="space-y-5 ">
        <div>
          <img src={positive} alt="" />
        </div>
        <div>
          <img src={negative} alt="" />
        </div>
        <div>
          <img src={noReview} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
