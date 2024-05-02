import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [num, setNum] = useState([]);
  const [taskGroup, setTaskGroup] = useState([]);
  const [category, setCategory] = useState("All")
  useEffect(
    ()=>{
      axios.get('http://localhost:3005/tasks')
      .then(response=> setTaskGroup(response.data))
    },[]
  )
  
  
  console.log(taskGroup)
  const mytasks = {
    id:1,
    tasks:taskGroup,
    resetTasks() {
      setTaskGroup([]);
      setNum([]);
    },
    addTask(obj) {
      setTaskGroup(taskGroup.concat(obj));
      setNum(num.concat(`${num.length + 1}`));
    },
  };

  const modal = {
    visible: modalVisibility,
    setVisibility() {
      setModalVisibility(!modalVisibility);
    },
  };

  return (
    <>
      <Header />
      <Content modal={modal} taskSet={mytasks} />
      <Modal modal={modal} taskSet={mytasks} />
    </>
  );
}

export default App;
