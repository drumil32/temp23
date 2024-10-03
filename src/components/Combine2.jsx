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

const CombinedRadarChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedState, setSelectedState] = useState("Gujarat");
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
      {
        label: selectedState === 'Gujarat' ? 'Gujarat Applications' : 'Karnataka Applications',
        data: selectedState === 'Gujarat' ? [20, 30, 0, 0] : [0, 0, 40, 20],
        backgroundColor: selectedState === 'Gujarat' ? 'rgba(60, 179, 113, 0.5)' : 'rgba(255, 165, 0, 0.5)',
        borderColor: selectedState === 'Gujarat' ? 'rgba(60, 179, 113, 1)' : 'rgba(255, 165, 0, 1)',
        borderWidth: 2,
        pointBackgroundColor: selectedState === 'Gujarat' ? 'rgba(60, 179, 113, 1)' : 'rgba(255, 165, 0, 1)',
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
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          color: "white", // Change tick color for better visibility
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
        text: "Skills Comparison & Applications Analysis",
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

  const handleRegionSelect = (region) => {
    setSelectedRegion(region); // Set selected region
    setDropdownOpen(false); // Close dropdown
  };

  // Handle state change for the second dropdown
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl mb-4">Combined Radar Chart</h2>
      <div className="relative mb-4">
        <FontAwesomeIcon
          icon={faFilter}
          className="text-purple-400 text-lg cursor-pointer mr-2 hover:text-purple-600 transition-all duration-300"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white rounded shadow-lg">
            <ul className="py-1">
              <li
                onClick={() => handleRegionSelect("All")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                All
              </li>
              <li
                onClick={() => handleRegionSelect("Gujarat")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Gujarat
              </li>
              <li
                onClick={() => handleRegionSelect("Karnataka")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Karnataka
              </li>
              <li
                onClick={() => handleRegionSelect("Maharashtra")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Maharashtra
              </li>
            </ul>
          </div>
        )}
      </div>
      <select
        value={selectedState}
        onChange={handleStateChange}
        className="mb-6 p-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
      >
        <option value="Gujarat">Gujarat</option>
        <option value="Karnataka">Karnataka</option>
      </select>
      <div style={{ height: "400px" }} className="w-full"> 
        {/* Fixed height for the chart */}
        <Radar data={chartData} options={options} />
      </div>
      <p className="text-white mt-4">Select a state to see its applications!</p>
    </div>
  );
};

export default CombinedRadarChart;
