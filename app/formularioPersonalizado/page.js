"use client";
import { useEffect } from "react";
import styles from "./../page.module.css";

export default function formsPessoal({ searchParams }) {

  const click = () => {
    console.log(searchParams.matricula)
  }
  
  useEffect(() => {});

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <button className={styles.button} onClick={click}>Clique .</button>
      </div>
    </main>
  );
}
