export default function HeroSobre() {
  return (
    <section
      className="relative overflow-hidden bg-[#102A43] text-white"
      aria-labelledby="sobre-title"
    >
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#006f34]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-120 w-120 rounded-full border border-[#147D86]/20"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

            <span className="font-(family-name:--font-inter) text-sm font-semibold uppercase tracking-[0.18em] text-[#006f34]">
              Sobre
            </span>
          </div>

          <h1
            id="sobre-title"
            className="font-(family-name:--font-manrope) text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Experiência, proximidade
            <br />e acompanhamento.
          </h1>

          <p className="mt-8 max-w-2xl font-(family-name:--font-inter) text-lg leading-8 text-white/75 sm:text-xl">
            Conheça Jorge Mendonça e a forma de atuação na intermediação e
            acompanhamento de pedidos de financiamento para particulares e
            empresas.
          </p>
        </div>
      </div>
    </section>
  );
}
