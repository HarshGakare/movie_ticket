import React from "react";

const Movie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6">
        {/* Poster Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/300x450"
            alt="Movie Poster"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Movie Title</h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non tincidunt justo. Duis vitae sem vitae urna malesuada porta.
            </p>

            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Genre:</strong> Action, Drama</p>
              <p><strong>Release Date:</strong> 2025-07-23</p>
              <p><strong>Duration:</strong> 2h 15min</p>
              <p><strong>Rating:</strong> ⭐ 8.5/10</p>
            </div>
          </div>

          <button className="mt-6 w-fit px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
