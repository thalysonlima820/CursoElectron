import { useNavigate } from 'react-router-dom'

function Detail(): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Página Detail</h1>

      <button onClick={() => navigate(-1)}>🔙 Voltar</button>
    </div>
  )
}

export default Detail
