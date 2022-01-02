export const UserCard = () => {
  return (
    <div>
      <img alt="プロフ画像" src="https://source.unsplash.com/OhKElOkQ3RE" height={160} width={160}/>
      <p>ユーザー名</p>
      <dl>
        <dt>メール</dt>
        <dd>hoge@hoge.com</dd>
        <dt>TEL</dt>
        <dd>1234-5678-9100</dd> 
        <dt>会社名</dt>
        <dd>hoge株式会社</dd>
        <dt>URL</dt>
        <dd>https://hoge.com</dd>
      </dl>
    </div>
  )
}