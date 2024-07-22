export default async function acessaMatricula(matricula) {
  try {
    const resposta = await fetch(
      "http://127.0.0.1:8000/studentHistory/2023.2?registration=122210093",
      {
        method: "GET",
        mode: "no-cors",
      }
    );
    console.log(resposta.json());
    return resposta.body.json();
  } catch (err) {
    console.error(err);
  }
}
