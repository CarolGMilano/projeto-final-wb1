import styled from "styled-components";
import { amarelaPastel, branco, pretoPrimario } from "../../../styles/variables.js";

export const Titulo = styled.h2 `
  color: ${branco};
  font-size: 25px;
  font-weight: 300;
  padding-bottom: 40px;
`;

export const Container = styled.div `
  display: flex; 
  flex-direction: column;
  gap: 20px;
`;

export const ContainerDetalhe = styled.div `
  display: grid;
  grid-template-columns: 180px 180px;
  justify-content: space-between;
`;

export const Aviso = styled.span `
  background-color: ${amarelaPastel};
  padding: 8px;
  font-size: 12px;
  border-radius: 10px;
  color: ${pretoPrimario};
  font-weight: 500;
  display: none;
  justify-content: center;

  &.visivel {
    display: flex;
  }
`;