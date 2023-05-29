import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import profile from "@/Images/perta.png";
import bg from "@/Images/head1.png";
import {  motion } from "framer-motion";

const CompanyDescription = () => {
  const handleGoBack = () => {
    // fungsi untuk kembali ke halaman sebelumnya
    window.history.back();
  }

  return (
    <BrowserRouter basename="/">
       <section className="section relative flex flex-col items-center justify-center h-full mt-16">
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md w-2/3">
        <div className="h-32">
          <img
            className="object-cover w-full h-full"
            src={bg}
            alt="Vacancy2"
          />
        </div>
        <div className="flex items-center justify-center h-20 -mt-12">
          <div className="flex items-center justify-center bg-blue-300 rounded-full h-32 w-32">
            <img
              className="object-cover rounded-full w-full h-full "
              src={profile}
              alt="Person"
              
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg text-center font-bold  mt-2 mb-2">
            PT.PERTAMINA
          </h2>
          <p className="text-center text-gray-500 text-sm">
            BUMN
          </p>
          <p className="text-center text-gray-500 text-sm">
            BATAM
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-8/12 h-full bg-white mt-8 rounded shadow-lg">
  <div className="absolute top-5 left-2 font-semibold text-lg">Profile Company</div>
  <hr class="border-gray-300 my-1 mt-16" />
  <div className="mt-6">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">PT.PERTAMINA</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Address</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Batam</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Field Company</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Petroleum and Gas</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Type Company</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">BUMN</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Facility</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">T-Shirt,hostel,wearpack,helm</div>
    </div>
    <div className="flex justify-between items-center mb-5 ml-4">
      <div className="w-1/4 text-gray-500">Company size</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">-</div>
    </div>
  </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-8/12 h-32 bg-white mt-8 mb-10 rounded shadow-lg">
  <div class="absolute top-3 left-2 flex items-center font-semibold text-lg">
    <span>Description Company</span>
</div>

  <hr class="border-gray-300 my-1 mt-12" />
    <div className="mt-6">
        <div className="flex justify-between items-center">
            <div className="w-full ml-4">PT pertamina bergerak di sektor pertambangan minyak dan gas</div>
        </div>
    </div>
        </motion.div>
    </section>
    </BrowserRouter>
  )
}

export default CompanyDescription
