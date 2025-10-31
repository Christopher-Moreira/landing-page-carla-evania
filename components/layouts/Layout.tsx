"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "@fontsource/roboto";
import "@fontsource/great-vibes"
interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TopBar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-pink-200/80 backdrop-blur border-b border-pink-300">
        <div className="max-w-10xl mx-auto w-full flex items-center px-4 sm:px-6 lg:px-8 py-3">

          {/* Logo e Nome */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/maquina.png" alt="Máquina de Costura" className="w-12 h-12" />
            <span className="great-vibes-regular text-3xl text-pink-800">
              Carla Evania Estilista
            </span>
          </div>

          {/* Navegação */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-4" style={{ fontFamily: "Roboto, sans-serif" }}>
            <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
              <Link href="/">Início</Link>
            </Button>
            <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
              <Link href="/sobre">Sobre Mim</Link>
            </Button>
            <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
              <Link href="/redes">Redes Sociais</Link>
            </Button>
            <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
              <Link href="#pecas">Peças</Link>
            </Button>
          </nav>

          {/* Botão à direita */}
          <div className="flex-shrink-0" style={{ fontFamily: "Roboto, sans-serif" }}>
            <Button asChild className="bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6">
              <a href="https://wa.me/5555996991914" target="_blank" rel="noopener noreferrer">
                Agendar
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 container mx-auto p-4 pt-28">
        {/* pt-28 para compensar o header fixo */}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-pink-200/80 shadow-inner mt-auto" style={{ fontFamily: "Roboto, sans-serif" }}>
        <div className="container mx-auto text-center py-4 text-sm text-pink-800">
          © {new Date().getFullYear()} Carla Evania Estilista. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
