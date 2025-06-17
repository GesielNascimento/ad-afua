// src/components/VideoInstitucional.jsx
import React from "react";

export default function VideoInstitucional() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Vídeo Institucional</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Conheça a história, a missão e os valores que movem a Igreja do Avivamento. Assista ao nosso vídeo institucional e entenda como Deus tem agido em nosso meio!
        </p>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/watch?v=zXCtvypnIB4&t=5s"
            title="Vídeo Institucional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
