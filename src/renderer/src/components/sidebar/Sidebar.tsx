import * as Collapsible from "@radix-ui/react-collapsible";
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
    const navigate = useNavigate();

    return (
        <Collapsible.Content className="sidebar">
            <h2 className="sidebar-title">MENU</h2>
            <nav className="menu">
                <button className="menu-item" onClick={() => navigate('/')}>Home</button>
                <button className="menu-item" onClick={() => navigate('/about')}>Clientes</button>
                <button className="menu-item" onClick={() => navigate('/create')}>Cadastrar Clientes</button>
                <button className="menu-item" onClick={() => window.api.openDetailWindow()}>Sobre</button>
            </nav>
        </Collapsible.Content>
    );
}
