export async function fetchSubjects(matricula) {
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
      if (res.ok) return res.json()
      else return res.ok
    })
  } catch (err) {
    console.error(err);
  }
}
