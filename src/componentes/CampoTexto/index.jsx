import "./CampoTexto.css";
const CampoTexto = () => {
  return (
    <div className="campo-texto">
      <label htmlFor="campoTexto">Nome</label>
      <input type="text" placeholder="Digite algo..." />
    </div>
  );
};
export default CampoTexto;
