import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContactos() {
  return (
    <section className="relative overflow-hidden bg-[#102A43] px-6 py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/3 bg-[#006f34]/10"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-white/10"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#69B578]" />

            <span className="font-(family-name:--font-inter) text-xs font-semibold  uppercase tracking-[0.18em] text-[#69B578]">
              Contactos
            </span>
          </div>

          <h1 className="font-(family-name:--font-manrope) text-5xl leading-[1.04] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Fale connosco sobre
            <br />
            <span className="text-[#69B578]">o seu projeto.</span>
          </h1>

          <p className="mt-8 max-w-2xl font-(family-name:--font-inter) text-lg leading-8 text-white/70 md:text-xl">
            Tem alguma questão sobre financiamento ou pretende esclarecer as
            próximas etapas de um processo? Estamos disponíveis para prestar
            informação e acompanhar o seu pedido.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/351965710640?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 font-(family-name:--font-inter) text-sm  text-white transition-colors bg-[#006f34] hover:bg-[#0caf58]"
            >
              Falar pelo WhatsApp
              <ArrowRight size={17} />
            </a>

            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 font-(family-name:--font-inter) text-sm  text-white transition-colors hover:bg-white/10"
            >
              Enviar mensagem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
