"use client";

import { useRef, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

const VALOR_MINIMO = 30000;
const VALOR_MAXIMO = 1000000;
const VALOR_INTERVALO = 10000;

const finalidades = [
  "Crédito Pessoal",
  "Crédito para Empresa",
  "Aquisição de Imóvel",
  "Investimento",
  "Outro",
];

const TEMPO_MINIMO_FORMULARIO = 2500;

type FormState = {
  nome: string;
  whatsapp: string;
  email: string;
  finalidade: string;
  valor: string;
  consentimento: boolean;

  // Campo invisível utilizado como honeypot anti-bot
  website: string;
};

export default function ServicosCTA() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    nome: "",
    whatsapp: "",
    email: "",
    finalidade: "",
    valor: String(VALOR_MINIMO),
    consentimento: false,
    website: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  /*
   * Guarda o momento em que o formulário foi carregado.
   * useRef evita renders desnecessários.
   */
  const formularioIniciado = useRef(Date.now());

  /*
   * ============================================================
   * FORMATAÇÃO DO VALOR
   * ============================================================
   */

  const formatarValor = (valor: string) => {
    return Number(valor).toLocaleString("pt-PT", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });
  };

  /*
   * ============================================================
   * VALOR NUMÉRICO
   * ============================================================
   */

  const valorNumerico = Number(form.valor);

  /*
   * ============================================================
   * CONTACTO
   *
   * O formulário trabalha internamente apenas com os
   * 9 dígitos do número português.
   *
   * Exemplos aceites:
   *
   * 912345678
   * +351 912 345 678
   * +351912345678
   * 00351 912 345 678
   * ============================================================
   */

  const normalizarContacto = (telefone: string): string => {
    let numeros = telefone.replace(/\D/g, "");

    /*
     * Se vier com 00351:
     *
     * 00351 912 345 678
     * -> 912345678
     */
    if (numeros.startsWith("00351")) {
      numeros = numeros.slice(5);
    } else if (numeros.startsWith("351") && numeros.length > 9) {
      /*
       * Só removemos 351 quando sabemos que é um número
       * internacional completo.
       *
       * Isto evita o problema anterior em que:
       *
       * 351...
       *
       * podia ter o 351 removido enquanto o utilizador
       * ainda estava a escrever o número nacional.
       */
      numeros = numeros.slice(3);
    }

    return numeros.slice(0, 9);
  };

  const numerosContacto = normalizarContacto(form.whatsapp);

  const whatsappValido = /^[0-9]{9}$/.test(numerosContacto);

  /*
   * ============================================================
   * EMAIL
   *
   * Email é opcional.
   * Caso seja preenchido, precisa ser válido.
   * ============================================================
   */

  const emailValido =
    form.email.trim() === "" ||
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  /*
   * ============================================================
   * PODE ENVIAR
   * ============================================================
   */

  const podeEnviar =
    form.nome.trim().length >= 2 &&
    whatsappValido &&
    form.finalidade !== "" &&
    Number.isFinite(valorNumerico) &&
    valorNumerico >= VALOR_MINIMO &&
    valorNumerico <= VALOR_MAXIMO &&
    emailValido &&
    form.consentimento &&
    form.website.trim() === "" &&
    !enviando;

  /*
   * ============================================================
   * ALTERAÇÃO DOS CAMPOS
   * ============================================================
   */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    /*
     * ----------------------------------------------------------
     * HONEYPOT
     * ----------------------------------------------------------
     */

    if (name === "website") {
      setForm(prev => ({
        ...prev,
        website: value,
      }));

      return;
    }

    /*
     * ----------------------------------------------------------
     * VALOR
     *
     * O slider já limita o intervalo.
     * Mesmo assim, fazemos uma proteção adicional.
     * ----------------------------------------------------------
     */

    if (name === "valor") {
      const valorSelecionado = Number(value);

      const valorSeguro = Math.min(
        VALOR_MAXIMO,
        Math.max(VALOR_MINIMO, valorSelecionado)
      );

      setForm(prev => ({
        ...prev,
        valor: String(valorSeguro),
      }));

      setErro("");

      return;
    }

    /*
     * ----------------------------------------------------------
     * WHATSAPP / TELEFONE
     * ----------------------------------------------------------
     */

    if (name === "whatsapp") {
      let numbers = value.replace(/\D/g, "");

      /*
       * Se o utilizador colar:
       *
       * 00351 912 345 678
       *
       * removemos o 00351.
       */
      if (numbers.startsWith("00351")) {
        numbers = numbers.slice(5);
      } else if (numbers.startsWith("351") && numbers.length > 9) {
        /*
         * Se o utilizador colar:
         *
         * +351 912 345 678
         *
         * depois da remoção dos caracteres não numéricos
         * teremos:
         *
         * 351912345678
         *
         * Portanto removemos o 351 somente quando temos
         * mais de 9 dígitos.
         */
        numbers = numbers.slice(3);
      }

      /*
       * Portugal utiliza 9 dígitos no número nacional.
       */
      numbers = numbers.slice(0, 9);

      /*
       * Formatação visual:
       *
       * +351 912 345 678
       */

      let formatted = "";

      if (numbers.length > 0) {
        formatted = `+351 ${numbers.slice(0, 3)}`;
      }

      if (numbers.length > 3) {
        formatted += ` ${numbers.slice(3, 6)}`;
      }

      if (numbers.length > 6) {
        formatted += ` ${numbers.slice(6, 9)}`;
      }

      setForm(prev => ({
        ...prev,
        whatsapp: formatted,
      }));

      setErro("");

      return;
    }

    /*
     * ----------------------------------------------------------
     * RESTANTE DOS CAMPOS
     * ----------------------------------------------------------
     */

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    setErro("");
  };

  /*
   * ============================================================
   * CONSENTIMENTO
   * ============================================================
   */

  const handleConsentimento = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      consentimento: e.target.checked,
    }));

    setErro("");
  };

  /*
   * ============================================================
   * ENVIO
   * ============================================================
   */

  const enviarPedido = async () => {
    /*
     * Evita múltiplos cliques / múltiplas requisições.
     */

    if (enviando) {
      return;
    }

    setErro("");

    /*
     * ==========================================================
     * HONEYPOT
     * ==========================================================
     */

    if (form.website.trim() !== "") {
      return;
    }

    /*
     * ==========================================================
     * TEMPO MÍNIMO
     * ==========================================================
     */

    const tempoDecorrido = Date.now() - formularioIniciado.current;

    if (tempoDecorrido < TEMPO_MINIMO_FORMULARIO) {
      setErro("Aguarde alguns segundos antes de apresentar o pedido.");

      return;
    }

    /*
     * ==========================================================
     * VALOR
     * ==========================================================
     */

    if (
      !Number.isFinite(valorNumerico) ||
      valorNumerico < VALOR_MINIMO ||
      valorNumerico > VALOR_MAXIMO
    ) {
      setErro("O valor pretendido deve estar entre 30.000 € e 1.000.000 €.");

      return;
    }

    /*
     * ==========================================================
     * NOME
     * ==========================================================
     */

    if (form.nome.trim().length < 2) {
      setErro("Indique o seu nome completo.");

      return;
    }

    /*
     * ==========================================================
     * CONTACTO
     * ==========================================================
     */

    if (!whatsappValido) {
      setErro("Indique um número de contacto válido com 9 dígitos.");

      return;
    }

    /*
     * ==========================================================
     * FINALIDADE
     * ==========================================================
     */

    if (!form.finalidade) {
      setErro("Selecione a finalidade do financiamento.");

      return;
    }

    /*
     * ==========================================================
     * EMAIL
     * ==========================================================
     */

    if (!emailValido) {
      setErro("Indique um endereço de email válido.");

      return;
    }

    /*
     * ==========================================================
     * CONSENTIMENTO
     * ==========================================================
     */

    if (!form.consentimento) {
      setErro("É necessário aceitar a Política de Privacidade.");

      return;
    }

    /*
     * ==========================================================
     * VALIDAÇÃO FINAL
     * ==========================================================
     */

    if (!podeEnviar) {
      setErro("Verifique os campos obrigatórios antes de continuar.");

      return;
    }

    /*
     * ==========================================================
     * ENVIO
     * ==========================================================
     */

    try {
      setEnviando(true);

      /*
       * Timeout de segurança.
       */

      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 15000);

      /*
       * Número final normalizado.
       *
       * Exemplo:
       *
       * +351 912 345 678
       */

      const contactoNormalizado = `+351 ${numerosContacto.slice(
        0,
        3
      )} ${numerosContacto.slice(3, 6)} ${numerosContacto.slice(6, 9)}`;

      const res = await fetch("/api/lead", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        signal: controller.signal,

        body: JSON.stringify({
          formType: "pedido-financiamento",

          data: {
            nome: form.nome.trim(),

            whatsapp: contactoNormalizado,

            email: form.email.trim(),

            finalidade: form.finalidade,

            valor: String(valorNumerico),

            consentimento: form.consentimento,
          },

          /*
           * Dados auxiliares para validação no servidor.
           */

          antiBot: {
            website: form.website,

            startedAt: formularioIniciado.current,
          },
        }),
      });

      clearTimeout(timeout);

      let data: {
        success?: boolean;
        error?: string;
      } = {};

      try {
        data = await res.json();
      } catch {
        data = {};
      }

      /*
       * ========================================================
       * API RECUSOU O PEDIDO
       * ========================================================
       */

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Não foi possível enviar o pedido.");
      }

      /*
       * ========================================================
       * SUCESSO
       * ========================================================
       */

      router.push("/obrigado-contacto");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setErro(
          "O pedido demorou demasiado tempo. Verifique a sua ligação e tente novamente."
        );
      } else {
        setErro(
          error instanceof Error
            ? error.message
            : "Não foi possível enviar o pedido. Tente novamente."
        );
      }
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="pedido"
      className="relative isolate overflow-hidden bg-[#102A43] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          IMAGEM DE FUNDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/jorge-mendonca-cta.webp')",
        }}
      />

      {/* =====================================================
          GRADIENTE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,42,67,0.96)_0%,rgba(16,42,67,0.82)_1%,rgba(16,42,67,0.55)_25%,rgba(16,42,67,0.78)_100%)]"
      />

      {/* =====================================================
          ELEMENTOS DECORATIVOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#006f34]/85"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#006f34]/85"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-30 top-20 h-72 w-72 rounded-full border border-[#006f34]/85"
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-20">
          {/* =================================================
              TEXTO
          ================================================= */}

          <div className="pt-4 text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#BD965A]" />

              <span className="text-sm  uppercase tracking-[0.18em] text-[#BD965A]">
                Apresentar pedido
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl  leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Um primeiro passo
              <br />
              para o seu pedido.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Partilhe algumas informações iniciais sobre o financiamento que
              procura. O pedido será posteriormente acompanhado e esclarecido de
              acordo com as características da sua situação.
            </p>

            {/* =================================================
                PROCESSO
            ================================================= */}

            <div className="mt-12 space-y-7">
              {/* 01 */}

              <div className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#BD965A]/50 text-xs  text-[#BD965A]">
                  01
                </div>

                <div>
                  <h3 className="text-base ">Apresente o pedido</h3>

                  <p className="mt-1 text-sm leading-6 text-white/55">
                    Indique o valor pretendido, a finalidade e os seus dados de
                    contacto.
                  </p>
                </div>
              </div>

              {/* 02 */}

              <div className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#BD965A]/50 text-xs  text-[#BD965A]">
                  02
                </div>

                <div>
                  <h3 className="text-base ">Contacto e esclarecimento</h3>

                  <p className="mt-1 text-sm leading-6 text-white/55">
                    Entraremos em contacto para compreender o pedido e
                    esclarecer as próximas etapas.
                  </p>
                </div>
              </div>

              {/* 03 */}

              <div className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#BD965A]/50 text-xs  text-[#BD965A]">
                  03
                </div>

                <div>
                  <h3 className="text-base ">
                    Condições por escrito e decisão
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/55">
                    As condições aplicáveis são apresentadas por escrito antes
                    de qualquer decisão.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FORMULÁRIO
          ================================================= */}

          <div className="relative bg-white p-7 shadow-2xl sm:p-9 lg:p-10">
            {/* =================================================
                HONEYPOT
            ================================================= */}

            <div
              aria-hidden="true"
              className="absolute -left-2499.75 top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="website">Website</label>

              <input
                id="website"
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* =================================================
                CABEÇALHO
            ================================================= */}

            <div className="border-b border-[#D9E1E5] pb-6">
              <h3 className="text-2xl  tracking-[-0.02em] text-[#102A43] sm:text-3xl">
                Apresente o seu pedido
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667783]">
                Os pedidos recebidos através deste site começam nos 30.000 €.
              </p>
            </div>

            <div className="mt-7 space-y-5">
              {/* =================================================
                  VALOR PRETENDIDO
              ================================================= */}

              <div>
                <label
                  htmlFor="valor"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Valor pretendido
                  <span className="ml-1 text-[#147D86]">*</span>
                </label>

                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#7A8A95]">
                      Montante selecionado
                    </p>

                    <p className="mt-1 text-3xl  tracking-[-0.03em] text-[#102A43]">
                      {formatarValor(form.valor)}
                    </p>
                  </div>

                  <span className="text-xs text-[#7A8A95]">
                    máximo 1.000.000 €
                  </span>
                </div>

                {/* SLIDER */}

                <input
                  id="valor"
                  type="range"
                  name="valor"
                  min={VALOR_MINIMO}
                  max={VALOR_MAXIMO}
                  step={VALOR_INTERVALO}
                  value={form.valor}
                  onChange={handleChange}
                  aria-label="Valor pretendido"
                  aria-valuemin={VALOR_MINIMO}
                  aria-valuemax={VALOR_MAXIMO}
                  aria-valuenow={valorNumerico}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#D9E1E5] accent-[#147D86]"
                />

                {/* ESCALA */}

                <div className="mt-3 flex justify-between text-xs text-[#7A8A95]">
                  <span>30.000 €</span>

                  <span className="hidden sm:inline">250.000 €</span>

                  <span>500.000 €</span>

                  <span className="hidden sm:inline">750.000 €</span>

                  <span>1.000.000 €</span>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#7A8A95]">
                  Selecione o montante de financiamento que pretende solicitar.
                </p>
              </div>

              {/* =================================================
                  FINALIDADE
              ================================================= */}

              <div>
                <label
                  htmlFor="finalidade"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Finalidade do financiamento
                  <span className="ml-1 text-[#147D86]">*</span>
                </label>

                <select
                  id="finalidade"
                  name="finalidade"
                  value={form.finalidade}
                  onChange={handleChange}
                  className="w-full border border-[#CBD7DD] bg-white px-4 py-3.5 text-[#102A43] outline-none transition-colors focus:border-[#147D86]"
                >
                  <option value="">Selecione uma finalidade</option>

                  {finalidades.map(finalidade => (
                    <option key={finalidade} value={finalidade}>
                      {finalidade}
                    </option>
                  ))}
                </select>
              </div>

              {/* =================================================
                  NOME
              ================================================= */}

              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Nome completo
                  <span className="ml-1 text-[#147D86]">*</span>
                </label>

                <input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="O seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={120}
                  className="w-full border border-[#CBD7DD] px-4 py-3.5 text-[#102A43] outline-none placeholder:text-[#9AA7AE] transition-colors focus:border-[#147D86]"
                />
              </div>

              {/* =================================================
                  CONTACTO
              ================================================= */}

              <div>
                <label
                  htmlFor="whatsapp"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Contacto
                  <span className="ml-1 text-[#147D86]">*</span>
                </label>

                <input
                  id="whatsapp"
                  type="tel"
                  name="whatsapp"
                  placeholder="+351 912 345 678"
                  value={form.whatsapp}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={16}
                  aria-invalid={Boolean(form.whatsapp) && !whatsappValido}
                  className={`w-full border px-4 py-3.5 text-[#102A43] outline-none placeholder:text-[#9AA7AE] transition-colors ${
                    form.whatsapp && !whatsappValido
                      ? "border-red-300 focus:border-red-500"
                      : "border-[#CBD7DD] focus:border-[#147D86]"
                  }`}
                />

                <p className="mt-2 text-xs text-[#7A8A95]">
                  Contacto telefónico ou WhatsApp.
                </p>
              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Email
                  <span className="ml-2 text-xs font-normal text-[#8A989F]">
                    opcional
                  </span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="nome@exemplo.pt"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={160}
                  className={`w-full border px-4 py-3.5 text-[#102A43] outline-none placeholder:text-[#9AA7AE] transition-colors ${
                    form.email && !emailValido
                      ? "border-red-300 focus:border-red-500"
                      : "border-[#CBD7DD] focus:border-[#147D86]"
                  }`}
                />
              </div>

              {/* =================================================
                  CONSENTIMENTO
              ================================================= */}

              <div className="border-t border-[#D9E1E5] pt-5">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consentimento}
                    onChange={handleConsentimento}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#147D86]"
                  />

                  <span className="text-xs leading-5 text-[#667783]">
                    Li e aceito a{" "}
                    <a
                      href="/politica-privacidade"
                      className="font-medium text-[#147D86] underline underline-offset-2"
                    >
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o tratamento dos meus dados para efeitos de
                    contacto relativamente ao pedido apresentado.
                  </span>
                </label>
              </div>

              {/* =================================================
                  ERRO
              ================================================= */}

              {erro && (
                <div
                  role="alert"
                  className="border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
                >
                  {erro}
                </div>
              )}

              {/* =================================================
                  BOTÃO
              ================================================= */}

              <button
                type="button"
                onClick={enviarPedido}
                disabled={!podeEnviar || enviando}
                aria-disabled={!podeEnviar || enviando}
                className={`
                  group flex w-full items-center justify-center gap-3
                  px-6 py-4 text-sm 
                  transition-all
                  ${
                    !podeEnviar || enviando
                      ? "cursor-not-allowed bg-[#D9E1E5] text-[#8A989F]"
                      : "cursor-pointer bg-[#147D86] text-white hover:bg-[#106D75]"
                  }
                `}
              >
                {enviando ? "A enviar..." : "Apresentar pedido"}

                {!enviando && podeEnviar && (
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>

            {/* =================================================
                NOTA DE SEGURANÇA / DECISÃO
            ================================================= */}

            <div className="mt-6 flex gap-3 border-t border-[#D9E1E5] pt-5">
              <ShieldCheck
                size={18}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#147D86]"
              />

              <p className="text-xs leading-5 text-[#7A8A95]">
                A apresentação de um pedido não garante aprovação, prazo de
                resposta ou condições específicas de financiamento. A decisão
                pertence à instituição de crédito responsável pela análise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
