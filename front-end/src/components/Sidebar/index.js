import { useLocation } from "react-router-dom";

import { Container, ContainerLinks, Link, Logo } from "./styles.js";
import logo from "../../assets/images/Logo.svg";

import { ReactComponent as Home } from "../../assets/images/Dashboard.svg";
import { ReactComponent as Tutor } from "../../assets/images/Tutores.svg";
import { ReactComponent as Veterinario } from "../../assets/images/Stethoscope.svg";
import { ReactComponent as Paciente } from "../../assets/images/PawPrint.svg";
import { ReactComponent as Consulta } from "../../assets/images/Consultas.svg";

import { ReactComponent as Configuracao } from "../../assets/images/Configurações.svg";
import { ReactComponent as Logout } from "../../assets/images/Logout.svg";


const Sidebar = () => {
  const paginaAtual = useLocation();

  return (
    <Container>
      <Logo src={logo} alt="Logo" />

      <ContainerLinks>
        <Link href="/" className={`dashboard ${paginaAtual.pathname === "/" ? "ativo" : ""}`}>
          <Home width="25px" height="25px" />
        </Link>
        
        <Link href="/tutores" className={`tutores ${paginaAtual.pathname === "/tutores" ? "ativo" : ""}`}>
          <Tutor width="25px" height="25px"/>
        </Link>

        <Link href="/veterinarios" className={`veterinarios ${paginaAtual.pathname ==="/veterinarios" ? "ativo" : ""}`}>
          <Veterinario width="25px" height="25px" />
        </Link>

        <Link href="/pacientes" className={`pacientes ${paginaAtual.pathname === "/pacientes" ? "ativo" : ""}`}>
          <Paciente width="25px" height="25px" />
        </Link>
        
        <Link href="/consultas" className={`consultas ${paginaAtual.pathname === "/consultas" ? "ativo" : ""}`}>
          <Consulta width="25px" height="25px" />
        </Link>
      </ContainerLinks>

      <ContainerLinks>
        <Link href="#" className="conf configuracoes"><Configuracao width="25px" height="25px" /></Link>
        <Link href="#" className="conf sair"><Logout width="25px" height="25px" /></Link>
      </ContainerLinks>
    </Container>
  )
}

export default Sidebar;