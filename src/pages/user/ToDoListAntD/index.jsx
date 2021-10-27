import React, { useState, useMemo } from "react";
import { Form, Button, Input, Card } from "antd";
import TaskItem from "./TaskItem";

const ToDoListPage = () => {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (values) => {
    setTaskList([values, ...taskList]);
  };

  const handleEditTask = (index, values) => {
    const newTaskList = [...taskList]
    newTaskList.splice(index, 1, values)
    setTaskList(newTaskList)
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList]
    newTaskList.splice(index, 1)
    setTaskList(newTaskList)
  };

  const renderTaskItem = useMemo(() => {
    return taskList.map((taskItem, taskIndex) => {
      return (
        <TaskItem
          key={taskIndex}
          data={taskItem}
          index={taskIndex}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      );
    });
  }, [taskList]);

  return (
    <div>
      <Card title="To Do List">
        <Form
          name="addTask"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ username: "Tuấn" }}
          onFinish={(values) => handleAddTask(values)}
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Bạn chưa nhập tiêu đề!",
              },
              {
                min: 6,
                max: 32,
                message: "Tiêu đề phải nằm trong khoảng 6-32 kí tự",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nội dung"
            name="description"
            rules={[{ required: true, message: "Bạn chưa nhập nội dung" }]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Thêm Task
          </Button>
        </Form>
      </Card>
      {renderTaskItem}
    </div>
  );
};

export default ToDoListPage;
