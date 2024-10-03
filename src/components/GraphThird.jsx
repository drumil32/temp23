import React from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const GraphThird = () => {
  const regions = {
    Rural: 68,
    "Semi-Rural": 20,
    "Semi-Urban": 12,
  };

  const colorScale = scaleQuantize()
    .domain([0, 100])
    .range(["#FF6A6A", "#FF4C4C", "#FF1A1A"]);

  const pieData = {
    labels: ["UP", "Bihar", "Kerala", "Punjab", "MP", "Goa", "Urban"],
    datasets: [
      {
        data: [26, 21, 15, 13, 10, 6, 9],
        backgroundColor: [
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FF9F40",
          "#9966FF",
          "#4BC0C0",
          "#C9CBCF",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const data = {
    labels: [
      "Others",
      "Education",
      "Marriage",
      "After birth/with household",
      "Labour",
    ],
    datasets: [
      {
        type: "bar",
        label: "Intra-district",
        data: [23, 28, 22, 37, 18],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "Inter-district",
        data: [49, 49, 42, 28, 31],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "Interstate",
        data: [28, 22, 23, 23, 31],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure charts resize properly
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Why People Migrate?" },
    },
  };

  const lineData = {
    labels: ["Jan'23", "Feb'23", "Mar'23", "Apr'23", "May'23", "Jun'23"],
    datasets: [
      {
        label: "Migration Trend",
        data: [4.3, 2.5, 3.5, 4.5, 3.5, 5.4],
        fill: false,
        borderColor: "#FFCE56",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-black text-white ">
      <div className="flex text-4xl max-sm:text-2xl">
        <h1 className="max-md:text-center max-md:text-2xl">
          <span className="text-yellow-400 pl-4">Protsahan</span>
          -For a Better Future | Data Visualization(map 3)
        </h1>
      </div>

      <div className="border-[2px] border-dashed border-white rounded-md p-5 m-5">
        <div className="flex justify-around flex-wrap">
          <div className="flex">
            <span className="text-yellow-300">Timeline:</span>
            <p>Child entering Protsahan</p>
          </div>
          <div className="flex flex-wrap max-md:flex-col max-md:m-auto">
            <p className="max-sm:text-center">
              <span className="text-yellow-300">Potential Consumers:</span>
              Protsahan Executive Team | Governmental Bodies
            </p>
          </div>
        </div>
        <div className="text-center p-4">
          <p>
            These set of data visualisations paints the story of migrants. How
            and why are they migrating to Delhi (Urban Region)
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 ">
        Migration Patterns
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center bg-slate-600 bg-opacity-20 rounded-md p-3">
            Where the Children Are From
          </h2>
          <div className="relative">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Why People Migrate? - Bar Chart
          </h2>
          <div className="relative" style={{ height: "400px" }}>
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center bg-slate-600 bg-opacity-20 rounded-md p-3">
            Migration Trend
          </h2>
          <div className="relative" style={{ height: "300px" }}>
            <Line data={lineData} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center bg-slate-600 bg-opacity-20 rounded-md p-3">
          Delhi Region Breakdown
        </h2>
        <img src="/map-delhi.png" alt=""  className="w-1/5 h-full"/>
        

        <div className="flex justify-between mt-4 w-64">
          <div className="text-center">
            <p className="text-sm">Rural</p>
            <p className="text-sm">68%</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Semi-Rural</p>
            <p className="text-sm">20%</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Semi-Urban</p>
            <p className="text-sm">12%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphThird;
