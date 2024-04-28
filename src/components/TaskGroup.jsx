import toDoIcon from "../images/noTasksToDo-icon.png";

const TopBar = ({ num, addTask }) => {
  return (
    <div className="topBar">
      <button className="addButton newTaskButton" onClick={addTask}>
        <span>+</span>
        new task
      </button>
      <h2>
        You've got {num} task{num === 1 ? "" : "s"} left
      </h2>
      <div className="searchBar">
        <input className="searchInput" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

const Tasks = ({ condition }) => {
  return (
    <div className="tasks">
      {condition ? (
        <>
          <img className="emptyToDoIcon" src={toDoIcon} />
          <p>We see you're a bit... jobless ;)</p>
          <p>...no go like create new task?</p>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

const TaskGroup = ({ num, condition, addTask }) => {
  return (
    <div className="taskGroup">
      <TopBar num={num} addTask={addTask} />
      <Tasks condition={condition} />
    </div>
  );
};

export default TaskGroup;
