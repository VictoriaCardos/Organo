import { useState } from "react";
import Banner from "./componentes/Banner/index";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#57C278", corSecundaria: "#D9F7E9" },
    { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
    { nome: "Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
    { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
    { nome: "UX e Design", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
    { nome: "Mobile", corPrimaria: "#FFBA05", corSecundaria: "#FFF5D9" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];
  const [scrollToTime, setScrollToTime] = useState(null);
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    setScrollToTime(colaborador.time); // Marca o time para scroll
  };

  const removerColaborador = (nome, time) => {
    setColaboradores(
      colaboradores.filter(
        (colab) => !(colab.nome === nome && colab.time === time)
      )
    );
  };

  return (
    <div>
      <Banner />
      <Formulario
        colaboradores={colaboradores}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoRemover={removerColaborador}
          scrollTo={scrollToTime === time.nome} // Passa true para o time recém-adicionado
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
