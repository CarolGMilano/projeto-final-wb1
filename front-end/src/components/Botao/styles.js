import styled from "styled-components";
import { branco, cinza, pretoPrimario, vermelhoPastel } from "../../styles/variables";

export const BotaoEstilo = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100px;
  border: none;
  transition: 0.3s;
  position: relative;

  &::after {
    position: absolute;
    padding: 10px 20px;
    border-radius: 10px; 
    font-size: 15px;
    opacity: 0;
    visibility: hidden;
    left: 10px;
    top: -50px;
    transition: 0.3s;
  }
    
  &.alterar::after {
    content: "Alterar";
    background-color: ${branco}; 
    color: ${pretoPrimario};
  }

  &.deletar::after {
    content: "Deletar";
    background-color: ${vermelhoPastel};
    color: ${branco}; 
  }

  &.alterar {
    background-color: ${branco};
  }

  &.deletar {
    background-color: ${vermelhoPastel};
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;