export default function Valores() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12 text-justify">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Nossos Valores</h1>

      <img
        src="/img/templo.png" // substitua pelo nome correto da imagem
        alt="Cultura e valores da Assembleia de Deus em Afuá"
        className="w-full max-h-[400px] object-cover rounded-lg shadow-md mb-6"
      />

      <p className="text-gray-700 text-lg leading-relaxed">
        Os valores da <strong>Igreja Evangélica Assembleia de Deus em Afuá</strong> são os pilares que sustentam nossa conduta,
        ministério e missão. Eles refletem aquilo em que cremos, vivemos e ensinamos, como igreja comprometida com o Reino de Deus.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Buscamos viver de forma coerente com os princípios bíblicos e honrar a Deus em todas as áreas da vida,
        promovendo uma cultura de temor, serviço, comunhão e santidade.
      </p>

      <ul className="list-disc list-inside text-gray-700 mt-6 space-y-3 text-lg">
        <li>
          <strong>Fidelidade à Palavra de Deus:</strong> A Bíblia é nossa única regra de fé e prática.
        </li>
        <li>
          <strong>Vida de oração:</strong> Acreditamos no poder da oração como base de comunhão com Deus e direção espiritual.
        </li>
        <li>
          <strong>Unidade e comunhão:</strong> Valorizamos o corpo de Cristo como uma família, promovendo relacionamentos saudáveis e respeito mútuo.
        </li>
        <li>
          <strong>Santidade e integridade:</strong> Buscamos viver de forma irrepreensível diante de Deus e da sociedade.
        </li>
        <li>
          <strong>Paixão por missões:</strong> Temos compromisso com a evangelização local, ribeirinha e além-fronteiras.
        </li>
        <li>
          <strong>Excelência no serviço:</strong> Servimos com amor, dedicação e responsabilidade, como para o Senhor.
        </li>
      </ul>
    </main>
  );
}
