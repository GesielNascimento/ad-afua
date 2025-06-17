import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Bem-vindos à Igreja do Avivamento",
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
    <section className="relative h-[60vh] text-white flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-600/90 z-10" />
      <img
        src="/img/ad.png"
        alt="Igreja"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow mb-3">
            {slides[current].title}
            </h1>
            <p className="text-base md:text-lg max-w-md mb-5 drop-shadow">
            {slides[current].subtitle}
            </p>
            <button className="bg-white text-green-800 px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-gray-100 transition">
            {slides[current].button}
            </button>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
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
