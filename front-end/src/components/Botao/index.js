import { BotaoEstilo } from "./styles.js";

const Botao = ({ type, icone, funcao, classe  }) => {
    return (
        <BotaoEstilo type={type} onClick={() => funcao()} className={classe}> 
            {icone} 
        </BotaoEstilo>
    );
}

export default Botao;