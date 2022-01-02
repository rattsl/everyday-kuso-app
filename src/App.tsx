import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "hogehoge",
  email: "hoge@hoge.com",
  address: "hogeaddress"
}

function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
    </div>
  );
}

export default App;
