import './App.css';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';

function App() {
  return (
    <div className="App">
      <SearchInput></SearchInput>
      <UserCard />
    </div>
  );
}

export default App;
