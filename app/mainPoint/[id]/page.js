"use client";

import { Button, Select } from "antd";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { projectDetails } from "@/app/Api/ProjectApi";
import useStore from "../../store";

function MainPointDetails() {
  let { id } = useParams();

  const { isLoading, isSuccess, data, error, isPending } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => projectDetails(id),
  });

  const project = data?.data?.value;
  const parsedDate = new Date(project?.dueDate);

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = parsedDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const displayDate = `${formattedDate} ${formattedTime}`;

  const [task, setTask] = useState("In Progress");

  const { projectStatus, setProjectStatus } = useStore();

  const handleStatusChange = (value) => {
    console.log("dd", value);
    setProjectStatus({id:id, status:value}); // Uncomment this line
  };

  if (isLoading || isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex justify-between flex-col md:flex-row">
        <div className="my-4 lg:my-2">
          <span className="font-extralight">ProJect Name :</span>{" "}
          <span className="font-bold">{project?.projectName}</span>
          <hr className="max-w-72 my-3" />
        </div>
        <div>
          <div className="font-extralight">
            Project Status:{" "}
            <Button className="font-bold text-yellow-400">
              {project?.status}
            </Button>{" "}
          </div>
          <div className="mt-5 lg:mt-3">
            <span className="font-extralight">End Date: </span>
            <span className="text-red-600">{displayDate}</span>
          </div>
        </div>
      </div>
      <div>
        <p className="font-light clear-start my-3">Assigned members : </p>
        <hr />
        <ol className="list-disc ms-6 md:ms-0">
          {project.assignedEmployees?.map((v, idx) => (
            <li key={idx} className="font-bold">
              {v}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <div className="my-4">
          <p className="my-2">Status : </p>
          <div>
            <Select
              className="text-black"
              value={projectStatus.status}
              onChange={handleStatusChange}
              style={{ width: 200, marginLeft: 10 }}
            >
              <Option value="To Do">To Do</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Done">Done</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="font-extralight text-2xl my-3">Description :</p>
        <p className="font-light ms-3 md:ms-0 md:w-3/4">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default MainPointDetails;
