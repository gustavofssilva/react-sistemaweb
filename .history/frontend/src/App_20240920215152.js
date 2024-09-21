import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarClientes from './ListarClientes';
// outros imports...

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* outras rotas... */}
                    <Route path="/clientes" element={<ListarClientes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
