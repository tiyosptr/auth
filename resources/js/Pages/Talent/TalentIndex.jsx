import React, { useState } from 'react';
import Logo from "@/Images/rename.png";
import Profile from "@/Images/org.png";
import ProfilePicture from "@/Images/head.png";
import { FaUser } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { AiOutlineHome } from 'react-icons/ai'
import { GiLockers } from 'react-icons/gi'
import { MdOutlineFactory } from 'react-icons/md'
import { HiUser } from 'react-icons/hi'

const TalentIndex = (auth) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={Logo} alt="Logo" className="h-8" />
          <div className="relative z-10">
            <button
              className="bg-transparent text-gray-400 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaUser size={20} />
            </button>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-20"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <Link
                    href={route("logout")}
                    method='post'
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </Transition>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="lg:w-1/5 w-1/3 bg-black">
          <div className="p-4">
            <img src={Logo} alt="Logo" className="h-20 mx-auto mb-12" />
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <AiOutlineHome className="mr-2" />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <GiLockers className="mr-2" />
                    Vacancy
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <MdOutlineFactory className="mr-2" />
                    Company
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <HiUser className="mr-2" />
                    Talent
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-4/5">
          {/* Dashboard */}
          <div className="p-4">
            {/* Dashboard content */}
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-between p-4">
            <div className="w-full lg:w-1/2 bg-white h-full m-2 rounded-lg shadow-md">
              <div className="p-4 flex flex-col">
                <h2 className="text-xl font-bold mb-2">Profile</h2>
                <hr className="border-t border-gray-400 mb-2" />
                <div className="flex">
                  <p className="w-1/4 text-lg">NIM</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">4342211025</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Name</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">Niko Edward Hutagalung</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Address</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">-</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Phone</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">-</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Email</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">-</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Study Program</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">Teknologi Rekayasa Perangkat Lunak</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 bg-white h-full m-2 rounded-lg shadow-md">
              <div className="relative">
                <div
                  className="absolute top-0 left-0 right-0 h-16 rounded-t-lg"
                  style={{
                    backgroundImage: `url(${ProfilePicture})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>
              </div>
              <img
                src={Profile}
                alt="Profile Picture"
                className="h-16 w-16 rounded-full bg-gray-200 mx-auto mt-7 relative z-10"
              />
              <div className="p-4">
                <h2 className="text-center text-xl mt-2">Niko Edward Hutagalung</h2>
                <h2 className="text-center text-base text-gray-400 mt-2">
                  Teknologi Rekayasa Perangkat Lunak
                </h2>
                <div className="flex justify-center">
                  <button className="bg-blue-500 w-11/12 py-1.5 hover:bg-blue-700 text-white font-bold mt-4  rounded">
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentIndex;
