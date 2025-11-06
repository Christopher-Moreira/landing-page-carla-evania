"use client"

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Scissors, Shirt, Sparkles, WandSparkles } from "lucide-react";
import Layout from "@/components/layouts/Layout";
import "@fontsource/roboto";
import "@fontsource/source-code-pro"
import { Analytics } from "@vercel/analytics/next"

export default function LandingPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fbcfe8";
  }, []);

  const servicos = [
    { icon: <Scissors className="w-12 h-12 text-pink-700 mb-4" />, title: "Ajustes e Reformas", desc: "Retoques, barras e ajustes para o caimento perfeito."  },
    { icon: <Shirt className="w-12 h-12 text-pink-700 mb-4" />, title: "Peças Sob Medida", desc: "Criação de roupas exclusivas feitas especialmente para você." },
    { icon: <Sparkles className="w-12 h-12 text-pink-700 mb-4" />, title: "Detalhes e Bordados", desc: "Acabamentos e bordados que destacam sua personalidade." },
    { icon: <WandSparkles className="w-12 h-12 text-pink-700 mb-4" />, title: "Personalização com Pedras e Rendas", desc: "Customização com pedrarias e recortes de rendas para dar vida a suas roupas." },
  ];

  return (
    <Layout>
      <div className="h-4"></div> 
      <section id="servicos" className="py-8 bg-pink-200 px-4 text-center w-full">
        <div className="flex justify-center mb-8">
          <Image src="/logo.jpg" alt="Logo Carla Evania" width={1080} height={1920} className="rounded-2xl border-4 border-pink-300 shadow-lg w-48 h-48 object-cover" />
        </div>
        <h2 className="text-5xl great-vibes-regular font-semibold text-pink-900 mb-12 px-4 bg-pink-200">
          Serviços Oferecidos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
          {servicos.map((info, i) => (
            <Card
              key={i}
              className="rounded-xl border-2 border-pink-300 hover:shadow-2xl transition transform hover:scale-[1.02] bg-white/90 h-full flex flex-col">
              <CardHeader className="flex-1 flex flex-col items-center">
                {info.icon}
                <CardTitle className="text-x1 text-pink-800" style={{ fontFamily: "Roboto" }}>{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm " style={{ fontFamily: "Roboto" }}>{info.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Analytics />
    </Layout>
    
  );
}
