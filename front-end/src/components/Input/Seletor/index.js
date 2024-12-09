import { Container, Label, Combo, Opçao, Seta, Aviso } from "./styles";

import { ReactComponent as IconeSeta } from "../../../assets/images/selector.svg";

const Seletor = ({ titulo, id, dados, valor, obrigatorio, funcao, vazio }) => {

  return (
    <Container>
        <Label htmlFor={id}>{titulo}</Label>
        
        <Seta><IconeSeta /></Seta>
      
        <Combo
          id={id}
          name={id}
          value={valor}
          onChange={funcao}
          required={obrigatorio}
          className={vazio ? "vazio": ""}
        >
          <Opçao value="">Selecione</Opçao>
          {dados.map((opcao) => (
            <Opçao key={opcao} value={opcao}> {opcao} </Opçao>
          ))}
        </Combo>

        <Aviso className={`${vazio ? "visivel" : " "}`}>O seletor não pode estar vazio.</Aviso>
      </Container>
  )
}

export default Seletor;