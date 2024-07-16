export default async function acessaHistorico(req, res) {
  try {
    const resposta = await fetch("localhost:8000/student/2023.2");
    console.log(resposta.json())
    return resposta.body.json();
  } catch (err) {
    console.error(err);
  }
}
