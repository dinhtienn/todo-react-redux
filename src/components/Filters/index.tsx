import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";

const { Search } = Input;
const { Paragraph } = Typography;
const { Group: RadioGroup } = Radio;
const { Option } = Select;

export default function Filters() {
  return (
    <Row justify="center">
      <Col span={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Paragraph>
        <Search placeholder="Input search text" />
      </Col>
      <Col sm={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Paragraph>
        <RadioGroup>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </RadioGroup>
      </Col>
      <Col sm={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
        >
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
      </Col>
    </Row>
  );
}
