import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  FileText,
  Landmark,
  UserRound,
} from "lucide-react";

import { informativos } from "@/data/informativo";

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

const getImagemArtigo = (slug: string) => `/images/informativos/${slug}.webp`;

export default function Informativos() {
  /*
   * O primeiro artigo funciona como destaque.
   * Todo o restante conteúdo vem diretamente de /data/informativo.
   */
  const artigoDestaque = informativos[0];
  const artigosRestantes = informativos.slice(1);

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#102A43] bg-[url('/images/informativos-hero.webp')] bg-cover bg-center bg-no-repeat px-6 py-20 text-white lg:py-28">
        {/* Overlay */}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-[#102A43]/95 via-[#102A43]/70 to-[#102A43]/20"
        />

        {/* Camada de profundidade */}

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

      {artigoDestaque && (
        <section className="bg-white px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            {/* Cabeçalho */}

            <div className="mb-12">
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

            {/* Artigo */}

            <article className="grid overflow-hidden border border-[#D9E1E5] bg-white lg:grid-cols-[1.1fr_0.9fr]">
              {/* IMAGEM */}

              <div className="relative min-h-90 overflow-hidden bg-[#102A43] lg:min-h-105">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url("${getImagemArtigo(
                      artigoDestaque.slug
                    )}")`,
                  }}
                />

                {/* Overlay da imagem */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-[#102A43]/90 via-[#102A43]/25 to-transparent"
                />

                {/* Ícone */}

                <div className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center border border-white/20 bg-[#102A43]/50 text-[#69B578] backdrop-blur-sm">
                  <BookOpen size={21} strokeWidth={1.5} />
                </div>

                {/* Informação sobre a imagem */}

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#69B578]">
                    {artigoDestaque.categoria}
                  </p>

                  <p className="mt-3 max-w-md font-(family-name:--font-manrope) text-2xl font-semibold leading-tight text-white">
                    Informação clara antes de tomar uma decisão.
                  </p>
                </div>
              </div>

              {/* CONTEÚDO */}

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#006f34]">
                    {artigoDestaque.categoria}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#B8C2C8]"
                  />

                  <span className="font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
                    {artigoDestaque.data}
                  </span>
                </div>

                <h3 className="mt-5 font-(family-name:--font-manrope) text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#102A43] lg:text-4xl">
                  {artigoDestaque.titulo}
                </h3>

                <p className="mt-5 font-(family-name:--font-inter) text-base leading-7 text-[#71808A]">
                  {artigoDestaque.resumo}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/informativos/${artigoDestaque.slug}`}
                    className="group inline-flex items-center gap-3 font-(family-name:--font-inter) text-sm font-semibold text-[#147D86] transition-colors hover:text-[#106A72]"
                  >
                    Ler informativo
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

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

              const quantidade = informativos.filter(
                artigo => artigo.categoria === categoria.nome
              ).length;

              return (
                <div
                  key={categoria.nome}
                  className="group bg-white p-7 transition-all duration-300 hover:bg-[#FCFDFC] lg:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#102A43] text-[#69B578] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <span className="font-(family-name:--font-manrope) text-2xl font-semibold text-[#E8EEF0]">
                      {String(quantidade).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 font-(family-name:--font-manrope) text-lg font-semibold text-[#102A43]">
                    {categoria.nome}
                  </h3>

                  <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                    {categoria.descricao}
                  </p>

                  <p className="mt-6 font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.12em] text-[#147D86]">
                    {quantidade === 1
                      ? "1 informativo"
                      : `${quantidade} informativos`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TODOS OS ARTIGOS
      ====================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                  Biblioteca de conteúdos
                </span>
              </div>

              <h2 className="font-(family-name:--font-manrope) text-4xl font-semibold tracking-[-0.03em] text-[#102A43] md:text-5xl">
                Informação útil
              </h2>
            </div>

            <p className="max-w-md font-(family-name:--font-inter) text-sm leading-6 text-[#71808A] md:text-right">
              Explore os nossos conteúdos sobre crédito, financiamento,
              documentação e preparação de processos.
            </p>
          </div>

          {/* GRID DINÂMICO */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {artigosRestantes.map((artigo, index) => (
              <article
                key={artigo.slug}
                className="group flex h-full flex-col overflow-hidden border border-[#D9E1E5] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D5D9] hover:shadow-[0_18px_45px_rgba(16,42,67,0.08)]"
              >
                {/* IMAGEM */}

                <Link
                  href={`/informativos/${artigo.slug}`}
                  className="relative block aspect-[16/9] overflow-hidden bg-[#102A43]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${getImagemArtigo(artigo.slug)}")`,
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-[#102A43]/75 via-transparent to-transparent"
                  />

                  <span className="absolute left-5 top-5 bg-[#102A43]/85 px-3 py-1.5 font-(family-name:--font-inter) text-[10px] font-semibold uppercase tracking-[0.14em] text-[#69B578] backdrop-blur-sm">
                    {artigo.categoria}
                  </span>

                  <span className="absolute bottom-5 right-5 font-(family-name:--font-manrope) text-3xl font-semibold text-white/35">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </Link>

                {/* CONTEÚDO */}

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
                      {artigo.data}
                    </span>

                    {artigo.tempoLeitura && (
                      <>
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-[#C4CDD1]"
                        />

                        <span className="font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
                          {artigo.tempoLeitura}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-5 font-(family-name:--font-manrope) text-xl font-semibold leading-tight tracking-[-0.02em] text-[#102A43]">
                    {artigo.titulo}
                  </h3>

                  <p className="mt-4 flex-1 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                    {artigo.resumo}
                  </p>

                  <div className="mt-7 border-t border-[#E2E8EB] pt-6">
                    <Link
                      href={`/informativos/${artigo.slug}`}
                      className="group/link inline-flex items-center gap-2 font-(family-name:--font-inter) text-sm font-semibold text-[#147D86] transition-colors hover:text-[#106A72]"
                    >
                      Ler informativo
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
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
