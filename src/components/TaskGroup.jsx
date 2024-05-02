import { useState } from "react";
import toDoIcon from "../images/noTasksToDo-icon.png";
import dropdownIcon from "../images/icons8-collapse-50.png"
const TopBar = ({ taskLength, modal }) => {
  const setVisibility = modal.setVisibility;
  const mystyle = {
    backgroundColor: modal.visibile ? "#66DAFF" : "#007FFF",
  };
  const add = () => {
    setVisibility();
  };
  return (
    <div className="topBar">
      <button className="addButton newTaskButton" style={mystyle} onClick={add}>
        <span>+</span>
        new task
      </button>
      <h2>
        You've got {taskLength} task{taskLength === 1 ? "" : "s"} left
      </h2>
      <div className={`searchBar`}>
        <input className="searchInput" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

const TaskContent = ({ tasks }) => {
  return (
    <div className="taskContent">
      {tasks.length === 0 ? (
        <EmptyToDoIcon />
      ) : (
        <>
          <TaskList tasks={tasks} />
        </>
      )}
    </div>
  );
};

const EmptyToDoIcon = () => {
  return (
    <div className="emptyToDoIcon">
      <img src={toDoIcon} />
      <p>We see you're a bit... jobless ;)</p>
      <p>...no go like create new task?</p>
    </div>
  );
};
const Task = ({ task }) => {
  return (
    <button className="task">
      <span></span>
      <div>
        <h4>{task.title}</h4>
        <div>
          <p>{task.desc}</p>
        </div>
      </div>
    </button>
  );
};
const TaskList = ({ tasks }) => {
  const [expand, setExpand] = useState(false);
  const style = expand ? { height: "18px" } : null;
  const style2 = expand? null : { transform: 'rotate(180deg)'}
  console.log(expand);
  return (
    <div key={tasks.length} className="taskList" style={style}>
      <button className="statusButton" onClick={() => setExpand(!expand)}>
        In Progress
        
        <img style={style2} className="dropDownIcon" src={dropdownIcon} />
      </button>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const TaskGroup = ({ taskSet, modal }) => {
  return (
    <div className="taskGroup">
      <TopBar taskLength={taskSet.tasks.length} modal={modal} />
      <TaskContent tasks={taskSet.tasks} />
    </div>
  );
};

export default TaskGroup;
