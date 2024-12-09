import { Container, Label, Conteudo, ConteudoObs, Aviso } from "./styles";

const Campo = ({ atualizar, label, valor, obrigatorio, type, placeholder, classe, vazio, cpfValido, telefoneValido, ano, cpfsRepetidos, crmvsRepetidos, consultasDuplicadas, dataPassada }) => {

  const aoDigitar = (event) => {
    atualizar(event.target.value);
  };  

  return (
    <Container>
      <Label htmlFor={label} className={`${consultasDuplicadas > 0 ? "consultaDuplicada" : " "}`}>{label}</Label>

      {
        classe === "observacao" && (
          <ConteudoObs
            id={label}
            value={valor}
            onChange={aoDigitar}
            required={obrigatorio}
            placeholder={placeholder}
            className={` ${vazio ? "vazio" : " "} `}
          ></ConteudoObs>
        )
      }

      {
        classe === "hora" && (
          <Conteudo
            id={label}
            value={valor}
            onChange={aoDigitar}
            required={obrigatorio}
            type={type}
            min="08:00"
            max="18:00"
            placeholder={placeholder}
            className={` ${vazio ? "vazio" : " "} ${consultasDuplicadas > 0 ? "consultaDuplicada" : " "}`}
          ></Conteudo>
        )
      }   

      {  
        !classe && (
          <Conteudo
            id={label}
            value={valor}
            onChange={aoDigitar}
            required={obrigatorio}
            type={type}
            placeholder={placeholder}
            className={`
              ${vazio ? "vazio" : " "} 
              ${(label === "CPF" && cpfValido === false) ? "cpfInvalido" : " "} 
              ${(label === "CPF" && cpfsRepetidos > 0) ? "cpfRepetido" : " "} 
              ${(label === "CRMV" && crmvsRepetidos > 0) ? "crmvRepetido" : " "}
              ${(label === "Data" && consultasDuplicadas > 0) ? "consultaDuplicada" : " "} 
              ${(label === "Data" && dataPassada) ? "dataPassada" : " "} 
              ${(label === "Telefone" && telefoneValido === false) ? "telefoneInvalido" : " "} 
              ${(label === "Ano de Nascimento" && ano === false ? "anoInvalido" : " ")}
            `}
          ></Conteudo>
        )
      }

      <Aviso className={`
        ${vazio || (label === "CPF" && cpfValido === false) || (label === "Telefone" && telefoneValido === false) || (label === "Ano de Nascimento" && ano === false) || (label === "Data" && dataPassada) ? "visivel" : " "} 
        ${(label === "CPF" && cpfsRepetidos > 0) || (label === "CRMV" && crmvsRepetidos > 0) ? "alerta" : " "} 
      `}>
        {
          vazio ? "O campo não pode estar vazio." :
          (label === "CPF" && cpfValido === false) ? "CPF inválido." :
          (label === "CPF" && cpfsRepetidos > 0) ? "CPF já cadastrado." :
          (label === "CRMV" && crmvsRepetidos > 0) ? "CRMV já cadastrado." :
          (label === "Data" && dataPassada) ? "A data informada já passou." :
          (label === "Telefone" && telefoneValido === false) ? "Telefone inválido." :
          (label === "Ano de Nascimento" && ano === false) ? "Ano inválido." : " "
        }
      </Aviso>
    </Container>
  );
}

export default Campo;