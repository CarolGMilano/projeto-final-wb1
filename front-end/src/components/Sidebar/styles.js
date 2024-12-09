import styled from "styled-components";
import { cinza, pretoSecundario } from "../../styles/variables";

export const Container = styled.div `
  width: 60px;
  height: 95vh;
  background-color: ${pretoSecundario};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 17px 0 0 10px;
  padding: 30px 10px;
  position: fixed;
  z-index: 10;
`; 

export const Logo = styled.img `
  width: 45px;
  height: auto;
`;

export const Link = styled.a `
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3; 
  padding: 5px;
  border-radius: 10px;
  transition: 0.3s;
  position: relative;

  &::after {
    position: absolute;
    padding: 10px 20px;
    border-radius: 10px; 
    background-color: ${cinza}; 
    color: white;
    font-size: 15px;
    opacity: 0;
    visibility: hidden;
    left: 50px;
    transition: 0.3s;
  }

  &.dashboard::after {
    content: "Dashboard";
  }

  &.tutores::after {
    content: "Tutores";
  }

  &.veterinarios::after {
    content: "Veterinários";
  }

  &.pacientes::after {
    content: "Pacientes";
  }

  &.consultas::after {
    content: "Consultas";
  }

  &.configuracoes::after {
    content: "Configurações";
  }

  &.sair::after {
    content: "Sair";
  }

  &.ativo {
    opacity: 1;
    background-color: ${cinza};
  }

  &.conf {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

export const ContainerLinks = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

`;