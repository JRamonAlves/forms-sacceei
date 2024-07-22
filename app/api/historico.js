export default async function acessaMatricula(matricula) {
  try {
    const resposta = await fetch(
      "http://127.0.0.1:8000/studentHistory/2023.2?registration=" + matricula,
      {
        method: "GET",
        mode: "no-cors",
      }
    );
    return resposta.body;
  } catch (err) {
    console.error(err);
  }
}
