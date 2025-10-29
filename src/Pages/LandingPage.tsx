import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Scissors, Shirt, Sparkles, WandSparkles } from "lucide-react";
import TopBar from "@/components/ui/TopBar";
import { Footer, FooterLink, FooterLinkGroup, FooterCopyright } from 'flowbite-react';


export default function LandingPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#fbcfe8';
  }, []);

  const servicos = [
    { icon: <Scissors className="w-12 h-12 text-pink-700 mb-4" />, title: "Ajustes e Reformas", desc: "Retoques, barras e ajustes para o caimento perfeito." },
    { icon: <Shirt className="w-12 h-12 text-pink-700 mb-4" />, title: "Peças Sob Medida", desc: "Criação de roupas exclusivas feitas especialmente para você." },
    { icon: <Sparkles className="w-12 h-12 text-pink-700 mb-4" />, title: "Detalhes e Bordados", desc: "Acabamentos e bordados que destacam sua personalidade." },
    { icon: <WandSparkles className="w-12 h-12 text-pink-700 mb-4" />, title: "Personalização com Pedras e Rendas", desc: "Customização com pedrarias e recortes de rendas para dar vida a suas roupas." },
  ];

  return (
    <div className="font-sans bg-pink-200 text-gray-900 h-screen flex flex-col overflow-hidden">
      <TopBar />
      <div className="h-18"></div>

     <section id="servicos" className="py-0 bg-pink-200 px-4 text-center w-full">
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.jpg" 
            alt="Logo Carla Evania" 
            className="rounded-2xl border-4 border-pink-300 shadow-lg w-48 h-48 object-cover"
          />
        </div>
        
        <h2 className="text-5xl font-bold text-pink-900 mb-12">Serviços Oferecidos</h2>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-8 max-w-7x1 mx-auto">
          {servicos.map((s, i) => (
            <Card key={i} className="rounded-1x1 border-2 border-pink-300 hover:shadow-2xl transition transform hover:scale-[1.02] bg-white/90 h-full flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex flex-col items-center">{s.icon}</div>
                <CardTitle className="text-xl text-pink-800">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    <Footer className="bg-pink-200 text-white mt-30" container style={{ backgroundColor: "#fbcfe8" }}>
    <FooterCopyright 
        href="https://github.com/Christopher-Moreira" by="Christopher Moreira de Oliveira™" year={new Date().getFullYear()} className="text-white"
    />
    </Footer>
    </div>
    
  );
}
