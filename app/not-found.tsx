"use client";

import { useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layouts/Layout";
import "@fontsource/roboto";
import "@fontsource/source-code-pro";
import { Scissors } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fbcfe8";
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-pink-200">
        <Image
          src="/logo.jpg"
          alt="Logo Carla Evania"
          width={220}
          height={220}
          className="rounded-2xl border-4 border-pink-300 shadow-lg mb-8 object-cover"/>
        <div className="text-[2rem] text-pink-900 flex items-center gap-3"> 404</div>
        <div className="flex items-center gap-3">
          <Scissors className="w-10 h-10 text-pink-900 animate-pulse" />
    -      <h1
            className="text-4xl md:text-5xl text-pink-900 font-semibold"
            style={{ fontFamily: "Roboto" }}>Ainda estou dando alguns pontos 🪡</h1>
        </div>

        <p
          className="mt-6 text-gray-800 text-lg max-w-xl"
          style={{ fontFamily: "Roboto" }}>
    
        </p>

        <a
          href="/"
          className="mt-10 inline-block bg-pink-700 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-800 transition"
          style={{ fontFamily: "Roboto" }}>
          Voltar para a página inicial
        </a>
      </section>
    </Layout>
  );
}
