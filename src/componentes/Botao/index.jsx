import "./Botao.css";
const Botao = (props) => {
  return (
    <button
      className={`botao ${props.className || ""}`}
      onClick={props.onClick}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Botao;
