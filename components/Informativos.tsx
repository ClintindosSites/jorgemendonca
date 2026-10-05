"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import { informativos } from "@/data/informativo";

type Category =
  | "Destaque"
  | "Crédito"
  | "Financiamento"
  | "Literacia financeira";

type InformativoView = {
  id: number;
  slug: string;
  category: Category;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const categoryMap: Record<string, Category> = {
  Crédito: "Crédito",
  Financiamento: "Financiamento",
  "Literacia financeira": "Literacia financeira",
};

const informativosView: InformativoView[] = informativos.map((item, index) => ({
  id: index + 1,
  slug: item.slug,
  category: categoryMap[item.categoria] ?? ("Crédito" as Category),
  date: item.data,
  title: item.titulo,
  excerpt: item.resumo,
  image: item.imagem,
  href: `/informativos/${item.slug}`,
}));

const categories: Category[] = [
  "Destaque",
  "Crédito",
  "Financiamento",
  "Literacia financeira",
];

export default function Informativos() {
  const [activeCategory, setActiveCategory] = useState<Category>("Destaque");

  const [activeId, setActiveId] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Destaque") {
      return informativosView;
    }

    return informativosView.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const activeItem =
    filteredItems.find(item => item.id === activeId) ?? filteredItems[0];

  const currentIndex = filteredItems.findIndex(
    item => item.id === activeItem?.id
  );

  function handleCategoryChange(category: Category) {
    setActiveCategory(category);

    const firstItem =
      category === "Destaque"
        ? informativosView[0]
        : informativosView.find(item => item.category === category);

    if (firstItem) {
      setActiveId(firstItem.id);
    }
  }

  function handlePrevious() {
    if (!filteredItems.length) return;

    const previousIndex =
      currentIndex <= 0 ? filteredItems.length - 1 : currentIndex - 1;

    setActiveId(filteredItems[previousIndex].id);
  }

  function handleNext() {
    if (!filteredItems.length) return;

    const nextIndex =
      currentIndex >= filteredItems.length - 1 ? 0 : currentIndex + 1;

    setActiveId(filteredItems[nextIndex].id);
  }

  if (!activeItem) {
    return null;
  }

  return (
    <section id="informativos" className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================
            CABEÇALHO
        ========================================= */}

        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#006f34]" />

            <span className="text-sm uppercase tracking-[0.18em] text-[#006f34] font-semibold">
              Informativos
            </span>
          </div>

          <h2 className="font-(--font-heading) text-4xl leading-[1.05] tracking-[-0.035em] text-[#102A43] sm:text-5xl lg:text-6xl">
            Informação financeira
            <br />
            explicada com clareza.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#526778] sm:text-lg">
            Conteúdos para compreender melhor o crédito, o financiamento e as
            informações que devem ser consideradas ao longo do processo.
          </p>
        </div>

        {/* =========================================
            CATEGORIAS
        ========================================= */}

        <div className="mt-14 border-b border-[#D9E1E5]">
          <div
            className="flex overflow-x-auto"
            role="tablist"
            aria-label="Categorias dos informativos"
          >
            {categories.map(category => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    relative shrink-0 px-5 py-4 text-sm font-medium
                    transition-colors duration-200
                    first:pl-0
                    ${
                      isActive
                        ? "text-[#006f34]"
                        : "text-[#102A43] hover:text-[#147D86]"
                    }
                  `}
                >
                  {category}

                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#006f34]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            CONTEÚDO PRINCIPAL
        ========================================= */}

        <div className="mt-10 grid lg:grid-cols-[minmax(0,1.75fr)_minmax(320px,0.9fr)]">
          {/* =======================================
              DESTAQUE
          ======================================= */}

          <div className="relative overflow-hidden bg-[#006f34]">
            <div className="relative aspect-16/10 min-h-100">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-linear-to-t from-[#071B2B] via-[#071B2B]/35 to-transparent" />

              {/* Conteúdo sobre imagem */}

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-11">
                <div className="mb-4 flex items-center gap-4">
                  <span className="inline-flex bg-[#006f34] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {activeItem.category}
                  </span>

                  <span className="text-xs font-medium text-white/75">
                    {activeItem.date}
                  </span>
                </div>

                <h3 className="max-w-3xl font-(--font-heading) text-3xl leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                  {activeItem.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                  {activeItem.excerpt}
                </p>

                <Link
                  href={activeItem.href}
                  className="mt-7 inline-flex items-center gap-3 text-sm text-white transition-colors hover:text-[#006f34]"
                >
                  Ler mais
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          {/* =======================================
              LISTA LATERAL
          ======================================= */}

          <div className="border-x border-b border-[#D9E1E5] lg:border-b-0">
            <div className="flex items-center justify-between border-b border-[#D9E1E5] px-6 py-5 sm:px-7">
              <span className="text-xs uppercase tracking-[0.16em] text-[#006f34] font-semibold">
                Mais informativos
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Informativo anterior"
                  className="flex h-9 w-9 items-center justify-center border border-[#D9E1E5] text-[#102A43] transition-colors hover:border-[#147D86] hover:text-[#147D86]"
                >
                  <ArrowLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo informativo"
                  className="flex h-9 w-9 items-center justify-center border border-[#D9E1E5] text-[#102A43] transition-colors hover:border-[#147D86] hover:text-[#147D86]"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div>
              {filteredItems
                .filter(item => item.id !== activeItem.id)
                .slice(0, 4)
                .map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="group block w-full border-b border-[#D9E1E5] px-6 py-6 text-left transition-colors hover:bg-[#F5F8F9] sm:px-7"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#006f34]">
                        {item.category}
                      </span>

                      <span className="text-[11px] text-[#7A8A95]">
                        {item.date}
                      </span>
                    </div>

                    <h4 className="mt-3 font-(--font-heading) text-base leading-[1.3] text-[#102A43] transition-colors group-hover:text-[#147D86] sm:text-lg">
                      {item.title}
                    </h4>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-[#7A8A95]">Ler mais</span>

                      <ArrowRight
                        size={15}
                        className="text-[#147D86] transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </button>
                ))}
            </div>

            {/* Rodapé lateral */}

            <div className="px-6 py-5 sm:px-7">
              <Link
                href="/informativos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#102A43] transition-colors hover:text-[#147D86]"
              >
                Ver todos os informativos
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================
            NAVEGAÇÃO INFERIOR
        ========================================= */}

        <div className="mt-7 flex flex-col gap-5 border-t border-[#D9E1E5] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#102A43]">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-12 bg-[#D9E1E5]" />

            <span className="text-xs text-[#7A8A95]">
              {String(filteredItems.length).padStart(2, "0")}
            </span>
          </div>

          <p className="max-w-xl text-xs leading-5 text-[#7A8A95] sm:text-right">
            Conteúdo editorial preparado e revisto. Quando aplicável, as fontes
            externas são identificadas e disponibilizadas através das respetivas
            ligações.
          </p>
        </div>
      </div>
    </section>
  );
}
