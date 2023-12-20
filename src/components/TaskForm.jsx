import Tag from "./Tag";
import "./TaskForm.css";
import { useState } from "react";
import PropTypes from "prop-types";
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className="app_header flex items-center justify-center border border-[#dcdcdc]">
      <form onSubmit={handleSubmit} className="w-2/5">
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input text-xl font-medium bg-[#f9f9f9] border border-[#dcdcdc] p-[8px_12px] rounded-md mb-[15px] w-full placeholder:text-[#686868] focus:outline-none rounded-[5px]"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line flex items-center justify-between">
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="Javascript"
              selectTag={selectTag}
              selected={checkTag("Javascript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          <div className="flex justify-center items-center gap-x-2">
            <select
              name="status"
              value={taskData.status}
              className="task_status text-base font-medium border border-[#999] rounded-[5px] w-[120px] h-[40px] p-[0_5px]"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="bg-[#6457f9] text-white rounded-[5px] h-[40px] flex items-center justify-center px-[6px]">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
export default TaskForm;
TaskForm.propTypes = {
  setTasks: PropTypes.any,
};
