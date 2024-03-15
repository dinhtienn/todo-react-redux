import {
  Col,
  Row,
  Input,
  Typography,
  Radio,
  Select,
  Tag,
  RadioChangeEvent,
} from "antd";
import {
  LIST_STATUSES,
  LIST_PRIORITIES,
  PRIORITY_COLOR_MAPPING,
} from "../../utils/constants";
import { Status, Priority } from "../../types";
import {
  searchFilterChange,
  statusFilterChange,
  priorityFilterChange,
} from "../../redux/actions";
import {
  searchTextSelector,
  statusSelector,
  prioritySelector,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;
const { Paragraph } = Typography;
const { Group: RadioGroup } = Radio;
const { Option } = Select;

export default function Filters() {
  const dispatch = useDispatch();
  const searchText = useSelector(searchTextSelector);
  const status = useSelector(statusSelector);
  const priority = useSelector(prioritySelector);

  const handleChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(searchFilterChange(event.target.value));

  const handleChangeStatus = (event: RadioChangeEvent) =>
    dispatch(statusFilterChange(event.target.value));

  const handleChangePriority = (value: Priority[]) =>
    dispatch(priorityFilterChange(value));

  return (
    <Row justify="center">
      <Col span={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Paragraph>
        <Search
          value={searchText}
          onChange={handleChangeSearchText}
          placeholder="Input search text"
        />
      </Col>
      <Col sm={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Paragraph>
        <RadioGroup value={status} onChange={handleChangeStatus}>
          {LIST_STATUSES.map((item: Status, index: number) => (
            <Radio value={item} key={index}>
              {item}
            </Radio>
          ))}
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
          onChange={handleChangePriority}
          value={priority}
        >
          {LIST_PRIORITIES.map((item: Priority, index: number) => (
            <Option value={item} label={item} key={index}>
              <Tag color={PRIORITY_COLOR_MAPPING[item]}>{item}</Tag>
            </Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
}
