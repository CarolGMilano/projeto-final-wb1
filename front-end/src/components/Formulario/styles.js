import styled from "styled-components";
import { branco, pretoPopup, pretoPuro, verdePastel } from "../../styles/variables";

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
`;

export const Container = styled.section `
  background-color: ${pretoPuro};
  border-radius: 20px;
  padding: 30px; 
  width: 450px;
`;

export const ContainerBotoes = styled.div `
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
`;

export const Botao = styled.button `
  padding: 5px 12px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  gap: 5px;

  &.cancelar {
    color: ${pretoPuro};
    background-color: ${branco};
  }

  &.confirmar {
    color: ${branco};
    background-color: ${verdePastel};
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;