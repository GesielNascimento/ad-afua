export default function OndeEstamos() {
  return (
    <main className="max-w-5xl mx-auto pt-32 px-4 pb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
        Como chegar até a Igreja do Avivamento
      </h1>

      <div className="rounded-lg shadow-md overflow-hidden mb-8">
        <iframe
          title="Localização Igreja do Avivamento"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9616329628044!2d-50.38726792505058!3d-0.1538576354785589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9293f9dd1f8fc61b%3A0x34d7600fc2b5b3d7!2sPra%C3%A7a%20da%20B%C3%ADblia%2C%20Afu%C3%A1%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1718654978639!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-gray-800 space-y-4">
        <p>
          <strong>Endereço:</strong> Praça da Bíblia, Bairro Capim Marinho – Afuá/PA
        </p>
        <p>
          <strong>Dias de Cultos:</strong> Terças, Quintas, Sábados e Domingos às 19h
        </p>
        <p>
          <strong>WhatsApp:</strong> (96) 99207-8175
        </p>
        <p>
          <strong>Google Maps:</strong>{" "}
          <a
            href="https://maps.google.com?q=Praça da Bíblia Afuá PA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 underline"
          >
            Abrir no Google Maps
          </a>
        </p>
      </div>
    </main>
  );
}
