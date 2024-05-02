
import React from 'react';
import { FaUsers, FaClipboardList, FaChartBar, FaCog } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineOrderedList, AiOutlineDollar, AiOutlineSetting } from 'react-icons/ai';

const BoxMade = () => {
  const stats = [
    {
      icon: <FaUsers className="text-black text-3xl" />,
      value: '2,345',
      label: 'Total Users',
      bgColor: 'bg-gradient-to-br from-gray-400 to-black',
    },
    {
      icon: <AiOutlineDollar className="text-black text-3xl" />,
      value: '897',
      label: 'Active Orders',
      bgColor: 'bg-gradient-to-br from-blue-300 to-black',
    },
   
    {
      icon: <AiOutlineUser className=" text-3xl" />,
      value: '23',
      label: 'Settings',
      bgColor: 'bg-gradient-to-br from-orange-300 to-black',
    },
    {
      icon: <FaCog className=" text-3xl" />,
      value: '23',
      label: 'Settings',
      bgColor: 'bg-gradient-to-br from-red-300 to-black',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 w-[90%]">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 my-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 ${stat.bgColor}`}
          >
            <div className="p-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="ml-6">
                <p className="font-extralight  mb-2 text-white ">{stat.value}</p>
                <p className="text-white font-extralight text-xs">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxMade;
