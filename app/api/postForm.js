export default async function postForm(
  registration,
  subjectCode,
  classId,
  teacherCode,
  grade,
  status,
  answers
) {
  try {
    const resposta = await fetch(
      "http://sacceei.splab.ufcg.edu.br:8000/studentAnswer/2023.2",
      {
        method: "POST",
        body: JSON.stringify({
          registration: registration,
          subjectCode: subjectCode,
          classId: classId,
          teacherCode: teacherCode,
          grade: grade,
          status: status,
          answers: answers,
        }),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return resposta.body;
  } catch (err) {
    console.error(err);
  }
}
