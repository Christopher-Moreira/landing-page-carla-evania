"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "@fontsource/roboto";
import "@fontsource/great-vibes";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopBar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-pink-200/80 backdrop-blur border-b border-pink-300">
        <div className="max-w-10xl mx-auto w-full flex items-center px-4 sm:px-6 lg:px-8 py-3 justify-between">
          {/* Logo e Nome */}
          <div className="flex items-end gap-2 flex-shrink-0">
            <Image
              src="/maquina.png"
              alt="Máquina de Costura"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div className="font-semitebold great-vibes-regular text-3xl sm:text-4xl text-pink-800">
              Carla Evania Estilista
            </div>
          </div>

          {/* Botão de menu mobile */}
          <button
            className="md:hidden text-pink-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navegação Desktop */}
          <nav
            className="hidden md:flex flex-[0.85] justify-center items-center gap-4"
            style={{ fontFamily: "Roboto, sans-serif" }}>
            <Button
              asChild
              variant="ghost"
              className="font-semibold text-pink-800 hover:text-pink-900 hover:bg-pink-300/50 text-lg">
              <Link href="/">Início</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="font-semibold text-pink-800 hover:text-pink-900 hover:bg-pink-300/50 text-lg">
              <Link href="/about-me">Sobre Mim</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="font-semibold text-pink-800 hover:text-pink-900 hover:bg-pink-300/50 text-lg">
              <Link href="/social">Redes Sociais</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="font-semibold text-pink-800 hover:text-pink-900 hover:bg-pink-300/50 text-lg">
              <Link href="#pecas">Peças</Link>
            </Button>
          </nav>

          {/* Botão à direita (Desktop) */}
          <div
            className="hidden md:block flex-shrink-0 ml-auto"
            style={{ fontFamily: "Roboto, sans-serif" }}>
            <Button
              asChild
              className="font-semibold bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6">
              <a
                href="https://wa.me/5555996991914"
                target="_blank"
                rel="noopener noreferrer">
                Agendar
              </a>
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div
            className="md:hidden bg-pink-100 border-t border-pink-300 flex flex-col items-center py-4 space-y-3"
            style={{ fontFamily: "Roboto, sans-serif" }}>
            <Link
              href="/"
              className="text-pink-800 text-lg font-medium hover:text-pink-900"
              onClick={() => setMenuOpen(false)}>
              Início
            </Link>
            <Link
              href="/about-me"
              className="text-pink-800 text-lg font-medium hover:text-pink-900"
              onClick={() => setMenuOpen(false)}>
              Sobre Mim
            </Link>
            <Link
              href="/social"
              className="text-pink-800 text-lg font-medium hover:text-pink-900"
              onClick={() => setMenuOpen(false)}>
              Redes Sociais
            </Link>
            <Link
              href="#pecas"
              className="text-pink-800 text-lg font-medium hover:text-pink-900"
              onClick={() => setMenuOpen(false)}>
              Peças
            </Link>
            <Button
              asChild
              className="font-semibold bg-pink-700 hover:bg-pink-800 text-white rounded-full px-5">
              <a
                href="https://wa.me/5555996991914"
                target="_blank"
                rel="noopener noreferrer">
                Agendar
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 container mx-auto p-4 pt-28">{children}</main>

      {/* Footer */}
      <footer
        className="bg-pink-200/80 shadow-inner mt-auto"
        style={{ fontFamily: "Roboto, sans-serif" }}>
        <div className="container mx-auto text-center py-4 text-sm text-pink-800">
          © {new Date().getFullYear()} Carla Evania Estilista. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
