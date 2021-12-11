import './App.css';
import TaskInput from './Components/TaskInput';
import TaskItem from './Components/TaskItem';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskList />
      <TaskItem />
      <TaskInput />
    </div>
  );
}

export default App;
