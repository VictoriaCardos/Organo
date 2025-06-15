import "./ListaSuspensa.css";
const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value="" disabled>
          Selecione o {props.label.toLowerCase()}
        </option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensa;
