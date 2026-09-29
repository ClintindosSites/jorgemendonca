import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function ComoFunciona() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#102A43] px-6 py-24 text-white lg:py-32">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/3 bg-[#006f34]/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#69B578]" />

              <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#69B578]">
                Como funciona
              </span>
            </div>

            <h1 className="font-(family-name:--font-manrope) text-5xl  leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Um processo claro,
              <br />
              <span className="text-[#69B578]">
                do primeiro contacto à decisão.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl font-(family-name:--font-inter) text-lg leading-8 text-white/70 md:text-xl">
              Apresente o seu pedido, partilhe as informações necessárias e
              acompanhe as diferentes etapas com contacto e esclarecimento ao
              longo do processo.
            </p>

            <div className="mt-10">
              <Link
                href="/apresentar-pedido"
                className="inline-flex items-center gap-3 bg-[#147D86] px-7 py-4 font-(family-name:--font-inter) text-sm  text-white transition-colors hover:bg-[#106A72]"
              >
                Apresentar pedido
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUÇÃO
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#006f34]">
                  O processo
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl  leading-tight tracking-[-0.03em] text-[#102A43] md:text-5xl">
                Três etapas para tornar o processo mais simples.
              </h2>
            </div>

            <div>
              <p className="font-(family-name:--font-inter) text-lg leading-8 text-[#667783]">
                Cada pedido começa com a recolha das informações necessárias
                para compreender a situação apresentada. A partir daí,
                acompanhamos o processo, esclarecemos as questões relevantes e
                apresentamos as condições que possam ser disponibilizadas.
              </p>

              <p className="mt-6 font-(family-name:--font-inter) text-base leading-7 text-[#71808A]">
                O processo e as condições dependem da análise da instituição de
                crédito responsável pelo financiamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ETAPAS
      ====================================================== */}

      <section className="border-y border-[#E2E8EB] bg-[#F7F9FA] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden border border-[#D9E1E5] bg-[#D9E1E5] lg:grid-cols-3">
            {/* ETAPA 01 */}

            <div className="relative bg-white p-8 lg:p-10">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-[#102A43] text-[#69B578]">
                  <Send size={20} strokeWidth={1.5} />
                </div>

                <span className="font-(family-name:--font-manrope) text-5xl  text-[#E8EEF0]">
                  01
                </span>
              </div>

              <p className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.14em] text-[#006f34]">
                Primeiro passo
              </p>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-2xl  text-[#102A43]">
                Apresente o seu pedido
              </h3>

              <p className="mt-5 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                Partilhe algumas informações sobre o financiamento que procura,
                incluindo a finalidade e o valor pretendido.
              </p>

              <div className="mt-8 border-t border-[#E2E8EB] pt-6">
                <p className="flex items-start gap-3 font-(family-name:--font-inter) text-sm leading-6 text-[#667783]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#147D86]" />
                  Informação inicial sobre o pedido
                </p>

                <p className="mt-3 flex items-start gap-3 font-(family-name:--font-inter) text-sm leading-6 text-[#667783]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#147D86]" />
                  Finalidade do financiamento
                </p>
              </div>
            </div>

            {/* ETAPA 02 */}

            <div className="relative bg-white p-8 lg:p-10">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-[#102A43] text-[#69B578]">
                  <MessageCircle size={20} strokeWidth={1.5} />
                </div>

                <span className="font-(family-name:--font-manrope) text-5xl  text-[#E8EEF0]">
                  02
                </span>
              </div>

              <p className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.14em] text-[#006f34]">
                Segundo passo
              </p>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-2xl  text-[#102A43]">
                Contacto e esclarecimento
              </h3>

              <p className="mt-5 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                Depois de recebermos o pedido, entramos em contacto para
                esclarecer as informações necessárias e perceber melhor a
                situação apresentada.
              </p>

              <div className="mt-8 border-t border-[#E2E8EB] pt-6">
                <p className="flex items-start gap-3 font-(family-name:--font-inter) text-sm leading-6 text-[#667783]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#147D86]" />
                  Esclarecimento das informações
                </p>

                <p className="mt-3 flex items-start gap-3 font-(family-name:--font-inter) text-sm leading-6 text-[#667783]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#147D86]" />
                  Acompanhamento do processo
                </p>
              </div>
            </div>

            {/* ETAPA 03 */}

            <div className="relative bg-white p-8 lg:p-10">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-[#102A43] text-[#69B578]">
                  <FileText size={20} strokeWidth={1.5} />
                </div>

                <span className="font-(family-name:--font-manrope) text-5xl  text-[#E8EEF0]">
                  03
                </span>
              </div>

              <p className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.14em] text-[#006f34]">
                Terceiro passo
              </p>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-2xl  text-[#102A43]">
                Condições e decisão
              </h3>

              <p className="mt-5 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                Quando aplicável, são apresentadas as condições disponibilizadas
                para o pedido. A decisão final pertence à instituição de
                crédito.
              </p>

              <div className="mt-8 border-t border-[#E2E8EB] pt-6">
                <p className="flex items-start gap-3 font-(family-name:--font-inter) text-sm leading-6 text-[#667783]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#147D86]" />
                  Apresentação das condições aplicáveis
                </p>

                <p className="mt-3 flex items-start gap-3 font-(family-name:--font-inter) text-sm leading-6 text-[#667783]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#147D86]" />
                  Decisão pela instituição de crédito
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          O QUE PRECISAMOS
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#006f34]">
                  Informação inicial
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl  leading-tight tracking-[-0.03em] text-[#102A43] md:text-5xl">
                O que precisamos para começar?
              </h2>

              <p className="mt-6 font-(family-name:--font-inter) text-base leading-7 text-[#667783]">
                O primeiro contacto serve para compreender o pedido e perceber
                quais as informações necessárias para dar seguimento ao
                processo.
              </p>
            </div>

            <div className="border border-[#D9E1E5] bg-[#F7F9FA] p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#102A43] text-[#69B578]">
                    <FileText size={17} />
                  </div>

                  <div>
                    <h3 className="font-(family-name:--font-manrope) text-base  text-[#102A43]">
                      Dados do pedido
                    </h3>

                    <p className="mt-1 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                      Valor pretendido e finalidade do financiamento.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#D9E1E5]" />

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#102A43] text-[#69B578]">
                    <MessageCircle size={17} />
                  </div>

                  <div>
                    <h3 className="font-(family-name:--font-manrope) text-base  text-[#102A43]">
                      Contacto
                    </h3>

                    <p className="mt-1 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                      Um contacto para podermos esclarecer o pedido e as etapas
                      seguintes.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#D9E1E5]" />

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#102A43] text-[#69B578]">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <h3 className="font-(family-name:--font-manrope) text-base  text-[#102A43]">
                      Informação complementar
                    </h3>

                    <p className="mt-1 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                      Poderão ser solicitados outros elementos ao longo do
                      processo, conforme a situação apresentada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DECISÃO
      ====================================================== */}

      <section className="bg-[#102A43] px-6 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#69B578]" />

            <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#69B578]">
              Importante
            </span>

            <span aria-hidden="true" className="h-px w-10 bg-[#69B578]" />
          </div>

          <h2 className="font-(family-name:--font-manrope) text-3xl  tracking-[-0.03em] md:text-4xl">
            O acompanhamento não substitui a decisão de crédito.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-(family-name:--font-inter) text-base leading-7 text-white/65">
            A apresentação de um pedido e o acompanhamento do processo não
            representam uma garantia de aprovação, de prazo de resposta ou de
            condições específicas. A análise e a decisão pertencem à instituição
            de crédito responsável pelo processo.
          </p>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-[#F7F9FA] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#006f34]">
                Perguntas frequentes
              </span>

              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />
            </div>

            <h2 className="font-(family-name:--font-manrope) text-4xl  tracking-[-0.03em] text-[#102A43] md:text-5xl">
              Antes de apresentar o pedido
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#D9E1E5] border-y border-[#D9E1E5]">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-(family-name:--font-manrope) text-lg  text-[#102A43]">
                Quanto tempo demora o processo?
                <span className="text-2xl font-normal text-[#147D86] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                O tempo necessário depende da situação apresentada, das
                informações e documentação necessárias e da análise da
                instituição de crédito. Por isso, não é indicado um prazo fixo.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-(family-name:--font-manrope) text-lg  text-[#102A43]">
                O pedido garante aprovação?
                <span className="text-2xl font-normal text-[#147D86] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                Não. A apresentação de um pedido não garante aprovação. A
                decisão final pertence à instituição de crédito, após a análise
                da situação e dos critérios aplicáveis.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-(family-name:--font-manrope) text-lg  text-[#102A43]">
                Que documentos são necessários?
                <span className="text-2xl font-normal text-[#147D86] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                Os elementos necessários podem variar consoante o pedido e a
                situação apresentada. Após o primeiro contacto, serão
                esclarecidas as informações e documentação que possam ser
                necessárias.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-(family-name:--font-manrope) text-lg  text-[#102A43]">
                Posso apresentar um pedido online?
                <span className="text-2xl font-normal text-[#147D86] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                Sim. Pode utilizar o formulário de apresentação de pedido para
                partilhar as informações iniciais. Depois, entraremos em
                contacto para esclarecer os próximos passos.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl border border-[#D9E1E5] bg-[#F7F9FA] px-7 py-12 text-center sm:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#006f34]">
              Próximo passo
            </span>

            <h2 className="mt-4 font-(family-name:--font-manrope) text-3xl  tracking-[-0.03em] text-[#102A43] md:text-4xl">
              Está pronto para apresentar o seu pedido?
            </h2>

            <p className="mt-5 font-(family-name:--font-inter) text-base leading-7 text-[#667783]">
              Partilhe algumas informações iniciais e entraremos em contacto
              para esclarecer as próximas etapas.
            </p>

            <div className="mt-8">
              <Link
                href="/apresentar-pedido"
                className="inline-flex items-center gap-3 bg-[#147D86] px-7 py-4 font-(family-name:--font-inter) text-sm  text-white transition-colors hover:bg-[#106A72]"
              >
                Apresentar pedido
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
