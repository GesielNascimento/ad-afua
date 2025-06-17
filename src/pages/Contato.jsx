export default function Contato() {
  return (
    <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
        Fale Conosco
      </h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">📞 Telefone</h2>
          <p>(96) 99123-4567</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">📧 E-mail</h2>
          <p>contato@igrejaavivamento.com</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">📍 Endereço</h2>
          <p>Rua Central, nº 100 - Bairro Capim Marinho, Afuá - PA</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">🌐 Redes Sociais</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.facebook.com/adafua.940"
                className="text-blue-600 hover:underline"
                target="_blank" rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/adafua_oficial/"
                className="text-pink-600 hover:underline"
                target="_blank" rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=zXCtvypnIB4"
                className="text-red-600 hover:underline"
                target="_blank" rel="noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
