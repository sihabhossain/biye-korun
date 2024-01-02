import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker/locale/af_ZA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total User",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      backgroundColor: "#076A49",
    },
    {
      label: "New Visitor",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      backgroundColor: "#CB176B",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
