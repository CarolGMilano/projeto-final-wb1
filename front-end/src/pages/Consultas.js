import { useState } from "react";

import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";

import { ContainePrincipal, Voltar } from "./styles";

import { ReactComponent as IconeVoltar } from "../assets/images/voltar.svg";

function Consulta({ mostrarDelete, setMostrarDelete, mostrarFormulario, setMostrarFormulario }) {

  const [consultas, setConsultas] = useState([]);
  const [alteracao, setAlteracao] = useState(null);
  const [codAlteracao, setCodAlteracao] = useState();

  const [consulta, setConsulta] = useState({
    motivo: "",
    data: "",
    hora: "",
    codP: "",
    codV: ""
  });

    return (
      <ContainePrincipal>
        <Voltar href="/"><IconeVoltar width="25px" height="25px"/>Voltar</Voltar>

        <Tabela 
          nomeDado="consultas"
          dados={consultas} setDados={setConsultas}
          dado={consulta} setDado={setConsulta}
          setAlteracao={setAlteracao}
          setCodAlteracao={setCodAlteracao} 
          mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />

        <Formulario 
          tabela="consultas"
          dado={consulta} setDado={setConsulta}
          dados={consultas} setDados={setConsultas}
          alteracao={alteracao} setAlteracao={setAlteracao}
          codAlteracao={codAlteracao} 
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />
      </ContainePrincipal>
    );
}
  
export default Consulta;