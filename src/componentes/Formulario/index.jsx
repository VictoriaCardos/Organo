import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
const Formulario = (props) => {
  // Função para lidar com o envio do formulário
  const aoSalvar = (evento) => {
    evento.preventDefault(); // Evita o recarregamento da página
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    limparCampos(); // Limpa os campos após o envio
  };

  // Função para limpar os campos do formulário
  const limparCampos = () => {
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  //Estados dos componentes
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="formulario">
      <form action="" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao type="submit"> Criar Card </Botao>
      </form>
    </section>
  );
};

export default Formulario;
