export default async function acessaHistorico(matricula) {
  try {
    const resposta = await fetch("http://127.0.0.1:8000/studentHistory/2023.2?registration=122210093", {
      method : "GET",
      header : {
        'Content-type' : 'app/json'
      }
    });
    console.log(resposta.json());
    return resposta.body.json();
  } catch (err) {
    console.error(err);
  }
}
