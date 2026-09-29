import Image from "next/image";
import { ArrowRight, Check, Heart, Target, Users } from "lucide-react";
import Link from "next/link";

export default function NossaHistoria() {
  return (
    <>
      {/* =====================================================
          QUEM É JORGE MENDONÇA
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* IMAGEM */}

          <div className="relative">
            <div className="relative h-115 w-full overflow-hidden bg-[#E8EEF0] sm:h-135">
              <Image
                src="/maino-giuseppe.webp"
                alt="Jorge Mendonça"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Elemento decorativo */}

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-[#006f34]"
            />
          </div>

          {/* TEXTO */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                Quem somos
              </span>
            </div>

            <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#006f34] md:text-5xl">
              Jorge Mendonça
            </h2>

            <div className="mt-8 space-y-6 font-(family-name:--font-inter) text-base leading-7 text-[#667783]">
              <p>
                Jorge Mendonça desenvolve a sua atividade na área da
                intermediação e acompanhamento de pedidos de financiamento,
                dirigindo o seu trabalho a particulares e empresas.
              </p>

              <p>
                A sua atuação assenta numa abordagem próxima e personalizada,
                procurando compreender as características de cada pedido antes
                de apresentar as etapas seguintes do processo.
              </p>

              <p>
                O objetivo é tornar o percurso mais claro para o cliente, desde
                a apresentação das informações iniciais até ao contacto e
                esclarecimento das condições aplicáveis ao pedido.
              </p>
            </div>

            {/* Destaques */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-[#006f34] bg-[#F7F9FA] p-5">
                <h3 className="font-(family-name:--font-manrope) text-base font-semibold text-[#102A43]">
                  Acompanhamento pessoal
                </h3>

                <p className="mt-2 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Contacto próximo e acompanhamento ao longo das diferentes
                  etapas do pedido.
                </p>
              </div>

              <div className="border-l-2 border-[#006f34] bg-[#F7F9FA] p-5">
                <h3 className="font-(family-name:--font-manrope) text-base font-semibold text-[#102A43]">
                  Informação clara
                </h3>

                <p className="mt-2 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Explicação das informações, condições e etapas relevantes para
                  cada processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          O QUE FAZEMOS
      ====================================================== */}

      <section className="border-y border-[#E2E8EB] bg-[#F7F9FA] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                Atividade
              </span>
            </div>

            <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#102A43] md:text-5xl">
              O que fazemos
            </h2>

            <p className="mt-6 font-(family-name:--font-inter) text-lg leading-8 text-[#667783]">
              Acompanhamos pedidos de financiamento e ajudamos a estruturar a
              informação necessária para que o processo possa ser devidamente
              analisado.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#D9E1E5] bg-[#D9E1E5] md:grid-cols-3">
            {/* ITEM 01 */}

            <div className="bg-white p-8 lg:p-10">
              <div className="mb-8 flex h-11 w-11 items-center justify-center bg-[#102A43] text-[#006f34]">
                <Target size={21} strokeWidth={1.5} />
              </div>

              <span className="font-(family-name:--font-inter) text-xs font-semibold tracking-[0.12em] text-[#9AA7AE]">
                01
              </span>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-xl font-semibold text-[#102A43]">
                Compreender o pedido
              </h3>

              <p className="mt-4 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                Recolha das informações iniciais necessárias para compreender a
                finalidade e as características do financiamento pretendido.
              </p>
            </div>

            {/* ITEM 02 */}

            <div className="bg-white p-8 lg:p-10">
              <div className="mb-8 flex h-11 w-11 items-center justify-center bg-[#102A43] text-[#006f34]">
                <Users size={21} strokeWidth={1.5} />
              </div>

              <span className="font-(family-name:--font-inter) text-xs font-semibold tracking-[0.12em] text-[#9AA7AE]">
                02
              </span>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-xl font-semibold text-[#102A43]">
                Acompanhar o processo
              </h3>

              <p className="mt-4 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                Contacto e esclarecimento das informações e das etapas que
                possam ser necessárias ao longo do processo.
              </p>
            </div>

            {/* ITEM 03 */}

            <div className="bg-white p-8 lg:p-10">
              <div className="mb-8 flex h-11 w-11 items-center justify-center bg-[#102A43] text-[#006f34]">
                <Heart size={21} strokeWidth={1.5} />
              </div>

              <span className="font-(family-name:--font-inter) text-xs font-semibold tracking-[0.12em] text-[#9AA7AE]">
                03
              </span>

              <h3 className="mt-3 font-(family-name:--font-manrope) text-xl font-semibold text-[#102A43]">
                Esclarecer as condições
              </h3>

              <p className="mt-4 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                Apresentação das condições aplicáveis ao pedido para que o
                cliente possa conhecer a informação relevante antes de qualquer
                decisão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCÍPIOS DE ATUAÇÃO
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                  Princípios
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#102A43] md:text-5xl">
                Uma forma de trabalhar baseada na proximidade.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E1E5] text-[#147D86]">
                  <Check size={18} strokeWidth={1.8} />
                </div>

                <h3 className="font-(family-name:--font-manrope) text-lg font-semibold text-[#102A43]">
                  Transparência
                </h3>

                <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Informação clara sobre o processo, as condições apresentadas e
                  os elementos relevantes para o pedido.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E1E5] text-[#147D86]">
                  <Check size={18} strokeWidth={1.8} />
                </div>

                <h3 className="font-(family-name:--font-manrope) text-lg font-semibold text-[#102A43]">
                  Proximidade
                </h3>

                <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Acompanhamento pessoal e contacto direto durante as diferentes
                  fases do processo.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E1E5] text-[#147D86]">
                  <Check size={18} strokeWidth={1.8} />
                </div>

                <h3 className="font-(family-name:--font-manrope) text-lg font-semibold text-[#102A43]">
                  Rigor
                </h3>

                <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Atenção à informação disponibilizada e aos elementos
                  necessários para a análise do pedido.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E1E5] text-[#147D86]">
                  <Check size={18} strokeWidth={1.8} />
                </div>

                <h3 className="font-(family-name:--font-manrope) text-lg font-semibold text-[#102A43]">
                  Responsabilidade
                </h3>

                <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  O acompanhamento do pedido não substitui a análise e decisão
                  da instituição de crédito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENQUADRAMENTO INSTITUCIONAL
      ====================================================== */}

      <section className="bg-[#102A43] px-6 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            {/* LADO ESQUERDO */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#69B578]">
                  Enquadramento institucional
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                Uma atividade enquadrada numa relação institucional.
              </h2>

              <p className="mt-6 max-w-xl font-(family-name:--font-inter) text-base leading-7 text-white/70">
                Jorge Mendonça desenvolve a sua atividade como consultor
                autorizado da Banca Centropadana Credito Cooperativo, no âmbito
                do enquadramento aplicável à atividade de
                consultoria/intermediação de crédito.
              </p>
            </div>

            {/* LADO DIREITO */}

            <div>
              <div className="border border-white/15 bg-white/[0.04] p-8 lg:p-10">
                {/* IDENTIDADE INSTITUCIONAL */}

                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-white/15 bg-white">
                    <span className="font-(family-name:--font-manrope) text-2xl font-bold tracking-[-0.05em] text-[#006f34]">
                      BCC
                    </span>
                  </div>

                  <div>
                    <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#69B578]">
                      Instituição
                    </p>

                    <h3 className="mt-1 font-(family-name:--font-manrope) text-xl font-semibold">
                      Banca Centropadana
                    </h3>

                    <p className="mt-1 font-(family-name:--font-inter) text-sm text-white/60">
                      Credito Cooperativo
                    </p>
                  </div>
                </div>

                {/* GRUPO */}

                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                    Grupo
                  </p>

                  <p className="mt-2 font-(family-name:--font-manrope) text-lg font-medium text-white">
                    Gruppo BCC Iccrea
                  </p>

                  <p className="mt-2 font-(family-name:--font-inter) text-sm leading-6 text-white/60">
                    Informação institucional e enquadramento da entidade através
                    dos canais oficiais do Grupo.
                  </p>
                </div>

                {/* LINKS */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.gruppobcciccrea.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-3 font-(family-name:--font-inter) text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#102A43]"
                  >
                    Grupo BCC Iccrea
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="https://www.bancacentropadana.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#006f34] px-5 py-3 font-(family-name:--font-inter) text-sm font-semibold text-[#69B578] transition-colors hover:bg-[#006f34] hover:text-white"
                  >
                    Banca Centropadana
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NOTA DE RESPONSABILIDADE */}

          <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
            <div>
              <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Importante
              </p>

              <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-white/60">
                A apresentação de um pedido não representa uma garantia de
                aprovação, de prazo de resposta ou de condições específicas de
                financiamento.
              </p>
            </div>

            <div>
              <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Decisão de crédito
              </p>

              <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-white/60">
                A análise e a decisão relativamente ao financiamento pertencem à
                instituição de crédito responsável pelo processo, de acordo com
                os critérios e condições aplicáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl border border-[#D9E1E5] bg-[#F7F9FA] px-7 py-12 text-center sm:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
              Próximo passo
            </span>

            <h2 className="mt-4 font-(family-name:--font-manrope) text-3xl font-semibold tracking-[-0.03em] text-[#102A43] md:text-4xl">
              Pretende apresentar um pedido?
            </h2>

            <p className="mt-5 font-(family-name:--font-inter) text-base leading-7 text-[#667783]">
              Partilhe algumas informações iniciais sobre o financiamento que
              procura e entraremos em contacto para esclarecer as próximas
              etapas.
            </p>

            <div className="mt-8">
              <Link
                href="/apresentar-pedido"
                className="inline-flex items-center gap-3 bg-[#147D86] px-7 py-4 font-(family-name:--font-inter) text-sm font-semibold text-white transition-colors hover:bg-[#106A72]"
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
