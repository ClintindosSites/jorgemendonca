"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { useEffect, useState } from "react";

type Artigo = {
  slug: string;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  tempoLeitura: string;
};

type Props = {
  artigos: Artigo[];
};

export default function InformativosCarousel({ artigos }: Props) {
  const [inicio, setInicio] = useState(0);

  const [porPagina, setPorPagina] = useState(3);

  useEffect(() => {
    const atualizar = () => {
      if (window.innerWidth < 768) {
        setPorPagina(1);
      } else if (window.innerWidth < 1024) {
        setPorPagina(2);
      } else {
        setPorPagina(3);
      }
    };

    atualizar();

    window.addEventListener("resize", atualizar);

    return () => {
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  const totalPaginas = Math.ceil(artigos.length / porPagina);

  const paginaAtual = Math.floor(inicio / porPagina);

  const podeAnterior = paginaAtual > 0;

  const podeProximo = paginaAtual < totalPaginas - 1;

  const anterior = () => {
    if (!podeAnterior) return;

    setInicio(Math.max(0, inicio - porPagina));
  };

  const proximo = () => {
    if (!podeProximo) return;

    setInicio(Math.min(artigos.length - porPagina, inicio + porPagina));
  };

  const artigosVisiveis = artigos.slice(inicio, inicio + porPagina);

  return (
    <div>
      {/* CONTROLOS */}

      <div className="mb-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para página ${index + 1}`}
              aria-current={paginaAtual === index ? "true" : undefined}
              onClick={() => setInicio(index * porPagina)}
              className={`h-1.5 rounded-full transition-all ${
                paginaAtual === index
                  ? "w-8 bg-[#147D86]"
                  : "w-2 bg-[#CBD5DA] hover:bg-[#9AA7AE]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={anterior}
            disabled={!podeAnterior}
            aria-label="Informativos anteriores"
            className="flex h-11 w-11 items-center justify-center border border-[#D9E1E5] text-[#102A43] transition-colors hover:bg-[#102A43] hover:text-white disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            onClick={proximo}
            disabled={!podeProximo}
            aria-label="Próximos informativos"
            className="flex h-11 w-11 items-center justify-center border border-[#D9E1E5] text-[#102A43] transition-colors hover:bg-[#102A43] hover:text-white disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* CARDS */}

      <div key={inicio} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {artigosVisiveis.map((artigo, index) => (
          <article
            key={artigo.slug}
            className="group flex min-h-[390px] flex-col border border-[#D9E1E5] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9C8CE] hover:shadow-[0_18px_45px_rgba(16,42,67,0.09)] lg:p-8"
          >
            {/* TOPO */}

            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="font-(family-name:--font-inter) text-[11px] font-semibold uppercase tracking-[0.14em] text-[#006f34]">
                  {artigo.categoria}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#B8C2C8]" />

                <span className="font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
                  {artigo.data}
                </span>
              </div>

              <span className="font-(family-name:--font-manrope) text-3xl font-semibold text-[#E8EEF0]">
                {String(inicio + index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* ÍCONE */}

            <div className="mt-10 flex h-11 w-11 items-center justify-center bg-[#102A43] text-[#69B578]">
              <BookOpen size={19} strokeWidth={1.5} />
            </div>

            {/* CONTEÚDO */}

            <div className="flex flex-1 flex-col">
              <h3 className="mt-7 font-(family-name:--font-manrope) text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#102A43]">
                {artigo.titulo}
              </h3>

              <p className="mt-4 line-clamp-3 font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                {artigo.resumo}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-[#E2E8EB] pt-6">
                <span className="inline-flex items-center gap-2 font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
                  <Clock size={14} />
                  {artigo.tempoLeitura}
                </span>

                <Link
                  href={`/informativos/${artigo.slug}`}
                  className="inline-flex items-center gap-2 font-(family-name:--font-inter) text-sm font-semibold text-[#147D86] transition-colors hover:text-[#106A72]"
                >
                  Ler mais
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* POSIÇÃO */}

      <div className="mt-7 flex justify-center">
        <span className="font-(family-name:--font-inter) text-xs text-[#9AA7AE]">
          {paginaAtual + 1} / {totalPaginas}
        </span>
      </div>
    </div>
  );
}
