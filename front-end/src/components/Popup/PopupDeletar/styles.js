import styled from "styled-components";
import { branco, pretoPopup, pretoPuro, pretoPuroSecundario, vermelhoPastel } from "../../../styles/variables.js";

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
  z-index: 50;
`;

export const ContainerAviso = styled.div `
  width: 450px;
  heigth: 400px;
  background-color: ${pretoPuro};
  border-radius: 30px;
`;

export const Icone = styled.div `
  padding: 30px 30px 0 30px;
`;

export const Titulo = styled.h2 `
  font-size: 20px;
  font-weight: 700;
  color: ${branco};
  padding: 15px 30px;
`;

export const Texto = styled.h3 `
  font-size: 15px;
  font-weight: 200;
  color: ${branco};
  padding: 0 30px 25px 30px;
`;

export const Destaque = styled.span `
  font-weight: 800;
`;

export const ContainerBotoes = styled.div `
  background-color: ${pretoPuroSecundario};
  padding: 30px;
  border-radius: 0 0 30px 30px;
  display: flex;
  justify-content: space-around;
`;

export const Botao = styled.button `
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  gap: 5px;

  &.cancelar {
    color: ${pretoPuro};
    background-color: ${branco};
  }

  &.excluir {
    color: ${branco};
    background-color: ${vermelhoPastel};
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
