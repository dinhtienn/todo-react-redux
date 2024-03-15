import filtersSlice from "./filtersSlice";
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
  searchTextSelector,
  statusSelector,
  prioritiesSelector,
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
  const priorities = useSelector(prioritiesSelector);

  const handleChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filtersSlice.actions.searchFilterChange(event.target.value));

  const handleChangeStatus = (event: RadioChangeEvent) =>
    dispatch(filtersSlice.actions.statusFilterChange(event.target.value));

  const handleChangePriority = (value: Priority[]) =>
    dispatch(filtersSlice.actions.priorityFilterChange(value));

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
          value={priorities}
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
