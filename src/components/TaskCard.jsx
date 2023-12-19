import "./TaskCard.css";
import Tag from "./Tag.jsx";
import deleteIcon from "../assets/delete.png";
import PropTypes from "prop-types";
const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => {
            return <Tag key={index} tagName={tag} selected />;
          })}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};
export default TaskCard;
TaskCard.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  handleDelete: PropTypes.func,
  index: PropTypes.number,
};
