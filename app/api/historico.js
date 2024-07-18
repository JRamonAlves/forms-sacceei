export default async function acessaHistorico(matricula) {
  try {
    const resposta = await fetch("http://127.0.0.1:8000/student/2023.2", {
      method : "POST",
      headers : {
        'Content-type' : 'app/json'
      },
      body : JSON.stringify(matricula)

    });
    console.log(resposta.json());
    return resposta.body.json();
  } catch (err) {
    console.error(err);
  }
}
