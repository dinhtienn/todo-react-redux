import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { Priority } from "../../types";
import Todo from "../Todo";

const { Compact } = Space;
const { Option } = Select;

export default function TodoList() {
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Todo name="Learn React" priority={Priority.High} />
        <Todo name="Learn Redux" priority={Priority.Medium} />
        <Todo name="Learn JavaScript" priority={Priority.Low} />
      </Col>
      <Col span={24}>
        <Compact style={{ display: "flex" }}>
          <Input />
          <Select defaultValue="Medium">
            <Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Option>
            <Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Option>
            <Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Option>
          </Select>
          <Button type="primary">Add</Button>
        </Compact>
      </Col>
    </Row>
  );
}
