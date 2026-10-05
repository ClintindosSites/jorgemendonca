"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroSlides = [
  {
    image: "/images/hero-01.webp",
    eyebrow: "Jorge Mendonça",
    title: "Crédito a partir de 30.000 €, com acompanhamento pessoal",
    description:
      "Um primeiro contacto para apresentar o seu pedido de financiamento e compreender as etapas seguintes.",
  },
  {
    image: "/images/hero-02.webp",
    eyebrow: "Acompanhamento pessoal",
    title: "Cada pedido começa com uma conversa clara",
    description:
      "Acompanhamento próximo ao longo do processo, com esclarecimento das informações e dos passos necessários.",
  },
  {
    image: "/images/hero-03.webp",
    eyebrow: "Clareza nas condições",
    title: "Informação clara antes de qualquer decisão",
    description:
      "As condições aplicáveis ao pedido são analisadas e apresentadas de forma clara, de acordo com a situação apresentada.",
  },
  {
    image: "/images/hero-04.webp",
    eyebrow: "Soluções de financiamento",
    title: "Um pedido adaptado à sua necessidade",
    description:
      "Financiamento para diferentes necessidades pessoais e empresariais, sujeito à análise e decisão da instituição de crédito.",
  },
];

export default function NewHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      className="relative isolate min-h-[80vh] w-full overflow-hidden bg-[#102A43]"
      aria-label="Apresentação"
    >
      {/* =====================================================
          IMAGENS DO CARROSSEL
      ====================================================== */}

      <div className="absolute inset-0 -z-20">
        {heroSlides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${item.image}")`,
            }}
            aria-hidden={index !== current}
          />
        ))}
      </div>

      {/* =====================================================
          OVERLAY PRINCIPAL
      ====================================================== */}

      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#102A43]/95 via-[#102A43]/70 to-[#102A43]/30" />

      {/* =====================================================
          OVERLAY INFERIOR
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-[#102A43]/70 to-transparent" />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="max-w-4xl">
          {/* =================================================
              EYEBROW
          ================================================== */}

          <div
            key={`eyebrow-${current}`}
            className="animate-[heroFade_700ms_ease-out]"
          >
            <span className="mb-6 block font-(family-name:--font-inter) text-sm font-medium uppercase tracking-[0.18em] text-[#ffffff]">
              {slide.eyebrow}
            </span>
          </div>

          {/* =================================================
              TÍTULO
          ================================================== */}

          <h1
            key={`title-${current}`}
            className="max-w-4xl animate-[heroUp_800ms_ease-out] font-(family-name:--font-manrope) text-5xl leading-[0.98] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
          >
            {slide.title}
          </h1>

          {/* =================================================
              DESCRIÇÃO
          ================================================== */}

          <p
            key={`description-${current}`}
            className="mt-7 max-w-2xl animate-[heroFade_900ms_ease-out] font-(family-name:--font-inter) text-lg leading-8 text-white/85 md:text-xl"
          >
            {slide.description}
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          <div
            key={`button-${current}`}
            className="mt-9 animate-[heroUp_900ms_ease-out]"
          >
            <Link
              href="/apresentar-pedido"
              className="inline-flex items-center rounded-md bg-[#006f34] px-8 py-4 font-(family-name:--font-inter) text-sm  text-white transition-colors duration-300 hover:bg-[#0caf58] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#102A43]"
            >
              Apresentar pedido
            </Link>
          </div>

          {/* =================================================
              NOTA LEGAL / INFORMATIVA
          ================================================== */}

          <p
            key={`legal-${current}`}
            className="mt-5 max-w-xl animate-[heroFade_1000ms_ease-out] font-(family-name:--font-inter) text-sm leading-6 text-white/65"
          >
            Aprovação e condições sujeitas à análise e decisão da instituição de
            crédito.
          </p>
        </div>
      </div>

      {/* =====================================================
          CONTROLOS DO CARROSSEL
      ====================================================== */}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5 md:left-auto md:right-10 md:translate-x-0">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Imagem anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10"
        >
          ←
        </button>

        <div
          className="font-(family-name:--font-inter) text-sm text-white"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="font-semibold">
            {String(current + 1).padStart(2, "0")}
          </span>

          <span className="mx-2 text-white/40">/</span>

          <span className="text-white/50">
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próxima imagem"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10"
        >
          →
        </button>
      </div>

      {/* =====================================================
          INDICADORES
      ====================================================== */}

      <div className="absolute bottom-9 left-10 hidden gap-2 lg:flex">
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={index === current}
            className={`h-1 transition-all duration-500 ${
              index === current
                ? "w-10 bg-white"
                : "w-5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* =====================================================
          ANIMAÇÕES
      ====================================================== */}

      <style jsx>{`
        @keyframes heroFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes heroUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
