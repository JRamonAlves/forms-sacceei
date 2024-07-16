"use client";
import acessaHistorico from "./api/historico";
import styles from "./page.module.css";

const perguntas = {
  pergunta: "pergunta massa",
  id: 123,
};

const handleSubmit = async (e) => {
  await acessaHistorico(e.target)
};

export default function Home() {
  return (
    <>
      <header className={styles.head}>
        Formulario SACCEEI <img src="/logoUFCG.png" height={60} width={60} />
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Algumas informacoes importantes</h2>
          <br />
          <label>Email: </label>
          <input type="email"/>
          <br />
          <label>Matricula: </label>
          <input type="number"></input>
          <br />
          <input type="submit" value="Enviar"></input>
        </form>
      </main>
    </>
  );
}
