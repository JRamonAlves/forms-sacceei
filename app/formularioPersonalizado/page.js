"use client";
import { useEffect, useState } from "react";
import styles from "./../page.module.css";
import { confereMatricula } from "../api/confereMatricula";
import { perguntas } from "./perguntas";

export default function formsPessoal({ searchParams }) {
  const questions = perguntas;
  const [loading, changeLoading] = useState(true);
  const [erro, changeErro] = useState(false);
  const [cadeiras, changeCadeiras] = useState([]);

  useEffect(() => {
    confereMatricula(searchParams.matricula).then((res) => {
      if (!res) {
        changeErro(true);
        changeLoading(false);
        return;
      }

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
        <div className={styles.divmassa}>Carregando...</div>
      </main>
    );
  }

  if (erro) {
    return (
      <main className={styles.main}>
        <div className={styles.divmassa}>
          {
            "Sua matricula esta errada, ou o site esta fora do ar. Espere alguns momentos e tente de novo :)"
          }
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
      <div className={styles.forms}>
        <div className={styles.gridCadeiras}>
          <label />
          {cadeiras.map((value) => {
            return <label>{value}</label>;
          })}
        </div>
        {questions.map((value) => {
          return (
            <div className={styles.gridPerguntas}>
              <label>{value.description}</label>
              <label> </label>
              {cadeiras.map(() => {
                return (
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
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
