import { useEffect, useState } from "react";
import axios from "axios";

import { ReactComponent as Pincel } from "../../assets/images/pencil.svg";
import { ReactComponent as Lixo } from "../../assets/images/trash.svg";
import { ReactComponent as Adicionar } from "../../assets/images/plus.svg";

import Button from "../Botao";
import PopupDeletar from "../Popup/PopupDeletar";

import { 
    ContainerCard, 
    ContainerPrincipal, 
    Titulo, 
    Card, 
    TituloCard, 
    ContainerDado, 
    TextoCard, 
    ContainerBody, 
    ContainerHeader, 
    Identificador, 
    ContainerBotoes, 
    ContainerAdicionar, 
    AdicionarTexto, 
    IconeAdicionar, 
    VerMais,
    ContainerInformacoes,
    Contagem,
    Detalhe,
    PesquisaErro,
    ContainerPesquisa
} from "./styles";
import PopupDetalhe from "../Popup/PopupDetalhe";
import CampoPesquisa from "../Input/CampoPesquisa";

const Tabela = ({ nomeDado, dados, setDados, setDado, setAlteracao, setCodAlteracao, mostrarDelete, setMostrarDelete, mostrarFormulario, setMostrarFormulario }) => {
  const [executado, setExecutado] = useState(false);

  const [pesquisa, setPesquisa] = useState("");
  const [dadosPesquisa, setDadosPesquisa] = useState("");
  
  const [mostrarDetalhe, setMostrarDetalhe] = useState(null);
  const [nomeDetalhe, setNomeDetalhe] = useState(null);
  
  const [nomesT, setNomesT] = useState([]);
  const [nomesP, setNomesP] = useState([]);
  const [nomesV, setNomesV] = useState([]);

  useEffect(() => {
    if (pesquisa === "") {
      setDadosPesquisa(""); 
    } else {
      if(nomeDado === "tutores") {
        const resultadosTutores = dados.filter(dado => dado.codT.toString() === pesquisa);
        
          setDadosPesquisa(resultadosTutores.length > 0 ? resultadosTutores : "não encontrado");
      } else if (nomeDado === "veterinarios") {
        const resultadosVeterinarios = dados.filter(dado => dado.codV.toString() === pesquisa);
        
          setDadosPesquisa(resultadosVeterinarios.length > 0 ? resultadosVeterinarios : "não encontrado");
      } else if (nomeDado === "pacientes") {
        const resultadosPacientes = dados.filter(dado => dado.codP.toString() === pesquisa);
        
          setDadosPesquisa(resultadosPacientes.length > 0 ? resultadosPacientes : "não encontrado");
      } else if (nomeDado === "consultas") {
        const resultadosConsultas = dados.filter(dado => dado.codC.toString() === pesquisa);
        
          setDadosPesquisa(resultadosConsultas.length > 0 ? resultadosConsultas : "não encontrado");
      }  
    }
  }, [pesquisa, dados, nomeDado]);
  
  const formatarData = (data) => {
    if (!data) return "";

    const partes = data.split("-");

      if (partes.length === 3) {
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
      }
      return data;
  };

  const buscar = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/${nomeDado}`);

        setDados(response.data);

    } catch(error) {
      console.error(`Erro ao buscar ${nomeDado}:`, error);
    }
  };

  const buscarNomes = async (tabela, setNomes) => {
    try {
      const response = await axios.get(`http://localhost:3001/${tabela}`);

        setNomes(response.data);

    } catch(error) {
      console.error(`Erro ao buscar o nome ${tabela}:`, error);
    }
  };

    if (!executado) {
      if(nomeDado === "pacientes") {
        setNomesT([]);

        buscarNomes("tutores", setNomesT);
      } else if(nomeDado === "consultas") {
        setNomesV([]);
        setNomesP([]);
        
        buscarNomes("veterinarios", setNomesV);
        buscarNomes("pacientes", setNomesP);
      }

      buscar();
      setExecutado(true); 
    }

  const preencherFormularioEdição = (campoValor, tabela, cod) => {
    const dado = dados.find((item) => item[campoValor] === cod);
        
      setAlteracao(dado);
      
      if (tabela === "tutores") {
        setDado({
          cpf: dado.cpf,
          nome: dado.nome,
          telefone: dado.telefone,
          endereco: dado.endereco
        })

      } else if (tabela === "pacientes") {
        setDado({
          nome: dado.nome,
          anoNascimento: dado.anoNascimento,
          especie: dado.especie,
          raca: dado.raca,
          porte: dado.porte, 
          temperamento: dado.temperamento, 
          microchipagem: dado.microchipagem,
          observacao: dado.observacao, 
          codT: dado.codT
        })

      } else if (tabela === "veterinarios") {
        setDado({
          cpf: dado.cpf,
          nome: dado.nome,
          crmv: dado.crmv,
          especialidade: dado.especialidade,
          telefone: dado.telefone
        })

      } else if (tabela === "consultas") {
        setDado({
          motivo: dado.motivo,
          data: dado.data,
          hora: dado.hora,
          codP: dado.codP,
          codV: dado.codV
        })

      }
      
      setCodAlteracao(dado[campoValor]);
  };

  const mostrarPopup = (cod, tipo, nome) => {
    if(tipo === "deletar") {
      setMostrarDelete(cod);
    } else if (tipo === "alterar" || tipo === "adicionar") {
      setMostrarFormulario(cod);
    } else if (tipo === "detalhe") {
      setMostrarDetalhe(cod);
      setNomeDetalhe(nome);
    }
  };

    const renderizarTabela = () => {
      switch (nomeDado) {
        case "tutores":
          return (
            <ContainerPrincipal>
              <Titulo>Tutores</Titulo>

              <ContainerInformacoes>
                <ContainerPesquisa>
                  <CampoPesquisa 
                      tabela="consultas" 
                      pesquisa={pesquisa} setPesquisa={setPesquisa} />
                  <Contagem><Detalhe>{dados.length}</Detalhe> tutores registrados</Contagem>
                </ContainerPesquisa>

                <ContainerAdicionar onClick={() => mostrarPopup("novo", "adicionar")}>
                  <AdicionarTexto>Criar tutor</AdicionarTexto>
                  <IconeAdicionar><Adicionar width="15px" height="15px"/></IconeAdicionar>
                </ContainerAdicionar>
              </ContainerInformacoes>

              <ContainerCard>
                {
                  dadosPesquisa === "" ?
                    dados.map((dado, index) => (
                      <Card key={dado.codT} className={index % 2 === 0 ? 'par' : 'impar'}>
                        <ContainerHeader>
                          <Identificador>#{dado.codT}</Identificador>

                          <ContainerBotoes>
                            <Button funcao={() => {mostrarPopup(dado.codT, "alterar"); preencherFormularioEdição("codT", "tutores", dado.codT);}} icone={<Pincel />} classe="alterar"/>
                            <Button funcao={() => mostrarPopup(dado.codT, "deletar")} icone={<Lixo />} classe="deletar"/>
                          </ContainerBotoes>
                        </ContainerHeader>
                        
                        <ContainerBody>
                          <ContainerDado>
                            <TituloCard>Nome</TituloCard>
                            <TextoCard>{dado.nome}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>C.P.F</TituloCard>
                            <TextoCard>{dado.cpf}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Telefone</TituloCard>
                            <TextoCard>{dado.telefone}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Endereço</TituloCard>
                            <TextoCard>{dado.endereco}</TextoCard>
                          </ContainerDado>
                        </ContainerBody>
                      </Card>
                    ))
                  :
                    (
                      dadosPesquisa === "não encontrado" ? 
                        <PesquisaErro>Tutor não encontrado.</PesquisaErro> 
                      :
                        <Card className="impar">
                          <ContainerHeader>
                            <Identificador>#{dadosPesquisa[0].codT}</Identificador>

                            <ContainerBotoes>
                              <Button funcao={() => {mostrarPopup(dadosPesquisa[0].codT, "alterar"); preencherFormularioEdição("codT", "tutores", dadosPesquisa[0].codT);}} icone={<Pincel />} classe="alterar"/>
                              <Button funcao={() => mostrarPopup(dadosPesquisa[0].codT, "deletar")} icone={<Lixo />} classe="deletar"/>
                            </ContainerBotoes>
                          </ContainerHeader>
                          
                          <ContainerBody>
                            <ContainerDado>
                              <TituloCard>Nome</TituloCard>
                              <TextoCard>{dadosPesquisa[0].nome}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>C.P.F</TituloCard>
                              <TextoCard>{dadosPesquisa[0].cpf}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Telefone</TituloCard>
                              <TextoCard>{dadosPesquisa[0].telefone}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Endereço</TituloCard>
                              <TextoCard>{dadosPesquisa[0].endereco}</TextoCard>
                            </ContainerDado>
                          </ContainerBody>
                        </Card>
                    )
                }

                <PopupDeletar 
                  mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete}
                  tabela={nomeDado} buscar={buscar}
                  titulo="Tem certeza de que deseja excluir este tutor?" 
                  texto="ao tutor" />
              </ContainerCard>
            </ContainerPrincipal>
          );
        case "veterinarios":
          return (
            <ContainerPrincipal>
              <Titulo>Veterinários</Titulo>

              <ContainerInformacoes>
                <ContainerPesquisa>
                  <CampoPesquisa 
                    tabela="consultas" 
                    pesquisa={pesquisa} setPesquisa={setPesquisa} />

                  <Contagem><Detalhe>{dados.length}</Detalhe> veterinários registrados</Contagem>
                </ContainerPesquisa>

                <ContainerAdicionar onClick={() => mostrarPopup("novo", "adicionar")}>
                  <AdicionarTexto>Criar veterinário</AdicionarTexto>
                  <IconeAdicionar><Adicionar width="15px" height="15px"/></IconeAdicionar>
                </ContainerAdicionar>
              </ContainerInformacoes>

              <ContainerCard>
                {
                  dadosPesquisa === "" ?
                    dados.map((dado, index) => (
                      <Card key={dado.codV} className={index % 2 === 0 ? 'par' : 'impar'}>
                        <ContainerHeader>
                          <Identificador>#{dado.codV}</Identificador>

                          <ContainerBotoes>
                            <Button funcao={() => { mostrarPopup(dado.codV, "alterar"); preencherFormularioEdição("codV", "veterinarios", dado.codV); }} icone={<Pincel />} classe="alterar" />
                            <Button funcao={() => mostrarPopup(dado.codV, "deletar")} icone={<Lixo />} classe="deletar"/>
                          </ContainerBotoes>
                        </ContainerHeader>

                        <ContainerBody>
                          <ContainerDado>
                            <TituloCard>Nome</TituloCard>
                            <TextoCard>{dado.nome}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>C.P.F</TituloCard>
                            <TextoCard>{dado.cpf}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>CRMV</TituloCard>
                            <TextoCard>{dado.crmv}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Telefone</TituloCard>
                            <TextoCard>{dado.telefone}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Especialidade</TituloCard>
                            <TextoCard className={`destaque ${index % 2 === 0 ? 'par' : 'impar'}`}>{dado.especialidade}</TextoCard>
                          </ContainerDado>
                        </ContainerBody>
                      </Card>
                    ))
                  : 
                    (
                      dadosPesquisa === "não encontrado" ? 
                        <PesquisaErro>Veterinário não encontrado.</PesquisaErro> 
                      :
                        <Card className="par">
                          <ContainerHeader>
                            <Identificador>#{dadosPesquisa[0].codV}</Identificador>

                            <ContainerBotoes>
                              <Button funcao={() => { mostrarPopup(dadosPesquisa[0].codV, "alterar"); preencherFormularioEdição("codV", "veterinarios", dadosPesquisa[0].codV); }} icone={<Pincel />} classe="alterar" />
                              <Button funcao={() => mostrarPopup(dadosPesquisa[0].codV, "deletar")} icone={<Lixo />} classe="deletar"/>
                            </ContainerBotoes>
                          </ContainerHeader>

                          <ContainerBody>
                            <ContainerDado>
                              <TituloCard>Nome</TituloCard>
                              <TextoCard>{dadosPesquisa[0].nome}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>C.P.F</TituloCard>
                              <TextoCard>{dadosPesquisa[0].cpf}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>CRMV</TituloCard>
                              <TextoCard>{dadosPesquisa[0].crmv}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Telefone</TituloCard>
                              <TextoCard>{dadosPesquisa[0].telefone}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Especialidade</TituloCard>
                              <TextoCard className="destaque par">{dadosPesquisa[0].especialidade}</TextoCard>
                            </ContainerDado>
                          </ContainerBody>
                        </Card>
                    )
                }

                <PopupDeletar 
                  mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete}
                  tabela={nomeDado} buscar={buscar} 
                  titulo="Tem certeza de que deseja excluir este veterinário?" 
                  texto="ao veterinário"/>
              </ContainerCard>
            </ContainerPrincipal>
          );
        case "pacientes":
          return (
            <ContainerPrincipal>
              <Titulo>Pacientes</Titulo>

              <ContainerInformacoes>
                <ContainerPesquisa>
                    <CampoPesquisa 
                      tabela="consultas" 
                      pesquisa={pesquisa} setPesquisa={setPesquisa} />

                  <Contagem><Detalhe>{dados.length}</Detalhe> pacientes registrados</Contagem>
                </ContainerPesquisa>

                <ContainerAdicionar onClick={() => mostrarPopup("novo", "adicionar")}>
                  <AdicionarTexto>Criar paciente</AdicionarTexto>
                  <IconeAdicionar><Adicionar width="15px" height="15px"/></IconeAdicionar>
                </ContainerAdicionar>
              </ContainerInformacoes>

              <ContainerCard>
                {
                  dadosPesquisa === "" ?
                    dados.map((dado, index) => (
                      <Card key={dado.codP} className={index % 2 === 0 ? 'par' : 'impar'}>
                        <ContainerHeader>
                          <Identificador>#{dado.codP}</Identificador>

                          <ContainerBotoes>
                            <Button funcao={() => {mostrarPopup(dado.codP, "alterar"); preencherFormularioEdição("codP", "pacientes", dado.codP); }}  icone={<Pincel />} classe="alterar" />
                            <Button funcao={() => mostrarPopup(dado.codP, "deletar")} icone={<Lixo />} classe="deletar"/>
                          </ContainerBotoes>
                        </ContainerHeader>

                        <ContainerBody>
                          <ContainerDado>
                            <TituloCard>Nome</TituloCard>
                            <TextoCard>{dado.nome}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Nome do tutor</TituloCard>
                            <TextoCard>{nomesT.filter(nome => nome.codT === dado.codT).map(nome => nome.nome)}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Ano de nascimento</TituloCard>
                            <TextoCard>{dado.anoNascimento}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Espécie</TituloCard>
                            <TextoCard>{dado.especie}</TextoCard>
                          </ContainerDado> 
                        </ContainerBody>

                        <VerMais onClick={ () => mostrarPopup(dado, "detalhe", nomesT.filter(nome => nome.codT === dado.codT).map(nome => nome.nome)) } className={`${index % 2 === 0 ? 'par' : 'impar'}`}>Ver mais</VerMais>
                      </Card>
                    ))
                  :
                    (
                      dadosPesquisa === "não encontrado" ? 
                        <PesquisaErro>Paciente não encontrado.</PesquisaErro> 
                      :
                        <Card className="impar">
                          <ContainerHeader>
                            <Identificador>#{dadosPesquisa[0].codP}</Identificador>

                            <ContainerBotoes>
                              <Button funcao={() => {mostrarPopup(dadosPesquisa[0].codP, "alterar"); preencherFormularioEdição("codP", "pacientes", dadosPesquisa[0].codP); }}  icone={<Pincel />} classe="alterar" />
                              <Button funcao={() => mostrarPopup(dadosPesquisa[0].codP, "deletar")} icone={<Lixo />} classe="deletar"/>
                            </ContainerBotoes>
                          </ContainerHeader>

                          <ContainerBody>
                            <ContainerDado>
                              <TituloCard>Nome</TituloCard>
                              <TextoCard>{dadosPesquisa[0].nome}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Nome do tutor</TituloCard>
                              <TextoCard>{nomesT.filter(nome => nome.codT === dadosPesquisa[0].codT).map(nome => nome.nome)}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Ano de nascimento</TituloCard>
                              <TextoCard>{dadosPesquisa[0].anoNascimento}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Espécie</TituloCard>
                              <TextoCard>{dadosPesquisa[0].especie}</TextoCard>
                            </ContainerDado> 
                          </ContainerBody>

                          <VerMais onClick={ () => mostrarPopup(dadosPesquisa[0], "detalhe", nomesT.filter(nome => nome.codT === dadosPesquisa[0].codT).map(nome => nome.nome)) } className="impar">Ver mais</VerMais>
                        </Card>
                    )
                }

                <PopupDetalhe 
                  mostrarDetalhe={mostrarDetalhe} setMostrarDetalhe={setMostrarDetalhe}
                  nomeDetalhe={nomeDetalhe} setNomeDetalhe={setNomeDetalhe} />

                <PopupDeletar 
                  mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete}
                  tabela={nomeDado} buscar={buscar} 
                  titulo="Tem certeza de que deseja excluir este paciente?" 
                  texto="ao paciente" />
              </ContainerCard>
            </ContainerPrincipal>
          );
        case "consultas":
          return (
            <ContainerPrincipal>
              <Titulo>Consultas</Titulo>

              <ContainerInformacoes>
                <ContainerPesquisa>
                  <CampoPesquisa 
                    tabela="consultas" 
                    pesquisa={pesquisa} setPesquisa={setPesquisa} />

                  <Contagem><Detalhe>{dados.length}</Detalhe> consultas agendadas</Contagem>
                </ContainerPesquisa>

                <ContainerAdicionar onClick={() => mostrarPopup("novo", "adicionar")}>
                  <AdicionarTexto>Criar consulta</AdicionarTexto>
                  <IconeAdicionar><Adicionar width="15px" height="15px"/></IconeAdicionar>
                </ContainerAdicionar>
              </ContainerInformacoes>

              <ContainerCard>
                {
                  dadosPesquisa === "" ?
                    dados.map((dado, index) => (
                      <Card key={dado.codC} className={index % 2 === 0 ? 'par' : 'impar'}>
                        <ContainerHeader>
                          <Identificador>#{dado.codC}</Identificador>

                          <ContainerBotoes>
                            <Button funcao={() => { mostrarPopup(dado.codC, "alterar"); preencherFormularioEdição("codC", "consultas", dado.codC); }}  icone={<Pincel />} classe="alterar" />
                            <Button funcao={() => mostrarPopup(dado.codC, "deletar")} icone={<Lixo />} classe="deletar" />
                          </ContainerBotoes>
                        </ContainerHeader>

                        <ContainerBody>
                          <ContainerDado>
                            <TituloCard>Paciente</TituloCard>
                            <TextoCard>{nomesP.filter(nome => nome.codP === dado.codP).map(nome => nome.nome)}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Veterinário</TituloCard>
                            <TextoCard>{nomesV.filter(nome => nome.codV === dado.codV).map(nome => nome.nome)}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Data</TituloCard>
                            <TextoCard>{formatarData(dado.data)}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Horário</TituloCard>
                            <TextoCard>{dado.hora}</TextoCard>
                          </ContainerDado>

                          <ContainerDado>
                            <TituloCard>Tipo de consulta</TituloCard>
                            <TextoCard className={`destaque ${index % 2 === 0 ? 'par' : 'impar'}`}>{dado.motivo}</TextoCard>
                          </ContainerDado>

                        </ContainerBody>
                      </Card>
                    ))
                  : 
                    (
                      dadosPesquisa === "não encontrado" ? 
                        <PesquisaErro>Consulta não encontrada.</PesquisaErro> 
                      :
                        <Card className="par">
                          <ContainerHeader>
                            <Identificador>#{dadosPesquisa[0].codC}</Identificador>

                            <ContainerBotoes>
                              <Button funcao={() => { mostrarPopup(dadosPesquisa[0].codC, "alterar"); preencherFormularioEdição("codC", "consultas", dadosPesquisa[0].codC); }}  icone={<Pincel />} classe="alterar" />
                              <Button funcao={() => mostrarPopup(dadosPesquisa[0].codC, "deletar")} icone={<Lixo />} classe="deletar" />
                            </ContainerBotoes>
                          </ContainerHeader>

                          <ContainerBody>
                            <ContainerDado>
                              <TituloCard>Paciente</TituloCard>
                              <TextoCard>{nomesP.filter(nome => nome.codP === dadosPesquisa[0].codP).map(nome => nome.nome)}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Veterinário</TituloCard>
                              <TextoCard>{nomesV.filter(nome => nome.codV === dadosPesquisa[0].codV).map(nome => nome.nome)}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Data</TituloCard>
                              <TextoCard>{formatarData(dadosPesquisa[0].data)}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Horário</TituloCard>
                              <TextoCard>{dadosPesquisa[0].hora}</TextoCard>
                            </ContainerDado>

                            <ContainerDado>
                              <TituloCard>Tipo de consulta</TituloCard>
                              <TextoCard className="destaque par">{dadosPesquisa[0].motivo}</TextoCard>
                            </ContainerDado>

                          </ContainerBody>
                        </Card>
                    )
                }

                <PopupDeletar 
                  mostrarDelete={mostrarDelete} setMostrarDelete={setMostrarDelete}
                  tabela={nomeDado} buscar={buscar} 
                  titulo="Tem certeza de que deseja excluir esta consulta?" 
                  texto="à consulta" />
              </ContainerCard>
            </ContainerPrincipal>
          );
        default:
          return null;
      }
    };
  
    return (
      <>
        {renderizarTabela()}
      </>
    );
}

export default Tabela;