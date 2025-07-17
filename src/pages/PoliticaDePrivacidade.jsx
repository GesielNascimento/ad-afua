export default function PoliticaDePrivacidade() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-12 text-justify">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Política de Privacidade
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        O aplicativo <strong>AD Afuá</strong> foi desenvolvido com o objetivo de oferecer aos membros e frequentadores da igreja uma ferramenta segura, funcional e útil para acessar conteúdos, se inscrever em eventos, acompanhar a agenda e interagir com a comunidade cristã local.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Para isso, coletamos apenas informações essenciais como nome, e-mail, telefone, data de nascimento e dados sobre sua trajetória cristã. Esses dados são usados exclusivamente para fins internos da igreja, como organização de eventos, envio de notificações e gestão de perfis.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        As informações são armazenadas de forma segura por meio da plataforma <strong>Supabase</strong>, respeitando as melhores práticas de segurança da informação. Nenhum dado é vendido, divulgado ou compartilhado com terceiros.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        O acesso a essas informações é restrito a administradores autorizados. Os usuários têm o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Ao utilizar nosso aplicativo, você declara estar de acordo com esta Política de Privacidade.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Para dúvidas ou solicitações, entre em contato com o responsável pelo app através do e-mail:{' '}
        <a
          href="mailto:gesielnascimento@exemplo.com"
          className="text-green-700 underline"
        >
          dev.gesiel@gmail.com
        </a>
      </p>

      <p className="text-sm text-gray-500 mt-8 text-center">
        Última atualização: 17 de julho de 2025
      </p>
    </main>
  );
}
