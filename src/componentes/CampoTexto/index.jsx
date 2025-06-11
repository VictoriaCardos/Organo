import "./CampoTexto.css";
const CampoTexto = (props) => {
  // Estado para armazenar o valor do campo de texto
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label htmlFor="campoTexto">{props.label}</label>
      <input
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
        value={props.valor}
        onChange={aoDigitado}
      />
    </div>
  );
};
export default CampoTexto;
