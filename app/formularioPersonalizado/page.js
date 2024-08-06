"use client";
import { useEffect, useState } from "react";
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
      <main className="container text-center bg-secondary-subtle border border-secondary-subtle rounded-5 mx-auto">
        <div className="h4 mt-4 mb-4">Carregando...</div>
      </main>
    );
  }

  if (erro) {
    return (
      <main className="container text-center bg-secondary-subtle border border-secondary-subtle rounded-5 mx-auto">
        <div className="h5 mt-5 mb-5">
          Sua matrícula está errada, ou o site esta fora do ar. Espere alguns
          momentos e tente de novo.
        </div>
      </main>
    );
  }

  if (indexCadeiras < cadeiras.length) {
    return (
      <main className="container">
        <div className="h6 text-center">
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

  return (
    <main className="container text-center bg-secondary-subtle border border-secondary-subtle rounded-5 mx-auto">
      <div className="h5 mt-5 mb-5">Obrigado por responder ao nosso formulario!</div>
    </main>
  );
}
