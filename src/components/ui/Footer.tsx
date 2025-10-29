import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm w-full">
      <p>
        © {new Date().getFullYear()} Página desenvolvida por Christopher Moreira de Oliveira — Todos os direitos reservados.
      </p>
    </footer>
  );
}
