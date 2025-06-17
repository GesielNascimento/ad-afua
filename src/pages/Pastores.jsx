export default function Pastores() {
  const pastores = [
    {
      nome: "Pr. Isaías Bentes & Irmã Isabel Sales",
      foto: "/img/pr isaias.jpg",
      descricao: "22 de Março de 2020 - Atual"
    },
    {
      nome: "Pr. Zequinha & Irmã Mirian Ferreira",
      foto: "/img/pr zequinha.jpg",
      descricao: "16 de Dezembro de 2019 - 15 de Março de 2020."
    },
    {
      nome: "Pr. Izaque Souza & Irmã Iracema",
      foto: "/img/izaque.jpg",
      descricao: "Março de 2018 - a Dezembro de 2018"
    },
    {
      nome: "Pr. Jacob Costa & Irmã Mirian Froes",
      foto: "/img/jacob.jpg",
      descricao: "Abril de 2017 - Março de 2018"
    },
    {
      nome: "Pr. Ezequias Melo & Irmã Carmem",
      foto: "/img/ezequias.jpg",
      descricao: "27 de Outubro de 2014 - Março de 2017"
    },
    {
      nome: "Pr. Elquias Lima & Irmã Abigail",
      foto: "/img/elquias.jpg",
      descricao: "Julho de 2012 - 26 de Outubro de 2014"
    }
    
    
    
  ];

  return (
    <main className="max-w-6xl mx-auto pt-32 px-4 pb-12">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Galeria de Pastores da Igreja</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pastores.map((pastor, index) => {
          const colunas = 3;
          const linha = Math.floor(index / colunas);
          const coluna = index % colunas;
          const isBorda = (linha + coluna) % 2 === 0;

          return (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md text-center transition-all duration-300 bg-white ${
                isBorda ? 'border-2 border-green-600' : ''
              }`}
            >
              <img
                src={pastor.foto}
                alt={pastor.nome}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-green-800">{pastor.nome}</h2>
              <p className="text-sm mt-2 text-gray-700">{pastor.descricao}</p>
            </div>
          );
        })}



      </div>
    </main>
  );
}
