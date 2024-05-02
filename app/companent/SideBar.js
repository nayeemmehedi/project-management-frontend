"use client";

import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { MdDeleteSweep, MdShoppingBag } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { RiBardFill } from "react-icons/ri";
import { PiAlignBottomFill } from "react-icons/pi";
import { BiExclude } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";

const iconsValue = [
  {
    name: <TiHome className="w-6 h-4"></TiHome>,
    value: "Overview",
    link: "/",
  },
  {
    name: <MdDeleteSweep className="w-6 h-4"></MdDeleteSweep>,
    value: "Project",
    link: "/mainPoint",
  },
  {
    name: <GiNetworkBars className="w-6 h-4"></GiNetworkBars>,
    value: "Employees",
    link: "/employee",
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div>
      {" "}
      {pathname == "/login" ? (
        <div></div>
      ) : (
        <div className="pt-10  h-svh ">
          <div className="px-4">
            <div className="flex  bg-green-600 text-white rounded-lg px-4 py-2">
              <FaBuilding className=" mr-3 mt-3" size={15} />
              <div className="py-1">
                <p className="font-semibold  leading-tight text-sm">
                  DashBoard
                </p>
                <p className="text-gray-300 text-xs py-1">Project Management</p>
              </div>
            </div>
            <div className="flex justify-content-center items-center my-3">
              <BiExclude className="text-green-600 h-8 w-8 "></BiExclude>
            </div>

            {/* <div className="overflow-y-auto h-96"></div> */}

            <div className="overflow-y-auto  ">
              {iconsValue.map((v, id) => (
                <Link
                  key={id}
                  href={v.link}
                  className={
                    pathname == v.link
                      ? "no-underline flex items-center text-white rounded-md bg-slate-400  py-3 font-semibold px-2  my-2"
                      : "no-underline flex items-center text-white rounded-md bg-green-500  py-3 font-semibold px-2  my-2"
                  }
                >
                  {v.name} <span className="ml-3">{v.value}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
