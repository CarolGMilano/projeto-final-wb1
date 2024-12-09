import { Container, InputPesquisa, PesquisaIcone } from "./styles";

import { ReactComponent as Lupa } from "../../../assets/images/search.svg";

const CampoPesquisa = ({ pesquisa, setPesquisa }) => {

  const aoDigitar = (event) => {
    setPesquisa(event.target.value);

    if(event.target.value === "") {
      setPesquisa("");
    }
  };  

//  console.log(pesquisa)

  return (
    <Container>
      <InputPesquisa 
        type="text" 
        onChange={aoDigitar} 
        value={pesquisa}
        placeholder="Pesquise o código do registro" />

      <PesquisaIcone><Lupa width="20px" height="20px"/></PesquisaIcone>
    </Container>
  )
}

export default CampoPesquisa;