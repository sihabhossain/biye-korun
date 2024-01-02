import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Bangladesh             70%",
    "Usa          10%",
    "India            10%",
    "Canada          5%",
    "Pakistan            5%",
  ],
  datasets: [
    {
      label: "Number of users",
      data: [70, 10, 10, 5, 5],
      backgroundColor: ["#076A49", "#CB176B", "#FF985F", "#9908F5", "#17C8B7"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
  },
  aspectRatio: 1,
  responsive: true,
  maintainAspectRatio: false,
};

function UsersCountryChart() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold border-b-2 pb-5">Users Country</h2>
        <div className="mt-5 pr-20">
          <Doughnut data={data} options={options} width={300} height={200} />
        </div>
      </div>
    </>
  );
}

export default UsersCountryChart;
