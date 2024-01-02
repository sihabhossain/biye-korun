import React from "react";
import viewBtn from "../../assets/view.png";
import deleteBtn from "../../assets/delete.png";

const PackageTable = () => {
  return (
    <div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#f5f5f5] rounded-lg font-semibold">
              <th>Package Name</th>
              <th>BD Price</th>
              <th>BD Discount Price</th>
              <th>USD Price</th>
              <th>USD Discount Price</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <td>Gold</td>
              <td>8000</td>
              <td>5000</td>
              <td>$1000</td>
              <td>$700</td>
              <td>3months</td>
              <td>Something Special</td>

              <td>
                <button className="btn btn-ghost">
                  <img src={viewBtn} alt="" />
                </button>
                <button className="btn btn-ghost">
                  <img src={deleteBtn} alt="" />
                </button>
              </td>
            </tr>
                {/* row 1 */}
                <tr>
                <td>Gold</td>
                <td>8000</td>
                <td>5000</td>
                <td>$1000</td>
                <td>$700</td>
                <td>3months</td>
                <td>Something Special</td>

                <td>
                    <button className="btn btn-ghost">
                    <img src={viewBtn} alt="" />
                    </button>
                    <button className="btn btn-ghost">
                    <img src={deleteBtn} alt="" />
                    </button>
                </td>
                </tr>
                {/* row 1 */}
                <tr>
                <td>Gold</td>
                <td>8000</td>
                <td>5000</td>
                <td>$1000</td>
                <td>$700</td>
                <td>3months</td>
                <td>Something Special</td>

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

export default PackageTable;
