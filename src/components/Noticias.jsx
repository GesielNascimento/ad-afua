// src/components/Noticias.jsx
import React from "react";

export default function Noticias() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Últimas Notícias e Atualizações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Notícia 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Congresso de Jovens emociona Afuá</h3>
            <p className="text-gray-700 text-sm mb-4">Centenas de jovens participaram do maior congresso da história...</p>
            <a href="#" className="text-green-800 hover:underline text-sm font-medium">Leia mais</a>
          </div>

          {/* Notícia 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Batismo nas águas reúne dezenas</h3>
            <p className="text-gray-700 text-sm mb-4">O templo central celebrou a decisão pública de fé de novos convertidos...</p>
            <a href="#" className="text-green-800 hover:underline text-sm font-medium">Leia mais</a>
          </div>

          {/* Notícia 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Festival do Açaí anuncia nova edição</h3>
            <p className="text-gray-700 text-sm mb-4">Com mais estrutura e novidades, o evento promete mais impacto este ano...</p>
            <a href="#" className="text-green-800 hover:underline text-sm font-medium">Leia mais</a>
          </div>
        </div>
      </div>
    </section>
  );
}
