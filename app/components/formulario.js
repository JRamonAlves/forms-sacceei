import { useState } from "react";
import styles from "./../page.module.css";

export default function Formulario({ cadeiras, questions }) {
  const [indexCadeiras, changeIndexCadeiras] = useState(0);

  const handleSubmit = (e) => {
    changeIndexCadeiras(indexCadeiras + 1);
  };

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
      <label>{cadeiras[indexCadeiras]}</label>
      {questions.map((value) => {
        return (
          <div>
            <label>{value.description}</label>
            <br />
            <div>
              <input type="radio" name="pergunta" value="sim" />
              <label>resposta</label>
              <br />

              <input type="radio" name="pergunta" value="sim" />
              <label>resposta</label>
              <br />

              <input type="radio" name="pergunta" value="sim" />
              <label>resposta</label>
              <br />

              <input type="radio" name="pergunta" value="sim" />
              <label>resposta</label>
              <br />

              <input type="radio" name="pergunta" value="sim" />
              <label>resposta</label>
              <br />
            </div>
            <br />
          </div>
        );
      })}
      <input type="submit" value={"ENVIAR"} />
    </form>
  );
}
