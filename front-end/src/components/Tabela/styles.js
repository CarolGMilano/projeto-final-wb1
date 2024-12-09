import styled from "styled-components";
import { creme, azul, laranja, branco, pretoSecundario, azulEscuro, laranjaEscuro, fontePrincipal, pretoPrimario } from "../../styles/variables.js";

import FundoLaranja from "../../assets/images/fundo_laranja.png";
import FundoAzul from "../../assets/images/fundo_azul.png";

export const ContainerPrincipal = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 0 40px 50px 40px;
`;

export const Titulo = styled.h1 `
  font-weight: 800;
  color: ${creme};
  font-size: 40px;
  margin-right: auto;
`;

export const ContainerCard = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ContainerInformacoes = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: initial;
  width: 100%;
`;

export const ContainerPesquisa = styled.div `
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const PesquisaErro = styled.span `
  color: ${branco};
  font-size: 30px;
  margin-top: 50px;
`;

export const Contagem = styled.div `
  font-size: 20px;
  font-weight: 200;
  color: ${branco};
  margin-left: 5px;
`;

export const Detalhe = styled.span `
  padding: 3px 15px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${laranja};
  font-weight: 500;
  color: ${pretoPrimario};
`;

export const ContainerAdicionar = styled.button `
  margin-right: 5px;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background-color: ${pretoSecundario};
  }
`;

export const AdicionarTexto = styled.h2 `
  font-size: 20px;
  font-weight: 200;
  color: ${branco};
`;

export const IconeAdicionar = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100px;
  border: none;
  background-color: ${azul};
`;

export const Card = styled.div `
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding: 30px;
  gap: 20px;
  border-radius: 25px;
  position: relative;

  &.par {
    background: 
    url(${FundoLaranja}) no-repeat right bottom, 
    ${laranja};
    background-size: contain;
  }

  &.impar {
    background: 
    url(${FundoAzul}) no-repeat right bottom, 
    ${azul};
    background-size: contain;
  }
`;

export const ContainerHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Identificador = styled.h1 `
  font-size: 25px;
  color: ${branco};
`;

export const ContainerBotoes = styled.div `
  display: flex;
  gap: 15px;
`;

export const ContainerBody = styled.div `
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContainerDado = styled.div `
  display: flex;
  flex-direction: column;
`;

export const TituloCard = styled.h2 `
  font-size: 15px;
  font-weight: 800;
  color: ${branco};
`;

export const TextoCard = styled.h3 `
  font-size: 15px;
  font-weight: 200;
  color: ${branco};
  
  &.destaque {
    padding: 10px 15px;
    border-radius: 50px;
    margin-top: 8px;
    text-align: center;
  }

  &.par {
    background-color: ${laranjaEscuro};
  }

  &.impar {
    background-color: ${azulEscuro};
  }
`;

export const VerMais = styled.button `
  position: absolute;
  width: 100px;
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  font-family: ${fontePrincipal};
  color: ${branco};
  font-weight: 500;
  top: 96%;
  left: 50%;
  transform: translate(-50%);
  transition: 0.3s;

  &.par {
    background-color: ${laranjaEscuro};
  }

  &.impar {
    background-color: ${azulEscuro};
  }

  &:hover {
    padding: 7px 12px;
    cursor: pointer; 
  }
`;

