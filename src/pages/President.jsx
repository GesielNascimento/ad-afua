export default function President() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12">
      <div className="flex flex-wrap gap-6">
        {/* Imagem à esquerda */}
        <img
          src="/img/ISAIAS BENTES.png"
          alt="Foto do Pr. João da Silva"
          className="w-48 h-48 object-cover rounded-full shadow flex-shrink-0"
        />

        {/* Conteúdo textual ao lado e fluindo abaixo */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Pr. João da Silva</h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            O <strong>Pastor Isaías Bentes</strong> é o <strong>presidente da Igreja Evangélica Assembleia de Deus em Afuá</strong> desde 2020. Com mais 
            de 40 anos de ministério, tem liderado com dedicação, amor à Palavra e zelo pelas famílias. Graduado em Teologia 
            e com pós-graduação em Liderança Cristã, é conhecido por suas mensagens inspiradoras e por seu coração pastoral.
            <br /><br />
            Ao longo dos anos, tornou-se referência entre os líderes da cidade, promovendo ações sociais, evangelismo
            e discipulado. Seu ministério é marcado por oração, visão clara e compromisso com a Palavra de Deus.
          </p>
        </div>
      </div>
    </main>
  );
}
