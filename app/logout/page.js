"use client";

import React from "react";
import Cookies from "js-cookie";
import { Button } from "antd";
function LogOut() {
  const handleLogout = () => {
    Cookies.remove("authToken");

    setTimeout(() => {
      window.location.href = `https://dazzling-lolly-abb20e.netlify.app/`;
      //   window.location.href = `http://localhost:3000`;
    }, 500);
  };

  return (
    <div className="mt-5">
      <div className=" border-2  border-blue-500 shadow w-[50%] mx-auto bg-slate-300  rounded-lg">
        <div className="p-10">
          <div className="text-slate-700  font-extralight text-2xl">
            Project Management Log Out Page{" "}
          </div>
          <Button
            type="primary"
            className="border-1 border-blue-700 hover:border-gray-900  hover:bg-slate-300 my-4"
            onClick={() => handleLogout()}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
