"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [matricula, atualizaMatricula] = useState("");

  const handleChange = (value) => {
    atualizaMatricula(value);
  };

  return (
    <form className={styles.main}>
      <div className={styles.divmassa}>
        <h3>Informações para gerar seu questionário</h3>
        <br />
        <label>Matricula: </label>
        <input
          type="number"
          key="matricula"
          name="matricula"
          onChange={(e) => handleChange(e.target.value)}
        />
        <br />
        <br />
        <div className={styles.buttons}>
          <Link
            className={styles.buttons}
            href={{
              pathname: "/formularioPersonalizado",
              query: {
                matricula: matricula,
              },
            }}
          >
            <button className={styles.button}>Enviar</button>
          </Link>
        </div>
      </div>
    </form>
  );
}
