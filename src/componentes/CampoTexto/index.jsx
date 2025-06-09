import "./CampoTexto.css";
const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label htmlFor="campoTexto">{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
export default CampoTexto;
