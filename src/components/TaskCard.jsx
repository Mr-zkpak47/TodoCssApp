import Tag from "./Tag.jsx";
import deleteIcon from "../assets/delete.png";
import PropTypes from "prop-types";
const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card w-full min-h-[100px] border border-[#dcdcdc] rounded-[10px] p-[15px] m-[15px_0]">
      <p className="task_text break-all font-bold text-[18px] mb-[15px]">{title}</p>
      <div className="task_card_bottom_line flex items-center justify-between">
        <div className="task_card_tags">
          {tags.map((tag, index) => {
            return <Tag key={index} tagName={tag} selected />;
          })}
        </div>
        <div
          className="task_delete w-[35px] h-[35px] rounded-[100%] flex items-center justify-center cursor-pointer transition-all hover:bg-[#ebebeb] hover:opacity-[80%]"
          onClick={() => handleDelete(index)}
        >
          <img src={deleteIcon} className="delete_icon opacity-[50%] w-[20px] transition-all" alt="" />
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
