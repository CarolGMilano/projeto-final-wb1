import { useState } from "react";

import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";

import { ContainePrincipal, Voltar } from "./styles";

import { ReactComponent as IconeVoltar } from "../assets/images/voltar.svg";

function Tutor({ mostrarDelete, setMostrarDelete, mostrarFormulario, setMostrarFormulario }) {

  const [tutores, setTutores] = useState([]);
  const [alteracao, setAlteracao] = useState(null);
  const [codAlteracao, setCodAlteracao] = useState();

  const [tutor, setTutor] = useState({
    cpf: "",
    nome: "",
    telefone: "",
    endereco: "",
  });

    return (
      <ContainePrincipal>
        <Voltar href="/"><IconeVoltar width="25px" height="25px"/>Voltar</Voltar>

        <Tabela 
          nomeDado="tutores"
          dados={tutores} setDados={setTutores}
          dado={tutor} setDado={setTutor}
          setAlteracao={setAlteracao}
          setCodAlteracao={setCodAlteracao}
          mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />

        <Formulario 
          tabela="tutores"
          dado={tutor} setDado={setTutor}
          dados={tutores} setDados={setTutores}
          alteracao={alteracao} setAlteracao={setAlteracao}
          codAlteracao={codAlteracao}
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />
      </ContainePrincipal>
    );
}
  
export default Tutor;