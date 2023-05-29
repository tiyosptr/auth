import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from '@/Images/perta.png';
import { motion } from "framer-motion";
import { MdLocationPin, MdOutlineFactory } from 'react-icons/md';
import { TbClockHour8 } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const VacancyDescription = () => {
  return (
    <BrowserRouter basename="/">
      <div className="flex flex-col justify-center items-center h-full bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.7 } }}
          className="w-full h-full md:w-2/3 lg:w-11/12 mt-16 rounded-lg bg-white shadow-lg "
        >
          <div className="flex flex-col md:flex-row justify-between items-center p-4">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-28 h-28" />
              <div className="flex flex-col ml-14 text-center">
                <p className="font-bold text-2xl mb-3">PT.PERTAMINA</p>
                <p className="text-blue-500 text-xl mb-2">SOFTWARE ENGINEER</p>
                <p className="text-gray-500 text-xl">Rp 5juta-10 juta</p>
              </div>
            </div>
            <div className="lex justify-center">
              <Link
                to='/VacancyNext'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 ml-[175px] py-1 px-4 rounded-full sm:mt-4 sm:ml-2 sm:py-1 sm:px-4 md:mt-6 md:ml-4 md:py-1 md:px-2 lg:mt-8 lg:ml-6 lg:py-1 lg:px-4"
              >
                Apply
              </Link>
            </div>
          </div>
          <hr className="border-gray-400 my-0.5" />
          <div className="flex flex-wrap justify-start items-center p-3">
            <div className="flex flex-col items-center mb-4 sm:mr-0 mr-5 md:mb-0 md:mr-20">
              <p className="mt-1">Lokasi</p>
              <div className="flex items-center">
                <MdLocationPin />
                <p className="ml-2">Batam</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-4 sm:mr-0 mr-5 md:mb-0 md:mr-20">
              <p className="mt-1">Type</p>
              <div className="flex items-center">
                <TbClockHour8 />
                <p className="ml-2">Full Time</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-20">
              <p className="mt-1">Level</p>
              <div className="flex items-center">
                <FaUserAlt />
                <p className="ml-2">Entry Level</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-10">
              <p className="mt-1">Registration duration</p>
              <div className="flex items-center">
                <BiCalendar />
                <p className="ml-2"> 01 Maret 2023 - 05 Maret 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between gap-0">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
            className="h-full sm:w-32 rounded-lg bg-white shadow-lg mb-5 mt-1 w-full md:w-2/3 lg:w-full"
          >
            <div className="p-4 mr-40">
              <p className="font-bold text-xl mb-4">Jobdesk:</p>
              <ul className="list-disc list-inside mb-4 text-sm ml-4">
                <li>Melakukan kunjungan, follow-up serta menjaga hubungan baik.</li>
                <li>Menawarkan dan memberikan informasi terkait produk.</li>
                <li>Memenuhi target penjualan</li>
                <li>Penyelesaian piutang</li>
                <li>Mengisi laporan harian</li>
                <li>Mengikuti Product Training</li>
                <li>Melakukan absensi</li>
              </ul>
              <p className="font-bold text-xl mb-4">Requirement:</p>
              <ul className="list-decimal list-inside mb-3 text-sm ml-4">
                <li>Candidate must process at least a Bachelor's Degree (Computer/Telecommunication) or equivalent</li>
                <li>Able work well in under pressure situation</li>
                <li>Can work individually or in a team</li>
                <li>Solid background with Web programming (Desktop and Mobile version)</li>
                <li>Deep experience in Market Place System (Front End, Back End, Promo Module, Payment Gateway, etc)</li>
                <li>Server side implementation experience (PHP CI (CodeIgniter), JavaScript, Node.js, XML, etc)</li>
                <li>Having minimum 5 years experience in the same field area</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
            className="h-full bg-blue-500 rounded-lg mb-5 mt-1 flex flex-col w-full md:w-1/3 lg:w-5/12"
          >
            <div className="p-1 text-center">
              <p className="text-white mb-6 mt-2">Description Company</p>
              <p className="text-white text-sm">qwertyuioplkjhhgghg</p>
              <p className="text-white text-sm">qwertyuioplkjhhggjhcvywEFWEhg</p>
              <p className="text-white text-sm">qwertyuioplkjhhggWEF.KHWBFhg</p>
              <p className="text-white  text-sm">qwertyuioplkjhhgg,jjhwwgfduwgufhg</p>
            </div>
            <hr className="border-gray-400 my-1 mt-44" />
            <div className="flex flex-col justify-center flex-grow text-sm">
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex flex-col items-center ml-10">
                  <p className="mt-1 text-white">Company Size</p>
                  <div className="flex items-center">
                    <MdOutlineFactory className="text-white text-xl" />
                    <p className="ml-2 text-white">1-50 Employees</p>
                  </div>
                </div>
                <div className="flex flex-col items-center mr-10">
                  <p className="mt-1 text-white">Industry</p>
                  <div className="flex items-center">
                    <MdOutlineFactory className="text-white text-xl" />
                    <p className="ml-2 text-white">Technology</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <p className="mt-1 text-white">Facility</p>
                <div className="flex items-center">
                  <BiCalendar className="text-white text-xl" />
                  <div className="flex flex-col ml-2 mb-5 text-left">
                    <p className="text-white">Medical, Regular hours, Mondays-Fridays,</p>
                    <p className="text-white">Casual (e.g. T-shirt)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  </BrowserRouter>
  )
};


export default VacancyDescription;
