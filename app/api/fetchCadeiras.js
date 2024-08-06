export async function fetchCadeiras(matricula) {
  try {
    return await fetch(
      "http://sacceei.splab.ufcg.edu.br:8000/studentHistory/2023.2?registration=" + matricula,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      return res.json()
    })
  } catch (err) {
    console.error(err);
  }
}
