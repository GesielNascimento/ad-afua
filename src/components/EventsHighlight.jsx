export default function EventsHighlight() {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-green-900">
      <h3 className="text-xl font-bold mb-4">Próximos Eventos</h3>
      <ul className="space-y-4 text-sm">
        <li>
          <strong>📅 27 e 28/09 - Congresso Unificado</strong><br />
          <span className="text-gray-700">Sábado e Domingo, 19h - Cong. Nova Jerusalém</span>
        </li>
        <li>
          <strong>📅 04/10 - Ceia do Senhor | Outubro</strong><br />
          <span className="text-gray-700">Sábado, 19h - Templo Central</span>
        </li>
        <li>
          <strong>📅 12/10 - Dia das Crianças</strong><br />
          <span className="text-gray-700">Domingo, 19h - Templo Central</span>
        </li>
        <li>
          <strong>📅 01/11 - Culto de Ceia | Novembro</strong><br />
          <span className="text-gray-700">Sábado, 19h - Templo Central</span>
        </li>
        <li>
          <strong>📅 21, 22 e 23/11 - Congresso Unificado</strong><br />
          <span className="text-gray-700">Sexta a Domingo, 19h - Templo Central</span>
        </li>
        <li>
          <strong>📅 06/12 - Ceia do Senhor | Dezembro</strong><br />
          <span className="text-gray-700">Sábado, 19h - Templo Central</span>
        </li>
      </ul>
    </div>
  );
}
