import styled from "styled-components";
import { amarelaPastel, branco, fontePrincipal, pretoPuroSecundario, vermelhoPastel } from "../../../styles/variables";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 5px;
`;  

export const Label = styled.label `
  color: ${branco};
  font-size: 13px;
  font-weight: 200;
  
  &.consultaDuplicada {
    color: ${amarelaPastel};
  }
`;

export const Conteudo = styled.input `
  border: none;
  border-radius: 5px;
  height: 38px;
  width: auto;
  background-color: ${pretoPuroSecundario};
  padding-left: 15px;
  color: ${branco};
  font-size: 12px;
  font-weight: 200;

  &::placeholder {
    color: ${branco};
    font-family: ${fontePrincipal};
    font-size: 12px;
    font-weight: 200;
    opacity: 0.3;
  }

  &.vazio,
  &.cpfInvalido,
  &.telefoneInvalido, 
  &.anoInvalido,
  &.dataPassada  {
    border: 1px solid ${vermelhoPastel};
  }

  &.cpfRepetido,
  &.crmvRepetido,
  &.consultaDuplicada {
    border: 1px solid ${amarelaPastel};
  }
`;

export const ConteudoObs = styled.textarea `
  border-radius: 5px;
  height: 40px;
  width: auto;
  background-color: ${pretoPuroSecundario};
  border: none;
  font-family: ${fontePrincipal};
  padding: 8px 15px;
  color: ${branco};
  font-size: 12px;
  font-weight: 200;

  &::placeholder {
    color: ${branco};
    font-family: ${fontePrincipal};
    font-size: 12px;
    font-weight: 200;
    opacity: 0.3;
  }

  &.vazio  {
    border: 1px solid ${vermelhoPastel};
  }
`;

export const Aviso = styled.span `
  font-size: 12px;
  display: none;
  
  &.visivel {
    display: flex;
    color: ${vermelhoPastel};
    }
    
  &.alerta {
    display: flex;
    color: ${amarelaPastel};
  }
`;