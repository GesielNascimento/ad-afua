export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Coluna 1 */}
        <div>
          <h3 className="text-lg font-bold mb-3">Igreja do Avivamento</h3>
          <p className="mb-4">
            Uma igreja comprometida com a palavra de Deus e a transformação de vidas através do amor de Cristo.
          </p>
          <div className="flex gap-3 text-2xl">
            <a href="#" className="hover:text-gray-300">📘</a>
            <a href="#" className="hover:text-gray-300">📷</a>
            <a href="#" className="hover:text-gray-300">🎥</a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contato</h3>
          <p>📍 Av. Cora de Carvalho, nº 1648<br />Centro - Macapá/AP</p>
          <p className="mt-2">📞 (96) 0000-0000</p>
          <p>✉️ contato@igrejaavivamento.com.br</p>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-lg font-bold mb-3">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Sobre Nós</a></li>
            <li><a href="#" className="hover:underline">Ministérios</a></li>
            <li><a href="#" className="hover:underline">Eventos</a></li>
            <li><a href="#" className="hover:underline">Congregações</a></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div>
          <h3 className="text-lg font-bold mb-3">Horários</h3>
          <p><strong>Domingos:</strong> 09h e 19h</p>
          <p><strong>Quartas:</strong> 19h30</p>
          <p><strong>Sextas:</strong> 19h30</p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/90">
        © 2025 Igreja do Avivamento. Todos os direitos reservados.
      </div>
    </footer>
  );
}
