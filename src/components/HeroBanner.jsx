import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Bem-vindos à Assembleia de Deus em Afuá",
    subtitle:
      "Um lugar onde vidas são transformadas pelo poder de Deus. Venha fazer parte da nossa família!",
    button: "Conheça nossos cultos",
  },
  {
    title: "Experimente o Verdadeiro Avivamento",
    subtitle:
      "Cultos que transformam, comunhão que fortalece e uma palavra que edifica. Junte-se a nós!",
    button: "Nossos Cultos",
  },
  {
    title: "Uma Igreja Para Toda Família",
    subtitle:
      "Ministérios para todas as idades. Crescimento espiritual, comunhão e amor fraternal.",
    button: "Nossos Ministérios",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative h-[350px] text-white flex items-center justify-center text-center overflow-hidden">
  {/* Fundo com imagem e gradiente visível abaixo da navbar */}
  <div
    className="absolute top-[80px] left-0 right-0 bottom-0 bg-no-repeat bg-top bg-[length:auto_100%] z-0"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(0, 64, 0, 0.8), rgba(22, 163, 74, 0.9)), url('/img/ad.png')"
    }}
  ></div>

  {/* Conteúdo central com padding correspondente à altura da navbar */}
  <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-[80px]">
    <h1 className="text-xl md:text-3xl font-extrabold drop-shadow mb-2">
      {slides[current].title}
    </h1>
    <p className="text-sm md:text-base max-w-md mb-4 drop-shadow">
      {slides[current].subtitle}
    </p>
    <button className="bg-white text-green-800 px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-gray-100 transition">
      {slides[current].button}
    </button>
  </div>

  {/* Dots do carrossel */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrent(idx)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          current === idx ? "bg-white" : "bg-white/50"
        }`}
      ></button>
    ))}
  </div>
</section>





  );
}
