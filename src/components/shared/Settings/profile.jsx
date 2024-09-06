"use client";

import React from "react";

export default function Profile() {
  return (
    <div className="bg-white p-8 mt-6 rounded-lg shadow-lg w-full max-w-2xl">
      {/* Cover Photo */}
      <div className="relative h-40 w-full bg-gray-300 rounded-t-lg flex justify-center items-center">
        <div className="absolute bg-gray-100 p-2 rounded-full border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.5l7.5 7.5H13.5V19.5H10.5V12H4.5L12 4.5z"
            />
          </svg>
        </div>
      </div>

      {/* Profile Form */}
      <div className="px-6 py-4">
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="Jane"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              placeholder="Doe"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
        </div>

        {/* Bio Section */}
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Write something..."
          />
        </div>

        {/* Update Profile Button */}
        <div className="mt-6">
          <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-red-800">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
