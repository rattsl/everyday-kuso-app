// データフェッチ中はローディングを表示
// 成功したらデータ表示、失敗したらエラー表示をする
// ローディングの情報を持ったstateをもつ
// ローディング中はフラグtrue,終わったらfalseにする


import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
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
