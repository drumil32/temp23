import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Pie, Radar, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
} from "chart.js";

// Register the components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale
);
const GraphFirst = () => {
  const [startDate, setStartDate] = useState(new Date("2023-06-01"));
  const [endDate, setEndDate] = useState(new Date("2023-06-30"));

  // Pie chart data
  const pieData = {
    labels: ["Delhi", "UP", "Bihar", "Kerala", "Punjab", "MP", "Goa"],
    datasets: [
      {
        label: "A breakdown of where the children are from",
        data: [31, 19, 16, 12, 10, 8, 5],
        backgroundColor: [
          "#333333", // Dark gray for Delhi
          "#FFC107", // Yellow for UP
          "#A6A6A6", // Light gray for Bihar
          "#FFFFFF", // White for Kerala
          "#00BCD4", // Cyan for Punjab
          "#D9D9D9", // Lighter gray for MP
          "#FFEB3B", // Yellow for Goa
        ],
        borderColor: "#000",
        borderWidth: 1,
      },
    ],
  };

  // Radar chart data
  const radarData = {
    labels: ["GEC 01", "GEC 02", "GEC 03", "GEC 04", "GEC 05", "GEC 09"],
    datasets: [
      {
        label: "< Rs 5000",
        data: [6, 5, 4, 3, 2, 5],
        backgroundColor: "rgba(255, 193, 7, 0.2)", // Yellow, transparent
        borderColor: "#FFC107", // Yellow
        borderWidth: 2,
      },
      {
        label: "Rs 5000 - 10000",
        data: [5, 4, 3, 6, 4, 3],
        backgroundColor: "rgba(255, 255, 255, 0.2)", // White, transparent
        borderColor: "#FFFFFF", // White
        borderWidth: 2,
      },
      {
        label: "Rs 10000 - 20000",
        data: [4, 3, 2, 5, 3, 4],
        backgroundColor: "rgba(169, 169, 169, 0.2)", // Gray, transparent
        borderColor: "#A6A6A6", // Light gray
        borderWidth: 2,
      },
      {
        label: "Rs 20000 +",
        data: [3, 2, 6, 4, 5, 3],
        backgroundColor: "rgba(98, 98, 98, 0.2)", // Dark gray, transparent
        borderColor: "#333333", // Dark gray
        borderWidth: 2,
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ["0-4", "5-9", "10-14", "15-19"],
    datasets: [
      {
        label: "Total Enrollment",
        data: [66, 67, 55, 18],
        backgroundColor: "rgba(52, 152, 219, 0.6)", // Light blue
        borderColor: "#3498db", // Blue
        borderWidth: 1,
        barPercentage: 0.5,
      },
      {
        label: "Enrolled in Gov School",
        data: [20, 32, 15, 12],
        backgroundColor: "rgba(231, 76, 60, 0.6)", // Light red
        borderColor: "#e74c3c", // Red
        borderWidth: 1,
        barPercentage: 0.5,
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ["0-4", "5-9", "10-14", "15-19"],
    datasets: [
      {
        label: "Protsahan Enrolled Students in School",
        data: [20, 99, 70, 30],
        fill: false,
        backgroundColor: "rgba(243, 156, 18, 0.8)", // Yellow
        borderColor: "#f39c12", // Dark yellow
        tension: 0.1,
        borderWidth: 2,
      },
    ],
  };

  // Chart options for pie chart
  const pieOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff", // Adjust the legend text color
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  // Chart options for radar chart
  const radarOptions = {
    scales: {
      r: {
        ticks: {
          display: false, // Hide radial tick labels
        },
        grid: {
          color: "#FFF", // White grid lines
        },
        angleLines: {
          color: "#FFF", // White angle lines
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#FFF", // White text for the legend
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Chart options for bar and line charts
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#FFF", // White text for the legend
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Children enrolled in government school",
        color: "#FFF", // White title text
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <>
      <div className="bg-black opacity-100 text-white py-11">
        <div className="flex text-4xl ">
          <h1 className="max-md:text-center max-md:text-2xl">
            <span className="text-yellow-400 pl-4">Protsahan</span>
            -For a Better Future | Data Visualization (map 4)
          </h1>
        </div>
        {/* HEAD DIV */}
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
          These set of data visualisations paints a story of the enrolment data of students on a specified date range/ month/ year. It tells the user – how many children have enrolled
          in Protsahan, basic data related to the pool of children etc.
          </p>
        </div>
      </div>
        <div className="flex justify-between items-center text-center mb-10 mx-6 flex-wrap max-md:justify-center">
          <div className="flex gap-5 flex-wrap max-md:justify-center max-md:w-full max-md:flex-col">
            <div className="bg-white px-8 py-2 rounded-lg shadow-lg ">
              <p className="text-5xl text-indigo-600 font-bold mt-2">11,172</p>
              <p className="text-green-500 ml-2">+34</p>
              <h3 className="text-lg font-semibold text-gray-800">
                Total Children
              </h3>
            </div>
            <div className="bg-white px-8 py-2 rounded-lg shadow-lg max-md:w-full max-md:flex-col ">
              <p className="text-5xl text-indigo-600 font-bold mt-2">2,341</p>
              <p className="text-green-500 ml-2">+54</p>
              <h3 className="text-lg font-semibold text-gray-800">Admitted</h3>
            </div>
            <div className="bg-white px-8 py-2 rounded-lg shadow-lg max-md:w-full max-md:flex-col ">
              <p className="text-5xl text-indigo-600 font-bold mt-2">789</p>
              <p className="text-red-500 ml-2">-20</p>
              <h3 className="text-lg font-semibold text-gray-800">Pending</h3>
            </div>
          </div>
          {/* here is our start and end date */}
          <div className="ml-4">
  <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
    Select Date Range
  </h3>

  {/* Start Date Picker */}
  <div className="relative">
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      endDate={endDate}
      className="border border-gray-600 p-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg focus:ring-4 focus:ring-blue-500 w-full max-md:m-auto"
      placeholderText={`Start Date: ${startDate ? startDate.toLocaleDateString() : "Select start date"}`}
    />
    {/* Current Date Display */}
    <p className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xs text-gray-400">
      {startDate ? startDate.toLocaleDateString() : new Date().toLocaleDateString()}
    </p>
  </div>

  {/* End Date Picker */}
  <div className="relative mt-4">
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      className="border border-gray-600 p-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg focus:ring-4 focus:ring-blue-500 w-full max-md:m-auto"
      placeholderText={`End Date: ${endDate ? endDate.toLocaleDateString() : "Select end date"}`}
    />
    {/* Current Date Display */}
    <p className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xs text-gray-400">
      {endDate ? endDate.toLocaleDateString() : new Date().toLocaleDateString()}
    </p>
  </div>
</div>

        </div>
        {/* GRAPHS  */}
        <div className="flex justify-evenly  flex-wrap items-center">
          <div className="text-center">
            <h2 className=" font-semibold text-white my-8 bg-slate-600 bg-opacity-20 rounded-md p-3">
              A <span className="text-yellow-300">breakdown</span> of where the
              children are from
            </h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="text-center">
            <h2 className=" font-semibold text-white my-8 bg-slate-600 bg-opacity-20 rounded-md p-3 ">
              A view of children enrolled to different centres
            </h2>
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div className="text-center max-md:w-full max-md:h-[50vh]">
            <h2 className="font-semibold text-white my-8 bg-slate-600 bg-opacity-20 rounded-md p-3">
              Children <span className="text-yellow-300">enrolled in government</span>
              school
            </h2>
            <Bar data={barData} options={commonOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphFirst;
