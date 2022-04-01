import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Cereal Bars", "Cookies", "Cakes", "Brownies", "Bagels"],
  datasets: [
    {
      label: "Amount sold",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 153, 204, 0.3)",
        "rgba(255, 0, 102, 0.3)",
        "rgba(255, 77, 210, 0.3)",
        "rgb(255, 204, 242, 0.3)",
        "rgba(153, 102, 255, 0.3)",
      ],
      borderColor: [
        "rgb(255, 153, 204, 1)",
        "rgba(255, 0, 102, 1)",
        "rgba(255, 77, 210, 1)",
        "rgba(255, 204, 242, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const PieChart = () => (
  <div className="my-3">
    <Bar data={data} options={options} />
  </div>
);

export default PieChart;
