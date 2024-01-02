import React from "react";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const MostAciveUsers = () => {
  return (
    <div className="">
      <div className="flex justify-between mb-2">
        <div>
          <h2 className="text-2xl font-semibold">Most Active users</h2>
        </div>
        <div>
          <h2 className="text-[#FA272F] font-semibold">See more</h2>
        </div>
      </div>

      {/* Users */}
      <div className="space-y-2">
        <div className="flex space-x-4 bg-gray-200 p-1.5 rounded-lg">
          <div>
            <img src={user1} alt="" />
          </div>

          <div>
            <div>
              <h3 className="font-semibold">David Elson</h3>
            </div>
            <div>
              <p className="text-gray-500">elson42322@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 bg-gray-200 p-1.5 rounded-lg">
          <div>
            <img src={user2} alt="" />
          </div>

          <div>
            <div>
              <h3 className="font-semibold">Kathy Pacheco </h3>
            </div>
            <div>
              <p className="text-gray-500">elson42322@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 bg-gray-200 p-1.5 rounded-lg">
          <div>
            <img src={user3} alt="" />
          </div>

          <div>
            <div>
              <h3 className="font-semibold">Patricia Sanders</h3>
            </div>
            <div>
              <p className="text-gray-500">elson42322@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostAciveUsers;
