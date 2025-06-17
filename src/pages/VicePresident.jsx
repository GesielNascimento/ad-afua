export default function VicePresident() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12">
      <div className="flex flex-wrap flex-row-reverse gap-6">
        <img
          src="/img/zé.png"
          alt="Pr. Marcos Silva"
          className="w-48 h-48 object-cover rounded-full shadow flex-shrink-0"
        />
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Pr. Marcos Silva</h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            O Pastor Marcos Silva atua como vice-presidente da Igreja do Avivamento desde 2012.
            Seu ministério tem sido marcado por apoio estratégico à liderança, ensino sólido da Palavra
            e cuidado com os obreiros. Bacharel em Teologia e especialista em aconselhamento cristão,
            é reconhecido por sua integridade, firmeza e visão pastoral.
            <br /><br />
            É responsável pela supervisão dos departamentos e pelo suporte administrativo à presidência.
            Seu lema é: "Servir com humildade e liderar com sabedoria".
          </p>
        </div>
      </div>
    </main>
  );
}
