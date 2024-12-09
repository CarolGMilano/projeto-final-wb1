import styled from "styled-components";
import { branco, fontePrincipal, laranja, pretoPrimario } from "../../../styles/variables";

export const Container = styled.div `
  position: relative;
`;

export const InputPesquisa = styled.input `
  background-color: ${branco};
  width: 400px;
  border: none;
  border-radius: 50px;
  color: ${pretoPrimario};
  font-size: 15px; 
  font-family: ${fontePrincipal};
  font-weight: 200;
  padding: 10px 30px;
`;

export const PesquisaIcone = styled.span `
  position: absolute;
  display: flex;
  justtify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${laranja};
  border-radius: 20px;
  top: 3px;
  right: 3px;
`;
