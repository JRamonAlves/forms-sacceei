"use client";
import styles from "./page.module.css";
import { useState } from "react";
import FormsPessoal from "./formularioPersonalizado/page";

export default function Home() {
  const [matricula, changeMatricula] = useState("");
  const [respondeu, changeRespondeu] = useState(false);

  const handleChange = (e) => {
    changeMatricula(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeRespondeu(true);
  };

  if (!respondeu) {
    return (
      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.divmassa}>
          <h3>Informações para gerar seu questionário</h3>
          <br />
          <label>Matricula: </label>
          <input
            type="number"
            key="matricula"
            name="matricula"
            onChange={handleChange}
          />
          <br />
          <br />
          <div className={styles.buttonsHome}>
            <input type="submit" className={styles.button} value="Enviar" />
          </div>
        </div>
      </form>
    );
  }

  return <FormsPessoal matricula={matricula} />;
}
