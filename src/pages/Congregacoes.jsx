export default function Congregacoes() {
  const congregacoes = [
    {
      nome: "Congregação Monte das Oliveiras",
      endereco: "Rua da Paz, Capim Marinho",
      lider: "Pr. Elias Nascimento",
      diasCulto: "Quarta e Domingo às 19h",
    },
    {
      nome: "Congregação Shekinah",
      endereco: "Rua do Amor, Interior (Rio Aramã)",
      lider: "Pb. João Ferreira",
      diasCulto: "Sábado e Domingo às 19h",
    },
    {
      nome: "Congregação Peniel",
      endereco: "Rua da Alegria, Interior (Rio Aningal)",
      lider: "Ev. Marcos Souza",
      diasCulto: "Terça e Quinta às 19h",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
        Nossas Congregações
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {congregacoes.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-green-700 mb-1">{item.nome}</h2>
            <p>
              <strong>Endereço:</strong> {item.endereco}
            </p>
            <p>
              <strong>Líder:</strong> {item.lider}
            </p>
            <p>
              <strong>Dias de Culto:</strong> {item.diasCulto}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
