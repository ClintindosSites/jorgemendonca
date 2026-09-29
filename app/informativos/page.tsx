import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  FileText,
  Landmark,
  UserRound,
} from "lucide-react";

const categorias = [
  {
    nome: "Crédito pessoal",
    descricao:
      "Informação sobre pedidos de financiamento destinados a necessidades pessoais.",
    icon: UserRound,
  },
  {
    nome: "Crédito empresarial",
    descricao:
      "Conteúdos relacionados com financiamento e necessidades de empresas.",
    icon: Building2,
  },
  {
    nome: "Financiamento",
    descricao:
      "Informação útil para compreender etapas, condições e documentação.",
    icon: Landmark,
  },
  {
    nome: "Documentação",
    descricao:
      "Informação sobre os elementos que podem ser necessários num processo.",
    icon: FileText,
  },
];

const artigos = [
  {
    categoria: "Financiamento",
    data: "Informativo",
    titulo:
      "O que deve considerar antes de apresentar um pedido de financiamento",
    descricao:
      "Conheça alguns dos principais elementos a considerar antes de iniciar um processo de financiamento.",
    destaque: true,
  },
  {
    categoria: "Crédito pessoal",
    data: "Informativo",
    titulo: "Como preparar um pedido de crédito pessoal",
    descricao:
      "Algumas informações que podem ajudar a preparar o primeiro contacto e a apresentar o pedido de forma mais clara.",
    destaque: false,
  },
  {
    categoria: "Documentação",
    data: "Informativo",
    titulo: "Que informações podem ser necessárias num processo de crédito?",
    descricao:
      "Os documentos e elementos necessários podem variar consoante a situação e o financiamento pretendido.",
    destaque: false,
  },
  {
    categoria: "Crédito empresarial",
    data: "Informativo",
    titulo: "Financiamento para empresas: o que deve saber antes de avançar",
    descricao:
      "Uma visão geral sobre a preparação de um pedido de financiamento para uma necessidade empresarial.",
    destaque: false,
  },
];

export default function Informativos() {
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

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#69B578]">
                Informativos
              </span>
            </div>

            <h1 className="font-(family-name:--font-manrope) text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Informação para
              <br />
              <span className="text-[#69B578]">
                compreender melhor o crédito.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl font-(family-name:--font-inter) text-lg leading-8 text-white/70 md:text-xl">
              Conteúdos e informação útil sobre financiamento, crédito,
              documentação e os diferentes momentos de um processo.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESTAQUE
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                  Em destaque
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold tracking-[-0.03em] text-[#102A43] md:text-5xl">
                Conteúdos em destaque
              </h2>
            </div>
          </div>

          <article className="grid overflow-hidden border border-[#D9E1E5] lg:grid-cols-[1.1fr_0.9fr]">
            {/* ÁREA VISUAL */}

            <div className="relative min-h-90 overflow-hidden bg-[#102A43] lg:min-h-105">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,#102A43_0%,#163C5B_55%,#006f34_100%)]"
              />

              <div className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-[#69B578]">
                <BookOpen size={21} strokeWidth={1.5} />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#69B578]">
                  Financiamento
                </p>

                <p className="mt-3 max-w-md font-(family-name:--font-manrope) text-2xl font-semibold leading-tight text-white">
                  Informação clara antes de tomar uma decisão.
                </p>
              </div>
            </div>

            {/* TEXTO */}

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#006f34]">
                  {artigos[0].categoria}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#B8C2C8]" />

                <span className="font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
                  {artigos[0].data}
                </span>
              </div>

              <h3 className="mt-5 font-(family-name:--font-manrope) text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#102A43]">
                {artigos[0].titulo}
              </h3>

              <p className="mt-5 font-(family-name:--font-inter) text-base leading-7 text-[#71808A]">
                {artigos[0].descricao}
              </p>

              <div className="mt-8">
                <Link
                  href="/informativos/antes-de-apresentar-um-pedido"
                  className="inline-flex items-center gap-3 font-(family-name:--font-inter) text-sm font-semibold text-[#147D86] transition-colors hover:text-[#106A72]"
                >
                  Ler informativo
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          CATEGORIAS
      ====================================================== */}

      <section className="border-y border-[#E2E8EB] bg-[#F7F9FA] px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                Áreas de informação
              </span>
            </div>

            <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold tracking-[-0.03em] text-[#102A43] md:text-5xl">
              Encontre informação sobre o que procura.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#D9E1E5] bg-[#D9E1E5] md:grid-cols-2 lg:grid-cols-4">
            {categorias.map(categoria => {
              const Icon = categoria.icon;

              return (
                <div
                  key={categoria.nome}
                  className="bg-white p-7 transition-colors hover:bg-[#FCFDFC] lg:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[#102A43] text-[#69B578]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 font-(family-name:--font-manrope) text-lg font-semibold text-[#102A43]">
                    {categoria.nome}
                  </h3>

                  <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                    {categoria.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LISTA DE ARTIGOS
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                  Todos os informativos
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold tracking-[-0.03em] text-[#102A43] md:text-5xl">
                Informação útil
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {artigos.slice(1).map((artigo, index) => (
              <article
                key={artigo.titulo}
                className="group border border-[#D9E1E5] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(16,42,67,0.08)] lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#006f34]">
                    {artigo.categoria}
                  </span>

                  <span className="font-(family-name:--font-manrope) text-3xl font-semibold text-[#E8EEF0]">
                    0{index + 2}
                  </span>
                </div>

                <h3 className="mt-8 font-(family-name:--font-manrope) text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#102A43]">
                  {artigo.titulo}
                </h3>

                <p className="mt-4 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                  {artigo.descricao}
                </p>

                <div className="mt-7 border-t border-[#E2E8EB] pt-6">
                  <Link
                    href={`/informativos/${index === 0 ? "credito-pessoal" : index === 1 ? "documentacao" : "credito-empresarial"}`}
                    className="inline-flex items-center gap-2 font-(family-name:--font-inter) text-sm font-semibold text-[#147D86] transition-colors group-hover:text-[#106A72]"
                  >
                    Ler informativo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOTA EDITORIAL
      ====================================================== */}

      <section className="bg-[#102A43] px-6 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
            <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5 text-[#69B578]">
              <BookOpen size={20} strokeWidth={1.5} />
            </div>

            <div>
              <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.15em] text-[#69B578]">
                Nota informativa
              </p>

              <p className="mt-3 font-(family-name:--font-inter) text-sm leading-7 text-white/65">
                Os conteúdos disponibilizados nesta área têm caráter
                exclusivamente informativo e destinam-se a ajudar a compreender
                melhor os processos relacionados com financiamento. A informação
                apresentada não constitui uma garantia de aprovação nem
                substitui a análise e decisão da instituição de crédito.
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
              Tem uma necessidade de financiamento?
            </h2>

            <p className="mt-5 font-(family-name:--font-inter) text-base leading-7 text-[#667783]">
              Apresente algumas informações iniciais e entraremos em contacto
              para esclarecer as próximas etapas.
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
