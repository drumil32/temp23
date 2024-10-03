import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ScholarshipChart = () => {
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown visibility

  const allData = {
    "0-50k": 10,
    "50k-1L": 15,
    "1L-1.5L": 7,
    "1.5L-2L": 8,
    "2L+": 5,
  };

  const filterData = () => {
    switch (filter) {
      case "low":
        return { "0-50k": allData["0-50k"], "50k-1L": allData["50k-1L"] };
      case "mid":
        return { "1L-1.5L": allData["1L-1.5L"], "1.5L-2L": allData["1.5L-2L"] };
      case "high":
        return { "2L+": allData["2L+"] };
      default:
        return allData;
    }
  };

  const data = {
    labels: Object.keys(filterData()),
    datasets: [
      {
        label: "Count of Girls",
        data: Object.values(filterData()),
        backgroundColor: [
          "red",        // 0-50k
          "#FFC107",    // 50k-1L
          "blue",       // 1L-1.5L
          "green",      // 1.5L-2L
          "#00BCD4",    // 2L+
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Income vs Scholarship Distribution" },
    },
  };

  const handleFilterSelection = (value) => {
    setFilter(value);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Education Metrics
        </h2>
        {/* Filter Icon and Custom Dropdown */}
        <div className="flex justify-end items-center mb-4 relative">
          <FontAwesomeIcon
            icon={faFilter}
            className="text-gray-600 cursor-pointer mr-2"
            onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown on icon click
          />
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md z-10 w-48">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  onClick={() => handleFilterSelection("all")}
                >
                  All
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  onClick={() => handleFilterSelection("low")}
                >
                  Low Income (0-1L)
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  onClick={() => handleFilterSelection("mid")}
                >
                  Mid Income (1L-2L)
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  onClick={() => handleFilterSelection("high")}
                >
                  High Income (2L+)
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Doughnut data={data} options={options} className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ScholarshipChart;
