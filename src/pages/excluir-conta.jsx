// pages/excluir-conta.jsx
export default function ExcluirConta() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Solicitação de Exclusão de Conta</h1>
        <p className="mb-4">
          Caso você deseje excluir sua conta e seus dados do aplicativo <strong>AD Afuá</strong>, envie um e-mail para:
        </p>
        <p className="text-lg font-semibold text-blue-700 mb-6">
          contato@ad-afua.com
        </p>
        <p className="mb-2">
          No e-mail, informe:
        </p>
        <ul className="list-disc list-inside text-left max-w-md mx-auto mb-8">
          <li>Seu nome completo</li>
          <li>O e-mail utilizado no cadastro</li>
        </ul>
        <p>
          Após a verificação, sua conta será excluída em até <strong>7 dias úteis</strong>.
        </p>
      </div>
    </div>
  );
}
