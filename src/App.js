import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/List/TaskList';
import AddTaskForm from './components/Forms/AddTaskForm';
import EditForm from './components/Forms/EditForm';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTask, setActiveTask] = useState();
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return []
    }
  });

  const handleAddTaskClick = (task) => {
    const id = tasks.length +1;
    setTasks((prev) => [
      ...prev, {id: id, task: task, added: Date.now()}
    ]);
  };

  const handleDeleteClick = (id) => {
    const removedItem = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(removedItem);
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

  const handleUpdateClick = (id) => {
    const updatedItem = tasks.map((task) => {
      return task.id === id? activeTask : task
    })
    setTasks(updatedItem);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
        <h1>To Do App in ReactJs</h1>
        <div>
          {isEditing? 
          <EditForm activeTask={activeTask} handleEditChange={handleEditChange} setIsEditing={setIsEditing} handleUpdateClick={handleUpdateClick} /> 
          : 
          <AddTaskForm handleAddTaskClick={handleAddTaskClick}/>
          }

          <TaskList tasks={tasks} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>

        </div>
    </div>
  );
}

export default App;
