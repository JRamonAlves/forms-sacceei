import styles from "./../page.module.css";
import { perguntas } from "../formularioPersonalizado/perguntas";
import postForm from "../api/postForm";

export default function Formulario({
  cadeiras,
  matricula,
  changeLoading,
  changeIndexCadeiras,
  index,
}) {
  const questions = perguntas;
  const cadeira = cadeiras[index];

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeIndexCadeiras(index + 1);
    changeLoading(true);
    const data = new FormData(e.target);
    const answers = [];
    data.forEach((value) => {
      console.log(value, value.type);
      answers.push(parseInt(value));
    });
    await postForm(
      matricula,
      String(cadeira.code),
      String(cadeira.classId),
      String(cadeira.teacherRegistration),
      cadeira.grade,
      cadeira.status,
      answers
    );
    changeLoading(false);
  };

  const backPage = async (e) => {
    e.preventDefault();
    changeIndexCadeiras(index - 1);
    changeLoading(true);
    changeLoading(false);
  };

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
      <label>{cadeiras[index].name}</label>
      <br />
      <br />
      {questions.map((pergunta) => {
        return (
          <div key={pergunta.id}>
            <label>{pergunta.description}</label>
            <br />
            <div>
              <input type="radio" name={pergunta.id} value={5} />
              <label>Concordo muito</label>
              <br />
              <input type="radio" name={pergunta.id} value={4} />
              <label>Concordo</label>
              <br />
              <input type="radio" name={pergunta.id} value={3} required />
              <label>Não sei</label>
              <br />
              <input type="radio" name={pergunta.id} value={2} />
              <label>Discordo</label>
              <br />
              <input type="radio" name={pergunta.id} value={1} />
              <label>Discordo muito</label>
              <br />
            </div>
            <br />
          </div>
        );
      })}
      <div className={styles.buttons}>
        <button onClick={backPage} className={styles.button}>
          Voltar
        </button>
        <input type="submit" value={"Enviar"} className={styles.button} />
      </div>
    </form>
  );
}
