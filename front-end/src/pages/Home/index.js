import Atalho from "../../components/Atalho";

import { 
  Banner,  
  ContainerAtalhos, 
  ContainerBemVindo, 
  ContainerCentral, 
  LinkAtalho, 
  LogoGrande, 
  Subtitulo, 
  Titulo,
  ContainerExterno 
} from "./styles";

import banner from "../../assets/images/Banner.png";
import logoGrande from "../../assets/images/Logo-Grande.png";

function Home() {
    return (
      <ContainerExterno>
        <ContainerCentral>
          <LogoGrande src={logoGrande} alt="Logo 'Porto dos Lobos Vet'"/>

          <ContainerBemVindo>
            <Subtitulo>Seja bem-vindo(a),</Subtitulo>
            <Titulo>Maria Silva</Titulo>
          </ContainerBemVindo>

          <ContainerAtalhos>
            <LinkAtalho href="#">
              <Atalho 
                titulo="Internamentos" 
                texto="Controle de internamento" />
            </LinkAtalho>

            <LinkAtalho href="#">
              <Atalho 
                titulo="Exames" 
                texto="Agenda de exames" />
            </LinkAtalho>

            <LinkAtalho href="#">
              <Atalho 
                titulo="Fornecedores" 
                texto="Gerencie os fornecedores" />
            </LinkAtalho>

            <LinkAtalho href="#">
              <Atalho 
                titulo="PetShop" 
                texto="Acesse o site do petshop" />
            </LinkAtalho>
          </ContainerAtalhos>
        </ContainerCentral>
        
        <Banner src={banner} alt="Banner"/>
      </ContainerExterno>
    );
  }
  
  export default Home;