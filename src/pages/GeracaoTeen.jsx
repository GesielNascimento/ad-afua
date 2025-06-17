export default function GeracaoTeen() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12">
      <div className="flex flex-wrap gap-6 items-center">
        <img
          src="/img/GERAÇÃO ELEITA BLACK.png"
          alt="Geração Teen"
          className="w-52 h-52 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Geração Teen</h1>
          <p className="text-gray-700 text-justify mb-4 leading-relaxed">
            A Geração Teen é um ministério focado no cuidado e formação espiritual dos adolescentes entre 11 e 15 anos.
            Aqui, nossos teens são incentivados a crescer no conhecimento da Palavra, desenvolver amizades saudáveis
            e viver sua fé de forma prática e empolgante.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            Nossos encontros incluem estudos bíblicos temáticos, rodas de conversa, atividades recreativas e eventos especiais
            que ajudam os adolescentes a compreender sua identidade em Cristo e o papel que desempenham na igreja e na sociedade.
          </p>
        </div>
      </div>
    </main>
  );
}
