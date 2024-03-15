import { Row, Tag, Checkbox } from "antd";
import { TodoItem } from "../../types";
import { PRIORITY_COLOR_MAPPING } from "../../utils/constants";
import { toggleTodoStatus } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Todo({ data }: { data: TodoItem }) {
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch(toggleTodoStatus(data.id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(data.completed
          ? { opacity: 0.5, textDecoration: "line-through" }
          : {}),
      }}
    >
      <Checkbox checked={data.completed} onChange={toggleCheckbox}>
        {data.name}
      </Checkbox>
      <Tag color={PRIORITY_COLOR_MAPPING[data.priority]} style={{ margin: 0 }}>
        {data.priority}
      </Tag>
    </Row>
  );
}
