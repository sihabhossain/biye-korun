import React from "react";

import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";

import activeTick from "../../assets/activeTick.png";
import viewBtn from "../../assets/view.png";
import deleteBtn from "../../assets/delete.png";

const UsersTable = () => {
  return (
    <div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#f5f5f5] rounded-lg font-semibold">
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Current package</th>
              <th>Country</th>
              <th>User Type</th>
              <th>Profile Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {/* row 1 */}
            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user1} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user2} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user3} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user4} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user1} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user2} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user3} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user4} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user3} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>hart@hagerty.com</td>
              <td>+12233876541</td>
              <td>Male</td>
              <td>Gold</td>
              <td>USA</td>
              <td className="flex items-center gap-2">
                <img src={activeTick} alt="" />
                <p>Active</p>
              </td>
              <td>
                <button className="btn btn-sm bg-[#BAEFDB] text-green-500">
                  Approved
                </button>
              </td>
              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between">
          <div className="text-gray-400">Showing 1 to 10 of 230 entries</div>
          <div>
            <div className="join">
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
              <button className="join-item btn btn-sm">...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
