export default function Mocidade() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12">
      <div className="flex flex-wrap gap-6 items-center">
        <img
          src="/img/KADOSH.png" 
          alt="Ministério de Jovens"
          className="w-52 h-52 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Ministério de Jovens - Mocidade</h1>
          <p className="text-gray-700 text-justify mb-4 leading-relaxed">
            O Ministério de Jovens tem como propósito fortalecer a fé e os valores cristãos entre os adolescentes e jovens da igreja,
            oferecendo um espaço de crescimento espiritual, comunhão e desenvolvimento de dons.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            Com encontros semanais dinâmicos, atividades culturais, retiros e evangelismo, nossa mocidade é um grupo vibrante
            e cheio de propósito. Aqui, a juventude encontra direção, apoio e inspiração para viver uma vida santa e relevante em Cristo.
          </p>
        </div>
      </div>
    </main>
  );
}
