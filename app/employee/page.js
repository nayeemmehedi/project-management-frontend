import React from "react";

const employees = [
  { id: 1, name: "Rahim", position: "Web Developer" },
  { id: 2, name: "Korim", position: "UX Designer" },
  { id: 3, name: "John", position: "UI Designer" },
  { id: 4, name: "Jane", position: "Front-end Developer" },
  { id: 5, name: "Bob", position: "Back-end Developer" },
];

function page() {
  return (
    <div className="w-[80%] mx-auto my-9">
      <p className="font-bold">Employee List :</p>
      <ul>
        {employees.map((employee) => (
         
            <li className="my-2 py-2 shadow font-extralight ">
              Name : <span className="font-bold"> {employee.name}</span>, Position : <span className="font-bold">{employee.position}</span>{" "}
            </li>
          
        ))}
      </ul>
    </div>
  );
}

export default page;
