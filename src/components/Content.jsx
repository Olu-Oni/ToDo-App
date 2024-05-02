import "../styles/categories.css";
import "../styles/tasks.css";


import CategoryGroup from "./CategoryGroup";
import TaskGroup from "./TaskGroup";

const Content = ({modal, taskSet}) => {
  const categories = ["All","Home", "Work", "Personal", "School"];
  return (
    <div className="content">
      <CategoryGroup 
        categories={categories} 
        resetTasks={taskSet.resetTasks}
      />
      <TaskGroup
        taskSet={taskSet}
        modal ={modal}
      />
    </div>
  );
};

export default Content;
