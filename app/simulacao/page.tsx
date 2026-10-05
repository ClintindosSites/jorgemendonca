"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Simulacao() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    creditType: "",
    amount: "",
    prazo: "120",
    name: "",
    phone: "+351",
    email: "",
  });

  function updateField(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function next() {
    setStep(prev => prev + 1);
  }

  function back() {
    setStep(prev => prev - 1);
  }

  const progress = (step / 6) * 100;

  const sendSimulation = async () => {
    if (!canProceed()) return;
    if (Number(form.amount) < 30000) {
      alert("O valor mínimo permitido é de 30.000 €.");
      return;
    }
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "simulacao",
          data: form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/obrigado-simulacao");

        setForm({
          creditType: "",
          amount: "",
          prazo: "120",
          name: "",
          phone: "+351",
          email: "",
        });

        setStep(1);
      } else {
        alert("Erro ao enviar simulação.");
      }
    } catch (error) {
      alert("Erro ao enviar simulação.");
    }
  };
  const canProceed = () => {
    if (step === 1) return form.name !== "";
    if (step === 2) return form.email !== "";
    if (step === 3) return form.phone !== "";
    if (step === 4) return form.creditType !== "";
    if (step === 5) return form.amount !== "" && Number(form.amount) >= 30000;
    if (step === 6) return form.prazo !== "";

    return false;
  };
  const optionStyle = (selected: boolean) =>
    `border p-4 rounded-lg text-left text-[#1A2B4C] flex justify-between items-center cursor-pointer transition
  ${selected ? "border-[#C5A059] bg-[#f9f6ef]" : "hover:bg-gray-100"}`;
  function OptionButton({
    label,
    value,
    field,
  }: {
    label: string;
    value: string;
    field: keyof typeof form;
  }) {
    const selected = form[field] === value;

    return (
      <button
        onClick={() => updateField(field, value)}
        className={optionStyle(selected)}
      >
        {label}

        {selected && (
          <span className="text-[#006f34] font-bold text-lg">✓</span>
        )}
      </button>
    );
  }
  const valor = Number(form.amount || 30000);
  const meses = Number(form.prazo || 120);
  const valorInvalido = valor > 0 && valor < 30000;

  const jurosMensal = 0.01 / 12;

  const prestacao =
    valor > 0
      ? (
          (valor * jurosMensal) /
          (1 - Math.pow(1 + jurosMensal, -meses))
        ).toFixed(2)
      : "0";
  return (
    <section className=" bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/images/hero-04.webp')] bg-cover bg-center  min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        {/* Progress */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Passo {step} de 6</p>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              style={{ width: `${progress}%` }}
              className="bg-[#1A2B4C] h-2 rounded-full transition-all"
            />
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#006f34]">
              Qual é o seu nome?
            </h2>

            <input
              placeholder="Nome completo"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={e => updateField("name", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.name}
                className={`px-6 py-2 rounded-lg text-white ${
                  form.name
                    ? "bg-[#1A2B4C] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#006f34]">
              Qual é o seu email?
            </h2>

            <input
              placeholder="Email"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={e => updateField("email", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.email}
                className={`px-6 py-2 rounded-lg text-white ${
                  form.email
                    ? "bg-[#006f34] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#006f34]">
              Qual é o seu telefone?
            </h2>

            <input
              type="tel"
              value={form.phone}
              placeholder="+351 912 345 678"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={e => {
                let numbers = e.target.value.replace(/\D/g, "");

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

                updateField("phone", formatted);
              }}
            />

            <p className="text-xs text-gray-500 mt-2">
              Exemplo: +351 912 345 678
            </p>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={form.phone.replace(/\D/g, "").length !== 12}
                className={`px-6 py-2 rounded-lg text-white ${
                  form.phone.replace(/\D/g, "").length === 12
                    ? "bg-[#1A2B4C] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#006f34]">
              Qual tipo de crédito pretende?
            </h2>

            <div className="flex flex-col gap-3">
              {["Crédito Pessoal", "Crédito para Empresas"].map(type => (
                <button
                  key={type}
                  onClick={() => updateField("creditType", type)}
                  className={`border p-4 rounded-lg text-left text-[#1A2B4C] flex justify-between items-center cursor-pointer transition
          ${
            form.creditType === type
              ? "border-[#C5A059] bg-[#f9f6ef]"
              : "hover:bg-gray-100"
          }`}
                >
                  {type}

                  {form.creditType === type && (
                    <span className="text-[#006f34] font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <div />

              <button
                onClick={next}
                disabled={!form.creditType}
                className={`px-6 py-2 rounded-lg text-white
        ${
          form.creditType
            ? "bg-[#1A2B4C] cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#006f34]">
              Qual valor pretende?
            </h2>

            <p className="text-sm text-zinc-700 mb-4">
              Escolha um valor entre 30.000€ e 30.000.000€
            </p>

            {/* INPUT MANUAL */}
            <input
              type="text"
              value={
                form.amount ? Number(form.amount).toLocaleString("pt-PT") : ""
              }
              onChange={e => {
                const numeric = e.target.value.replace(/\D/g, "");

                if (numeric && Number(numeric) < 30000) {
                  updateField("amount", numeric);
                  return;
                }

                updateField("amount", numeric);
              }}
              placeholder="30.000 €"
              className={`w-full border p-3 rounded-lg mb-6 text-[#1A2B4C]
${valorInvalido ? "border-red-500" : "border-gray-300"}`}
            />
            {valorInvalido && (
              <p className="text-red-500 text-sm mt-2">
                O valor mínimo permitido é de 30.000 €.
              </p>
            )}

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>30.000€</span>
              <span>30.000.000€</span>
            </div>

            {/* RESUMO */}
            <div className="mt-5 p-4 bg-gray-100 rounded-lg border text-center">
              <p className="text-[#1A2B4C] font-semibold">Valor Selecionado</p>

              <p className="text-3xl font-bold text-[#006f34]">
                {Number(form.amount || 30000).toLocaleString("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.amount || valorInvalido}
                className={`px-6 py-2 rounded-lg text-white
       ${
         form.amount && !valorInvalido
           ? "bg-[#1A2B4C]"
           : "bg-gray-300 cursor-not-allowed"
       }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-semibold text-[#006f34]">
              Escolha o prazo pretendido
            </h2>

            <p className="text-sm text-zinc-700 mb-6">
              Simulação com taxa de referência de 1% ao ano
            </p>

            <div className="mb-6">
              <input
                type="range"
                min="120"
                max="360"
                step="12"
                value={form.prazo}
                onChange={e => updateField("prazo", e.target.value)}
                className="w-full cursor-pointer accent-[#c5a059]"
              />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>120 meses</span>
                <span>360 meses</span>
              </div>

              <div className="mt-4 p-4 bg-gray-100 rounded-lg border text-center">
                <p className="text-[#1A2B4C] font-semibold">
                  Prazo Selecionado
                </p>

                <p className="text-3xl font-bold text-[#006f34]">
                  {form.prazo} meses
                </p>

                <p className="text-gray-600">
                  ({Number(form.prazo) / 12} anos)
                </p>

                <hr className="my-4" />

                <p className="text-[#1A2B4C] font-semibold">Valor Financiado</p>

                <p className="text-xl font-bold text-[#1A2B4C]">
                  {valor.toLocaleString("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </p>

                <hr className="my-4" />

                <p className="text-[#1A2B4C] font-semibold">
                  Prestação Estimada
                </p>

                <p className="text-3xl font-bold text-green-600">
                  {Number(prestacao).toLocaleString("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Simulação indicativa com taxa de referência de 1% ao ano.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={sendSimulation}
                className="px-6 py-2 rounded-lg bg-[#1A2B4C] text-white cursor-pointer"
              >
                Enviar Simulação
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
