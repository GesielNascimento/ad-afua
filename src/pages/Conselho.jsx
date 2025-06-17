export default function Conselho() {
  return (
    <main className="max-w-6xl mx-auto pt-32 px-4 pb-16">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Conselho da Igreja</h1>

      <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
<div className="bg-gray-100 p-6 rounded-lg shadow w-[750px]">
  <img
    src="/img/conselho.png"
    alt="Logo Conselho"
    className="w-full"
  />
</div>
        <p className="text-gray-700 leading-relaxed text-justify">
          O Conselho da Igreja do Avivamento é composto por líderes experientes e compromissados com
          a direção espiritual, ética e administrativa da igreja. Eles atuam em oração e discernimento,
          apoiando o pastor presidente nas decisões mais relevantes da comunidade.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">Membros do Conselho</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-bold text-green-800">Pb. Elias Mendes</h3>
          <p className="text-sm text-gray-600">Responsável pelo acompanhamento de casais e assuntos administrativos.</p>
        </li>
        <li className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-bold text-green-800">Dc. André Costa</h3>
          <p className="text-sm text-gray-600">Atua na supervisão de projetos sociais e visitas pastorais.</p>
        </li>
        <li className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-bold text-green-800">Ev. Marta Nascimento</h3>
          <p className="text-sm text-gray-600">Responsável por aconselhamento e planejamento espiritual da igreja.</p>
        </li>
        <li className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-bold text-green-800">Pr. Lucas Oliveira</h3>
          <p className="text-sm text-gray-600">Coordena a formação teológica e treinamentos para obreiros.</p>
        </li>
      </ul>
    </main>
  );
}
