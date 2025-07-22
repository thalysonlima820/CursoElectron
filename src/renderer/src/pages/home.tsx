import { useEffect, useState } from 'react'

function Home(): React.JSX.Element {
  const [user, setUser] = useState('')

  useEffect(() => {
    window.api.getUser().then((name: string) => {
      setUser(name)
    })
  })

  return (
    <div>
      <h1>Página Home</h1>
      <h2>User: {user}</h2>
    </div>
  )
}

export default Home
