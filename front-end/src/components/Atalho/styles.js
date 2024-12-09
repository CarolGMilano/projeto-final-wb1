import styled from "styled-components";
import { creme, pretoSecundario } from "../../styles/variables";

export const Container = styled.div`
  width: 200px;
  height: 150px;
  background-color: ${pretoSecundario}; 
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const VerMais = styled.h2 `
  color: ${creme};
  font-size: 12px;
  margin-left: auto;
  padding-bottom: 30px;
  font-weight: 500;
`;

export const Titulo = styled.h2 `
  color: ${creme};
  font-size: 22px;
  padding-bottom: 10px;
  font-weight: 800;
`;

export const Texto = styled.h3 `
  color: ${creme};
  font-size: 12px;
  font-weight: 200;
`;