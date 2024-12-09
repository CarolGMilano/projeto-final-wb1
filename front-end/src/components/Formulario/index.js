import axios from "axios";
import PopupFormulario from "../Popup/PopupFormulario";
import { Fundo, Container, Botao, ContainerBotoes } from "./styles";

import { ReactComponent as Confirmar } from "../../assets/images/check.svg";
import { ReactComponent as Cancelar } from "../../assets/images/cancelar.svg";
import { useState } from "react";

const Formulario = ({ tabela, dado, setDado, dados, setDados, alteracao, setAlteracao, codAlteracao, mostrarFormulario, setMostrarFormulario }) => {
  const [cpfValido, setCPFValido] = useState(null);
  const [telefoneValido, setTelefoneValido] = useState(null);
  const [ano, setAno] = useState(null);
  const [dataPassada, setDataPassada] = useState(null);
  const [vazio, setVazio] = useState({});
  const [cpfsRepetidos, setCPFsRepetidos] = useState(0);
  const [crmvsRepetidos, setCRMVsRepetidos] = useState(0);
  const [consultasDuplicadas, setConsultasDuplicadas] = useState(0);

  const dataAno = new Date().getFullYear();
  const dataMes = new Date().getMonth() + 1;
  const dataDia = new Date().getDate();

  if (!mostrarFormulario) return null;

  const validarConteudo = () => {
    const novosErros = Object.keys(dado).reduce((acc, campo) => {
      dado[campo] = String(dado[campo]).trim();

      if (!dado[campo]) {
          acc[campo] = true; 
      }
      return acc;
    }, {});

    setVazio(novosErros);

    return novosErros;
  };

  const validarCPF = () => {
    if(dado.cpf.length === 11 && (/^\d+$/.test(dado.cpf))) {
      const cpfArray = dado.cpf.split('').map(Number);
  
      const calcularDigito = (aux, posicoes) => {
        let calcD = 0;

          for (let i = 0; i < posicoes; i++) {
            calcD += cpfArray[i] * aux--;
          }
          
          calcD = calcD % 11;
          return calcD === 0 || calcD === 1 ? 1 : 11 - calcD;
      };
      
      const D1 = calcularDigito(10, 9);

        if (D1 !== cpfArray[9]) {
          return false;
        }
      
      const D2 = calcularDigito(11, 10);

        if (D2 !== cpfArray[10]) {
          return false;
        }
      
        return true;
    } else {
      return false;
    }
  };

  const validarTelefone = () => {
    if(dado.telefone.length === 11 && (/^\d+$/.test(dado.telefone))) {
      return true;
    } else {
      return false;
    }
  };

  const limparCampos = (tabela) => {
    if (tabela === "tutores") {
      setDado({
        cpf: "",
        nome: "",
        telefone: "",
        endereco: ""
      })

    } else if (tabela === "pacientes") {
      setDado({
        nome: "",
        anoNascimento: "",
        especie: "",
        raca: "",
        porte: "", 
        temperamento: "", 
        microchipagem: "",
        observacao: "", 
        codT: ""
      })

    } else if (tabela === "veterinarios") {
      setDado({
        cpf: "",
        nome: "",
        crmv: "",
        especialidade: "",
        telefone: ""
      })

    } else if (tabela === "consultas") {
      setDado({
        codV: "", 
        codP: "", 
        data: "", 
        hora: "", 
        motivo: ""
      })

    }
  };

  const buscar = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/${tabela}`);
      
      setDados(response.data);
      
    } catch(error) {
      console.error(`Erro ao buscar ${tabela}:`, error);
    }
  };

  const submeterFormulario = async () => {
    validarConteudo();

    if (tabela === "tutores") {
        const cpfValido = validarCPF();
        const telefone = validarTelefone();
        const cpfRepetido = dados.filter(campo => campo.cpf === dado.cpf);
        
          setCPFValido(cpfValido);
          setTelefoneValido(telefone);

          if(cpfRepetido.length > 0) {
            setCPFsRepetidos(cpfRepetido.length);
          } else {
            setCPFsRepetidos(0);
          }

          if (cpfValido && (Object.keys(vazio).length === 0) && telefone && (cpfRepetido.length === 0)) {
            try {
              await axios.post(`http://localhost:3001/${tabela}`, dado);
                
              limparCampos(tabela);
              setMostrarFormulario(null);
        
              await buscar();
        
            } catch (error) {
              console.error("Erro ao adicionar:", error);
            }
          } else {
            setCPFValido(cpfValido);
            setTelefoneValido(telefone);
          }
    } else if (tabela === "veterinarios") {
        const cpfValido = validarCPF();
        const telefone = validarTelefone();
        const cpfRepetido = dados.filter(campo => campo.cpf === dado.cpf);
        const crmvRepetido = dados.filter(campo => campo.crmv === dado.crmv);

          setCPFValido(cpfValido);
          setTelefoneValido(telefone);  
 
          if(crmvRepetido.length > 0) {
            setCRMVsRepetidos(crmvRepetido.length);
          } else {
            setCRMVsRepetidos(0);
          }

          if(cpfRepetido.length > 0) {
            setCPFsRepetidos(cpfRepetido.length);
          } else {
            setCPFsRepetidos(0);
          }
          
          if (cpfValido && telefone && (crmvRepetido.length === 0) && (cpfRepetido.length === 0)) {
            try {
                await axios.post(`http://localhost:3001/${tabela}`, dado);
                
                limparCampos(tabela);
                setMostrarFormulario(null);
        
              await buscar();
        
            } catch (error) {
                console.error("Erro ao adicionar:", error);
            }
          } else {
            setCPFValido(cpfValido);
            setTelefoneValido(telefone);
          }
    } else if (tabela === "pacientes") {
      const anoValido = /^\d{4}$/.test(String(dado.anoNascimento)) && 
                        dado.anoNascimento >= 1900 && 
                        dado.anoNascimento <= new Date().getFullYear();

        setAno(anoValido);  
        
        if(anoValido) {
          try {
            await axios.post(`http://localhost:3001/${tabela}`, dado);
              
            limparCampos(tabela);
            setMostrarFormulario(null);
      
            await buscar();
      
          } catch (error) {
              console.error("Erro ao adicionar:", error);
          }
        }
    } else if (tabela === "consultas") {
      const consultaDuplicada = dados.filter(campo =>
        String(campo.codV) === dado.codV &&
        campo.data === dado.data &&
        String(campo.hora) === dado.hora
      );

      const dataDado = Number(dado.data.replace(/-/g, ""));
      const dataValida = dataDado < ((dataAno * 10000) + (dataMes * 100) + dataDia);
      
        setDataPassada(dataValida);

        if(consultaDuplicada.length > 0) {
          setConsultasDuplicadas(consultaDuplicada.length);
        } else {
          setConsultasDuplicadas(0);
        }
        
        if(consultaDuplicada.length === 0 && !dataValida) {
          try {
            await axios.post(`http://localhost:3001/${tabela}`, dado);
              
            limparCampos(tabela);
            setMostrarFormulario(null);
      
            await buscar();
      
          } catch (error) {
              console.error("Erro ao adicionar:", error);
          }
        }
    }
  };

  const alterar = async (tabela, cod) => {
    let payload;

      switch (tabela) {
        case "tutores":
          payload = { 
            cpf: dado.cpf, 
            nome: dado.nome, 
            telefone: dado.telefone, 
            endereco: dado.endereco 
          };
          break;
        case "pacientes":
          payload = { 
            nome: dado.nome, 
            anoNascimento: dado.anoNascimento, 
            especie: dado.especie, 
            raca: dado.raca, 
            porte: dado.porte, 
            temperamento: dado.temperamento, 
            microchipagem: dado.microchipagem, 
            observacao: dado.observacao, 
            codT: dado.codT 
          };
          break;
        case "veterinarios":
          payload = { 
            cpf: dado.cpf, 
            nome: dado.nome, 
            crmv: dado.crmv, 
            especialidade: dado.especialidade, 
            telefone: dado.telefone 
          };
          break;
        case "consultas":
          payload = { 
            codV: dado.codV, 
            codP: dado.codP, 
            data: dado.data, 
            hora: dado.hora, 
            motivo: dado.motivo 
          };
          break;
        default:
          payload = {};
      }

    const campoVazio = validarConteudo();
      
      if(Object.keys(campoVazio).length === 0) {
        let cpfValido = true;
        let telefone = true;
        let anoValido = true;
        let dataValida = false;
        let cpfRepetido = [];
        let crmvRepetido = [];
        let consultaDuplicada = [];

        if (tabela === "tutores") {
          cpfValido = validarCPF();
          telefone = validarTelefone();
          cpfRepetido = dados.filter(campo => campo.cpf === dado.cpf && campo.codT !== cod);
          
          setCPFValido(cpfValido);
          setTelefoneValido(telefone);
          
          if(cpfRepetido.length > 0) {
            setCPFsRepetidos(cpfRepetido.length);
          } else {
            setCPFsRepetidos(0);
          }
        }

        if (tabela === "veterinarios") {
          cpfValido = validarCPF();
          telefone = validarTelefone();
          crmvRepetido = dados.filter(campo => campo.crmv === dado.crmv && campo.codV !== cod);
          cpfRepetido = dados.filter(campo => campo.cpf === dado.cpf && campo.codV !== cod);
    
          setCPFValido(cpfValido);
          setTelefoneValido(telefone);

          if(cpfRepetido.length > 0) {
            setCPFsRepetidos(cpfRepetido.length);
          } else {
            setCPFsRepetidos(0);
          }

          if(crmvRepetido.length > 0) {
            setCRMVsRepetidos(crmvRepetido.length);
          } else {
            setCRMVsRepetidos(0);
          }
        }

        if (tabela === "pacientes") {
          anoValido = /^\d{4}$/.test(String(dado.anoNascimento)) && 
                      dado.anoNascimento >= 1900 && 
                      dado.anoNascimento <= new Date().getFullYear();

          setAno(anoValido);
        }

        if (tabela === "consultas") {
          const dataDado = Number(dado.data.replace(/-/g, ""));

          consultaDuplicada = dados.filter(campo =>
              String(campo.codV) === dado.codV &&
              campo.data === dado.data &&
              String(campo.hora) === dado.hora &&
              campo.codC !== cod
          );
            
          dataValida = dataDado < ((dataAno * 10000) + (dataMes * 100) + dataDia);
      
            setDataPassada(dataValida);

            if(consultaDuplicada.length > 0) {
              setConsultasDuplicadas(consultaDuplicada.length);
            } else {
              setConsultasDuplicadas(0);
            }
        }

        if (cpfValido && telefone && anoValido && (cpfRepetido.length === 0) && (crmvRepetido.length === 0) && (consultaDuplicada.length === 0) && !dataValida) {
          try {
            await axios.put(`http://localhost:3001/${tabela}/${cod}`, payload);

            limparCampos(tabela);

            setAlteracao(null);
            setMostrarFormulario(null);

            await buscar();

          } catch(error) {
            console.error("Erro ao alterar:", error);
          }
        }  
      } 
  };

  const cancelar = () => {
    limparCampos(tabela); 
    setAlteracao(null); 
    setCPFValido(null);
    setTelefoneValido(null);
    setAno(null);
    setMostrarFormulario(null); 
    setCPFsRepetidos(0); 
    setCRMVsRepetidos(0);
    setConsultasDuplicadas(0);
  };

  return (
    <Fundo>
      <Container>
        <form onSubmit={(event) => {
          event.preventDefault();

          if (alteracao !== null) {
              alterar(tabela, codAlteracao);
            } else { 
              submeterFormulario();
            }
          }}
        >
          {(alteracao === null ? (
              <>
                <PopupFormulario 
                  tabela={tabela}
                  dado={dado} setDado={setDado}
                  tipo="Adicione" 
                  vazio={vazio}
                  cpfValido={cpfValido}
                  telefoneValido={telefoneValido}
                  ano={ano}
                  cpfsRepetidos={cpfsRepetidos}
                  crmvsRepetidos={crmvsRepetidos}
                  consultasDuplicadas={consultasDuplicadas}
                  dataPassada={dataPassada} />

                <ContainerBotoes>
                  <Botao type="button" onClick={() => cancelar()} className="cancelar"><Cancelar width="22px" height="22px"/>Cancelar</Botao>
                  <Botao type="submit" className="confirmar"><Confirmar width="22px" height="22px"/>Confirmar</Botao>
                </ContainerBotoes>
              </>
            ) : (
              <>
                <PopupFormulario 
                  tabela={tabela} 
                  dado={dado} setDado={setDado}
                  tipo="Altere"
                  vazio={vazio}
                  cpfValido={cpfValido}
                  telefoneValido={telefoneValido}
                  ano={ano}
                  cpfsRepetidos={cpfsRepetidos}
                  crmvsRepetidos={crmvsRepetidos}
                  consultasDuplicadas={consultasDuplicadas}
                  dataPassada={dataPassada} />
                  
                <ContainerBotoes>
                  <Botao type="button" onClick={() => cancelar() } className="cancelar"><Cancelar width="22px" height="22px"/>Cancelar</Botao>
                  <Botao type="submit" className="confirmar"><Confirmar width="22px" height="22px"/>Confirmar</Botao>
                </ContainerBotoes>
              </>
            ))
          }
        </ form>
      </Container>
    </Fundo>
  )
}

export default Formulario;