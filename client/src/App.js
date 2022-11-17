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
    const id = tasks.length +1
    // if (tasks.length <= 8) {
    //   setTasks((prev) => [
    //     ...prev, {id: id, task: task, added: Date.now()}
    //   ]);
    // }

    const item = {task: task};

    try {
      await axios.post("http://localhost:8800/tasks", item);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    setAddedTask(true);
    
  };

  const handleDeleteClick = async (id) => {
    setAddedTask(false);
    
    // const removedItem = tasks.filter((task) => {
    //   return task.id !== id;
    // })

    // setTasks(removedItem);

    try {
      await axios.delete("http://localhost:8800/tasks/"+id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const handleEditClick = (task) => {
    setIsEditing(true);
    setActiveTask(task);
  }

  const handleEditChange = (e) => {
    setActiveTask({
      ...activeTask, task: e.target.value
    })
  }

  const handleUpdateClick = async (task, id) => {
    // const updatedItem = tasks.map((task) => {
    //   return task.id === id? activeTask : task
    // })
    // setTasks(updatedItem);

    const item = {task: task};

    try {
      await axios.put("http://localhost:8800/tasks/"+id, item);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/tasks");
        console.log(res);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllTasks();
    console.log(tasks);
  }, [])

  return (
    <div className="App">
        <h1>To Do App in ReactJs</h1>
        <div>
          {isEditing? 
          <EditForm activeTask={activeTask} handleEditChange={handleEditChange} setIsEditing={setIsEditing} handleUpdateClick={handleUpdateClick} /> 
          : 
          <AddTaskForm handleAddTaskClick={handleAddTaskClick}/>
          }

          <TaskList addedTask={addedTask} tasks={tasks} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>
        </div>
    </div>
  );
}

export default App;
