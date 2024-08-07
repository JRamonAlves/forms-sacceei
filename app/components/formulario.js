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
    if (index > 0) {
      changeIndexCadeiras(index - 1);
      changeLoading(true);
      changeLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container vstack gap-4 bg-secondary-subtle border border-secondary-subtle rounded-5 mx-auto"
    >
      <div className="text-center h4 mt-3">{cadeiras[index].name}</div>
      {questions.map((perguntas, index) => {
        return (
          <>
            <div className="text-center h6">Grupo de perguntas {index + 1}</div>
            <div key={index} className="vstack gap-5">
              {perguntas.map((pergunta) => {
                return (
                  <div key={pergunta.id} className="vstack gap-1">
                    <label>{pergunta.id + "." + pergunta.description}</label>
                    <div className="vstack gap-0">
                      <div className="form-check">
                        <input
                          className="form-check-input border border-secondary-subtle"
                          type="radio"
                          name={pergunta.id}
                          value={5}
                          id={pergunta.id + "5"}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor={pergunta.id + "5"}
                        >
                          Concordo muito
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input border border-secondary-subtle"
                          type="radio"
                          name={pergunta.id}
                          value={4}
                          id={pergunta.id + "4"}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={pergunta.id + "4"}
                        >
                          Concordo
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input border border-secondary-subtle"
                          type="radio"
                          name={pergunta.id}
                          value={3}
                          id={pergunta.id + "3"}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={pergunta.id + "3"}
                        >
                          Não sei
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input border border-secondary-subtle"
                          type="radio"
                          name={pergunta.id}
                          value={2}
                          id={pergunta.id + "2"}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={pergunta.id + "2"}
                        >
                          Discordo
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input border border-secondary-subtle"
                          type="radio"
                          name={pergunta.id}
                          value={1}
                          id={pergunta.id + "1"}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={pergunta.id + "1"}
                        >
                          Discordo muito
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
      <div className="d-grid gap-5 d-md-flex mb-4">
        <button onClick={backPage} className="btn btn-primary mx-auto">
          Voltar
        </button>
        <input
          type="submit"
          value={"Enviar"}
          className="btn btn-primary mx-auto"
        />
      </div>
    </form>
  );
}
