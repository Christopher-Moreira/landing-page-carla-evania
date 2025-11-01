"use client"

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, MessageCircleMore} from "lucide-react";
import "@fontsource/roboto";
import "@fontsource/source-code-pro"
import Layout from "@/components/layouts/Layout";

export default function SocialLandingPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#fbcfe8'; // rosa padrão
  }, []);

  const redesSociais = [
    { icon: <Instagram className="w-12 h-12 text-red-700 mb-4" />, title: "Instagram", desc: "Siga meu perfil para novidades e fotos exclusivas.", link: "https://www.instagram.com/carlamoreira7792052/" },
    { icon: <MessageCircleMore className="w-12 h-12 text-green-400 mb-4" />, title: "Whatsapp", desc: "Agendamentos Gerais são pelo meu whatsapp.", link: "https://wa.me/5555996991914" },
    { icon: <Facebook className="w-12 h-12 text-blue-700 mb-4" />, title: "Facebook", desc: "Contato pelo facebook também é aceito!", link: "https://facebook.com/" },
  ];

  return (
    <Layout>
      <div className="h-4"></div>

      <section id="redes-sociais" className="py-12 font-semibold bg-pink-200 px-4 text-center w-full">
        <div className="flex justify-center mb-8">
          <Image src="/logo.jpg" alt="Logo" width={1080} height={1920} className="rounded-2xl border-4 border-pink-300 shadow-lg w-48 h-48 object-cover"
          />
        </div>

        <h2 className="text-5xl great-vibes-regular text-pink-900 mb-12">Minhas Redes Sociais 🥰</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {redesSociais.map((rede, i) => (
            <Card 
              key={i} 
              className="rounded-xl border-2 border-pink-300 hover:shadow-2xl transition transform hover:scale-[1.02] bg-white/90 h-full flex flex-col cursor-pointer"
              onClick={() => window.open(rede.link, "_blank")}
            >
              <CardHeader className="flex-1 flex flex-col items-center">
                {rede.icon}
                <CardTitle className="text-xl text-pink-800" style={{ fontFamily: "Roboto, sans-serif" }}>{rede.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>{rede.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}