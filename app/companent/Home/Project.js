import { projectGet } from "@/app/Api/ProjectApi";
import React from "react";

async function Project() {

  const value = await projectGet();

  if(!value) {
    <div className="text-center">Loading ....</div>
  }

  const data = value?.data?.value

  return (
    <div>
      <p className="text-xl font-extralight ml-5 lg:ml-14 my-5">
        Our Total project running :
      </p>
      <hr />
      <div>
        <ul className="p-4">
          {data.map((v, idx) => (
            <li className=" list-disc lg:w-[50%]   mx-4 lg:mx-20 " key={idx}>
              project Name :{" "}
              <span className="font-bold text-orange-950">{v.projectName}</span>{" "}
              , {v.assignedEmployees.length} Person Working , {v.dueDate} Last
              Date
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
