import { useState } from "react";

import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";

import { ContainePrincipal, Voltar } from "./styles";

import { ReactComponent as IconeVoltar } from "../assets/images/voltar.svg";

function Paciente({ mostrarDelete, setMostrarDelete, mostrarFormulario, setMostrarFormulario }) {

  const [pacientes, setPacientes] = useState([]);
  const [alteracao, setAlteracao] = useState(null);
  const [codAlteracao, setCodAlteracao] = useState();

  const [paciente, setPaciente] = useState({
    nome: "",
    anoNascimento: "",
    especie: "",
    raca: "",
    porte: "", 
    temperamento: "", 
    microchipagem: "",
    observacao: "", 
    codT: ""
  });

    return (
      <ContainePrincipal>
        <Voltar href="/"><IconeVoltar width="25px" height="25px"/>Voltar</Voltar>

        <Tabela 
          nomeDado="pacientes"
          dados={pacientes} setDados={setPacientes}
          dado={paciente} setDado={setPaciente}
          setAlteracao={setAlteracao}
          setCodAlteracao={setCodAlteracao} 
          mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />

        <Formulario 
          tabela="pacientes"
          dado={paciente} setDado={setPaciente}
          dados={pacientes} setDados={setPacientes}
          alteracao={alteracao} setAlteracao={setAlteracao}
          codAlteracao={codAlteracao}
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />
      </ContainePrincipal>
    );
}
  
export default Paciente;