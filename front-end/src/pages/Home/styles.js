import styled from "styled-components";
import { creme } from "../../styles/variables";

export const ContainerExterno = styled.section `
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 6vw;
`;

export const ContainerCentral = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3% 12%;
`;

export const LogoGrande = styled.img `
  width: 400px;
  height: auto;
  align-self: center;
`;

export const ContainerBemVindo = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Titulo = styled.h1 `
  color: ${creme};
  font-size: 40px;
  font-weight: 600;
`;

export const Subtitulo = styled.h2 `
  color: ${creme};
  font-size: 18px;
  padding-bottom: 5px;
  font-weight: 100;
`;

export const ContainerAtalhos = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 430px;
`;

export const LinkAtalho = styled.a `
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const Banner = styled.img `
  width: auto;
  height: 100vh;
`;