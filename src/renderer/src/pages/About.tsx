import { useNavigate } from 'react-router-dom'

function About(): React.JSX.Element {
  const navigate = useNavigate()
    return (
        <div>
            <h1>pagina About</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    )
}

export default About