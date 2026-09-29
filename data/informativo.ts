export type Informativo = {
  slug: string;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  tempoLeitura: string;
  introducao: string;
  secoes: {
    titulo: string;
    paragrafos: string[];
    lista?: string[];
  }[];
};

export const informativos: Informativo[] = [
  {
    slug: "antes-de-apresentar-um-pedido",
    categoria: "Financiamento",
    titulo:
      "O que deve considerar antes de apresentar um pedido de financiamento",
    resumo:
      "Alguns dos principais elementos a considerar antes de iniciar um processo de financiamento.",
    data: "29 setembro 2026",
    tempoLeitura: "4 min",
    introducao:
      "Antes de apresentar um pedido de financiamento, é importante reunir alguma informação e compreender as diferentes etapas do processo. Uma preparação adequada permite apresentar o pedido de forma mais clara e facilita o esclarecimento das informações necessárias.",
    secoes: [
      {
        titulo: "Comece por definir a necessidade",
        paragrafos: [
          "O primeiro passo é compreender qual é a finalidade do financiamento e qual o montante que pretende solicitar.",
          "A informação apresentada deve refletir a necessidade concreta do pedido. Quanto mais clara for a finalidade, mais simples será explicar o enquadramento pretendido no primeiro contacto.",
        ],
      },
      {
        titulo: "Tenha em conta a sua situação financeira",
        paragrafos: [
          "A análise de um pedido de financiamento considera a situação apresentada pelo cliente e os elementos necessários à avaliação do processo.",
          "Por esse motivo, é importante ter disponíveis informações atualizadas sobre rendimentos, encargos e outros compromissos financeiros que possam ser relevantes para a análise.",
        ],
      },
      {
        titulo: "Prepare a documentação necessária",
        paragrafos: [
          "Os documentos necessários podem variar de acordo com o tipo de financiamento, a finalidade do pedido e a situação do requerente.",
          "Durante o processo poderão ser solicitados elementos adicionais para permitir a análise da operação.",
        ],
        lista: [
          "Identificação do requerente;",
          "Informação relativa à situação profissional e financeira;",
          "Elementos relacionados com a finalidade do financiamento;",
          "Outros documentos que possam ser necessários para a análise.",
        ],
      },
      {
        titulo: "O que acontece depois do primeiro contacto?",
        paragrafos: [
          "Depois de apresentado o pedido inicial, poderão ser solicitadas informações complementares para compreender melhor a situação e o financiamento pretendido.",
          "As condições aplicáveis são posteriormente analisadas de acordo com os elementos apresentados e com os critérios da instituição de crédito.",
        ],
      },
      {
        titulo: "A decisão pertence à instituição de crédito",
        paragrafos: [
          "A apresentação de um pedido não significa aprovação automática do financiamento.",
          "A aprovação, as condições aplicáveis e a eventual concessão do financiamento dependem da análise e decisão da instituição de crédito.",
        ],
      },
    ],
  },

  {
    slug: "credito-pessoal",
    categoria: "Crédito pessoal",
    titulo: "Como preparar um pedido de crédito pessoal",
    resumo:
      "Algumas informações que podem ajudar a preparar o primeiro contacto e a apresentar o pedido de forma mais clara.",
    data: "29 setembro 2026",
    tempoLeitura: "4 min",
    introducao:
      "Um pedido de crédito pessoal começa pela identificação da necessidade e pela apresentação das principais informações relativas ao financiamento pretendido. Uma preparação simples pode ajudar a tornar o primeiro contacto mais objetivo.",
    secoes: [
      {
        titulo: "Defina a finalidade do financiamento",
        paragrafos: [
          "Antes de iniciar o processo, procure identificar de forma clara para que finalidade pretende utilizar o financiamento.",
          "A finalidade é uma das informações que permite enquadrar o pedido e compreender melhor a necessidade apresentada.",
        ],
      },
      {
        titulo: "Determine o montante pretendido",
        paragrafos: [
          "É importante ter uma ideia do montante necessário para responder à finalidade identificada.",
          "O valor solicitado será posteriormente sujeito à análise aplicável ao processo.",
        ],
      },
      {
        titulo: "Reúna a informação pessoal e financeira",
        paragrafos: [
          "Para a análise de um pedido podem ser necessários elementos relativos à identificação, situação profissional, rendimentos e encargos do requerente.",
          "Ter esta informação disponível pode facilitar as etapas seguintes do processo.",
        ],
      },
      {
        titulo: "Apresente o pedido",
        paragrafos: [
          "O primeiro contacto permite apresentar a necessidade de financiamento e esclarecer quais os elementos necessários para dar continuidade ao processo.",
          "A informação apresentada será analisada de acordo com o enquadramento aplicável e com os critérios da instituição de crédito.",
        ],
      },
      {
        titulo: "Análise e decisão",
        paragrafos: [
          "A apresentação do pedido não constitui uma garantia de aprovação.",
          "A decisão de crédito pertence à instituição de crédito, após análise da situação e dos elementos necessários.",
        ],
      },
    ],
  },

  {
    slug: "documentacao",
    categoria: "Documentação",
    titulo: "Que informações podem ser necessárias num processo de crédito?",
    resumo:
      "Os documentos e elementos necessários podem variar consoante a situação e o financiamento pretendido.",
    data: "29 setembro 2026",
    tempoLeitura: "4 min",
    introducao:
      "A documentação necessária num processo de crédito depende de vários fatores, incluindo o tipo de financiamento, a finalidade e a situação do requerente. Por isso, os elementos solicitados podem variar de processo para processo.",
    secoes: [
      {
        titulo: "Identificação",
        paragrafos: [
          "Um processo de crédito pode exigir elementos de identificação dos intervenientes no pedido.",
          "A documentação concreta será indicada de acordo com as características do processo.",
        ],
      },
      {
        titulo: "Situação profissional e financeira",
        paragrafos: [
          "Para efeitos de análise, poderão ser necessários elementos que permitam compreender a situação profissional e financeira do requerente.",
          "Estes elementos podem incluir informação relativa a rendimentos, encargos e outros compromissos financeiros.",
        ],
      },
      {
        titulo: "Informação sobre a finalidade",
        paragrafos: [
          "Dependendo do financiamento pretendido, poderão ser solicitados documentos ou informações relacionados com a finalidade do pedido.",
          "Esta informação permite enquadrar a operação e compreender a necessidade apresentada.",
        ],
      },
      {
        titulo: "Podem ser solicitados elementos adicionais",
        paragrafos: [
          "Durante a análise, podem surgir necessidades de informação complementar.",
          "Por esse motivo, a lista inicial de documentos não deve ser entendida como necessariamente definitiva para todos os processos.",
        ],
      },
      {
        titulo: "Cada processo é analisado individualmente",
        paragrafos: [
          "Não existe uma lista única de documentos aplicável a todas as situações.",
          "Os elementos necessários dependem do pedido apresentado e da análise efetuada pela instituição de crédito.",
        ],
      },
    ],
  },

  {
    slug: "credito-empresarial",
    categoria: "Crédito empresarial",
    titulo: "Financiamento para empresas: o que deve saber antes de avançar",
    resumo:
      "Uma visão geral sobre a preparação de um pedido de financiamento para uma necessidade empresarial.",
    data: "29 setembro 2026",
    tempoLeitura: "5 min",
    introducao:
      "Quando uma empresa pretende recorrer a financiamento, é importante apresentar de forma clara a necessidade, a finalidade da operação e a informação relevante sobre a atividade empresarial.",
    secoes: [
      {
        titulo: "Identifique a necessidade da empresa",
        paragrafos: [
          "O primeiro passo consiste em definir qual é a necessidade que pretende financiar.",
          "Pode tratar-se, por exemplo, de uma necessidade relacionada com investimento, expansão, tesouraria ou outro objetivo empresarial.",
        ],
      },
      {
        titulo: "Defina o montante pretendido",
        paragrafos: [
          "A empresa deverá ter uma estimativa do montante necessário para concretizar a finalidade apresentada.",
          "O valor solicitado será posteriormente sujeito à análise da operação e das condições aplicáveis.",
        ],
      },
      {
        titulo: "Prepare a informação da empresa",
        paragrafos: [
          "Num processo empresarial poderão ser solicitados elementos relacionados com a atividade, situação financeira e estrutura da empresa.",
          "A documentação necessária dependerá das características do financiamento e da análise do processo.",
        ],
      },
      {
        titulo: "Explique a finalidade do financiamento",
        paragrafos: [
          "Uma descrição clara da finalidade ajuda a enquadrar o pedido e a compreender como o financiamento se relaciona com a necessidade da empresa.",
          "Sempre que aplicável, poderão ser solicitados elementos complementares relacionados com o investimento ou operação pretendida.",
        ],
      },
      {
        titulo: "Análise da operação",
        paragrafos: [
          "Depois de reunida a informação necessária, a operação é analisada de acordo com os critérios aplicáveis.",
          "A eventual aprovação e as condições do financiamento dependem da decisão da instituição de crédito.",
        ],
      },
    ],
  },
];

export function getInformativoBySlug(slug: string): Informativo | undefined {
  return informativos.find(informativo => informativo.slug === slug);
}
