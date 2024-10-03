import React from "react";
import { Bubble, Line } from "react-chartjs-2";
import "chart.js/auto";

const GraphSec = () => {
  const bubbleData = {
    datasets: [
      {
        label: "Children Affected",
        data: [
          { x: 1, y: 111, r: 15 },
          { x: 2, y: 118, r: 18 },
          { x: 3, y: 462, r: 30 },
          { x: 4, y: 118, r: 18 },
          { x: 5, y: 132, r: 15 },
          { x: 6, y: 329, r: 23 },
          { x: 7, y: 523, r: 28 },
          { x: 8, y: 123, r: 12 },
          { x: 9, y: 523, r: 28 },
          { x: 10, y: 656, r: 35 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const bubbleOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Services by Protsahan",
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
        ticks: {
          color: "#ffffff",
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Children Affected",
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  const lineData = {
    labels: ["Age 0-4", "Age 5-9", "Age 10-14", "Age 15-19", "Age 20-24"],
    datasets: [
      {
        label: "Aanganwadi",
        data: [178, 267, 634, 110, 54],
        borderColor: "#FFD700",
        backgroundColor: "#FFD700",
        fill: false,
        tension: 0.4,
      },
      {
        label: "School Admission",
        data: [78, 220, 534, 232, 12],
        borderColor: "#4BC0C0",
        backgroundColor: "#4BC0C0",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Aadhaar",
        data: [12, 56, 78, 90, 31],
        borderColor: "#36A2EB",
        backgroundColor: "#36A2EB",
        fill: false,
        tension: 0.4,
      },
      {
        label: "PAN",
        data: [9, 35, 67, 45, 12],
        borderColor: "#9966FF",
        backgroundColor: "#9966FF",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Ration Card",
        data: [11, 10, 78, 34, 54],
        borderColor: "#FF6384",
        backgroundColor: "#FF6384",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Age Group",
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        title: {
          display: true,
          text: "Children Affected",
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="bg-black opacity-100 text-white">
      <div className="flex text-4xl ">
        <h1 className="max-md:text-center max-md:text-2xl">
          <span className="text-yellow-400 pl-4">Protsahan</span>
          -For a Better Future | Data Visualization (map 2)
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
              <span className="text-yellow-300">Potential Consumers:</span>{" "}
              Protsahan Executive Team | Governmental Bodies
            </p>
          </div>
        </div>
        <div className="text-center p-4">
          <p>
          These set of data visualisations takes a deeper look into how Protsahan is empowering the children by providing them the necessary tools to come out of their
          traumatised lives and lead a normal lives.
          </p>
        </div>
      </div>

      <div className="min-h-screen text-white">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-center mb-16">
            Services Protsahan Provides to Empower Children
          </h1>
        </div>

        <div className="flex flex-wrap justify-around items-center">
          {/* Bubble Chart */}
          <div className="w-full md:w-1/2 p-4 ">
            <h2 className="text-lg font-semibold mb-4 text-center bg-slate-500 bg-opacity-30 p-3 rounded-md">
              <span className="text-yellow-400">Services</span> Protsahan provides
              <span className="text-yellow-400">to empower children </span>
            </h2>
            <div className="relative h-96 max-md:h-80 max-md:flex max-md:items-center">
              <Bubble data={bubbleData} options={bubbleOptions} />
            </div>
          </div>

          {/* Line Chart */}
          <div className="w-full md:w-1/2 p-4 ">
            <h2 className="text-lg font-semibold mb-4 text-center bg-slate-500 bg-opacity-30 p-3 rounded-md">
              <span className="text-yellow-400">Government services</span> provided to children
            </h2>
            <div className="relative h-96 max-md:h-80 max-md:flex max-md:items-center">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphSec;
