import React, { useMemo } from "react";
import { Form, Button, Input, Card } from "antd";
import { v4 as uuidV4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import TaskItem from "./TaskItem";
import { 
  addTodoAction,
 } from "../../../redux/actions";


const ToDoListPage = () => {
  const dispatch = useDispatch();
  const { tasksList } = useSelector((state) => state.todoListReducer);

  const handleAddTask = (values) => {
    console.log(values);
    dispatch(
      addTodoAction({
        ...values,
        id: uuidV4(),
      })
    );
  };

  const renderTasksList = useMemo(() => {
    return tasksList.map((item, index) => (
      <TaskItem
        data={item}
        index={index}
        key={index}
      />
    ));
  }, [tasksList]);
  console.log("tasksList", tasksList)

  return (
    <>
      <Card title="To Do List With Antd">
        <Form
          name="addToList"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={tasksList}
          onFinish={handleAddTask}
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Hay điền tiêu đề vào đây",
              },
              {
                min: 6,
                message: "Tiêu đề ít nhất 6 kí tự",
              },
            ]}
          >
            <Input placeholder="Tiêu đề" />
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[
              {
                required: true,
                message: "Hay điền nội dung vào đây",
              },
              {
                min: 6,
                message: "Nội dung phải ít nhất 6 kí tự",
              },
            ]}
          >
            <Input placeholder="Nội dung" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Button type="primary" htmlType="submit" block>
              Thêm task
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {renderTasksList}
    </>
  );
};

export default ToDoListPage;
