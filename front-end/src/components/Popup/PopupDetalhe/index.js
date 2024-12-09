import { Botao, ContainerDetalhe, Fundo, Identificador, ContainerBody, ContainerDado, TituloCard, TextoCard, ContainerOrganizacao } from "./styles";

import { ReactComponent as Cancelar } from "../../../assets/images/cancelar.svg";

const PopupDetalhe = ({ mostrarDetalhe, setMostrarDetalhe, nomeDetalhe, setNomeDetalhe }) => {
  if (!mostrarDetalhe && !nomeDetalhe) return null;

  return (
    <Fundo>
      <ContainerDetalhe>
        <Botao onClick={() => { setMostrarDetalhe(null); setNomeDetalhe(null); }}><Cancelar width="20px" height="20px"/></Botao>
        <Identificador>#{mostrarDetalhe.codP}</Identificador>

        <ContainerBody>
          <ContainerDado>
            <TituloCard>Nome do tutor</TituloCard>
            <TextoCard className="destaque">{nomeDetalhe}</TextoCard>
          </ContainerDado>

          <ContainerOrganizacao>
            <ContainerDado>
              <TituloCard>Nome do paciente</TituloCard>
              <TextoCard className="destaque">{mostrarDetalhe.nome}</TextoCard>
            </ContainerDado>
            
            <ContainerDado>
              <TituloCard>Ano de Nascimento</TituloCard>
            <TextoCard className="destaque">{mostrarDetalhe.anoNascimento} ({mostrarDetalhe.anoNascimento < 2024 ? `${(2024 - mostrarDetalhe.anoNascimento) === 1 ? "1 ano" : `${2024 - mostrarDetalhe.anoNascimento} anos`}` : "< 1 ano"})</TextoCard>
            </ContainerDado>
          </ContainerOrganizacao>

          <ContainerDado>
            <TituloCard>Espécie</TituloCard>
            <TextoCard className="destaque">{mostrarDetalhe.especie}</TextoCard>
          </ContainerDado>

          <ContainerOrganizacao>
            <ContainerDado>
              <TituloCard>Raça</TituloCard>
              <TextoCard className="destaque">{mostrarDetalhe.raca}</TextoCard>
            </ContainerDado>

            <ContainerDado>
              <TituloCard>Porte</TituloCard>
              <TextoCard className="destaque">{mostrarDetalhe.porte}</TextoCard>
            </ContainerDado>
          </ContainerOrganizacao>

          <ContainerOrganizacao>
            <ContainerDado>
              <TituloCard>Temperamento</TituloCard>
              <TextoCard className="destaque">{mostrarDetalhe.temperamento}</TextoCard>
            </ContainerDado>

            <ContainerDado>
              <TituloCard>Microchipagem</TituloCard>
              <TextoCard className="destaque">{mostrarDetalhe.microchipagem}</TextoCard>
            </ContainerDado>
          </ContainerOrganizacao>

          <ContainerDado>
            <TituloCard>Observações</TituloCard>
            <TextoCard className="destaque">{mostrarDetalhe.observacao}</TextoCard>
          </ContainerDado>
        </ContainerBody>
      </ContainerDetalhe>
    </Fundo>
  )
}

export default PopupDetalhe;