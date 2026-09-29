import Image from "next/image";

export default function Credibilidade() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* FOTO */}
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 border-l border-b border-[#006f34]" />

            <div className="relative aspect-4/5 overflow-hidden bg-[#EAF1F4]">
              <Image
                src="/maino-giuseppe.webp"
                alt="Jorge Mendonça"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="absolute -right-4 -top-4 h-20 w-20 border-r border-t border-[#147D86]" />
          </div>

          {/* CONTEÚDO */}
          <div>
            <span className="font-(family-name:--font-inter) text-sm  uppercase tracking-[0.18em] text-[#006f34]">
              Sobre o acompanhamento
            </span>

            <h2 className="mt-5 max-w-3xl font-(family-name:--font-manrope) text-4xl  leading-[1.05] tracking-[-0.035em] text-[#102A43] md:text-5xl">
              Acompanhamento pessoal em cada etapa do pedido.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 font-(family-name:--font-inter) text-[17px] leading-8 text-[#435466]">
              <p>
                <strong className=" text-[#102A43]">
                  Sou Jorge Mendonça, Consultor de Crédito Internacional.
                </strong>{" "}
                Acompanho pessoalmente os pedidos de financiamento recebidos
                através deste site, desde a apresentação inicial até ao
                esclarecimento das etapas e das condições que possam ser
                apresentadas pela instituição de crédito.
              </p>

              <p>
                O meu objetivo é proporcionar um acompanhamento próximo e
                transparente, ajudando cada cliente a compreender a documentação
                necessária, o percurso do pedido e as informações que devem ser
                consideradas antes de qualquer decisão.
              </p>

              <p>
                O site recebe pedidos de financiamento a partir de{" "}
                <strong className=" text-[#102A43]">30.000 €</strong>,
                destinados a particulares e empresas, sempre sujeitos à análise,
                critérios e decisão da instituição de crédito responsável pela
                proposta.
              </p>
            </div>

            {/* AVISO */}
            <div className="mt-8 border-l-2 border-[#006f34] bg-[#EAF1F4] px-6 py-5">
              <p className="font-(family-name:--font-inter) text-sm leading-6 text-[#435466]">
                A apresentação de um pedido não representa garantia de
                aprovação, de prazo ou de condições específicas de
                financiamento.
              </p>
            </div>

            {/* PARCERIA */}
            <div className="mt-12 border-t border-[#D8E2E7] pt-10">
              <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#147D86]">
                Parceria institucional
              </span>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-2xl font-bold tracking-[-0.02em] text-[#102A43]">
                Banca Centropadana Credito Cooperativo
              </h3>

              <p className="mt-4 max-w-2xl font-(family-name:--font-inter) text-base leading-7 text-[#435466]">
                Jorge Mendonça acompanha pedidos de financiamento em parceria
                com a Banca Centropadana Credito Cooperativo, de acordo com o
                âmbito da parceria estabelecida.
              </p>

              <p className="mt-3 max-w-2xl font-(family-name:--font-inter) text-sm leading-6 text-[#687887]">
                A instituição responsável pela análise, proposta e decisão do
                financiamento, bem como as condições aplicáveis, serão
                identificadas por escrito antes de qualquer decisão do cliente.
              </p>

              {/* LINKS */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[#102A43] px-5 py-3 font-(family-name:--font-inter) text-sm  text-white transition hover:bg-[#183b59]"
                >
                  Conhecer a instituição
                </a>

                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-[#CBD7DD] px-5 py-3 font-(family-name:--font-inter) text-sm  text-[#102A43] transition hover:border-[#147D86] hover:text-[#147D86]"
                >
                  Consultar registo no Banco de Portugal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
