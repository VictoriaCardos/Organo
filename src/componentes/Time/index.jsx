import "./Time.css";
import Colaborador from "../Colaborador";
import { useEffect, useRef } from "react";

const Time = (props) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (props.scrollTo && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.scrollTo, props.colaboradores.length]);

  return props.colaboradores.length > 0 ? (
    <section
      ref={sectionRef}
      className="time"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corSecundaria={props.corSecundaria}
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            imagem={colaborador.imagem}
            cargo={colaborador.cargo}
            aoRemover={props.aoRemover}
            time={colaborador.time}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
