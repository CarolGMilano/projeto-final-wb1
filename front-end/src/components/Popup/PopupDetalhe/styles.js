import styled from "styled-components";
import { azul, azulEscuro, branco, laranja, laranjaEscuro, pretoPopup, pretoPuro, pretoSecundario } from "../../../styles/variables";


export const Fundo = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${pretoPopup};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const ContainerDetalhe = styled.div `
  width: 450px;
  height: auto;
  background-color: ${pretoPuro};
  border-radius: 30px;
  padding: 30px;
`;

export const Identificador = styled.h1 `
  font-size: 25px;
  color: ${pretoPuro};

  width: 60px;
  padding: 5px 0;
  text-align: center;
  border-radius: 20px;

  background-image: linear-gradient(to right, ${azul} , ${laranja});
`;

export const ContainerBody = styled.div `
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0 10px 0;
`;

export const ContainerDado = styled.div `
  display: flex;
  flex-direction: column;
`;

export const TituloCard = styled.h2 `
  font-size: 13px;
  font-weight: 500;
  color: ${branco};
`;

export const TextoCard = styled.h3 `
  font-size: 13px;
  font-weight: 200;
  color: ${branco};
  
  &.destaque {
    margin-top: 8px;
    padding: 8px 10px;
    border-radius: 50px;
    text-align: center;
    background-color: ${pretoSecundario};
  }
`;

export const ContainerOrganizacao = styled.div `
  display: grid;
  grid-template-columns: 180px 180px;
  justify-content: space-between;
`;

export const Botao = styled.button `
  padding: 5px 5px;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  background-color: ${pretoSecundario};

  svg {    
    path {
      stroke: ${branco};
    }
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;