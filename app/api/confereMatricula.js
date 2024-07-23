export async function confereMatricula(matricula) {
  try {
    await fetch(
      "http://127.0.0.1:8000/studentHistory/2023.2?registration=" + matricula,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res.ok);
      return res.json()
    }).then((body) =>
      // console.log(body.subjects)
    );
  } catch (err) {
    console.error(err);
  }
}
