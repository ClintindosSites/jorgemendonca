"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FormularioContato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "+351 ",
    tipo: "Crédito Pessoal",
    mensagem: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      let numbers = value.replace(/\D/g, "");

      if (numbers.startsWith("351")) {
        numbers = numbers.slice(3);
      }

      numbers = numbers.slice(0, 9);

      let formatted = "+351";

      if (numbers.length > 0) {
        formatted += ` ${numbers.slice(0, 3)}`;
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

      return;
    }

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const telefoneValido = /^\+351\s\d{3}\s\d{3}\s\d{3}$/.test(form.whatsapp);

  const enviarFormulario = async () => {
    if (!form.nome || !form.email || !telefoneValido) {
      alert("Preencha o nome, email e um número de WhatsApp válido.");
      return;
    }

    setEnviando(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contacto",
          data: form,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Erro ao enviar formulário.");
      }

      setEnviado(true);

      setForm({
        nome: "",
        email: "",
        whatsapp: "+351 ",
        tipo: "Crédito Pessoal",
        mensagem: "",
      });
    } catch (error) {
      console.error(error);
      alert("Não foi possível enviar a mensagem. Tente novamente.");
    } finally {
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
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

              <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#006f34]">
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

          <div className="border border-[#D9E1E5] bg-white p-7 lg:p-10">
            {enviado ? (
              <div className="flex min-h-100 flex-col items-center justify-center text-center">
                <CheckCircle2
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#147D86]"
                />

                <h3 className="mt-6 font-(family-name:--font-manrope) text-2xl  text-[#102A43]">
                  Mensagem enviada
                </h3>

                <p className="mt-3 max-w-md font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  Obrigado pelo contacto. A sua mensagem foi recebida e será
                  analisada.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
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
                    className="w-full border border-[#CDD7DC] bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition focus:border-[#147D86]"
                  />
                </div>

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
                      className="w-full border border-[#CDD7DC] bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition focus:border-[#147D86]"
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
                      inputMode="numeric"
                      placeholder="+351 912 345 678"
                      className={`w-full border bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition ${
                        form.whatsapp !== "+351 " && !telefoneValido
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#CDD7DC] focus:border-[#147D86]"
                      }`}
                    />

                    {form.whatsapp !== "+351 " && !telefoneValido && (
                      <p className="mt-2 font-(family-name:--font-inter) text-xs text-red-500">
                        Introduza os 9 dígitos do número português.
                      </p>
                    )}
                  </div>
                </div>

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
                    <option>Crédito Pessoal</option>
                    <option>Crédito Empresarial</option>
                    <option>Financiamento</option>
                    <option>Pedido de informação</option>
                    <option>Outro assunto</option>
                  </select>
                </div>

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
                    placeholder="Escreva aqui a sua mensagem..."
                    className="w-full resize-none border border-[#CDD7DC] bg-white px-4 py-3 font-(family-name:--font-inter) text-sm text-[#102A43] outline-none transition focus:border-[#147D86]"
                  />
                </div>

                <button
                  type="button"
                  onClick={enviarFormulario}
                  disabled={enviando}
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#147D86] px-7 py-4 font-(family-name:--font-inter) text-sm  text-white transition-colors hover:bg-[#106A72] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {enviando ? "A enviar..." : "Enviar mensagem"}
                  {!enviando && <ArrowRight size={17} />}
                </button>

                <p className="text-center font-(family-name:--font-inter) text-xs leading-5 text-[#9AA7AE]">
                  Os dados enviados serão utilizados para responder ao seu
                  contacto e tratar do pedido apresentado.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
