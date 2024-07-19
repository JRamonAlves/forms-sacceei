"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [matricula, atualizaMatricula] = useState("");

  const handleChange = (value) => {
    atualizaMatricula(value);
  };

  const handleSubmit = (e) => {
    console.log(matricula);
    acessaMatricula(matricula);
  };

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h3>Informações para gerar seu questionário</h3>
        <br />
        <label>Matricula: </label>
        <input
          type="number"
          key="matricula"
          name="matricula"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <br />
        <br />
        <div className={styles.buttons}>
          <Link
            href={{
              pathname: "/formularioPersonalizado",
              query: {
                matricula: matricula,
              },
            }}
          >
            <button className={styles.button} onClick={handleSubmit}>
              Enviar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
