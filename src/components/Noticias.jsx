// src/components/Noticias.jsx
import React from "react";

export default function Noticias() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Últimas Notícias e Atualizações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Notícia 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-left">
            <img src="/img/noticia1.png" alt="Congresso de Jovens" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Culto de Ceia</h3>
              <p className="text-gray-700 text-sm mb-4">Centenas de membros participaram do culto de ceia e encontro de congregações!</p>
              <a href="#" className="text-green-800 hover:underline text-sm font-medium">Leia mais</a>
            </div>
          </div>

          {/* Notícia 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-left">
            <img src="/img/noticia2.png" alt="Batismo nas águas" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Visita do Presidente da Convenção</h3>
              <p className="text-gray-700 text-sm mb-4">Encontro de Pastores na sede da supervisão com a caravana da COMIEADEPA!</p>
              <a href="#" className="text-green-800 hover:underline text-sm font-medium">Leia mais</a>
            </div>
          </div>

          {/* Notícia 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-left">
            <img src="/img/noticia3.png" alt="Festival do Açaí" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">O maior Festival de Gastronomia</h3>
              <p className="text-gray-700 text-sm mb-4">O evento reúne milhares de pessoas apaixonadas pelo açaí!</p>
              <a href="#" className="text-green-800 hover:underline text-sm font-medium">Leia mais</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
