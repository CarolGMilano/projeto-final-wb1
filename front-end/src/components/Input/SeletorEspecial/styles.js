import styled from "styled-components";
import { amarelaPastel, branco, fontePrincipal, pretoPuroSecundario, vermelhoPastel } from "../../../styles/variables";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;  

export const Label = styled.label `
  color: ${branco};
  font-size: 13px;
  font-weight: 200;

  &.consultaDuplicada {
    color: ${amarelaPastel};
  }
`;

export const Combo = styled.select `
  border: nome;
  border-radius: 5px;
  height: 38px;
  width: auto;
  background-color: ${pretoPuroSecundario};
  border: none;
  padding-left: 10px;
  color: ${branco};
  font-size: 12px;
  font-family: ${fontePrincipal};
  font-weight: 200;
  appearance: none;
  
  &.vazio  {
    border: 1px solid ${vermelhoPastel};
  }
    
  &.consultaDuplicada {
    border: 1px solid ${amarelaPastel};    
  }
`;

export const Opçao = styled.option `
  font-family: ${fontePrincipal};
  font-size: 12px;
  font-weight: 200;
  color: ${branco};
`;

export const Seta = styled.span `
  position: absolute;
  right: 5px;
  top: 29px;
`;

export const Aviso = styled.span `
  font-size: 12px;
  color: ${vermelhoPastel};
  display: none;

  &.visivel {
    display: flex;
  }
  
  &.consultaDuplicada {
    color: ${amarelaPastel}; 
  }
`;