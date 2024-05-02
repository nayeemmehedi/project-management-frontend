"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginPost } from "../Api/ProjectApi.js";
import Cookies from "js-cookie";

const Login = () => {
  const [form] = Form.useForm();

  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation({
      mutationFn: loginPost,
    });

  const onFinish = async (values) => {
    console.log("Received values of form:", values);

    const value = await mutateAsync(values);
    
    Cookies.set("authToken", value.data);

    setTimeout(() => {
      window.location.href = `http://localhost:3000`;
      
    }, 1500);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="w-[40%] ms-0 lg:ms-48 my-10 shadow p-10 bg-slate-300">
        <div className="my-4">
          <p className="font-bold my-3 text-sm">Hello Again !</p>
          <p className="font-light text-xs">Welcome Back </p>
        </div>
        <Form
          form={form}
          name="email_password_form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 8,
                message: "Password must be at least 8 characters long!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div>
          {isError && <div className="text-red-600">{error.error}</div>}
        </div>

        <div>
          {isSuccess && data && (
            <div className="text-green-300-600">Succefully Login</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
