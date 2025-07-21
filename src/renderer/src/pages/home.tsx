import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home(): React.JSX.Element {
  const navigate = useNavigate()
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

      <button onClick={() => navigate('/about')}>Ir para About</button>
      <button onClick={() => navigate('/create')}>Ir para Create</button>

      <button onClick={() => window.api.openDetailWindow()}>Ir para Detail</button>
    </div>
  )
}

export default Home
