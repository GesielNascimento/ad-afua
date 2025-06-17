// src/components/Doacoes.jsx
import React from "react";

export default function Doacoes() {
  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Área para Doações</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          A sua generosidade transforma vidas! Com sua ajuda, ampliamos ações sociais, missões e estrutura da igreja. Contribua com amor e propósito.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto mb-6">
          <h3 className="text-xl font-semibold text-green-800 mb-2">📌 Pix da Igreja:</h3>
          <p className="text-lg font-mono text-gray-800 mb-4">igreja.avivamento@pix.com</p>

          <h3 className="text-xl font-semibold text-green-800 mb-2">🏦 Conta Bancária:</h3>
          <p className="text-gray-700">
            Banco do Brasil<br />
            Agência: 1234-5<br />
            Conta Corrente: 67890-1<br />
            Igreja do Avivamento
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5596992078175&text=Olá! Gostaria de fazer uma doação."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
        >
          Falar com Tesouraria
        </a>
      </div>
    </section>
  );
}
