import "./Colaborador.css";
import Botao from "../Botao";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <Botao
          className="botao-excluir"
          onClick={() => props.aoRemover(props.time)}
          style={{
            backgroundColor: props.corSecundaria,
            color: props.corDeFundo,
          }}
        >
          Excluir
        </Botao>
        <img src={props.imagem} alt={`Imagem de ${props.nome}`} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
