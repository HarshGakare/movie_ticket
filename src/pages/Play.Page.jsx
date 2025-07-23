import React from "react";


import DefaultlayoutHoc from "../layout/Default.layout";

const PlayPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-red-700">🎭 Live Plays & Theatre</h1>
          <p className="text-gray-600 mt-2">
            Experience drama, comedy, and art from the comfort of your home or visit live!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-red-50 rounded-xl shadow p-4 hover:shadow-md transition">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Play Poster"
              className="rounded-md mb-4 w-full"
            />
            <h2 className="text-xl font-semibold text-red-800">Hamlet – A Classic Drama</h2>
            <p className="text-gray-700 text-sm mt-1 mb-2">
              Live at Royal Theatre | Duration: 2h 30min | Language: English
            </p>
            <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DefaultlayoutHoc(PlayPage);
