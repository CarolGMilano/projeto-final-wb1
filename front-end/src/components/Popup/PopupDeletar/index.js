import axios from "axios";
import { Botao, ContainerAviso, ContainerBotoes, Fundo, Texto, Titulo, Destaque, Icone } from "./styles";

import { ReactComponent as Aviso } from "../../../assets/images/aviso.svg";
import { ReactComponent as Cancelar } from "../../../assets/images/cancelar.svg";
import { ReactComponent as Lixo } from "../../../assets/images/trash.svg";

const PopupDeletar = ({ mostrarDelete, setMostrarDelete, tabela, buscar, titulo, texto }) => {
    if (!mostrarDelete) return null;

  const deletar = async (cod) => {
      try {
          const response = await axios.delete(`http://localhost:3001/${tabela}/${cod}`);
  
          console.log(response.data); 
  
          setMostrarDelete(null);
          await buscar();
  
      } catch(error) {
          console.error("Erro ao deletar:", error);
      }
  };

  return (
    <Fundo>
      <ContainerAviso>
        <Icone><Aviso /></Icone>
        <Titulo>{titulo}</Titulo>
        <Texto>Esta ação é <Destaque>permanente</Destaque> e <Destaque>não poderá ser desfeita.</Destaque> Todas as informaçãoes associadas {texto} serão removidas do sistema.</Texto>

        <ContainerBotoes>
          <Botao onClick={() => setMostrarDelete(null)} className="cancelar"><Cancelar width="22px" height="22px"/>Cancelar</Botao>
          <Botao onClick={() => deletar(mostrarDelete)} className="excluir"><Lixo width="22px" height="22px"/>Excluir</Botao>
        </ContainerBotoes>
      </ContainerAviso>
    </Fundo>
  );
};
    
export default PopupDeletar;