import { Container, Texto, Titulo, VerMais } from "./styles";

const Atalho = ({ titulo, texto }) => {
  return (
    <Container>
      <VerMais>Ver mais</VerMais>
      <Titulo>{titulo}</Titulo>
      <Texto>{texto}</Texto>
    </Container>
  )
}

export default Atalho;