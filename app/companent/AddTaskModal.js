import { Button, Modal, Form, Input, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { projectPost } from "../Api/ProjectApi";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../queryClient";

const { Option } = Select;

const AddTaskModal = ({ employees }) => {
  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation({
      mutationFn: projectPost,
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    });

  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log("Task Data:", values); // Send data to backend

      const value = await mutateAsync(values);

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
        <Button
          className="text-green-600 border-1 border-green-500 my-3 flex items-center "
          onClick={showModal}
        >
          <PlusOutlined /> Add New Project
        </Button>
      </div>
      <Modal
        title="Add New Project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" name="addTask">
          <Form.Item
            name="projectName"
            label="Project Name"
            rules={[
              {
                required: true,
                message: "Please enter the project name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="assigne_name"
            label="Assigne Name"
            rules={[
              {
                required: true,
                message: "Please enter  assigne name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="dueDate"
            label="Deadline"
            rules={[
              {
                required: true,
                message: "Please enter  deadline",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please enter  description",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="assignedEmployees"
            label="Assigned Employees"
            rules={[
              {
                required: true,
                message: "Please select at least one employee",
              },
            ]}
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
          {isError && <div className="text-red-500">{error.data.message}</div>}
        </div>
      </Modal>
    </>
  );
};

export default AddTaskModal;
