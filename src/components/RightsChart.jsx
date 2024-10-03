import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RightsChart = () => {
  const [filter, setFilter] = useState('all');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Sample data: percentage of students who have lost a parent and don't have basic documentation
  const allData = {
    Aadhar: 30,
    PAN: 40,
    'Birth Certificate': 25,
    'Other Docs': 35,
  };

  const filterData = () => {
    switch (filter) {
      case 'Aadhar':
        return { Aadhar: allData['Aadhar'] };
      case 'PAN':
        return { PAN: allData['PAN'] };
      case 'Birth Certificate':
        return { 'Birth Certificate': allData['Birth Certificate'] };
      case 'Other Docs':
        return { 'Other Docs': allData['Other Docs'] };
      default:
        return allData;
    }
  };

  const barData = {
    labels: Object.keys(filterData()),
    datasets: [
      {
        label: 'Percentage of Students without Documentation',
        data: Object.values(filterData()),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)', // Aadhar - Neon Pink
          'rgba(255, 159, 64, 0.8)', // PAN - Neon Orange
          'rgba(255, 205, 86, 0.8)', // Birth Certificate - Neon Yellow
          'rgba(75, 192, 192, 0.8)', // Other Docs - Neon Green
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(255, 159, 64, 1)', 
          'rgba(255, 205, 86, 1)', 
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,255,255,0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.8)', // Neon Text
        },
      },
      title: {
        display: true,
        text: 'Students without Basic Documentation after Parent Loss',
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)', // Neon Tick Labels
        },
      },
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)', // Neon Tick Labels
        },
      },
    },
  };

  const handleFilterSelection = (value) => {
    setFilter(value);
    setDropdownOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="w-full max-w-4xl p-6 bg-white/10 backdrop-blur-lg shadow-xl rounded-lg border border-gray-600">
        <h2 className="text-3xl font-bold text-center text-white mb-4 tracking-wider">Rights Metrics</h2>
        {/* Filter Icon and Custom Dropdown */}
        <div className="flex justify-end items-center mb-4 relative">
          {/* Filter Icon */}
          <FontAwesomeIcon
            icon={faFilter}
            className="text-purple-400 text-lg cursor-pointer mr-2 hover:text-purple-600 transition-all duration-300"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          />
          {/* Custom Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-black bg-opacity-80 border border-purple-500 shadow-lg rounded-md z-10 w-48 transition-all duration-500 ease-in-out transform">
              <ul className="py-2 text-white">
                <li
                  className="px-4 py-2 hover:bg-purple-700 cursor-pointer transition-all"
                  onClick={() => handleFilterSelection('all')}
                >
                  All
                </li>
                <li
                  className="px-4 py-2 hover:bg-purple-700 cursor-pointer transition-all"
                  onClick={() => handleFilterSelection('Aadhar')}
                >
                  Aadhar
                </li>
                <li
                  className="px-4 py-2 hover:bg-purple-700 cursor-pointer transition-all"
                  onClick={() => handleFilterSelection('PAN')}
                >
                  PAN
                </li>
                <li
                  className="px-4 py-2 hover:bg-purple-700 cursor-pointer transition-all"
                  onClick={() => handleFilterSelection('Birth Certificate')}
                >
                  Birth Certificate
                </li>
                <li
                  className="px-4 py-2 hover:bg-purple-700 cursor-pointer transition-all"
                  onClick={() => handleFilterSelection('Other Docs')}
                >
                  Other Docs
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-evenly flex-wrap items-center">
          <div className="w-2/3 sm:w-1/2">
            <Bar data={barData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsChart;
