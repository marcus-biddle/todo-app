import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddTaskForm from './components/Forms/AddTaskForm';
import EditForm from './components/Forms/EditForm';
import TaskList from './components/List/TaskList';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTask, setActiveTask] = useState();
  const [addedTask, setAddedTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  const handleAddTaskClick = async (task) => {

    try {
      await axios.post(`http://localhost:8800/tasks?item=${task}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    setAddedTask(true);
    
  };

  const handleDeleteClick = async (id) => {
    setAddedTask(false);

    try {
      await axios.delete(`http://localhost:8800/task/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const handleEditClick = (task) => {
    setIsEditing(true);
    setActiveTask(task);
  }

  const handleUpdateClick = async (task, id) => {

    try {
      await axios.put(`http://localhost:8800/tasks/${id}`, {item: task});
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const fetchAllTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/tasks");
      console.log(res.data);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    
    fetchAllTasks();

  }, [tasks])

  console.log(tasks);

  return (
    <div className="App">
        <h1>To Do App in ReactJs</h1>
        <div>
          {isEditing? 
          <EditForm activeTask={activeTask} setIsEditing={setIsEditing} handleUpdateClick={handleUpdateClick} /> 
          : 
          <AddTaskForm handleAddTaskClick={handleAddTaskClick}/>
          }

          <TaskList addedTask={addedTask} tasks={tasks} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>
        </div>
    </div>
  );
}

export default App;
