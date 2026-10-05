import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { getInformativoBySlug, informativos } from "@/data/informativo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return informativos.map(informativo => ({
    slug: informativo.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const informativo = getInformativoBySlug(slug);

  if (!informativo) {
    return {
      title: "Informativo | Jorge Mendonça",
    };
  }

  return {
    title: `${informativo.titulo} | Jorge Mendonça`,
    description: informativo.resumo,
  };
}

export default async function InformativoPage({ params }: PageProps) {
  const { slug } = await params;

  const informativo = getInformativoBySlug(slug);

  if (!informativo) {
    notFound();
  }

  const relacionados = informativos
    .filter(item => item.slug !== informativo.slug)
    .slice(0, 3);
  const phone = "553135828296";

  const message = encodeURIComponent(
    "Olá! Gostaria de pedir uma simulação de crédito."
  );

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#006f34] px-6 py-20 text-white lg:py-28">
        {/* Elementos decorativos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#fefefe]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-120 w-120 rounded-full border border-[#fefefe]/20"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl mt-20">
            <Link
              href="/informativos"
              className="mb-10 inline-flex items-center gap-2 font-(family-name:--font-inter) text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Voltar aos informativos
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#fefefe]" />

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#fefefe]">
                {informativo.categoria}
              </span>
            </div>

            <h1 className="font-(family-name:--font-manrope) text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {informativo.titulo}
            </h1>

            <p className="mt-7 max-w-3xl font-(family-name:--font-inter) text-lg leading-8 text-white/70 md:text-xl">
              {informativo.resumo}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-(family-name:--font-inter) text-sm text-white/50">
              <span>{informativo.data}</span>

              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-white/30 sm:block"
              />

              <span className="inline-flex items-center gap-2">
                <Clock size={15} />
                {informativo.tempoLeitura} de leitura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <main className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
          {/* CONTEÚDO PRINCIPAL */}

          <article>
            <div className="mb-12 border-l-2 border-[#006f34] pl-6">
              <p className="font-(family-name:--font-inter) text-lg leading-8 text-[#4F606B]">
                {informativo.introducao}
              </p>
            </div>

            <div className="space-y-12">
              {informativo.secoes.map(secao => (
                <section key={secao.titulo}>
                  <h2 className="font-(family-name:--font-manrope) text-2xl font-semibold tracking-[-0.025em] text-[#102A43] md:text-3xl">
                    {secao.titulo}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {secao.paragrafos.map((paragrafo, index) => (
                      <p
                        key={index}
                        className="font-(family-name:--font-inter) text-base leading-8 text-[#596B76]"
                      >
                        {paragrafo}
                      </p>
                    ))}
                  </div>

                  {secao.lista && (
                    <ul className="mt-6 space-y-3 border border-[#D9E1E5] bg-[#F7F9FA] p-6">
                      {secao.lista.map(item => (
                        <li
                          key={item}
                          className="flex gap-3 font-(family-name:--font-inter) text-sm leading-7 text-[#596B76]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006f34]"
                          />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* NOTA */}

            <div className="mt-16 border border-[#D9E1E5] bg-[#F7F9FA] p-7 lg:p-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#006f34] text-[#fefefe]">
                  <BookOpen size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.15em] text-[#006f34]">
                    Nota informativa
                  </p>

                  <p className="mt-3 font-(family-name:--font-inter) text-sm leading-7 text-[#667783]">
                    Este conteúdo tem caráter exclusivamente informativo. A
                    informação apresentada não constitui garantia de aprovação,
                    proposta de crédito ou decisão da instituição de crédito.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}

          <aside className="lg:pt-1">
            <div className="sticky top-28 border border-[#D9E1E5] bg-[#F7F9FA] p-7">
              <p className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.16em] text-[#006f34]">
                Sobre este informativo
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="font-(family-name:--font-inter) text-xs uppercase tracking-[0.12em] text-[#9AA7AE]">
                    Categoria
                  </p>

                  <p className="mt-1 font-(family-name:--font-inter) text-sm font-medium text-[#102A43]">
                    {informativo.categoria}
                  </p>
                </div>

                <div className="border-t border-[#D9E1E5] pt-5">
                  <p className="font-(family-name:--font-inter) text-xs uppercase tracking-[0.12em] text-[#9AA7AE]">
                    Publicação
                  </p>

                  <p className="mt-1 font-(family-name:--font-inter) text-sm font-medium text-[#102A43]">
                    {informativo.data}
                  </p>
                </div>

                <div className="border-t border-[#D9E1E5] pt-5">
                  <p className="font-(family-name:--font-inter) text-xs uppercase tracking-[0.12em] text-[#9AA7AE]">
                    Leitura
                  </p>

                  <p className="mt-1 font-(family-name:--font-inter) text-sm font-medium text-[#102A43]">
                    {informativo.tempoLeitura}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#D9E1E5] pt-7">
                <Link
                  href="/apresentar-pedido"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#006f34] px-5 py-3.5 font-(family-name:--font-inter) text-sm font-semibold text-white transition-colors hover:bg-[#0caf58]"
                >
                  Apresentar pedido
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* =====================================================
          RELACIONADOS
      ====================================================== */}

      <section className="border-t border-[#E2E8EB] bg-[#F7F9FA] px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                Continue a explorar
              </span>
            </div>

            <h2 className="font-(family-name:--font-manrope) text-3xl font-semibold tracking-[-0.03em] text-[#102A43] md:text-4xl">
              Outros informativos
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relacionados.map(item => (
              <article
                key={item.slug}
                className="group border border-[#D9E1E5] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(16,42,67,0.08)]"
              >
                <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.14em] text-[#006f34]">
                  {item.categoria}
                </span>

                <h3 className="mt-5 font-(family-name:--font-manrope) text-xl font-semibold leading-tight tracking-[-0.02em] text-[#102A43]">
                  {item.titulo}
                </h3>

                <p className="mt-4 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                  {item.resumo}
                </p>

                <div className="mt-7 border-t border-[#E2E8EB] pt-6">
                  <Link
                    href={`/informativos/${item.slug}`}
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
                href={link}
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#006f34] px-7 py-4 font-(family-name:--font-inter) text-sm font-semibold text-white transition-colors hover:bg-[#0caf58]"
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
