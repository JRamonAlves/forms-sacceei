"use client";
import { useEffect, useState } from "react";
import styles from "./../page.module.css";
import { confereMatricula } from "../api/confereMatricula";
import { perguntas } from "./perguntas";
import { setLazyProp } from "next/dist/server/api-utils";

export default function formsPessoal({ searchParams }) {
  const questions = perguntas;
  const [loading, changeLoading] = useState(true);
  const [cadeiras, changeCadeiras] = useState([]);

  useEffect(() => {
    confereMatricula(searchParams.matricula).then((res) => {
      const cursos = [];
      for (let index = 0; index < res.subjects.length; index++) {
        cursos.push(res.subjects[index].name);
      }
      changeCadeiras(cursos);
      changeLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.divmassa}>
          Buscando seus professores para voce falar mal deles ...
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.divmassa}>
        Sobre os professores das cadeiras que voce pagou semestre passado,
        responda as seguintes questões:
      </div>
      <br />
      <div className={styles.divmassa}>
        {cadeiras.map((value, index) => {
          return (
            <div key={index} className={styles.code}>
              <label>{value}</label>
            </div>
          )
        })}
      </div>
    </main>
  );
}
