import { Resend } from "resend";

const VALOR_MINIMO = 30000;
const VALOR_MAXIMO = 1000000;
const TEMPO_MINIMO_FORMULARIO = 2500;

const EMAIL_DESTINO = "intermediario@jorgemendonca.com";
const EMAIL_FROM = "Jorge Miguel Mendonça <intermediario@jorgemendonca.com>";

function escaparHtml(value: unknown): string {
  return String(value ?? "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatarEuro(valor: unknown): string {
  const numero = Number(valor);

  if (!Number.isFinite(numero)) {
    return "-";
  }

  return numero.toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

function normalizarContacto(value: unknown): string {
  let numeros = String(value ?? "").replace(/\D/g, "");

  if (numeros.startsWith("00351")) {
    numeros = numeros.slice(5);
  } else if (numeros.startsWith("351") && numeros.length > 9) {
    numeros = numeros.slice(3);
  }

  return numeros;
}

function respostaErro(mensagem: string, status = 400): Response {
  return Response.json(
    {
      success: false,
      error: mensagem,
    },
    { status }
  );
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY não configurada.");
      return respostaErro("Serviço de email não configurado.", 500);
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const { formType, data, antiBot } = body ?? {};

    if (!formType) {
      return respostaErro("Tipo de formulário inválido.");
    }

    /*
    ============================================================
    ANTI-BOT
    ============================================================
    */

    if (antiBot?.website) {
      console.warn("Bot bloqueado: honeypot preenchido.");
      return respostaErro("Pedido inválido.");
    }

    if (antiBot?.startedAt) {
      const startedAt = Number(antiBot.startedAt);

      if (
        !Number.isFinite(startedAt) ||
        Date.now() - startedAt < TEMPO_MINIMO_FORMULARIO
      ) {
        console.warn("Bot/submissão demasiado rápida.");
        return respostaErro(
          "Aguarde alguns segundos antes de apresentar o pedido."
        );
      }
    }

    /*
    ============================================================
    PRÉ-ANÁLISE
    ============================================================
    */

    if (formType === "pre-analise") {
      const subject = "Nova Pré-Análise de Crédito";

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;color:#222">

          <h2 style="color:#1A2B4C;">
            Nova Pré-Análise de Crédito
          </h2>

          <hr/>

          <table style="width:100%;border-collapse:collapse">

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>Nome</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;">
                ${escaparHtml(data?.nome)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>Email</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;">
                ${escaparHtml(data?.email)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>WhatsApp</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;">
                ${escaparHtml(data?.whatsapp)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>Tipo de Crédito</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;">
                ${escaparHtml(data?.tipo)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>Valor Pretendido</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;">
                ${formatarEuro(data?.valor)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>Prazo</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;">
                ${escaparHtml(data?.prazo)} meses
              </td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;">
                <b>Prestação Estimada</b>
              </td>
              <td style="padding:10px;border:1px solid #ddd;color:green;font-weight:bold;">
                ${formatarEuro(data?.prestacao)}
              </td>
            </tr>

          </table>
        </div>
      `;

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_DESTINO,
        subject,
        html,
        replyTo: data?.email || undefined,
      });

      return Response.json({ success: true });
    }

    /*
    ============================================================
    SIMULAÇÃO
    ============================================================
    */

    if (formType === "simulacao") {
      const subject = "Nova Simulação de Crédito";

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222">

          <h2 style="color:#1A2B4C;">
            Nova Simulação de Crédito
          </h2>

          <hr/>

          <h3 style="color:#c5a059;">
            Dados de Contacto
          </h3>

          <table style="width:100%;border-collapse:collapse">

            <tr>
              <td style="padding:8px;border:1px solid #ddd;">
                <b>Nome</b>
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escaparHtml(data?.name)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;">
                <b>Telefone</b>
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escaparHtml(data?.phone)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;">
                <b>Email</b>
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escaparHtml(data?.email || "Não informado")}
              </td>
            </tr>

          </table>

          <h3 style="color:#c5a059;">
            Dados da Simulação
          </h3>

          <table style="width:100%;border-collapse:collapse">

            <tr>
              <td style="padding:8px;border:1px solid #ddd;">
                <b>Tipo de Crédito</b>
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escaparHtml(data?.creditType)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;">
                <b>Valor a Financiar</b>
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escaparHtml(data?.amount)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;">
                <b>Prazo de Pagamento</b>
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escaparHtml(data?.prazo)} meses
              </td>
            </tr>

          </table>

        </div>
      `;

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_DESTINO,
        subject,
        html,
        replyTo: data?.email || undefined,
      });

      return Response.json({ success: true });
    }

    if (formType === "contactos") {
      const nome = String(data?.nome ?? "").trim();
      const email = String(data?.email ?? "").trim();
      const whatsapp = normalizarContacto(data?.whatsapp);
      const tipo = String(data?.tipo ?? "").trim();
      const mensagem = String(data?.mensagem ?? "").trim();
      const consentimento = data?.consentimento === true;

      /*
  ============================================================
  VALIDAÇÕES SERVER-SIDE
  ============================================================
  */

      if (nome.length < 2) {
        return respostaErro("Indique o seu nome.");
      }

      if (nome.length > 120) {
        return respostaErro("O nome indicado é demasiado longo.");
      }

      if (!/^[0-9]{9}$/.test(whatsapp)) {
        return respostaErro(
          "Indique um número de WhatsApp válido com 9 dígitos."
        );
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return respostaErro("Indique um endereço de email válido.");
      }

      if (email.length > 160) {
        return respostaErro("O endereço de email é demasiado longo.");
      }

      if (!tipo) {
        return respostaErro("Selecione o motivo do contacto.");
      }

      if (tipo.length > 100) {
        return respostaErro("O motivo do contacto é inválido.");
      }

      if (mensagem.length < 5) {
        return respostaErro("Escreva uma mensagem.");
      }

      if (mensagem.length > 3000) {
        return respostaErro("A mensagem é demasiado longa.");
      }

      if (!consentimento) {
        return respostaErro("É necessário aceitar a Política de Privacidade.");
      }

      /*
  ============================================================
  CONTACTO FORMATADO
  ============================================================
  */

      const contactoFormatado =
        `+351 ${whatsapp.slice(0, 3)} ` +
        `${whatsapp.slice(3, 6)} ` +
        `${whatsapp.slice(6, 9)}`;

      /*
  ============================================================
  EMAIL
  ============================================================
  */

      const subject = "Novo Contacto pelo Site — jorgemendonca.com";

      const html = `
    <div style="
      font-family:Arial,sans-serif;
      max-width:700px;
      margin:auto;
      color:#222;
    ">

      <div style="
        background:#102A43;
        padding:24px;
        color:white;
      ">

        <h2 style="
          margin:0;
          font-size:22px;
        ">
          Novo Contacto pelo Site
        </h2>

        <p style="
          margin:8px 0 0;
          color:#D9E1E5;
        ">
          Contacto recebido através do site
          jorgemendonca.com
        </p>

      </div>

      <table style="
        width:100%;
        border-collapse:collapse;
        margin-top:20px;
      ">

        <tr>
          <td style="
            padding:12px;
            border:1px solid #ddd;
            width:35%;
            background:#f7f7f7;
          ">
            <b>Nome</b>
          </td>

          <td style="
            padding:12px;
            border:1px solid #ddd;
          ">
            ${escaparHtml(nome)}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            border:1px solid #ddd;
            background:#f7f7f7;
          ">
            <b>Email</b>
          </td>

          <td style="
            padding:12px;
            border:1px solid #ddd;
          ">
            ${escaparHtml(email)}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            border:1px solid #ddd;
            background:#f7f7f7;
          ">
            <b>WhatsApp</b>
          </td>

          <td style="
            padding:12px;
            border:1px solid #ddd;
          ">
            ${escaparHtml(contactoFormatado)}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            border:1px solid #ddd;
            background:#f7f7f7;
          ">
            <b>Motivo</b>
          </td>

          <td style="
            padding:12px;
            border:1px solid #ddd;
          ">
            ${escaparHtml(tipo)}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            border:1px solid #ddd;
            background:#f7f7f7;
          ">
            <b>Consentimento</b>
          </td>

          <td style="
            padding:12px;
            border:1px solid #ddd;
          ">
            Sim
          </td>
        </tr>

      </table>

      <h3 style="
        color:#C5A059;
        margin-top:30px;
      ">
        Mensagem
      </h3>

      <div style="
        padding:16px;
        border:1px solid #ddd;
        background:#fafafa;
        line-height:1.6;
        white-space:pre-wrap;
      ">
        ${escaparHtml(mensagem || "Não foi apresentada nenhuma mensagem.")}
      </div>

      <div style="
        margin-top:24px;
        padding:16px;
        background:#f7f7f7;
        border-left:4px solid #147D86;
        font-size:13px;
        line-height:1.6;
        color:#667783;
      ">
        Este contacto foi submetido através do formulário
        de contactos do site.
      </div>

    </div>
  `;

      /*
  ============================================================
  ENVIO RESEND
  ============================================================
  */

      const resultado = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_DESTINO,
        subject,
        html,
        replyTo: email,
      });

      /*
  ============================================================
  ERRO RESEND
  ============================================================
  */

      if (resultado.error) {
        console.error("Erro ao enviar contacto pelo Resend:", resultado.error);

        return respostaErro(
          "Não foi possível enviar a mensagem. Tente novamente.",
          500
        );
      }

      /*
  ============================================================
  SUCESSO
  ============================================================
  */

      return Response.json({
        success: true,
      });
    }
    /*
    ============================================================
    FORMULÁRIO HERO
    ============================================================
    */

    if (formType === "hero") {
      const subject = "Pedido de Simulação (Homepage)";

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222">

          <h2 style="color:#1A2B4C;">
            Pedido via Homepage
          </h2>

          <p>
            <b>Tipo de Crédito:</b>
            ${escaparHtml(data?.creditType)}
          </p>

          <p>
            <b>Valor Pretendido:</b>
            €${escaparHtml(data?.amount)}
          </p>

          <p>
            <b>Prazo de Pagamento:</b>
            ${escaparHtml(data?.prazo)} meses
          </p>

        </div>
      `;

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_DESTINO,
        subject,
        html,
        replyTo: data?.email || undefined,
      });

      return Response.json({ success: true });
    }

    /*
    ============================================================
    CREDIT SIMULATOR
    ============================================================
    */

    if (formType === "credit-simulator") {
      const subject = "Nova Simulação pelo Simulador";

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222">

          <h2 style="color:#1A2B4C;">
            Simulação de Crédito
          </h2>

          <p>
            <b>Tipo de Crédito:</b>
            ${escaparHtml(data?.tipo)}
          </p>

          <p>
            <b>Valor Pretendido:</b>
            €${escaparHtml(data?.valor)}
          </p>

          <p>
            <b>Prazo:</b>
            ${escaparHtml(data?.prazo)} anos
          </p>

          <hr/>

          <h3>
            Resultado da Simulação
          </h3>

          <p>
            <b>Prestação Estimada:</b>
            €${escaparHtml(data?.prestacao)}
          </p>

        </div>
      `;

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_DESTINO,
        subject,
        html,
        replyTo: data?.email || undefined,
      });

      return Response.json({ success: true });
    }

    /*
    ============================================================
    PEDIDO DE FINANCIAMENTO
    ============================================================
    */

    if (formType === "pedido-financiamento") {
      const nome = String(data?.nome ?? "").trim();
      const whatsapp = normalizarContacto(data?.whatsapp);
      const email = String(data?.email ?? "").trim();
      const finalidade = String(data?.finalidade ?? "").trim();
      const valor = Number(data?.valor);
      const consentimento = Boolean(data?.consentimento);

      /*
      ----------------------------------------------------------
      VALIDAÇÕES SERVER-SIDE
      ----------------------------------------------------------
      */

      if (nome.length < 2) {
        return respostaErro("Indique o seu nome completo.");
      }

      if (!/^[0-9]{9}$/.test(whatsapp)) {
        return respostaErro(
          "Indique um número de contacto válido com 9 dígitos."
        );
      }

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return respostaErro("Indique um endereço de email válido.");
      }

      if (!finalidade) {
        return respostaErro("Selecione a finalidade do financiamento.");
      }

      if (
        !Number.isFinite(valor) ||
        valor < VALOR_MINIMO ||
        valor > VALOR_MAXIMO
      ) {
        return respostaErro(
          "O valor pretendido deve estar entre 30.000 € e 1.000.000 €."
        );
      }

      if (!consentimento) {
        return respostaErro("É necessário aceitar a Política de Privacidade.");
      }

      /*
      ----------------------------------------------------------
      CONTACTO FORMATADO
      ----------------------------------------------------------
      */

      const contactoFormatado =
        `+351 ${whatsapp.slice(0, 3)} ` +
        `${whatsapp.slice(3, 6)} ` +
        `${whatsapp.slice(6, 9)}`;

      /*
      ----------------------------------------------------------
      EMAIL
      ----------------------------------------------------------
      */

      const subject = "Novo Pedido de Financiamento — jorgemendonca.com";

      const html = `
        <div style="
          font-family:Arial,sans-serif;
          max-width:700px;
          margin:auto;
          color:#222;
        ">

          <div style="
            background:#102A43;
            padding:24px;
            color:white;
          ">

            <h2 style="
              margin:0;
              font-size:22px;
            ">
              Novo Pedido de Financiamento
            </h2>

            <p style="
              margin:8px 0 0;
              color:#D9E1E5;
            ">
              Pedido recebido através do site
              jorgemendonca.com
            </p>

          </div>

          <table style="
            width:100%;
            border-collapse:collapse;
            margin-top:20px;
          ">

            <tr>
              <td style="
                padding:12px;
                border:1px solid #ddd;
                width:35%;
                background:#f7f7f7;
              ">
                <b>Nome</b>
              </td>

              <td style="
                padding:12px;
                border:1px solid #ddd;
              ">
                ${escaparHtml(nome)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #ddd;
                background:#f7f7f7;
              ">
                <b>Contacto</b>
              </td>

              <td style="
                padding:12px;
                border:1px solid #ddd;
              ">
                ${escaparHtml(contactoFormatado)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #ddd;
                background:#f7f7f7;
              ">
                <b>Email</b>
              </td>

              <td style="
                padding:12px;
                border:1px solid #ddd;
              ">
                ${escaparHtml(email || "Não informado")}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #ddd;
                background:#f7f7f7;
              ">
                <b>Finalidade</b>
              </td>

              <td style="
                padding:12px;
                border:1px solid #ddd;
              ">
                ${escaparHtml(finalidade)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #ddd;
                background:#f7f7f7;
              ">
                <b>Valor pretendido</b>
              </td>

              <td style="
                padding:12px;
                border:1px solid #ddd;
                font-size:18px;
                font-weight:bold;
              ">
                ${formatarEuro(valor)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #ddd;
                background:#f7f7f7;
              ">
                <b>Consentimento</b>
              </td>

              <td style="
                padding:12px;
                border:1px solid #ddd;
              ">
                Sim
              </td>
            </tr>

          </table>

          <div style="
            margin-top:24px;
            padding:16px;
            background:#f7f7f7;
            border-left:4px solid #147D86;
            font-size:13px;
            line-height:1.6;
            color:#667783;
          ">
            A apresentação deste pedido não representa aprovação
            de financiamento nem garante prazo, condições ou
            decisão favorável. O pedido está sujeito à análise
            aplicável.
          </div>

        </div>
      `;

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_DESTINO,
        subject,
        html,
        replyTo: email || undefined,
      });

      return Response.json({
        success: true,
      });
    }

    /*
    ============================================================
    FORMULÁRIO DESCONHECIDO
    ============================================================
    */

    return respostaErro("Tipo de formulário não suportado.", 400);
  } catch (error) {
    console.error("Erro na API de leads:", error);

    return Response.json(
      {
        success: false,
        error: "Não foi possível processar o pedido.",
      },
      {
        status: 500,
      }
    );
  }
}
