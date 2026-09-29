import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Apresentar pedido",
    text: "Preencha o pedido com os dados necessários, indicando o valor de financiamento pretendido, a finalidade e os seus contactos.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Contacto e esclarecimento",
    text: "Após o envio, é feito o contacto para compreender o pedido, esclarecer dúvidas e explicar as informações e documentação necessárias.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Condições por escrito e decisão",
    text: "As condições aplicáveis são apresentadas por escrito. A instituição de crédito responsável analisa o pedido e toma a decisão de acordo com os seus critérios.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-[#EAF1F4] py-24 sm:py-28"
    >
      {/* Elemento decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#006f34]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#147D86]/10"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#006f34]" />

            <span className="text-sm  uppercase tracking-[0.18em] text-[#006f34]">
              Como funciona
            </span>
          </div>

          <h2 className="font-(--font-heading) text-4xl  leading-[1.08] tracking-[-0.03em] text-[#102A43] sm:text-5xl lg:text-6xl">
            Um processo claro,
            <br />
            acompanhado passo a passo.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526778]">
            Desde a apresentação do pedido até à decisão da instituição, cada
            etapa é explicada de forma simples e transparente.
          </p>
        </div>

        {/* Linha dos passos */}
        <div className="relative mt-16 lg:mt-20">
          {/* Linha horizontal desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-[#C9D5DB] lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map(step => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-[#D6E0E5] bg-white p-8 shadow-[0_12px_40px_rgba(16,42,67,0.05)] transition-transform duration-300 hover:-translate-y-1 sm:p-9"
                >
                  {/* Número / ícone */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <span className="font-(--font-heading) text-sm  tracking-[0.16em] text-[#006f34]">
                      {step.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D6E0E5] bg-white">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#147D86]"
                      />
                    </div>
                  </div>

                  <h3 className="font-(--font-heading) text-2xl  tracking-[-0.02em] text-[#102A43]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#526778]">
                    {step.text}
                  </p>

                  {/* Pequeno detalhe visual */}
                  <div className="mt-8 h-px w-12 bg-[#006f34]" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Nota de transparência */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#CBD8DE] bg-[#102A43] p-6 sm:flex-row sm:items-start sm:p-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
            <ShieldCheck
              size={22}
              strokeWidth={1.7}
              className="text-[#006f34]"
            />
          </div>

          <div>
            <p className="font-(--font-heading) text-base  text-white">
              Informação importante
            </p>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-white/70">
              A apresentação de um pedido não garante aprovação, prazo de
              resposta ou condições específicas de financiamento. A decisão
              pertence à instituição de crédito responsável pela análise.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#CBD8DE] pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-(--font-heading) text-lg  text-[#102A43]">
              Pretende apresentar um pedido?
            </p>

            <p className="mt-1 text-sm text-[#526778]">
              Os pedidos recebidos através deste site começam nos 30.000 €.
            </p>
          </div>

          <a
            href="/apresentar-pedido"
            className="group inline-flex items-center gap-3 rounded-full bg-[#147D86] px-6 py-3.5 text-sm  text-white transition-colors hover:bg-[#0F6971]"
          >
            Apresentar pedido
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
