import React from "react";
import "./TaskColumn.css";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <React.Fragment>
      <section className="task-column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={icon} alt="" />
          {title}
        </h2>
        {tasks.map((task, index) => {
          return (
            task.status === status && (
              <TaskCard key={index} title={task.task} tags={task.tags} handleDelete = {handleDelete} index = {index}/>
            )
          );
        })}
      </section>
    </React.Fragment>
  );
};

TaskColumn.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  tasks: PropTypes.array,
  status: PropTypes.string,
  handleDelete:PropTypes.func,
};

export default TaskColumn;
