"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TEMPO_MINIMO_FORMULARIO = 1500;

type FormState = {
  nome: string;
  email: string;
  whatsapp: string;
  tipo: string;
  mensagem: string;
  website: string;
  consentimento: boolean;
};

export default function FormularioContato() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    whatsapp: "",
    tipo: "Crédito Pessoal",
    mensagem: "",
    website: "",
    consentimento: false,
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  /*
  ============================================================
  TEMPO DE INÍCIO DO FORMULÁRIO
  ============================================================
  */

  const formularioIniciado = useRef(Date.now());

  /*
  ============================================================
  CONTACTO
  ============================================================
  */

  const normalizarContacto = (telefone: string): string => {
    let numeros = telefone.replace(/\D/g, "");

    if (numeros.startsWith("00351")) {
      numeros = numeros.slice(5);
    } else if (numeros.startsWith("351") && numeros.length > 9) {
      numeros = numeros.slice(3);
    }

    return numeros.slice(0, 9);
  };

  const numerosContacto = normalizarContacto(form.whatsapp);

  const telefoneValido = /^[0-9]{9}$/.test(numerosContacto);

  /*
  ============================================================
  EMAIL
  ============================================================
  */

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  /*
  ============================================================
  ALTERAÇÃO DOS CAMPOS
  ============================================================
  */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    /*
    ----------------------------------------------------------
    HONEYPOT
    ----------------------------------------------------------
    */

    if (name === "website") {
      setForm(prev => ({
        ...prev,
        website: value,
      }));

      return;
    }

    /*
    ----------------------------------------------------------
    WHATSAPP
    ----------------------------------------------------------
    */

    if (name === "whatsapp") {
      let numbers = value.replace(/\D/g, "");

      if (numbers.startsWith("00351")) {
        numbers = numbers.slice(5);
      } else if (numbers.startsWith("351") && numbers.length > 9) {
        numbers = numbers.slice(3);
      }

      numbers = numbers.slice(0, 9);

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
    ----------------------------------------------------------
    RESTANTE DOS CAMPOS
    ----------------------------------------------------------
    */

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    setErro("");
  };

  /*
  ============================================================
  CONSENTIMENTO
  ============================================================
  */

  const handleConsentimento = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      consentimento: e.target.checked,
    }));

    setErro("");
  };

  /*
  ============================================================
  ENVIO
  ============================================================
  */

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("=================================");
    console.log("FORMULÁRIO CONTACTOS: CLIQUE DETETADO");
    console.log("=================================");

    if (enviando) {
      console.log("Já existe um envio em andamento.");
      return;
    }

    setErro("");

    /*
  ============================================================
  HONEYPOT
  ============================================================
  */

    if (form.website.trim() !== "") {
      console.warn("Honeypot preenchido.");
      return;
    }

    /*
  ============================================================
  TEMPO MÍNIMO
  ============================================================
  */

    const tempoDecorrido = Date.now() - formularioIniciado.current;

    console.log("Tempo desde abertura:", tempoDecorrido, "ms");

    if (tempoDecorrido < TEMPO_MINIMO_FORMULARIO) {
      setErro("Aguarde alguns segundos antes de enviar a mensagem.");

      return;
    }

    /*
  ============================================================
  DADOS
  ============================================================
  */

    const nome = form.nome.trim();
    const email = form.email.trim();
    const mensagem = form.mensagem.trim();

    /*
  ============================================================
  VALIDAÇÃO
  ============================================================
  */

    if (nome.length < 2) {
      setErro("Indique o seu nome.");
      return;
    }

    if (!emailValido) {
      setErro("Indique um endereço de email válido.");
      return;
    }

    if (!telefoneValido) {
      setErro("Indique um número de WhatsApp válido com 9 dígitos.");
      return;
    }

    if (mensagem.length < 5) {
      setErro("Escreva uma mensagem.");
      return;
    }

    if (!form.consentimento) {
      setErro("É necessário aceitar a Política de Privacidade.");
      return;
    }

    /*
  ============================================================
  COMEÇA O ENVIO
  ============================================================
  */

    setEnviando(true);

    console.log("Validação OK.");
    console.log("A iniciar fetch para /api/lead...");

    let timeout: ReturnType<typeof setTimeout> | undefined;

    try {
      const controller = new AbortController();

      timeout = setTimeout(() => {
        controller.abort();
      }, 15000);

      const contactoFormatado =
        `+351 ${numerosContacto.slice(0, 3)} ` +
        `${numerosContacto.slice(3, 6)} ` +
        `${numerosContacto.slice(6, 9)}`;

      const payload = {
        formType: "contactos",

        data: {
          nome,
          email,
          whatsapp: contactoFormatado,
          tipo: form.tipo.trim(),
          mensagem,
          consentimento: form.consentimento,
        },

        antiBot: {
          website: form.website,
          startedAt: formularioIniciado.current,
        },
      };

      console.log("Payload:", payload);

      const response = await fetch("/api/lead", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        signal: controller.signal,

        body: JSON.stringify(payload),
      });

      console.log("Resposta recebida da API:", response.status);

      const data = await response.json().catch(() => ({}));

      console.log("Resposta JSON:", data);

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Não foi possível enviar a mensagem.");
      }

      /*
    ============================================================
    SUCESSO
    ============================================================
    */

      console.log("CONTACTO ENVIADO COM SUCESSO.");

      setEnviado(true);

      setForm({
        nome: "",
        email: "",
        whatsapp: "",
        tipo: "Crédito Pessoal",
        mensagem: "",
        website: "",
        consentimento: false,
      });

      formularioIniciado.current = Date.now();
    } catch (error) {
      console.error("ERRO AO ENVIAR CONTACTO:", error);

      if (error instanceof DOMException && error.name === "AbortError") {
        setErro(
          "O pedido demorou demasiado tempo. Verifique a sua ligação e tente novamente."
        );
      } else {
        setErro(
          error instanceof Error
            ? error.message
            : "Não foi possível enviar a mensagem. Tente novamente."
        );
      }
    } finally {
      if (timeout) {
        clearTimeout(timeout);
      }

      setEnviando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="border-t border-[#E2E8EB] bg-[#F7F9FA] px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* =====================================================
              TEXTO
          ===================================================== */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs font-semibold uppercase tracking-[0.18em] text-[#006f34]">
                Envie uma mensagem
              </span>
            </div>

            <h2 className="font-(family-name:--font-manrope) text-4xl leading-tight tracking-[-0.03em] text-[#102A43] md:text-5xl">
              Como podemos
              <br />
              ajudar?
            </h2>

            <p className="mt-6 max-w-md font-(family-name:--font-inter) text-base leading-7 text-[#71808A]">
              Preencha os seus dados e indique brevemente o motivo do contacto.
              Entraremos em contacto para esclarecer a sua questão e indicar os
              próximos passos.
            </p>

            <div className="mt-10 border-l-2 border-[#69B578] pl-5">
              <p className="font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                A apresentação de uma mensagem ou pedido de contacto não
                constitui aprovação ou garantia de financiamento.
              </p>
            </div>
          </div>

          {/* =====================================================
              FORMULÁRIO
          ===================================================== */}

          <div className="relative border border-[#D9E1E5] bg-white p-7 lg:p-10">
            {/* ===================================================
                HONEYPOT
            =================================================== */}

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

            {enviado ? (
              /*
              ====================================================
              SUCESSO
              ====================================================
              */

              <div className="flex min-h-100 flex-col items-center justify-center text-center">
                <CheckCircle2
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#147D86]"
                />

                <h3 className="mt-6 font-(family-name:--font-manrope) text-2xl text-[#102A43]">
                  Mensagem enviada
                </h3>

                <p className="mt-3 max-w-md font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Obrigado pelo contacto. A sua mensagem foi recebida e será
                  analisada.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={enviarFormulario}>
                {/* =================================================
                    NOME
                ================================================= */}

                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block font-(family-name:--font-inter) text-sm font-medium text-[#102A43]"
                  >
                    Nome
                  </label>

                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    autoComplete="name"
                    maxLength={120}
                    className="w-full border border-[#CDD7DC] bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition focus:border-[#147D86]"
                  />
                </div>

                {/* =================================================
                    EMAIL + WHATSAPP
                ================================================= */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-(family-name:--font-inter) text-sm font-medium text-[#102A43]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="exemplo@email.pt"
                      autoComplete="email"
                      maxLength={160}
                      aria-invalid={Boolean(form.email) && !emailValido}
                      className={`w-full border bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition ${
                        form.email && !emailValido
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#CDD7DC] focus:border-[#147D86]"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="mb-2 block font-(family-name:--font-inter) text-sm font-medium text-[#102A43]"
                    >
                      WhatsApp
                    </label>

                    <input
                      id="whatsapp"
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={16}
                      placeholder="+351 912 345 678"
                      aria-invalid={Boolean(form.whatsapp) && !telefoneValido}
                      className={`w-full border bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition ${
                        form.whatsapp && !telefoneValido
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#CDD7DC] focus:border-[#147D86]"
                      }`}
                    />

                    {form.whatsapp && !telefoneValido && (
                      <p className="mt-2 font-(family-name:--font-inter) text-xs text-red-500">
                        Introduza os 9 dígitos do número português.
                      </p>
                    )}
                  </div>
                </div>

                {/* =================================================
                    TIPO
                ================================================= */}

                <div>
                  <label
                    htmlFor="tipo"
                    className="mb-2 block font-(family-name:--font-inter) text-sm font-medium text-[#102A43]"
                  >
                    Motivo do contacto
                  </label>

                  <select
                    id="tipo"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    className="w-full border border-[#CDD7DC] bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none focus:border-[#147D86]"
                  >
                    <option value="Crédito Pessoal">Crédito Pessoal</option>

                    <option value="Crédito Empresarial">
                      Crédito Empresarial
                    </option>

                    <option value="Financiamento">Financiamento</option>

                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* =================================================
                    MENSAGEM
                ================================================= */}

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block font-(family-name:--font-inter) text-sm font-medium text-[#102A43]"
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={6}
                    maxLength={3000}
                    placeholder="Escreva aqui a sua mensagem..."
                    className="w-full resize-none border border-[#CDD7DC] bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition focus:border-[#147D86]"
                  />
                </div>

                {/* =================================================
                    CONSENTIMENTO
                ================================================= */}

                <div className="border-t border-[#E2E8EB] pt-5">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={form.consentimento}
                      onChange={handleConsentimento}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#147D86]"
                    />

                    <span className="font-(family-name:--font-inter) text-xs leading-5 text-[#71808A]">
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
                    className="border border-red-200 bg-red-50 px-4 py-3 font-(family-name:--font-inter) text-sm leading-5 text-red-700"
                  >
                    {erro}
                  </div>
                )}

                {/* =================================================
                    BOTÃO
                ================================================= */}

                <button
                  type="submit"
                  disabled={enviando}
                  aria-disabled={enviando}
                  className={`group inline-flex w-full items-center justify-center gap-3 px-7 py-4 font-(family-name:--font-inter) text-sm text-white transition-colors ${
                    enviando
                      ? "cursor-not-allowed bg-[#D9E1E5] text-[#8A989F]"
                      : "cursor-pointer bg-[#006f34] hover:bg-[#0caf58]"
                  }`}
                >
                  {enviando ? "A enviar..." : "Enviar mensagem"}

                  {!enviando && (
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-center font-(family-name:--font-inter) text-xs leading-5 text-[#9AA7AE]">
                  Os dados enviados serão utilizados para responder ao seu
                  contacto e tratar do pedido apresentado.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
