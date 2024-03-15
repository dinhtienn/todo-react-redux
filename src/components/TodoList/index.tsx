import Todo from "../Todo";
import todoSlice from "./todoSlice";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { Priority, TodoItem } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { LIST_PRIORITIES, PRIORITY_COLOR_MAPPING } from "../../utils/constants";
import { todoRemainingSelector } from "../../redux/selectors";

const { Compact } = Space;
const { Option } = Select;

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState<string>("");
  const [priority, setPriority] = useState<Priority>(Priority.Medium);

  const todoList = useSelector(todoRemainingSelector);

  const handleAddTodo = () => {
    if (!todoName) return;

    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority(Priority.Medium);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoName(event.target.value);

  const handlePrioritySelectChange = (value: Priority) => setPriority(value);

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item: TodoItem) => (
          <Todo key={item.id} data={item} />
        ))}
      </Col>
      <Col span={24}>
        <Compact style={{ display: "flex" }}>
          <Input
            value={todoName}
            onChange={handleInputChange}
            placeholder="Input todo content"
          />
          <Select value={priority} onChange={handlePrioritySelectChange}>
            {LIST_PRIORITIES.map((item: Priority, index: number) => (
              <Option value={item} label={item} key={index}>
                <Tag color={PRIORITY_COLOR_MAPPING[item]}>{item}</Tag>
              </Option>
            ))}
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Compact>
      </Col>
    </Row>
  );
}
