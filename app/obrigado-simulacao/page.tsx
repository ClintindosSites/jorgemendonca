import Link from "next/link";

export default function ObrigadoSimulacao() {
  return (
    <main className="bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/images/hero-04.webp')] bg-cover bg-center  min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <div className="w-20 h-20 bg-[#006f34] text-[#fefefe] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">JM</span>
        </div>

        <h1 className="uppercase text-4xl font-bold text-[#1A2B4C] mb-6">
          Simulação Enviada com Sucesso!
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Recebemos o seu pedido de simulação.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 text-left">
          <p className="text-[#1a2b4c] font-bold text-xl mb-4">
            Obrigado pelo seu contacto!
          </p>

          <p className="text-gray-700 mb-4">
            O <strong>BCC Centro Padana</strong> agradece a sua mensagem.
          </p>

          <p className="text-gray-700 mb-4">
            Um dos nossos consultores de atendimento em português entrará em
            contacto consigo em breve para analisar a sua solicitação e
            apresentar as melhores soluções de crédito disponíveis.
          </p>

          <p className="text-gray-700 mb-4">
            Caso pretenda enviar informações adicionais ou esclarecer alguma
            questão, contacte-nos através do e-mail:
          </p>

          <p className="font-semibold text-[#006f34] break-all">
            bcc.comunicazione@centropadanabcc.it
          </p>

          <p className="text-gray-700 mt-4 font-medium">
            Obrigado pela confiança depositada no BCC Centro Padana.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              className="bg-[#006f34]  text-white font-semibold px-8 py-4 rounded-lg transition cursor-pointer"
              href="https://wa.me/553135828296"
              target="_blank"
            >
              Falar com um consultor
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#006f34] text-white px-8 py-4 rounded-lg hover:opacity-90 transition"
        >
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}
