// src/RadarChart.js
import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

const RadarChart = () => {
  const [selectedState, setSelectedState] = useState('Gujarat');

  // Data configuration based on selected state
  const data = {
    labels: ['15,000 Rs', '20,000 Rs', '14,000 Rs', '15,000 Rs'],
    datasets: [
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

  const options = {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 50,
        ticks: {
          color: '#333', // Color for tick marks
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smoothness of the line
      },
    },
    animations: {
      radius: {
        duration: 2000,
        easing: 'easeInOutBounce',
        loop: true,
      },
    },
  };

  // Handle dropdown state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-5">Applications Analysis Radar Chart</h1>
      <select
        value={selectedState}
        onChange={handleStateChange}
        className="mb-6 p-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
      >
        <option value="Gujarat">Gujarat</option>
        <option value="Karnataka">Karnataka</option>
      </select>
      <div className="w-80 h-80 bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
        <Radar data={data} options={options} />
      </div>
      <p className="text-white mt-4">Select a state to see its applications!</p>
    </div>
  );
};

export default RadarChart;