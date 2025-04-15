import React from 'react'
import sunRain from '../assets/1.png'
import rain from '../assets/2.png'
import sun from '../assets/3.png'
import claudy from '../assets/4.png'
import snow from '../assets/5.png'
import { RiSpeedUpLine } from 'react-icons/ri'
import axios from 'axios'

function Weather() {
  return (
    <div className="bg-linear-to-t md:h-173 from-[#DBEAFE] to[#BFDBFE] -m-9 max-md:pb-9">
      <div className="md:flex mx-9">
        <div className="md:w-full md:ml-10 mx-3 mt-20">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between">
              <div className="p-9">
                <h1 className="text-2xl font-bold">Prishtina, KS</h1>
                <p className="text-xs text-gray-400 mt-2">light rain</p>
              </div>
              <div className="py-3 px-13 flex ">
                <img src={sunRain} alt="" width={100} />
                <div className="flex mt-3 text-6xl font-bold">
                  <span>18</span>
                  <div className="relative">
                    <span className="absolute -top-2  -ml-1 ">°</span>
                    <span className="ml-3 font-normal text-5xl">C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow md mt-9 p-5">
            <h1 className="text-lg font-bold p-3">Weather Details</h1>
            <div className="md:flex px-3">
              <div className="bg-gray-100 rounded-md md:mr-8 mt-4 w-full max-md:p-2">
                <div className="flex justify-center mt-5">
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.86661 3.33333V12.1167C7.50208 12.4836 7.99874 13.0499 8.27954 13.7278C8.56035 14.4057 8.60961 15.1574 8.4197 15.8661C8.22978 16.5749 7.81129 17.2012 7.22915 17.6479C6.647 18.0946 5.93372 18.3367 5.19994 18.3367C4.46616 18.3367 3.75289 18.0946 3.17074 17.6479C2.58859 17.2012 2.17011 16.5749 1.98019 15.8661C1.79027 15.1574 1.83954 14.4057 2.12034 13.7278C2.40115 13.0499 2.8978 12.4836 3.53328 12.1167V3.33333C3.53328 2.89131 3.70887 2.46738 4.02143 2.15482C4.33399 1.84226 4.75792 1.66667 5.19994 1.66667C5.64197 1.66667 6.06589 1.84226 6.37845 2.15482C6.69101 2.46738 6.86661 2.89131 6.86661 3.33333Z"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-xs text-gray-600 mx-2">Feels Like</p>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                  <div className="flex text-md font-bold">
                    <span>17</span>
                    <div className="relative">
                      <span className="absolute ">°</span>
                      <span className="ml-2 font-normal text-sm">C</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-md mt-4 w-full max-md:p-2">
                <div className="flex justify-center mt-5">
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.74993 17.3333C9.29703 17.3333 10.7808 16.7188 11.8747 15.6248C12.9687 14.5308 13.5833 13.0471 13.5833 11.5C13.5833 9.83333 12.7499 8.25 11.0833 6.91667C9.4166 5.58333 8.1666 3.58333 7.74993 1.5C7.33326 3.58333 6.08326 5.58333 4.4166 6.91667C2.74993 8.25 1.9166 9.83333 1.9166 11.5C1.9166 13.0471 2.53118 14.5308 3.62514 15.6248C4.7191 16.7188 6.20283 17.3333 7.74993 17.3333Z"
                      stroke="#3B82F6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="text-xs text-gray-600 mx-2">Humidity</p>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                  <h1 className="text-md font-bold">72%</h1>
                </div>
              </div>

              <div className="bg-gray-100 rounded-md mt-4 md:mx-8 w-full max-md:p-2">
                <div className="flex justify-center mt-5">
                  <div className="">
                    <svg
                      width="15"
                      height="6"
                      viewBox="0 0 15 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mb-[4px]"
                    >
                      <path
                        d="M7.81244 1.83333C8.00551 1.63642 8.24442 1.49049 8.50776 1.40863C8.7711 1.32676 9.05064 1.31152 9.32132 1.36427C9.592 1.41702 9.84536 1.53611 10.0587 1.71087C10.272 1.88562 10.4387 2.11058 10.5437 2.36558C10.6487 2.62058 10.6887 2.89765 10.6603 3.17195C10.6319 3.44625 10.5358 3.70922 10.3808 3.93727C10.2257 4.16532 10.0165 4.35133 9.77188 4.47863C9.52725 4.60593 9.25485 4.67054 8.97911 4.66667H1.47911"
                        stroke="#14B8A6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      width="20"
                      height="7"
                      viewBox="0 0 20 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5624 2.41667C14.8064 2.1818 15.1039 2.00993 15.4292 1.91593C15.7545 1.82194 16.0978 1.80865 16.4294 1.87723C16.761 1.94581 17.0709 2.09418 17.3322 2.30949C17.5936 2.52481 17.7985 2.80059 17.9292 3.11294C18.06 3.42529 18.1126 3.76481 18.0826 4.10209C18.0526 4.43937 17.9408 4.76425 17.7569 5.0486C17.5731 5.33295 17.3227 5.5682 17.0274 5.73398C16.7322 5.89976 16.4009 5.99106 16.0624 6H1.47911"
                        stroke="#14B8A6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="6"
                      viewBox="0 0 15 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-[1px]"
                    >
                      <path
                        d="M10.3124 4.16667C10.5055 4.36358 10.7444 4.50951 11.0078 4.59137C11.2711 4.67324 11.5506 4.68848 11.8213 4.63573C12.092 4.58298 12.3454 4.46389 12.5587 4.28913C12.772 4.11438 12.9387 3.88942 13.0437 3.63442C13.1487 3.37942 13.1887 3.10235 13.1603 2.82805C13.1319 2.55375 13.0358 2.29079 12.8808 2.06273C12.7257 1.83468 12.5165 1.64867 12.2719 1.52137C12.0273 1.39407 11.7549 1.32946 11.4791 1.33333H1.47911"
                        stroke="#14B8A6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="text-xs text-gray-600 mx-2">Wind Speed</p>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                  <h1 className="text-md font-bold">5.2 m/s</h1>
                </div>
              </div>

              <div className="bg-gray-100 rounded-md mt-4 w-full max-md:p-2">
                <div className="flex justify-center mt-5">
                  <RiSpeedUpLine className="text-[#A855F7] text-xl" />

                  <p className="text-xs text-gray-600 mx-2">Pressure</p>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                  <h1 className="text-md font-bold">1012 hPa</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-160 bg-white mt-20 rounded-lg shadow-md mx-10 pb-9">
          <div className="py-5 px-8 max-md:b-9">
            <h1 className="text-lg font-bold">5-Day Forecast</h1>
            <div className="flex justify-between mt-9">
              <h1 className="text-md font-semibold">Mon</h1>
              <img src={rain} alt="" width={30} />
              <div className="flex">
                <div className="flex mt-3 text-md font-medium">
                  <span>19</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
                <div className="flex mt-3 mx-3 text-md text-gray-400">
                  <span>14</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-9">
              <h1 className="text-md font-semibold">Tue</h1>
              <img src={claudy} alt="" width={30} />
              <div className="flex">
                <div className="flex mt-3 text-md font-medium">
                  <span>21</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
                <div className="flex mt-3 mx-3 text-md text-gray-400">
                  <span>15</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-9">
              <h1 className="text-md font-semibold">Wed</h1>
              <img src={sun} alt="" width={40} />
              <div className="flex">
                <div className="flex mt-3 text-md font-medium">
                  <span>23</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
                <div className="flex mt-3 mx-3 text-md text-gray-400">
                  <span>16</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-9">
              <h1 className="text-md font-semibold">Thu</h1>
              <img src={sunRain} alt="" width={30} />
              <div className="flex">
                <div className="flex mt-3 text-md font-medium">
                  <span>20</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
                <div className="flex mt-3 mx-3 text-md text-gray-400">
                  <span>15</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-9">
              <h1 className="text-md font-semibold">Fri</h1>
              <img src={rain} alt="" width={30} />
              <div className="flex">
                <div className="flex mt-3 text-md font-medium">
                  <span>18</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
                <div className="flex mt-3 mx-3 text-md text-gray-400">
                  <span>13</span>
                  <div className="relative">
                    <span className="absolute -top-1 ">°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
