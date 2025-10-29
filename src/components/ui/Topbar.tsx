import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pink-200/80 backdrop-blur border-b border-pink-300">
      <div className="max-w-7xl mx-auto w-full flex items-center px-4 sm:px-6 lg:px-8 py-3">

        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="maquina.png" alt="Máquina de Costura" className="w-12 h-12" />
          <span className="great-vibes-regular text-3xl text-pink-800">
            Carla Evania Estilista
          </span>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
          <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
            <Link to="/">Início</Link>
          </Button>
          <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
           <Link to="/sobre">Sobre Mim</Link>
          </Button>
          <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
            <a href="/redes">Redes Sociais</a>
          </Button>
          <Button asChild variant="ghost" className="text-pink-800 hover:text-pink-900 hover:bg-pink-300/50">
            <a href="#pecas">Peças</a>
          </Button>
        </nav>

        {/* Botão à direita */}
        <div className="flex-shrink-0">
          <Button asChild className="bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6">
            <a href="https://wa.me/5555996991914" target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
