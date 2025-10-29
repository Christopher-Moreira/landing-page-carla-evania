import React from "react";
import { Button } from "@/components/ui/button";
import { Spool } from "lucide-react";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pink-200/80 backdrop-blur border-b border-pink-300">
      <div className="w-full flex justify-between items-center px-8 py-3">
        <div className="flex items-center gap-2">
          <Spool className="text-pink-700 w-6 h-6" />
          <span className="font-semibold text-xl text-pink-800">
            Carla Evania Estilista
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Button asChild variant="ghost" className="text-pink-800 hover:text-white">
            <a href="#home">Home</a>
          </Button>
          <Button asChild variant="ghost" className="text-pink-800 hover:text-white">
            <a href="#sobre">Sobre</a>
          </Button>
          <Button asChild variant="ghost" className="text-pink-800 hover:text-white">
            <a href="#contato">Onde me Encontrar</a>
          </Button>
          <Button asChild variant="ghost" className="text-pink-800 hover:text-white">
            <a href="#contato">Peças</a>
          </Button>
        </nav>

        <Button asChild className="bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6">
          <a href="https://wa.me/5555996991914" target="_blank" rel="noopener noreferrer">
            Agendar
          </a>
        </Button>
      </div>
    </header>
  );
}
