import { useState } from "react";

const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const nomesDosMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const eventos = [
  {
    data: "2025-09-06",
    titulo: "Ceia do Senhor",
    hora: "19h",
    local: "Templo Central",
    congregacao: "Sede",
    descricao: "Celebração da Ceia do Senhor do Mês de Setembro.",
    cartaz: "/img/eventos/ceia.png"
  },
  {
    data: "2025-09-21",
    titulo: "Reunião do Ministério",
    hora: "14h",
    local: "Templo Central",
    congregacao: "Sede",
    descricao: "Reunião Geral de Obreiros - Setembro",
    cartaz: "/img/eventos/reuniao.png"
  },
  {
    data: "2025-09-27",
    titulo: "Congresso Unificado",
    hora: "19h",
    local: "Rio Panacalhau",
    congregacao: "Nova Jerusalém",
    descricao: "Aniversário dos Departamentos e da COngregação.",
    cartaz: "/img/eventos/unificado.png"
  },
    {
    data: "2025-09-28",
    titulo: "Congresso Unificado",
    hora: "19h",
    local: "Rio Panacalhau",
    congregacao: "Nova Jerusalém",
    descricao: "Aniversário dos Departamentos e da COngregação.",
    cartaz: "/img/eventos/unificado.png"
  },
    {
    data: "2025-09-30",
    titulo: "Culto de Arrecadação",
    hora: "19h30",
    local: "Bairro Capim Marinho",
    congregacao: "Cong. Rio de Água Viva",
    descricao: "Culto de Arrecadação em prol da Construção da COngregação.",
    cartaz: "/img/eventos/arrecadacao.png"
  }
];


export default function Agenda() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();
  const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
  const totalDiasMes = new Date(ano, mes + 1, 0).getDate();
  const nomeMesAno = `${nomesDosMeses[mes]} de ${ano}`;

  const dias = [];
  for (let i = 0; i < primeiroDiaSemana; i++) {
    dias.push(null);
  }
  for (let i = 1; i <= totalDiasMes; i++) {
    dias.push(i);
  }

  const mudarMes = (delta) => {
    const novo = new Date(dataAtual);
    novo.setMonth(mes + delta);
    setDataAtual(novo);
  };

  const abrirModal = (dia) => {
    const dataStr = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const evento = eventos.find((ev) => ev.data === dataStr);
    if (evento) setEventoSelecionado(evento);
  };

  return (
    <section className="bg-white rounded-lg shadow p-6 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-8">Agenda da Igreja</h2>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-green-700 hover:text-green-900 font-bold"
            onClick={() => mudarMes(-1)}
          >
            ←
          </button>
          <h3 className="text-lg font-semibold">{nomeMesAno}</h3>
          <button
            className="text-green-700 hover:text-green-900 font-bold"
            onClick={() => mudarMes(1)}
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-sm font-medium text-green-800 mb-2">
          {diasDaSemana.map((dia) => (
            <div key={dia}>{dia}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {dias.map((dia, idx) => {
            if (!dia) return <div key={idx}></div>;
            const dataStr = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
            const temEvento = eventos.some((ev) => ev.data === dataStr);
            return (
              <div
                key={idx}
                className={`p-2 rounded-lg cursor-pointer text-sm font-semibold transition hover:bg-green-100 ${
                  temEvento ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100"
                }`}
                onClick={() => abrirModal(dia)}
              >
                {dia}
              </div>
            );
          })}
        </div>
      </div>

      {eventoSelecionado && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-[90vw] sm:max-w-[600px] text-left">
      <h3 className="text-2xl font-bold mb-3 text-green-800">{eventoSelecionado.titulo}</h3>
      
      <div className="space-y-1 mb-4 text-sm text-gray-700">
        <p><strong>📅 Data:</strong> {eventoSelecionado.data}</p>
        <p><strong>🕖 Horário:</strong> {eventoSelecionado.hora}</p>
        <p><strong>📍 Local:</strong> {eventoSelecionado.local}</p>
        <p><strong>🏠 Congregação:</strong> {eventoSelecionado.congregacao}</p>
        <p><strong>📝 Descrição:</strong> {eventoSelecionado.descricao}</p>
      </div>

      {eventoSelecionado.cartaz && (
  <div className="w-full mt-4">
    <img
      src={eventoSelecionado.cartaz}
      alt="Cartaz do evento"
      className="max-h-[50vh] w-full h-auto object-contain rounded-md mx-auto"
    />
  </div>
)}

      <div className="flex justify-end">
        <button
          onClick={() => setEventoSelecionado(null)}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
}