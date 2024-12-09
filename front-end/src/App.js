import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tutor from './pages/Tutores';
import Veterinario from './pages/Veterinarios';
import Paciente from './pages/Pacientes';
import Consulta from './pages/Consultas';

import Sidebar from './components/Sidebar';

import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles';

function App() {
  const [mostrarDelete, setMostrarDelete] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(null);

  return (
    <>
      <GlobalStyle />
       
      <Router>
        <Container> 
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/tutores" element={
              <Tutor 
                mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
                mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />
            } />

            <Route path="/veterinarios" element={
              <Veterinario 
                mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
                mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}/>
            } />

            <Route path="/pacientes" element={
              <Paciente 
                mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
                mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}/>
            } />

            <Route path="/consultas" element={
              <Consulta 
                mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
                mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}/>
            } />
          </Routes>
        </Container>  
      </Router>
    </>
  );
}

export default App;