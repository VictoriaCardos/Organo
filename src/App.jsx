import { useState } from "react";
import Banner from "./componentes/Banner/index";
import Formulario from "./componentes/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
      />
    </div>
  );
}

export default App;
