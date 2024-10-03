import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// Register the necessary components for Chart.js
ChartJS.register(
  RadialLinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const SpiderChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const data = {
    labels: [
      "Creativity",
      "Communication",
      "Technical Skills",
      "Teamwork",
      "Problem Solving",
    ],
    datasets: [
      {
        label: "Gujarat",
        data: [80, 70, 90, 85, 75],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Karnataka",
        data: [70, 90, 80, 75, 85],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Maharashtra",
        data: [60, 80, 75, 90, 85],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const filteredData =
    selectedRegion === "All"
      ? data.datasets
      : data.datasets.filter((dataset) => dataset.label === selectedRegion);

  const chartData = {
    labels: data.labels,
    datasets: filteredData,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      tension: {
        duration: 1000,
        easing: "easeInOutQuad",
        from: 0.5,
        to: 1,
        loop: true,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          color: "black", // Change tick color for better visibility
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Grid color for better contrast
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // Change legend text color
        },
      },
      title: {
        display: true,
        text: "Skills Comparison",
        font: {
          size: 24,
          weight: "bold",
          color: "white", // Title color
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.r}`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background color
        titleColor: "white", // Tooltip title color
        bodyColor: "white", // Tooltip body color
      },
    },
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  const handleOptionSelect = (region) => {
    setSelectedRegion(region); // Set selected region
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <div className=" flex justify-center items-center flex-col">
      <h2 className="text-white text-2xl mb-4">Skills Radar Chart</h2>
      <div className="relative mb-4 flex justify-end">
        {/* Filter Icon and Custom Dropdown */}

        <FontAwesomeIcon
          icon={faFilter}
          className="text-purple-400 text-lg cursor-pointer mr-2 hover:text-purple-600 transition-all duration-300"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white rounded shadow-lg">
            <ul className="py-1">
              <li
                onClick={() => handleOptionSelect("All")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                All
              </li>
              <li
                onClick={() => handleOptionSelect("Gujarat")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Gujarat
              </li>
              <li
                onClick={() => handleOptionSelect("Karnataka")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Karnataka
              </li>
              <li
                onClick={() => handleOptionSelect("Maharashtra")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Maharashtra
              </li>
            </ul>
          </div>
        )}
      </div>
      <div style={{ height: "40vh"}}>
        {" "}
        {/* Fixed height for the chart */}
      </div>
    </div>
  );
};

export default SpiderChart;
