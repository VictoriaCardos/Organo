import Banner from "./componentes/Banner/index";
import CampoTexto from "./componentes/CampoTexto/index";

function App() {
  return (
    <div>
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
    </div>
  );
}

export default App;
