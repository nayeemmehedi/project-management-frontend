"use client";

import { Button, Drawer, Form, Input, Select, DatePicker } from "antd";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

const { Option } = Select;

const TaskFilters = ({ employees, onFilter }) => {
  const [form] = Form.useForm();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const showFilters = () => {
    setIsFilterVisible(true);
  };

  const hideFilters = () => {
    setIsFilterVisible(false);
    form.resetFields();
  };

  const handleFilters = (values) => {
    onFilter(values);
    hideFilters();
  };

  return (
    <div>
      <Button
        className="border-1 border-red-500 text-red-500 hover:text-green-500 hover:border-green-500 focus:text-green-500" 
        onClick={showFilters}
      >
        <div className=" flex">
          <div>
            <MdFilterList className=" text-xl mt-0.5"></MdFilterList>
          </div>{" "}
          <div className="ms-1">Filter Items</div>
        </div>
      </Button>
      <Drawer
        title="Task Filters"
        placement="right"
        width={400}
        onClose={hideFilters}
        open={isFilterVisible}
      >
        <Form form={form} layout="vertical" onFinish={handleFilters}>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Select placeholder="Select status" allowClear>
              <Option value="pending">Pending</Option>
              <Option value="inProgress">In Progress</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </Form.Item>
          <Form.Item name="dueDate" label="Due Date">
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="assignee"
            label="Assignee"
            rules={[{ required: true, message: "Please select an assignee" }]}
          >
            <Select placeholder="Select assignee" allowClear>
              {employees.map((employee) => (
                <Option key={employee.id} value={employee.id}>
                  {employee.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Apply Filters
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default TaskFilters;
