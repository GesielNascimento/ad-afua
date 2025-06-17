export default function Kids() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12">
      <div className="flex flex-wrap gap-6 items-center">
        <img
          src="/img/UNIDOS EM CRISTO.png" 
          alt="Ministério Kids"
          className="w-52 h-52 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Ministério Kids</h1>
          <p className="text-gray-700 text-justify mb-4 leading-relaxed">
            O Ministério Kids é um espaço especialmente dedicado às crianças de 0 a 10 anos, onde elas são acolhidas com amor
            e aprendem sobre Deus de forma divertida e segura.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            Utilizamos recursos lúdicos, músicas, histórias bíblicas, dinâmicas e brincadeiras que proporcionam uma
            aprendizagem significativa e fortalecem a base espiritual das nossas crianças.
            O objetivo é cultivar corações que amem a Deus desde cedo, preparando os pequenos para um futuro cheio de fé.
          </p>
        </div>
      </div>
    </main>
  );
}
