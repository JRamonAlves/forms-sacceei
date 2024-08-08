import Link from "next/link";

export default function Heads() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary text-light">
      <div className="container-fluid">
        <div className="h1 my-auto mx-auto">
          Formulário SACCEEI <img src="/logoUFCG.png" height={60} width={60} />
        </div>
        <a href="/about" className="navbar-brand text-light">Sobre</a>
      </div>
    </nav>
  );
}
