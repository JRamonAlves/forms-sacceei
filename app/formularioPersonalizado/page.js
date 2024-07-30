"use client";
import { useEffect, useState } from "react";
import styles from "./../page.module.css";
import Formulario from "../components/formulario";
import { fetchCadeiras } from "../api/fetchCadeiras";

export default function FormsPessoal({ matricula }) {
  const [loading, changeLoading] = useState(true);
  const [erro, changeErro] = useState(false);
  const [cadeiras, changeCadeiras] = useState([]);
  const [indexCadeiras, changeIndex] = useState(0);

  useEffect(() => {
    fetchCadeiras(matricula).then((res) => {
      if (!res) {
        changeErro(true);
        changeLoading(false);
        return;
      }

      const cursosArray = [];
      for (let index = 0; index < res.subjects.length; index++) {
        if (res.subjects[index].status !== "TRANCADO") {
          cursosArray.push(res.subjects[index]);
        }
      }

      changeCadeiras(cursosArray);
      changeLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.divmassa}>Carregando...</div>
      </main>
    );
  }

  if (erro) {
    return (
      <main className={styles.main}>
        <div className={styles.divmassa}>
          Sua matrícula está errada, ou o site esta fora do ar. Espere alguns
          momentos e tente de novo.
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Sobre os professores das cadeiras que voce pagou semestre passado,
        responda as seguintes questões:
      </div>
      <br />
      <Formulario
        cadeiras={cadeiras}
        matricula={matricula}
        changeLoading={changeLoading}
        changeIndexCadeiras={changeIndex}
        index={indexCadeiras}
      />
      <br />
    </main>
  );
}
