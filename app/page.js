"use client";
import styles from "./page.module.css";
import { useState } from "react";
import acessaHistorico from "./api/historico";

export default function Home() {
  const [matricula, atualizaMatricula] = useState('');

  const handleChange = (value) => {
    atualizaMatricula(value)
  }

  const handleSubmit = async (e) => {
    console.log(matricula)
    acessaHistorico(matricula)
  };
  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.form}>
            <h3>Informações para gerar seu questionário</h3>
            <br />
            <label>Matricula: </label>
            <input type="number" key="matricula" name="matricula" onChange={(e) => handleChange(e.target.value)}></input>
            <br />
            <br />
            <div className={styles.buttons}>
              <button className={styles.button} onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
      </main>
    </>
  );
}
