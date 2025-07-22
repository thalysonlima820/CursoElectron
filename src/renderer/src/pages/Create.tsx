import { useNavigate } from 'react-router-dom'

function Create(): React.JSX.Element {
  const navigate = useNavigate()
    return (
        <div>
            <h1>pagina Create</h1>
         
      <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    )
}

export default Create