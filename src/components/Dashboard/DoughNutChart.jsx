import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Male   70%", "Female   30%"],
  datasets: [
    {
      label: "Number of users",
      data: [70, 30],
      backgroundColor: ["#076A49", "#CB176B"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
  aspectRatio: 1,
  responsive: true,
  maintainAspectRatio: false,
};

function DoughNutChart() {
  return (
    <>
      <h2 className="text-2xl font-semibold border-b-2 pb-2">Users</h2>
      <div className="mt-5">
        <Doughnut data={data} options={options} width={300} height={200} />
      </div>
    </>
  );
}

export default DoughNutChart;
