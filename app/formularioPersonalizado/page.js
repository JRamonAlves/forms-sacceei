"use client";
import { useEffect } from "react";
import styles from "./../page.module.css";
import { confereMatricula } from "../api/confereMatricula";
import { Martel } from "next/font/google";

export default function formsPessoal({ searchParams }) {
  const click = () => {
    confereMatricula(searchParams.matricula);
  };

  useEffect(() => {});

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <button className={styles.button} onClick={click}>
          Clique .
        </button>
      </div>
    </main>
  );
}
