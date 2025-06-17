export default function EventsHighlight() {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-green-900">
      <h3 className="text-xl font-bold mb-4">Próximos Eventos</h3>
      <ul className="space-y-4 text-sm">
        <li>
          <strong>📅 23/06 - Culto de Celebração</strong><br />
          <span className="text-gray-700">Domingo, 19h - Templo Central</span>
        </li>
        <li>
          <strong>🌙 28/06 - Vigília de Avivamento</strong><br />
          <span className="text-gray-700">Sexta, 22h - Cong. Monte Sião</span>
        </li>
        <li>
          <strong>🎉 04/07 - Encontro de Jovens</strong><br />
          <span className="text-gray-700">Quinta, 20h - Templo Central</span>
        </li>
        <li>
          <strong>📅 20/06 - Culto de Ceia</strong><br />
          <span className="text-gray-700">Domingo, 08h - Templo Central</span>
        </li>
        <li>
          <strong>🌙 27/06 - Sabadou Jovem</strong><br />
          <span className="text-gray-700">Sábado, 20h - Cong. Filadélfia</span>
        </li>
        <li>
          <strong>🎉 29/07 - Congresso de Jovens</strong><br />
          <span className="text-gray-700">Ginásio, 19h - Cidade Tal</span>
        </li>
      </ul>
    </div>
  );
}
