import { useState } from 'react';
import './App.css';
import { Task, Filter } from './Components/types';

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  // textが変更されたときに発火するコールバック関数
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  // 追加ボタンが押されたときに発火するコールバック関数
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    e.preventDefault();
    // titleステートがfalsyだったら早めにreturn
    if (!title) return;

    // 新しいtask作成
    const newTask: Task = {
      id: new Date().getTime(),
      title: title,
      checked: false,
      removed: false
    };

    // 配列stateに追加
    setTasks([newTask, ...tasks]);
    setTitle("");

  }
  // 登録済みのtaskが変更されたときに発火するコールバック関数
  const handleOnUpdate = (id: number, title: string) => {
    // deepCopy: JSONにした後で復元する
    const deepCopy: Task[] = JSON.parse(JSON.stringify(tasks));
    const newTasks = deepCopy.map((task) => {
      if (task.id === id){
        task.title = title;
      }
      return task;
    })
    setTasks(newTasks);
  }
  // checkboxが変更されたときに発火するコールバック関数
  const handleOnCheck = (id: number, checked: Boolean) => {
    const deepCopy: Task[] = JSON.parse(JSON.stringify(tasks));
    const newTasks = deepCopy.map((task) => {
      if(task.id === id){
        task.checked = !checked;
      }
      return task;
    })
    setTasks(newTasks);
  }
  // 削除ボタンが押下されたときに発火するコールバック関数
  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy: Task[] = JSON.parse(JSON.stringify(tasks));
    const newTask = deepCopy.map((task) => {
      if(task.id === id){
        task.removed = !removed;
      }
      return task;
    })
    setTasks(newTask);
  }
  // filterのoptionが変更されたときに発火するコールバック関数
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'all':
        // 削除されていないもの全て
        return !task.removed;
      case 'unchecked':
        // 完了済みではないもの且つ削除されていないもの
        return !task.checked && !task.removed;
      case 'checked':
        // 完了済み且つ削除されていないもの
        return task.checked && !task.removed
      case 'removed':
        // 削除済みのもの
        return task.removed;
      default:
        return task;
    }
  });
  const handleOnEmpty = () => {
    // 削除済みではないtaskのみで配列を作ってtasksステート更新
    const newTasks = tasks.filter(task => !task.removed)
    setTasks(newTasks);
  }
  return (
    <div className="App">
      {(filter === 'removed') ? (<button onClick={handleOnEmpty}>完全にタスクを削除する</button>) : (
      <form
       onSubmit={e => {
         e.preventDefault();
         handleOnSubmit(e);
        }}
       >
        <input type="text" onChange={(e) => handleOnChange(e)}/>
        <input type="submit" value="課題を追加" onSubmit={handleOnSubmit}/>
      </form>)}
      <select defaultValue="all" onChange={(e) => setFilter(e.target.value as Filter)}>
        <option value="all">全てのタスク</option>
        <option value="checked">完了済みタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">削除済タスク</option>
      </select>
      <ul>
        {
          filteredTasks.map((task) => {
            return (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.checked}
                  disabled={filter === 'checked' || filter === 'removed'}
                  onChange={() => handleOnCheck(task.id, task.checked)}
                  />
                <input 
                  type="text"
                  disabled={filter === 'checked' || filter === 'removed'}
                  value={task.title}
                  onChange={e => handleOnUpdate(task.id, e.target.value)}
                  />
                <button onClick={() => handleOnRemove(task.id, task.removed)}>
                  {task.removed ? '復元' : '削除' }
                </button>
              </li>)
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