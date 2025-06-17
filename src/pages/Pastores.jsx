export default function Pastores() {
  const pastores = [
    {
      nome: "Pr. Elias Martins",
      foto: "/img/zé.png",
      descricao: "Responsável pela Congregação Central. Atua na área de ensino bíblico e discipulado."
    },
    {
      nome: "Pr. Renato Oliveira",
      foto: "/img/silas.jpg",
      descricao: "Dirige os cultos de jovens. Líder dinâmico e envolvido com evangelismo urbano."
    },
    {
      nome: "Pr. Marcos Souza",
      foto: "/img/zé.png",
      descricao: "Pastor de famílias, realiza aconselhamento e ministra seminários sobre vida cristã."
    }
  ];

  return (
    <main className="max-w-6xl mx-auto pt-32 px-4 pb-12">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Galeria de Pastores da Igreja</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pastores.map((pastor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={pastor.foto}
              alt={pastor.nome}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700">{pastor.nome}</h2>
            <p className="text-gray-700 text-sm mt-2">{pastor.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
