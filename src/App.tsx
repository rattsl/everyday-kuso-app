import { useState } from 'react';
import './App.css';
import { Task } from './Components/types';

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // textが変更されたときのコールバック関数
    setTitle(e.target.value);
  }
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    // 追加ボタンが押されたときのコールバック関数
    e.preventDefault();
    // titleステートがfalsyだったら早めにreturn
    if (!title) return;

    // 新しいtask作成
    const newTask: Task = {
      id: new Date().getTime(),
      title: title
    };

    // 配列stateに追加
    setTasks([newTask, ...tasks]);
    setTitle("");

  }
  return (
    <div className="App">
      <form
       onSubmit={e => {
         e.preventDefault();
         handleOnSubmit(e);
        }}
       >
        <input type="text" onChange={(e) => handleOnChange(e)}/>
        <input type="submit" value="課題を追加" onSubmit={handleOnSubmit}/>
      </form>
      <ul>
        {
          tasks.map((task) => {
            return <li key={task.id}>{task.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

// イミュータブルな操作とは操作の対象を不変に保つ操作のこと
// reactで配列stateを操作する場合はイミュータビリティを損なわないように操作する必要がある。
// 理由はReactはコンポーネントの変化を差分で検知しており、ミュータブルな操作をすると検知できなくなるから