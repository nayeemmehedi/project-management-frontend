"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "antd";
import AddTaskModal from "../companent/AddTaskModal";
import SearchBar from "../companent/SearchBar";
import TaskFilters from "../companent/TaskFilters";
import { MdDeleteSweep } from "react-icons/md";
import { Tooltip } from "antd";
import { FaEdit } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteProjectid, projectGet } from "../Api/ProjectApi";
import UpdateTaskModel from "../companent/UpdateTaskModel";
import { queryClient } from "../queryClient";
import useStore from "../store";

const ListItem = [
  "Project Name",
  "Deadline",
  "Status",
  "Assignee Name",
  "Edit",
  "Details",
  "Delete",
];

// Sample project data
const projects = [
  { id: 1, name: "Project A" },
  { id: 2, name: "Project B" },
  { id: 3, name: "Project C" },
];

const employees = [
  { id: 1, name: "Rahim", position: "Web Developer" },
  { id: 2, name: "Korim", position: "UX Designer" },
  { id: 3, name: "John", position: "UI Designer" },
  { id: 4, name: "Jane", position: "Front-end Developer" },
  { id: 5, name: "Bob", position: "Back-end Developer" },
];

export default function mainPoint() {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["todos"],
    queryFn: projectGet,
  });

  const { mutateAsync } = useMutation({
    mutationFn: deleteProjectid,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [projectList, setProjectList] = useState(projects);

  const [availableEmployees, setAvailableEmployees] = useState(employees);

  const handleSearch = (query) => {
    // Perform the search operation with the query
    console.log("Search query:", query);
  };

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const deleleItem = async (itemId) => {
    const value = await mutateAsync(itemId);
  };


  

  if (isLoading || isLoading) {
    <div className="text-center text-green-400 my-10 ">Loading...</div>;
  }

  return (
    <div className="w-[90%] mx-auto ">
      <div className="flex justify-end">
        <div className="mt-7 lg:mt-0">
          <UpdateTaskModel
            item={selectedProject}
            isModalOpen={isUpdateModalOpen}
            setIsModalOpen={setIsUpdateModalOpen}
            onCancel={() => {
              setIsUpdateModalOpen(false);
              setSelectedProject(null);
            }}
          />

          <AddTaskModal employees={availableEmployees} />
        </div>

        <div className="mt-10 ms-3 lg:mt-3">
          <TaskFilters employees={employees} />
        </div>
      </div>

      <div className="my-8">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {ListItem.map((v, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.data?.value?.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Tooltip
                    title={item ? item.projectName : ""}
                    color={"orange"}
                  >
                    {item.projectName.substring(0, 20)}
                  </Tooltip>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.dueDate}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p
                    //  enum: ["To Do", "In Progress", "Done"],
                    className={
                      item.status == "To Do"
                        ? "text-yellow-300"
                        : item.status == "In Progress"
                        ? "text-red-500"
                        : item.status == "Done"
                        ? "text-green-600"
                        : ""
                    }
                  >
                    {" "}
                    {item.status}{" "}
                  </p>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.assigne_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <FaEdit
                    className="text-lg text-orange-300"
                    onClick={() => {
                      setSelectedProject(item);
                      setIsUpdateModalOpen(true);
                    }}
                  ></FaEdit>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex flex-auto">
                  {/* href={`/items/${item.id}`} */}

                  {/* href={`/items/${item.id}/edit`} */}
                  {/* <Link > */}
                  <Link href={`mainPoint/${item._id}`}>
                    <Button className="text-green-600 hover:text-indigo-900 mr-2 border-1 border-green-500">
                      <FaEyeSlash></FaEyeSlash>
                    </Button>
                  </Link>

                  {/* </Link> */}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Button onClick={() => deleleItem(item._id)}>
                    <MdDeleteSweep className="text-lg text-red-500"></MdDeleteSweep>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
