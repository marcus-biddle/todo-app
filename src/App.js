import { useState } from 'react';
import './App.css';
import { TextInput } from './components/TextInput/TextInput';
import ToDoList from './components/List/ToDoList';

function App() {
  const [tasks, setTask] = useState([]);

  const handleClick = (task, priority) => {
    const id = tasks.length +1;
    setTask((prev) => [
      ...prev, {id: id, task: task, priority: priority}
    ]);
  };

  return (
    <div className="App">
        <h1>To Do App in ReactJs</h1>
        <div className='content'>
          {/* Input Form */}
          <TextInput handleClick={handleClick}/>

            {/* to do list */}
            <ToDoList tasks={tasks}/>
          {/* Completed List */}
        </div>
      
    </div>
  );
}

export default App;
