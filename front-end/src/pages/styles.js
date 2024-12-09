import styled from "styled-components";
import { branco } from "../styles/variables";

export const ContainePrincipal = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 0 100px;
`;

export const Voltar = styled.a `
  width: 100px;
  margin: 40px 0 50px 40px;
  color: ${branco};
  font-size: 20px;
  font-weight: 200;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 9px;
    background-color: ${branco};
    width: 85px;
    height: 1px;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }
  
  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;  