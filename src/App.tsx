// データフェッチ中はローディングを表示
// 成功したらデータ表示、失敗したらエラー表示をする
// ローディングの情報を持ったstateをもつ
// ローディング中はフラグtrue,終わったらfalseにする



import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { UserCard } from './components/UserCard';
import { User } from './types/api/user';
import { UserProfile } from './types/userProfile';

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}${user.username}`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }))
      setUserProfiles(data);
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setLoading(false);
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : 
      <>
        {userProfiles.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </>}
    </div>
  );
}

export default App;
