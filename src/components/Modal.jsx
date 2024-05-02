import "../styles/modal.css";
const Modal = ({ modal, taskSet }) => {
  const { addTask } = taskSet;
  console.log(modal.visible);
  const mystyle = {
    display: modal.visible ? "flex" : "none",
  };

  const getTaskInfo = (e) => {
    e.preventDefault();
    modal.setVisibility();
    const task = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      imporatance: e.target.importance.value,
      status: "inProgress",
    };
    e.target.title.value=''
    e.target.desc.value=''
    e.target.importance.value=1
    addTask(task);
  };

  return (
    <div className={`modalContainer`} style={mystyle}>
      <div className={`modalBackground`} onClick={modal.setVisibility}></div>
      <div className={`modal`}>
        <div className="top">
          <h3>Create your new task</h3>
          <button className="modalButtons" onClick={modal.setVisibility}>
            close
          </button>
        </div>

        <form className="subModal" onSubmit={getTaskInfo}>
          <div>
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" name="title" required></input>
          </div>

          <div className="desc">
            <label htmlFor="description">Description: </label>
            <textarea id="description" name="desc"></textarea>
          </div>

          <div>
            <label htmlFor="importance">Importance: </label>
            <select id="importance" name="importance">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
          </div>
          <div className="buttons">
            <button className=" modalButtons resetButton" type="reset">
            clear
          </button>
          <button className="addButton createButton" type="submit">
            Create
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Modal;
