import React from 'react'
import sunRain from '../assets/1.png'

function Header({ location, setLocation, searchLocation, weatherIcon }) {
  return (
    <div className="bg-white shadow p-5">
      <div className="md:flex justify-between px-9">
        <div className="flex max-md:mb-5">
          {weatherIcon.icon && (
            <img src={weatherIcon.icon} alt="weather icon" width={40} />
          )}
          {/* <img src={sunRain} alt="" width={40} /> */}
          <h3 className="text-2xl font-bold  mt-1 mx-2">WeatherNow</h3>
        </div>

        <div class="relative">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchLocation()
              }
            }}
            class="w-100 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-200 shadow-xs rounded-full pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none"
            placeholder="Search city..."
          />
          <button
            onClick={searchLocation}
            class="absolute top-1 right-1 flex items-center py-1 px-2.5  text-center text-gray-500 transition-all active:shadow-none hover:text-blue-600 cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
