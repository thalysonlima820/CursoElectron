import { useEffect, useState } from 'react'

function Home(): React.JSX.Element {
  const [user, setUser] = useState('')

  useEffect(() => {
    window.api.getUser().then((name: string) => {
      setUser(name)
    })
  },[])


  async function handkrAdd(){
    const respose = await window.api.fetchUser();
    console.log(respose)
  }

  return (
    <div>
      <h1>Página Home</h1>
      <h2>User: {user}</h2>
      <br />
      <button onClick={handkrAdd}>
        TESTAR
      </button>
    </div>
  )
}

export default Home
