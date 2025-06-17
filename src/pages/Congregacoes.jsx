export default function Congregacoes() {
  const congregacoes = [
    {
      nome: "Congregação Monte Sinai",
      endereco: "Rua tal, Capim Marinho",
      lider: "Pb. Valdemir",
      diasCulto: "Quinta e Domingo às 19h",
      foto: "/img/monte sinai.png",
    },
    {
      nome: "Congregação Maranata",
      endereco: "Rua Patrício Dias, Capim Marinho",
      lider: "Dc. Ediney Almeida",
      diasCulto: "Sábado e Domingo às 19h",
      foto: "/img/maranata.png",
    },
    {
      nome: "Congregação Nova Palestina",
      endereco: "Rua da Web, Capim Marinho",
      lider: "Dc. Jonilson",
      diasCulto: "Terça e Quinta, e Domingo às 19h",
      foto: "/img/palestina.png",
    },
    {
      nome: "Congregação Rio de Água Viva",
      endereco: "Rua da Beira, Capim Marinho",
      lider: "Dc. Washington",
      diasCulto: "Terça e Quinta, e Domingo às 19h",
      foto: "/img/rav.png",
    },
    {
      nome: "Congregação Nova Jerusalém",
      endereco: "Rio Panacalhau",
      lider: "Pb. Isaías Júnior",
      diasCulto: "Terça e Quinta, e Domingo às 19h",
      foto: "/img/nova jerusalém.png",
    },
    {
      nome: "Congregação Monte Horebe",
      endereco: "Rio Gapúia",
      lider: "Dc. Jonias",
      diasCulto: "Terça e Quinta, e Domingo às 19h",
      foto: "/img/monte horebe.png",
    },
    {
      nome: "Congregação Cesaréia",
      endereco: "Rio Marajozinho",
      lider: "Pb. Manoel Rodrigues",
      diasCulto: "Terça e Quinta, e Domingo às 19h",
      foto: "/img/palestina.png",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
        Nossas Congregações
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {congregacoes.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.foto}
              alt={item.nome}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-gray-800">
              <h2 className="text-xl font-bold text-green-700 mb-2">{item.nome}</h2>
              <p><strong>Endereço:</strong> {item.endereco}</p>
              <p><strong>Líder:</strong> {item.lider}</p>
              <p><strong>Dias de Culto:</strong> {item.diasCulto}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
