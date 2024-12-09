import { useState } from "react";
import axios from "axios";
import { Combo, Container, Label, Opçao, Seta, Aviso } from "./styles";

import { ReactComponent as IconeSeta } from "../../../assets/images/selector.svg";


const SeletorEspecial = ({ tabela, titulo, id, valor, obrigatorio, campoValor, funcao, vazio, consultasDuplicadas }) => {
  const [dados, setDados] = useState([]);
  const [executado, setExecutado] = useState(false);

  const buscar = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/${tabela}`);

        setDados(response.data);

    } catch(error) {
      console.error(`Erro ao buscar ${tabela}:`, error);
    }
  };

  if (!executado) {
    buscar();
    setExecutado(true); 
  }

  return (
    <Container>
      <Label htmlFor={id} className={`${consultasDuplicadas > 0 ? "consultaDuplicada" : " "}`}>{titulo}</Label>
      
      <Seta><IconeSeta /></Seta>
        
        <Combo
          id={id}
          name={id}
          value={valor}
          required={obrigatorio}
          onChange={funcao}
          className={`${vazio ? "vazio": ""} ${consultasDuplicadas > 0 ? "consultaDuplicada" : "" }`}
        >
          <Opçao value="">Selecione</Opçao>
          {dados.map((opcao, index) => (
            <Opçao key={index} value={opcao[campoValor]}> {opcao.nome} </Opçao>
          ))}
        </Combo>

        <Aviso className={`
          ${vazio ? "visivel" : " "} 
        `}>O seletor não pode estar vazio.</Aviso>
    </Container>
  )

}

export default SeletorEspecial;