"use client";
export default function formsPessoal({ searchParams }) {
  console.log(searchParams);

  const printa = () => {
    console.log(searchParams);
  };

  return <button onClick={printa}>Clique neu</button>;
}
