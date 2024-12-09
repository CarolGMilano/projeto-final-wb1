import { useState } from "react";

import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";

import { ContainePrincipal, Voltar } from "./styles";

import { ReactComponent as IconeVoltar } from "../assets/images/voltar.svg";

function Veterinario({ mostrarDelete, setMostrarDelete, mostrarFormulario, setMostrarFormulario }) {

  const [veterinarios, setVeterinarios] = useState([]);  
  const [alteracao, setAlteracao] = useState(null);
  const [codAlteracao, setCodAlteracao] = useState();

  const [veterinario, setVeterinario] = useState({
    cpf: "",
    nome: "",
    crmv: "",
    especialidade: "",
    telefone: ""
  });

    return (
      <ContainePrincipal>
        <Voltar href="/"><IconeVoltar width="25px" height="25px"/>Voltar</Voltar>

        <Tabela 
          nomeDado="veterinarios"
          dados={veterinarios} setDados={setVeterinarios}
          dado={veterinario} setDado={setVeterinario}
          setAlteracao={setAlteracao}
          setCodAlteracao={setCodAlteracao} 
          mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete} 
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />

        <Formulario 
          tabela="veterinarios"
          dado={veterinario} setDado={setVeterinario}
          dados={veterinarios} setDados={setVeterinarios}
          alteracao={alteracao} setAlteracao={setAlteracao}
          codAlteracao={codAlteracao} 
          mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}/>
      </ContainePrincipal>
    );
}
  
export default Veterinario;