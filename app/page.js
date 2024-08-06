"use client";
import { useState } from "react";
import FormsPessoal from "./formularioPersonalizado/page";

export default function Home() {
  const [matricula, changeMatricula] = useState("");
  const [respondeu, changeRespondeu] = useState(false);

  const handleChange = (e) => {
    changeMatricula(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeRespondeu(true);
  };

  if (!respondeu) {
    return (
      <form
        className="container text-center bg-secondary-subtle border border-secondary-subtle rounded-5 p-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="h4">Informações para gerar seu questionário</label>
        <div className="form-floating mb-3 d-grid gap-1 col-4 mx-auto">
          <input
            className="form-control border border-secondary-subtle"
            placeholder="00000000000"
            type="number"
            key="matricula"
            name="matricula"
            onChange={handleChange}
          />
          <label for="floatingInpul">Matricula</label>
        </div>
        <div className="mx-auto">
          <input type="submit" className="btn btn-primary" value="Enviar" />
        </div>
        <br />
      </form>
    );
  }

  return <FormsPessoal matricula={matricula} />;
}
