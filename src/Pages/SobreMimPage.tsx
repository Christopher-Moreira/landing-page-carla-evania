import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@components/card";
import { User, Heart, Star, Globe } from "lucide-react";
import TopBar from "@components/topbar";
import { Footer, FooterCopyright } from 'flowbite-react';


export default function SobreMimPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#fbcfe8';
  }, []);

  const infoPessoal = [
    { icon: <User className="w-12 h-12 text-pink-700 mb-4" />, title: "Quem Sou", desc: "Sou uma pessoa apaixonada por moda, design e criação de roupas exclusivas que refletem personalidade e estilo." },
    { icon: <Heart className="w-12 h-12 text-pink-700 mb-4" />, title: "Minha Paixão", desc: "Adoro transformar ideias em peças únicas, sempre com atenção aos detalhes e à qualidade." },
    { icon: <Star className="w-12 h-12 text-pink-700 mb-4" />, title: "Diferenciais", desc: "Trabalho com personalização, bordados, pedrarias e acabamentos que tornam cada peça especial e única." },
    { icon: <Globe className="w-12 h-12 text-pink-700 mb-4" />, title: "Visão de Futuro", desc: "Busco expandir meu trabalho, conectando estilo e arte em cada projeto." },
  ];

  return (
    <div className="font-sans bg-pink-200 text-gray-900 min-h-screen flex flex-col overflow-hidden">
      <TopBar />
      <div className="h-6"></div>

      <section id="sobre-mim" className="py-12 bg-pink-200 px-4 text-center w-full">
        <div className="flex justify-center mb-8">
          <img 
            src="/perfil.jpg" 
            alt="Foto Perfil" 
            className="rounded-2xl border-4 border-pink-300 shadow-lg w-48 h-48 object-cover"
          />
        </div>

        <h2 className="great-vibes-regular text-5xl font-bold text-pink-900 mb-2">Sobre Mim</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Olá! Eu sou a Carla! Trabalho com moda, personalização de roupas e bordados exclusivos há mais de 30 anos.
          Minha missão é criar peças que expressem identidade e estilo de forma única. Cada projeto é pensado com cuidado, amor e atenção aos detalhes.
        </p>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {infoPessoal.map((info, i) => (
            <Card key={i} className="rounded-xl border-2 border-pink-300 hover:shadow-2xl transition transform hover:scale-[1.02] bg-white/90 h-full flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex flex-col items-center">{info.icon}</div>
                <CardTitle className="text-xl text-pink-800">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{info.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer className="bg-pink-200 text-white mt-0" container style={{ backgroundColor: "#fbcfe8" }}>
        <FooterCopyright 
          href="https://github.com/Christopher-Moreira" 
          by="Christopher Moreira de Oliveira™" 
          year={new Date().getFullYear()} 
          className="text-white"
        />
      </Footer>
    </div>
  );
}
