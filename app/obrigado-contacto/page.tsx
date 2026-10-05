import Link from "next/link";
const phone = "553135828296";
const message = encodeURIComponent(
  "Olá, gostaria de fazer uma solicitação de crédito."
);
const link = `https://wa.me/${phone}?text=${message}`;
export default function ObrigadoContacto() {
  return (
    <main className="bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/images/hero-04.webp')] bg-cover bg-center  min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <div className="w-20 h-20 bg-[#006f34] text-[#fefefe] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">JM</span>
        </div>

        <h1 className="uppercase text-4xl font-bold text-[#1A2B4C] mb-6">
          Obrigado pelo seu contacto!
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Recebemos o seu formulário com sucesso.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 text-left">
          <p className="text-gray-700 mb-4">
            <strong>
              Obrigado por entrar em contacto com o BCC Centro Padana.
            </strong>
          </p>

          <p className="text-gray-700 mb-4">
            A nossa equipa de atendimento em português analisará a sua
            solicitação e entrará em contacto consigo em breve.
          </p>

          <p className="text-gray-700 mb-4">
            Para qualquer esclarecimento adicional, estamos disponíveis através
            do e-mail:
          </p>

          <p className="font-semibold text-[#006f34] break-all">
            bcc.comunicazione@centropadanabcc.it
          </p>

          <p className="text-gray-700 mt-4">Será um prazer atendê-lo.</p>
          <div className="flex gap-4 mt-8">
            <Link
              className="bg-[#006f34] hover:bg-[#006d34] text-white font-semibold px-8 py-4 rounded-lg transition cursor-pointer"
              href={link}
              target="_blank"
            >
              Falar com um consultor
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#006c34] text-white px-8 py-4 rounded-lg hover:opacity-90 transition"
        >
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}
