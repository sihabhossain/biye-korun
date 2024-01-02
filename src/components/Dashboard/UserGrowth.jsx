import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker/locale/ar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "User Growth",
    },
  },
};

const labels = ["Sun", "Mon", "Tue", "Wed", "May", "Thu", "Fri", "Sat"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Weekly",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#076A49",
      backgroundColor: "#A6C9BD",
    },
  ],
};

function UserGrowth() {
  return <Line options={options} data={data} />;
}

export default UserGrowth;
