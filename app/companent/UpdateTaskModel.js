import { Button, Modal, Form, Input, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { projectPost, projectUpdate } from "../Api/ProjectApi";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../queryClient";

const { Option } = Select;

const employees = [
    { id: 1, name: "Rahim", position: "Web Developer" },
    { id: 2, name: "Korim", position: "UX Designer" },
    { id: 3, name: "John", position: "UI Designer" },
    { id: 4, name: "Jane", position: "Front-end Developer" },
    { id: 5, name: "Bob", position: "Back-end Developer" },
  ];

const UpdateTaskModel = ({ item, isModalOpen,setIsModalOpen, onCancel }) => {

    

  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation({
      mutationFn: projectUpdate,
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    });

  const [form] = Form.useForm();
//   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
     


    const newObj = {};
    for (const [key, value] of Object.entries(values)) {
      if (value !== undefined && value !== '') {
        newObj[key] = value;
      }
    }

    console.log("Task Data:", newObj); // Send data to backend

    const value = await mutateAsync({ id: item._id, body: newObj });



      setTimeout(() => {
        setIsModalOpen(false);
      }, 1000);

      form.resetFields();
    } catch (error) {
      console.error("Validation Error:", error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <div className="flex justify-end">
       
      </div>

      {item &&
      <Modal
        title="Update Project Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={onCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" name="addTask">
          <Form.Item
            name="projectName"
            label="Project Name"
            
          >
            <Input  placeholder={item.projectName}/>
          </Form.Item>

          <Form.Item
            name="assigne_name"
            label="Assigne Name"
           
          >
            <Input placeholder={item.assigne_name}/>
          </Form.Item>

          <Form.Item
            name="dueDate"
            label="Deadline"
           
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
           
          >
            <Input placeholder={item.description}/>
          </Form.Item>

          <Form.Item
            name="assignedEmployees"
            label="Assigned Employees"
           
          >
            <Select mode="multiple" placeholder="Select employees">
              {employees.map((employee) => (
                <Option key={employee.id} value={employee.name}>
                  {employee.name} - {employee.position}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>

        {/* <div>{isSuccess && <p>Successfully Done..</p> }</div> */}

        <div>
          {/* {isError && <div className="text-red-500">{error.data.message}</div>} */}
        </div>
      </Modal>}
    </>
  );
};

export default UpdateTaskModel;
