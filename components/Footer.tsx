import Link from "next/link";
import { ArrowUpRight, ExternalLink, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";

const INSTITUTION_URL = "https://www.centropadana.bcc.it/home/home.asp";

const BANCO_PORTUGAL_URL =
  "https://www.bportugal.pt/entidadeautorizada/banca-centropadana-credito-cooperativo-societa-cooperativa";

export default function Footer() {
  return (
    <footer className="bg-[#fefefe] text-white">
      {/* =====================================================
          BLOCO PRINCIPAL
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr]">
          {/* =================================================
              MARCA / APRESENTAÇÃO
          ================================================= */}

          <div>
            <Link href="/" className="group flex-col  items-center gap-4">
              {/* Monograma */}

              <Image
                src={"/logo-bcc-gruppo-bcc-iccrea-verde.svg"}
                width={160}
                height={100}
                alt="Logomarca"
              />

              <span>
                <span className="block text-lg text-[#006f34] font-semibold tracking-[-0.02em]">
                  Jorge Mendonça
                </span>

                <span className="mt-0.5 block text-xs uppercase tracking-[0.12em] text-black/55">
                  Consultor de Crédito Internacional
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-6 text-black/65">
              Acompanhamento pessoal de pedidos de financiamento a partir de
              30.000 €, sujeitos à análise e decisão da instituição de crédito
              responsável.
            </p>

            {/* Nota institucional */}
            <div className="mt-7 flex max-w-sm gap-3 border-l border-[#006f34]/60 pl-4">
              <ShieldCheck
                size={18}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#006f34]"
              />

              <p className="text-xs leading-5 text-black/50">
                A apresentação de um pedido não garante aprovação, prazo ou
                condições específicas de financiamento.
              </p>
            </div>
          </div>

          {/* =================================================
              CONTACTOS
          ================================================= */}

          <div>
            <h3 className="mb-5 text-xg font-semibold uppercase tracking-[0.16em] text-[#006f34]">
              Contactos
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:intermediario@jorgemendonca.com"
                className="group flex items-start gap-3 text-sm text-black/70 transition-colors hover:text-[#006f34]"
              >
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#006f34]"
                />

                <span>intermediario@jorgemendonca.com</span>
              </a>
            </div>
          </div>

          {/* =================================================
              INFORMAÇÃO LEGAL
          ================================================= */}

          <div>
            <h3 className="mb-5 text-xg font-semibold uppercase tracking-[0.16em] text-[#006f34]">
              Informação legal
            </h3>

            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="/politica-privacidade"
                className="text-black/65 transition-colors hover:text-[#006f34]"
              >
                Política de Privacidade
              </Link>

              <Link
                href="/termos"
                className="text-black/65 transition-colors hover:text-[#006f34]"
              >
                Termos e Condições
              </Link>

              <Link
                href="/aviso-legal"
                className="text-black/65 transition-colors hover:text-[#006f34]"
              >
                Aviso Legal
              </Link>

              <Link
                href="/rgpd"
                className="text-black/65 transition-colors hover:text-[#006f34]"
              >
                RGPD
              </Link>
            </nav>
          </div>

          {/* =================================================
              INSTITUIÇÃO
          ================================================= */}

          <div>
            <h3 className="mb-5 text-xg font-semibold uppercase tracking-[0.16em] text-[#006f34]">
              Instituição
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-base font-semibold text-[#006f34]">
                  Banca Centropadana
                </p>

                <p className="mt-1 text-sm text-black/55">
                  Credito Cooperativo
                </p>
              </div>

              <p className="text-xs leading-5 text-black/50">
                Informação institucional e registo público da instituição de
                crédito.
              </p>

              {/* Site oficial da instituição */}
              <a
                href={INSTITUTION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-black/75 transition-colors hover:text-[#006f34]"
              >
                Site da instituição
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Registo Banco de Portugal */}
              <a
                href={BANCO_PORTUGAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium text-black/75 transition-colors hover:text-[#006f34]"
              >
                Registo no Banco de Portugal
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BLOCO INSTITUCIONAL
      ===================================================== */}

      <div className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="flex flex-col gap-4 text-xs leading-5 text-black/65 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl">
              Jorge Mendonça acompanha pedidos de financiamento em parceria com
              a Banca Centropadana Credito Cooperativo, de acordo com o âmbito
              da parceria estabelecida.
            </p>

            <a
              href={BANCO_PORTUGAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-medium text-black/65 transition-colors hover:text-[#006f34]"
            >
              Consultar registo público →
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          BASE / COPYRIGHT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
        <div className="flex flex-col gap-4 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Jorge Mendonça. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/politica-privacidade"
              className="transition-colors hover:text-[#006f34]"
            >
              Privacidade
            </Link>

            <Link
              href="/termos"
              className="transition-colors hover:text-[#006f3]"
            >
              Termos
            </Link>

            <Link
              href="/aviso-legal"
              className="transition-colors hover:text-[#006f34]"
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
