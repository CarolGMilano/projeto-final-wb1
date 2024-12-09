import Campo from "../../Input/Campo";
import Seletor from "../../Input/Seletor";
import SeletorEspecial from "../../Input/SeletorEspecial";
import { Container, Titulo, ContainerDetalhe, Aviso } from "./styles";

const PopupFormulario = ({ tabela, dado, setDado, tipo, vazio, cpfValido, telefoneValido, ano, cpfsRepetidos, crmvsRepetidos, consultasDuplicadas, dataPassada }) => {
  const porte = [
    "Pequeno", 
    "Médio", 
    "Grande"
  ];

  const temperamento = [
    "Calmo", 
    "Amigável", 
    "Assustado", 
    "Agitado", 
    "Agressivo"
  ];

  const microchipagem = [
    "Sim",
    "Não",
    "Indeterminado"
  ];
  
  const especialidade = [
    "Clínica Geral",
    "Cirurgia",
    "Dermatologia",
    "Oftalmologia",
    "Cardiologia",
    "Oncologia",
    "Ortopedia",
    "Neurologia",
    "Endocrinologia",
    "Medicina de Animais Exóticos",
    "Gastroenterologia",
    "Nefrologia"
  ];

  const motivos = [
    "Urgência",
    "Emergência",
    "Acompanhamento",
    "Preventiva",
    "Ambulatorial",
    "Check-up",
    "Vacinação"
  ];

  const classe = [
    "Mamíferos", 
    "Aves", 
    "Répteis"
  ];

  const familias = {
    Mamíferos: ["Felinos", "Canídeos", "Roedores", "Lagomorfos", "Furões"],
    Aves: ["Psitacídeos", "Passeriformes"],
    Répteis: ["Quelônios", "Squamata"],
  };

  return (
    <>
      {
        tabela === "tutores" && (
            <>
              <Titulo>{tipo} um tutor</Titulo>

              <Container>
                <Campo 
                  atualizar={novoNome => setDado((prevEstado) => ({ ...prevEstado, nome: novoNome}))}
                  label="Nome"
                  valor={dado.nome || ""}
                  obrigatorio
                  type="text"
                  placeholder="Digite um nome" 
                  vazio={vazio.nome} />
                  
                <ContainerDetalhe>
                  <Campo 
                    atualizar={novoCPF => setDado((prevEstado) => ({ ...prevEstado, cpf: novoCPF}))}
                    label="CPF"
                    valor={dado.cpf || ""}
                    obrigatorio
                    type="text"
                    placeholder="123.456.789-10"
                    vazio={vazio.cpf}
                    cpfValido={cpfValido}
                    cpfsRepetidos={cpfsRepetidos} />

                  <Campo 
                    atualizar={novoTelefone => setDado((prevEstado) => ({ ...prevEstado,telefone: novoTelefone}))}
                    label="Telefone"
                    valor={dado.telefone || ""}
                    obrigatorio
                    type="tel"
                    placeholder="(00) 90000-0000"
                    vazio={vazio.telefone} 
                    telefoneValido={telefoneValido}/>
                </ContainerDetalhe>

                <Campo 
                  atualizar={novoEndereco => setDado((prevEstado) => ({ ...prevEstado,endereco: novoEndereco}))}
                  label="Endereço"
                  valor={dado.endereco || ""}
                  obrigatorio
                  type="text"
                  placeholder="Rua exemplo, 123"
                  vazio={vazio.endereco} />
              </Container>
            </>
        )
      }

      {
        tabela === "pacientes" && (
          <>
            <Titulo>{tipo} um paciente</Titulo>

            <Container>
              <SeletorEspecial 
                tabela="tutores"
                titulo="Tutor" 
                id="tutorAssociado" 
                valor={dado.codT || ""}
                campoValor="codT"
                funcao={(codT) => setDado((prevEstado) => ({ ...prevEstado, codT: codT.target.value}))} 
                vazio={vazio.codT} />
              
              <ContainerDetalhe>
                <Campo 
                  atualizar={nome => setDado((prevEstado) => ({ ...prevEstado, nome: nome}))}
                  label="Nome"
                  valor={dado.nome || ""}
                  obrigatorio
                  type="text"
                  placeholder="Digite um nome"
                  vazio={vazio.nome} />

                <Campo 
                  atualizar={anoNascimento => setDado((prevEstado) => ({ ...prevEstado,anoNascimento: anoNascimento}))}
                  label="Ano de Nascimento"
                  valor={dado.anoNascimento || ""}
                  obrigatorio
                  type="text"
                  placeholder="Digite o ano de nascimento" 
                  vazio={vazio.anoNascimento}
                  ano={ano} />
              </ContainerDetalhe>
              
              <Seletor 
                  titulo="Classe"
                  id="classe"
                  dados={classe}
                  valor={dado.especie || ""}
                  funcao={(especie) => setDado((prevEstado) => ({ ...prevEstado, especie: especie.target.value}))}
                  vazio={vazio.especie} />

              <ContainerDetalhe>
                 <Seletor 
                  titulo="Família"
                  id="familia"
                  dados={dado.especie ? familias[dado.especie] : []}
                  valor={dado.raca || ""}
                  funcao={(raca) => setDado((prevEstado) => ({ ...prevEstado, raca: raca.target.value}))}
                  vazio={vazio.raca} />

                <Seletor 
                  titulo="Porte"
                  id="porte"
                  dados={porte}
                  valor={dado.porte || ""}
                  funcao={(porte) => setDado((prevEstado) => ({ ...prevEstado, porte: porte.target.value}))} 
                  vazio={vazio.porte} />
              </ContainerDetalhe>

              <ContainerDetalhe>
                <Seletor 
                  titulo="Temperamento"
                  id="temperamento"
                  dados={temperamento}
                  valor={dado.temperamento || ""}
                  funcao={(temperamento) => setDado((prevEstado) => ({ ...prevEstado, temperamento: temperamento.target.value}))} 
                  vazio={vazio.temperamento} />
              
                <Seletor 
                  titulo="Microchipagem"
                  id="microchipagem"
                  dados={microchipagem}
                  valor={dado.microchipagem || ""}
                  funcao={(microchipagem) => setDado((prevEstado) => ({ ...prevEstado, microchipagem: microchipagem.target.value}))} 
                  vazio={vazio.microchipagem} />
              </ContainerDetalhe>
             
             <Campo 
                atualizar={observacao => setDado((prevEstado) => ({ ...prevEstado, observacao: observacao}))}
                label="Observação"
                valor={dado.observacao || ""}
                obrigatorio
                type="text"
                placeholder="Digite sua observação" 
                classe="observacao" 
                vazio={vazio.observacao} />
            </Container>
          </>
        )
      }

      {
        tabela === "veterinarios" && (
          <>
            <Titulo>{tipo} um veterinario</Titulo>

            <Container>
              <Campo 
                atualizar={nome => setDado((prevEstado) => ({ ...prevEstado,nome: nome}))}
                label="Nome"
                valor={dado.nome || ""}
                obrigatorio
                type="text"
                placeholder="Digite um nome"
                vazio={vazio.nome} />

              <ContainerDetalhe>
                <Campo 
                  atualizar={cpf => setDado((prevEstado) => ({ ...prevEstado, cpf: cpf}))}
                  label="CPF"
                  valor={dado.cpf || ""}
                  obrigatorio
                  type="text"
                  placeholder="Digite um C.P.F"
                  vazio={vazio.cpf} 
                  cpfValido={cpfValido}
                  cpfsRepetidos={cpfsRepetidos} />

                <Campo 
                  atualizar={crmv => setDado((prevEstado) => ({ ...prevEstado, crmv: crmv}))}
                  label="CRMV"
                  valor={dado.crmv || ""}
                  obrigatorio
                  type="text"
                  placeholder="Digite o CRMV"
                  vazio={vazio.crmv}
                  crmvsRepetidos={crmvsRepetidos} />
              </ContainerDetalhe>

              <Campo 
                atualizar={telefone => setDado((prevEstado) => ({ ...prevEstado, telefone: telefone}))}
                label="Telefone"
                valor={dado.telefone || ""}
                obrigatorio
                type="tel"
                placeholder="Digite o telefone"
                vazio={vazio.telefone} 
                telefoneValido={telefoneValido}/>

              <Seletor 
                titulo="Especialidade"
                id="especialidade"
                dados={especialidade}
                obrigatorio
                valor={dado.especialidade || ""}
                funcao={(especialidade) => setDado((prevEstado) => ({ ...prevEstado, especialidade: especialidade.target.value}))}
                vazio={vazio.especialidade} />
            </Container>
          </>
        )
      }

      {
        tabela === "consultas" && (
          <>
            <Titulo>{tipo} uma consulta</Titulo>

            <Container>
              <SeletorEspecial 
                tabela="pacientes"
                titulo="Nome do paciente" 
                id="pacienteAssociado" 
                valor={dado.codP || ""}
                obrigatorio
                campoValor="codP"
                funcao={(codP) => setDado((prevEstado) => ({ ...prevEstado, codP: codP.target.value}))} 
                vazio={vazio.codP} />
            
              <Aviso className={` ${consultasDuplicadas > 0 ? "visivel" : " "} `}>O veterinário já tem uma consulta marcada nesse dia e horário.</Aviso>

              <SeletorEspecial 
                tabela="veterinarios"
                titulo="Veterinário responsável" 
                id="veterinarioAssociado" 
                valor={dado.codV || ""}
                obrigatorio
                campoValor="codV"
                funcao={(codV) => setDado((prevEstado) => ({ ...prevEstado, codV: codV.target.value}))} 
                vazio={vazio.codV}
                consultasDuplicadas={consultasDuplicadas} />

              <ContainerDetalhe>
                <Campo 
                  atualizar={data => setDado((prevEstado) => ({ ...prevEstado, data: data}))}
                  label="Data"
                  valor={dado.data || ""}
                  obrigatorio
                  type="date"
                  placeholder="" 
                  vazio={vazio.data}
                  consultasDuplicadas={consultasDuplicadas}
                  dataPassada={dataPassada} />

                <Campo 
                  atualizar={hora => setDado((prevEstado) => ({ ...prevEstado, hora: hora}))}
                  label="Horário"
                  valor={dado.hora || ""}
                  obrigatorio
                  type="time"
                  placeholder="" 
                  vazio={vazio.hora} 
                  classe="hora"
                  consultasDuplicadas={consultasDuplicadas} /> 
              </ContainerDetalhe>

              <Seletor 
                titulo="Tipo de consulta"
                id="motivo"
                dados={motivos}
                valor={dado.motivo || ""}
                obrigatorio
                funcao={(motivo) => setDado((prevEstado) => ({ ...prevEstado, motivo: motivo.target.value}))} 
                vazio={vazio.motivo} />
            </Container>      
          </>
        )
      }
    </>
  )
}

export default PopupFormulario;