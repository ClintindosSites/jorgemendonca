export type Informativo = {
  slug: string;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  tempoLeitura: string;

  // Imagens do artigo
  imagem: string;
  imagemAlt: string;
  imagemDestaque: string;
  imagemDestaqueAlt: string;

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

    imagem:
      "/images/informativos/antes-de-apresentar-um-pedido-de-financiamento.webp",
    imagemAlt:
      "Consultor financeiro a analisar um pedido de financiamento com um cliente",
    imagemDestaque:
      "/images/informativos/antes-de-apresentar-um-pedido-destaque.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a acompanhar um cliente durante uma análise de financiamento",

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

    imagem:
      "/images/informativos/como-preparar-um-pedido-de-credito-pessoal.webp",
    imagemAlt:
      "Consultor financeiro a analisar uma proposta de crédito pessoal com um cliente",
    imagemDestaque:
      "/images/informativos/como-preparar-um-pedido-de-credito-pessoal.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a acompanhar um cliente num processo de crédito pessoal",

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

    imagem:
      "/images/informativos/informacoes-podem-ser-necessárias-num-processo-de-credito.webp",
    imagemAlt:
      "Consultor financeiro a analisar documentação de um processo de crédito",
    imagemDestaque:
      "/images/informativos/informacoes-podem-ser-necessárias-num-processo-de-credito.webp",
    imagemDestaqueAlt:
      "Documentação financeira organizada durante uma análise de crédito",

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

    imagem: "/images/informativos/financiamento-para-empresas.webp",
    imagemAlt:
      "Consultor financeiro a analisar uma necessidade de financiamento empresarial",
    imagemDestaque: "/images/informativos/financiamento-para-empresas.webp",
    imagemDestaqueAlt:
      "Reunião profissional sobre financiamento e necessidades de uma empresa",

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

  {
    slug: "avaliacao-de-solvabilidade",
    categoria: "Financiamento",
    titulo: "O que é a avaliação de solvabilidade e porque é importante?",
    resumo:
      "Compreenda o que significa avaliar a capacidade financeira de um cliente antes da contratação de um crédito.",
    data: "4 outubro 2026",
    tempoLeitura: "5 min",

    imagem: "/images/informativos/avaliacao-de-solvabilidade.webp",
    imagemAlt:
      "Consultor financeiro a avaliar a situação financeira de um cliente",
    imagemDestaque:
      "/images/informativos/avaliacao-de-solvabilidade-destaque.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a analisar a solvabilidade de um cliente",

    introducao:
      "A avaliação de solvabilidade é uma das etapas fundamentais num processo de concessão de crédito. Antes de celebrar determinados contratos de crédito, a instituição deve avaliar a capacidade do cliente para cumprir as obrigações que pretende assumir. Esta análise procura perceber se o financiamento é compatível com a situação financeira apresentada.",

    secoes: [
      {
        titulo: "O que significa solvabilidade?",
        paragrafos: [
          "A solvabilidade está relacionada com a capacidade do cliente para cumprir, nos prazos acordados, as obrigações financeiras resultantes do crédito.",
          "Não se trata apenas de analisar o rendimento mensal. A avaliação considera diferentes elementos da situação económica e financeira do cliente e procura enquadrar o novo compromisso no conjunto das responsabilidades existentes.",
        ],
      },
      {
        titulo: "Que elementos podem ser considerados?",
        paragrafos: [
          "Na avaliação podem ser considerados elementos como a idade, a situação profissional, os rendimentos e as despesas regulares do cliente.",
          "Também podem ser consultadas bases de dados de responsabilidades de crédito, como a Central de Responsabilidades de Crédito do Banco de Portugal.",
          "A informação concreta necessária depende do tipo de financiamento e das características do processo.",
        ],
        lista: [
          "Rendimentos regulares;",
          "Despesas e encargos financeiros;",
          "Situação profissional;",
          "Responsabilidades de crédito existentes;",
          "Outros elementos relevantes para a análise.",
        ],
      },
      {
        titulo: "Porque é importante apresentar informação correta?",
        paragrafos: [
          "A qualidade da informação disponibilizada é importante para que a instituição consiga avaliar corretamente a situação financeira apresentada.",
          "Informações incompletas ou desatualizadas podem dificultar a análise e levar à necessidade de solicitar documentação ou esclarecimentos adicionais.",
          "Por isso, o cliente deve apresentar informação verdadeira, completa e atualizada.",
        ],
      },
      {
        titulo: "A avaliação garante a aprovação do crédito?",
        paragrafos: [
          "Não. A avaliação de solvabilidade é uma etapa da análise, mas não significa que o financiamento será necessariamente aprovado.",
          "A decisão de conceder ou não o crédito pertence à instituição de crédito, de acordo com a sua análise, critérios de risco e condições aplicáveis à operação.",
        ],
      },
      {
        titulo: "Uma análise adequada protege ambas as partes",
        paragrafos: [
          "Uma avaliação responsável procura evitar que seja assumido um compromisso financeiro incompatível com a capacidade de pagamento apresentada.",
          "Para o cliente, compreender esta etapa ajuda a preparar melhor o processo e a perceber porque podem ser solicitadas informações sobre rendimentos, despesas e responsabilidades financeiras.",
        ],
      },
    ],
  },

  {
    slug: "central-responsabilidades-credito",
    categoria: "Documentação",
    titulo:
      "O que é a Central de Responsabilidades de Crédito e como funciona?",
    resumo:
      "Saiba o que é a CRC do Banco de Portugal, que informação pode constar no mapa de responsabilidades e porque é relevante num processo de crédito.",
    data: "4 outubro 2026",
    tempoLeitura: "6 min",

    imagem: "/images/informativos/central-de-responsabilidades-de-credito.webp",
    imagemAlt:
      "Consultor financeiro a analisar informação relacionada com responsabilidades de crédito",
    imagemDestaque:
      "/images/informativos/central-de-responsabilidades-de-credito.webp",
    imagemDestaqueAlt:
      "Análise profissional de responsabilidades financeiras e histórico de crédito",

    introducao:
      "A Central de Responsabilidades de Crédito, conhecida como CRC, é uma base de dados gerida pelo Banco de Portugal que reúne informação comunicada pelas entidades participantes relativamente às responsabilidades de crédito dos seus clientes. A informação pode ser relevante para a avaliação do risco de concessão de novos créditos.",

    secoes: [
      {
        titulo: "O que é a CRC?",
        paragrafos: [
          "A Central de Responsabilidades de Crédito é uma base de dados gerida pelo Banco de Portugal que contém informação sobre responsabilidades de crédito comunicadas pelas entidades participantes.",
          "O principal objetivo da CRC é apoiar a avaliação do risco de concessão de crédito, permitindo às entidades participantes consultar informação agregada sobre as responsabilidades de determinado cliente ou potencial cliente.",
        ],
      },
      {
        titulo: "Que responsabilidades podem aparecer?",
        paragrafos: [
          "O mapa de responsabilidades pode incluir diferentes tipos de crédito e compromissos financeiros.",
          "Entre os exemplos encontram-se créditos pessoais, créditos automóveis, créditos à habitação, cartões de crédito, descobertos e operações de leasing ou factoring.",
          "Também podem existir responsabilidades potenciais, como determinados montantes contratados mas ainda não utilizados ou situações em que o cliente atua como fiador ou avalista.",
        ],
      },
      {
        titulo: "O que é um crédito em incumprimento?",
        paragrafos: [
          "Um crédito encontra-se em incumprimento quando existem pagamentos em atraso relativamente às obrigações previstas no contrato.",
          "Esta informação pode ser relevante para futuras análises de crédito, uma vez que as entidades participantes utilizam a informação disponível para avaliar o risco associado à concessão de novos financiamentos.",
        ],
      },
      {
        titulo: "Posso consultar o meu próprio mapa?",
        paragrafos: [
          "Sim. O cliente pode consultar a informação que consta sobre si na Central de Responsabilidades de Crédito e obter o respetivo mapa de responsabilidades através dos canais disponibilizados pelo Banco de Portugal.",
          "Consultar o mapa antes de iniciar um novo processo pode ser uma forma útil de conhecer as responsabilidades atualmente registadas e verificar se a informação corresponde à sua situação.",
        ],
      },
      {
        titulo: "Porque deve consultar a CRC antes de pedir crédito?",
        paragrafos: [
          "Conhecer as responsabilidades existentes permite ter uma visão mais clara da situação financeira antes de iniciar um novo pedido.",
          "É particularmente importante confirmar os créditos existentes, os montantes em dívida e eventuais responsabilidades como fiador ou avalista.",
          "Uma preparação adequada não garante aprovação, mas permite apresentar o processo com maior conhecimento da situação financeira.",
        ],
      },
    ],
  },

  {
    slug: "taeg-tan-diferenca",
    categoria: "Financiamento",
    titulo: "TAEG e TAN: qual é a diferença e o que deve analisar?",
    resumo:
      "Perceba a diferença entre TAN e TAEG e porque não deve analisar uma proposta de crédito apenas pela taxa de juro anunciada.",
    data: "4 outubro 2026",
    tempoLeitura: "5 min",

    imagem: "/images/informativos/taeg-tan.webp",
    imagemAlt:
      "Consultor financeiro a comparar diferentes condições de uma proposta de crédito",
    imagemDestaque: "/images/informativos/taeg-tan.webp",
    imagemDestaqueAlt:
      "Análise profissional de taxas e custos associados a um financiamento",

    introducao:
      "Quando se compara uma proposta de crédito, é comum encontrar diferentes taxas e encargos. Entre os conceitos mais importantes estão a TAN e a TAEG. Compreender a diferença entre estas duas referências ajuda a interpretar melhor o custo de uma operação e a comparar propostas de forma mais informada.",

    secoes: [
      {
        titulo: "O que é a TAN?",
        paragrafos: [
          "A TAN, ou Taxa Anual Nominal, corresponde à taxa de juro nominal associada ao crédito.",
          "Embora seja uma informação importante, a TAN não representa, por si só, todos os custos associados ao financiamento.",
        ],
      },
      {
        titulo: "O que é a TAEG?",
        paragrafos: [
          "A TAEG, ou Taxa Anual de Encargos Efetiva Global, procura refletir o custo total do crédito para o cliente, considerando os encargos abrangidos pela sua definição legal.",
          "Por essa razão, a TAEG é uma referência particularmente útil quando o objetivo é comparar diferentes propostas de crédito para uma mesma finalidade.",
        ],
      },
      {
        titulo: "Porque não deve olhar apenas para a taxa de juro?",
        paragrafos: [
          "Uma proposta pode apresentar uma taxa nominal aparentemente mais baixa e, ainda assim, ter outros custos associados à operação.",
          "Entre os elementos que podem influenciar o custo global encontram-se determinadas comissões, despesas e outros encargos previstos no contrato.",
          "A comparação deve, por isso, considerar o conjunto das condições da proposta e não apenas um único indicador.",
        ],
      },
      {
        titulo: "Compare propostas com atenção",
        paragrafos: [
          "Quando existem várias propostas para uma mesma necessidade, é importante analisar as condições de forma equivalente.",
          "A TAEG pode ajudar nessa comparação, mas deve ser analisada juntamente com o montante financiado, prazo, prestação, condições contratuais e eventuais produtos associados.",
        ],
      },
      {
        titulo: "Uma taxa mais baixa significa sempre um crédito melhor?",
        paragrafos: [
          "Não necessariamente. O custo do financiamento deve ser analisado em conjunto com todas as condições da operação.",
          "Também é importante verificar se existem condições associadas à proposta, como a contratação de determinados produtos ou serviços, e perceber o impacto que podem ter no custo global.",
        ],
      },
    ],
  },

  {
    slug: "fin-fine-credito",
    categoria: "Documentação",
    titulo:
      "FIN e FINE: que informação deve consultar antes de contratar crédito?",
    resumo:
      "Saiba para que servem a FIN e a FINE e como estes documentos ajudam a compreender e comparar propostas de financiamento.",
    data: "4 outubro 2026",
    tempoLeitura: "5 min",

    imagem: "/images/informativos/fin-fine.webp",
    imagemAlt:
      "Consultor financeiro a analisar documentação pré-contratual de crédito",
    imagemDestaque: "/images/informativos/fin-fine.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a explicar documentação de uma proposta de financiamento",

    introducao:
      "Antes de contratar um crédito, o cliente deve receber informação sobre as principais características, condições e custos da operação. Dependendo do tipo de financiamento, essa informação é apresentada através da Ficha de Informação Normalizada (FIN) ou da Ficha de Informação Normalizada Europeia (FINE).",

    secoes: [
      {
        titulo: "O que é a FIN?",
        paragrafos: [
          "A FIN, Ficha de Informação Normalizada, é utilizada no âmbito do crédito aos consumidores e apresenta informação relevante sobre as principais características e condições do financiamento.",
          "O objetivo é permitir que o cliente compreenda melhor a proposta antes de tomar uma decisão.",
        ],
      },
      {
        titulo: "O que é a FINE?",
        paragrafos: [
          "A FINE, Ficha de Informação Normalizada Europeia, é utilizada no crédito à habitação e noutros créditos hipotecários abrangidos pelas respetivas regras.",
          "A documentação permite conhecer as principais condições da operação e facilita a comparação entre propostas.",
        ],
      },
      {
        titulo: "Que informação deve analisar?",
        paragrafos: [
          "Ao analisar uma proposta, não deve limitar-se ao valor da prestação mensal.",
          "É importante verificar o montante financiado, prazo, taxa de juro, TAEG quando aplicável, comissões, encargos, seguros e outras condições associadas ao contrato.",
        ],
        lista: [
          "Montante do financiamento;",
          "Prazo do contrato;",
          "Taxas de juro aplicáveis;",
          "TAEG e outros custos relevantes;",
          "Valor e periodicidade das prestações;",
          "Comissões e encargos;",
          "Condições associadas a outros produtos ou serviços.",
        ],
      },
      {
        titulo: "Compare antes de decidir",
        paragrafos: [
          "Quando existem diferentes propostas, a análise da FIN ou da FINE permite comparar as condições de forma mais estruturada.",
          "A decisão deve considerar não apenas o valor da prestação, mas também o custo global e as condições que acompanham o financiamento.",
        ],
      },
      {
        titulo: "Leia o contrato antes de assinar",
        paragrafos: [
          "A documentação pré-contratual é uma ferramenta importante, mas deve ser complementada pela leitura atenta da minuta e do contrato.",
          "Em caso de dúvida sobre alguma condição, o cliente deve solicitar esclarecimentos antes de assumir a obrigação financeira.",
        ],
      },
    ],
  },

  {
    slug: "taxa-fixa-variavel-mista",
    categoria: "Financiamento",
    titulo: "Taxa fixa, variável ou mista: quais são as diferenças?",
    resumo:
      "Conheça as principais diferenças entre taxa fixa, variável e mista e compreenda como cada modalidade pode afetar um financiamento.",
    data: "4 outubro 2026",
    tempoLeitura: "6 min",

    imagem: "/images/informativos/taxa-fixa-variavel-ou-mista.webp",
    imagemAlt:
      "Consultor financeiro a analisar diferentes modalidades de taxa de juro",
    imagemDestaque: "/images/informativos/taxa-fixa-variavel-ou-mista.webp",
    imagemDestaqueAlt:
      "Análise profissional de opções de taxa fixa, variável e mista",

    introducao:
      "Nos financiamentos de longo prazo, especialmente no crédito à habitação, podem existir diferentes modalidades de taxa de juro. A escolha entre taxa fixa, variável ou mista influencia a forma como a prestação pode evoluir ao longo do contrato e deve ser analisada de acordo com as características e objetivos de cada cliente.",

    secoes: [
      {
        titulo: "Como funciona uma taxa fixa?",
        paragrafos: [
          "Num período de taxa fixa, a taxa de juro acordada mantém-se durante o período definido no contrato.",
          "Esta modalidade proporciona maior previsibilidade da prestação durante o período de taxa fixa, embora possa apresentar condições diferentes das de uma solução de taxa variável.",
        ],
      },
      {
        titulo: "Como funciona uma taxa variável?",
        paragrafos: [
          "Nos contratos de crédito à habitação com taxa variável, a taxa de juro resulta, em regra, da combinação entre um indexante e um spread.",
          "A Euribor é um dos indexantes habitualmente utilizados no mercado europeu.",
          "Quando o indexante é atualizado, a alteração pode refletir-se na taxa aplicável e, consequentemente, na prestação, de acordo com as condições do contrato.",
        ],
      },
      {
        titulo: "O que é uma taxa mista?",
        paragrafos: [
          "A taxa mista combina dois períodos distintos: inicialmente existe um período de taxa fixa e, posteriormente, um período de taxa variável.",
          "Por exemplo, um contrato pode prever uma taxa fixa durante os primeiros anos e passar depois para uma taxa variável indexada à Euribor.",
        ],
      },
      {
        titulo: "Qual é a melhor opção?",
        paragrafos: [
          "Não existe uma modalidade universalmente melhor para todos os clientes.",
          "A escolha deve considerar o prazo do financiamento, capacidade financeira, preferência por previsibilidade da prestação, tolerância à variação das taxas e condições concretas apresentadas pela instituição.",
        ],
      },
      {
        titulo: "Analise o cenário completo",
        paragrafos: [
          "Uma taxa inicial mais baixa não deve ser analisada isoladamente.",
          "É importante compreender o que acontece depois do período inicial, quais os indexantes aplicáveis, qual o spread e como poderá evoluir a prestação em diferentes cenários.",
        ],
      },
    ],
  },

  {
    slug: "euribor-spread",
    categoria: "Financiamento",
    titulo: "Euribor e spread: como funciona a taxa de um crédito à habitação?",
    resumo:
      "Entenda os dois principais componentes da taxa de juro de muitos contratos de crédito à habitação com taxa variável.",
    data: "4 outubro 2026",
    tempoLeitura: "5 min",

    imagem: "/images/informativos/euribor-spread.webp",
    imagemAlt:
      "Consultor financeiro a analisar uma proposta de crédito à habitação",
    imagemDestaque: "/images/informativos/euribor-spread.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a explicar componentes de uma taxa de crédito à habitação",

    introducao:
      "A expressão Euribor é frequentemente utilizada quando se fala de crédito à habitação em Portugal. No entanto, compreender uma proposta de taxa variável exige também perceber o conceito de spread. A combinação destes elementos determina a taxa de juro aplicável ao financiamento durante o período variável.",

    secoes: [
      {
        titulo: "O que é a Euribor?",
        paragrafos: [
          "A Euribor é uma taxa de referência do mercado monetário interbancário europeu e é utilizada como indexante em diversos contratos financeiros.",
          "Nos contratos de crédito à habitação com taxa variável, pode ser utilizado um prazo específico de Euribor, como 3, 6 ou 12 meses, de acordo com as condições contratadas.",
        ],
      },
      {
        titulo: "O que é o spread?",
        paragrafos: [
          "O spread é uma componente da taxa de juro definida no contrato de crédito.",
          "Num crédito à habitação com taxa variável, a taxa resulta, em regra, da soma entre o indexante e o spread.",
          "O valor do spread depende das condições da operação e dos critérios comerciais e de risco da instituição.",
        ],
      },
      {
        titulo: "Como uma alteração da Euribor pode afetar a prestação?",
        paragrafos: [
          "Quando a taxa de juro do contrato é variável, alterações no indexante podem refletir-se na taxa aplicável ao crédito.",
          "O impacto concreto na prestação depende, entre outros fatores, do capital em dívida, prazo restante, indexante utilizado e condições previstas no contrato.",
        ],
      },
      {
        titulo: "Spread mais baixo significa sempre menor custo?",
        paragrafos: [
          "Não necessariamente. O custo de um financiamento não depende apenas do spread.",
          "É necessário analisar também o indexante, restantes taxas, comissões, seguros, produtos associados e demais encargos da operação.",
        ],
      },
      {
        titulo: "O que deve comparar numa proposta?",
        paragrafos: [
          "Ao comparar propostas de crédito à habitação, procure analisar a estrutura completa da operação.",
          "A prestação inicial é apenas uma parte da análise. É importante perceber a modalidade de taxa, o indexante, o spread, os custos associados e o comportamento esperado da prestação ao longo do contrato.",
        ],
      },
    ],
  },

  {
    slug: "consolidacao-de-creditos",
    categoria: "Crédito pessoal",
    titulo: "Consolidar créditos: em que consiste e o que deve analisar?",
    resumo:
      "A consolidação pode juntar diferentes responsabilidades de crédito numa nova operação. Conheça os principais aspetos que devem ser avaliados.",
    data: "4 outubro 2026",
    tempoLeitura: "6 min",

    imagem: "/images/informativos/consolidacao-de-creditos.webp",
    imagemAlt:
      "Consultor financeiro a analisar uma operação de consolidação de créditos",
    imagemDestaque:
      "/images/informativos/consolidacao-de-creditos-destaque.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a explicar uma operação de consolidação financeira",

    introducao:
      "A consolidação de créditos consiste, de forma geral, na junção de diferentes responsabilidades de crédito numa nova operação. Pode ser utilizada em determinados contextos para reorganizar compromissos financeiros, mas deve ser analisada com atenção porque uma prestação mensal mais baixa não significa necessariamente um custo total inferior.",

    secoes: [
      {
        titulo: "O que significa consolidar créditos?",
        paragrafos: [
          "Numa operação de consolidação, diferentes créditos existentes podem ser reunidos numa única operação, de acordo com as condições aprovadas pela instituição de crédito.",
          "Em vez de existirem várias prestações e contratos separados, pode passar a existir uma nova prestação associada à operação consolidada.",
        ],
      },
      {
        titulo: "Porque é que alguém pode considerar uma consolidação?",
        paragrafos: [
          "Uma das razões pode ser a procura de uma organização mais simples das responsabilidades financeiras.",
          "Dependendo da operação e das condições aprovadas, a consolidação pode também alterar o valor da prestação mensal.",
          "No entanto, a redução da prestação pode resultar de um prazo mais longo, pelo que o custo total deve ser sempre analisado.",
        ],
      },
      {
        titulo:
          "Prestação mais baixa não significa necessariamente menor custo",
        paragrafos: [
          "Este é um dos pontos mais importantes numa operação de consolidação.",
          "Ao aumentar o prazo de pagamento, a prestação mensal pode diminuir, mas o cliente pode permanecer mais tempo com a dívida e suportar juros durante um período mais longo.",
          "Por isso, é fundamental comparar o custo total da nova operação com o conjunto das responsabilidades que pretende substituir.",
        ],
      },
      {
        titulo: "Que informação deve ser analisada?",
        paragrafos: [
          "Antes de avançar, é importante conhecer as responsabilidades que pretende consolidar e reunir informação sobre o capital em dívida, prestações, prazos e condições dos contratos existentes.",
        ],
        lista: [
          "Capital em dívida de cada crédito;",
          "Prestação mensal atual;",
          "Prazo restante;",
          "Taxas e encargos aplicáveis;",
          "Custos associados à nova operação;",
          "Prazo e prestação da nova solução.",
        ],
      },
      {
        titulo: "A consolidação é adequada para todos os casos?",
        paragrafos: [
          "Não. A consolidação deve ser analisada individualmente e depende da situação financeira, das responsabilidades existentes e das condições que possam ser obtidas.",
          "Uma análise responsável deve considerar tanto o impacto mensal como o custo global da operação e a capacidade de pagamento do cliente.",
        ],
      },
    ],
  },

  {
    slug: "reembolso-antecipado",
    categoria: "Financiamento",
    titulo: "Reembolso antecipado: posso pagar um crédito antes do prazo?",
    resumo:
      "Saiba o que significa amortizar antecipadamente um crédito e que condições podem aplicar-se ao reembolso parcial ou total.",
    data: "4 outubro 2026",
    tempoLeitura: "6 min",

    imagem: "/images/informativos/reembolso-antecipado.webp",
    imagemAlt:
      "Consultor financeiro a analisar uma decisão de amortização antecipada",
    imagemDestaque: "/images/informativos/reembolso-antecipado-destaque.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a explicar uma operação de reembolso antecipado",

    introducao:
      "Durante a vida de um contrato de crédito, o cliente pode, em determinadas condições, pretender amortizar antecipadamente parte ou a totalidade do capital em dívida. O reembolso antecipado pode reduzir o período de financiamento ou o capital em dívida, mas é importante conhecer as regras e eventuais custos associados antes de tomar uma decisão.",

    secoes: [
      {
        titulo: "O que é o reembolso antecipado?",
        paragrafos: [
          "O reembolso antecipado consiste em pagar parte ou a totalidade do capital em dívida antes da data inicialmente prevista para o final do contrato.",
          "Pode assumir a forma de reembolso parcial, quando apenas uma parte do capital é amortizada, ou reembolso total, quando o contrato é liquidado antecipadamente.",
        ],
      },
      {
        titulo: "O que acontece num reembolso parcial?",
        paragrafos: [
          "Num reembolso parcial, o cliente reduz o capital em dívida sem liquidar necessariamente todo o contrato.",
          "A amortização pode ter impacto no valor das prestações ou na duração do financiamento, dependendo das condições contratuais e do acordo com a instituição.",
        ],
      },
      {
        titulo: "Pode existir uma comissão?",
        paragrafos: [
          "A existência e o limite da comissão dependem do tipo de crédito, da modalidade de taxa e das regras aplicáveis ao contrato.",
          "No crédito à habitação, por exemplo, o Banco de Portugal indica limites máximos de comissão diferentes consoante se trate de uma taxa variável ou fixa.",
          "Por isso, antes de amortizar antecipadamente, deve confirmar as condições concretas do seu contrato.",
        ],
      },
      {
        titulo: "Vale a pena amortizar antecipadamente?",
        paragrafos: [
          "Não existe uma resposta igual para todos os clientes.",
          "A decisão pode depender da existência de poupanças disponíveis, do custo do crédito, da taxa de juro, da comissão eventualmente aplicável e das alternativas existentes para o capital que seria utilizado na amortização.",
          "É importante não comprometer excessivamente a reserva financeira apenas para reduzir uma dívida.",
        ],
      },
      {
        titulo: "Peça informação antes de tomar uma decisão",
        paragrafos: [
          "Antes de efetuar um reembolso antecipado, é aconselhável solicitar à instituição de crédito informação sobre o impacto da operação.",
          "Desta forma, o cliente pode conhecer o capital em dívida, eventuais encargos e o efeito da amortização sobre o contrato antes de tomar uma decisão.",
        ],
      },
    ],
  },

  {
    slug: "papel-intermediario-credito",
    categoria: "Financiamento",
    titulo:
      "Qual é o papel de um intermediário de crédito num processo de financiamento?",
    resumo:
      "Compreenda o que faz um intermediário de crédito, onde pode acrescentar valor e porque a decisão final pertence sempre à instituição de crédito.",
    data: "4 outubro 2026",
    tempoLeitura: "5 min",

    imagem: "/images/informativos/papel-intermediario-credito.webp",
    imagemAlt:
      "Consultor financeiro a acompanhar um cliente num processo de financiamento",
    imagemDestaque:
      "/images/informativos/papel-intermediario-credito-destaque.webp",
    imagemDestaqueAlt:
      "Consultor financeiro a explicar as etapas de um processo de financiamento",

    introducao:
      "Um processo de financiamento pode envolver diferentes etapas, desde a identificação da necessidade até à apresentação de documentação e análise da operação. Neste contexto, o intermediário de crédito pode desempenhar um papel de acompanhamento e apoio ao cliente, dentro das atividades permitidas pelo seu enquadramento e autorização.",

    secoes: [
      {
        titulo: "O que é um intermediário de crédito?",
        paragrafos: [
          "O intermediário de crédito é uma pessoa singular ou coletiva que exerce atividades de intermediação de crédito nos termos previstos na legislação aplicável e mediante a respetiva autorização e registo quando exigidos.",
          "Em Portugal, os intermediários de crédito autorizados constam das listas disponibilizadas pelo Banco de Portugal.",
        ],
      },
      {
        titulo: "Em que pode ajudar?",
        paragrafos: [
          "Dependendo do seu âmbito de atuação, o intermediário pode apoiar o cliente na preparação do processo, recolha de informação e apresentação do pedido junto das entidades com as quais trabalha.",
          "Este acompanhamento pode facilitar a organização da informação e ajudar o cliente a compreender melhor as diferentes etapas do processo.",
        ],
      },
      {
        titulo: "O intermediário concede o crédito?",
        paragrafos: [
          "Não. O intermediário de crédito não deve ser confundido com a instituição que concede o financiamento.",
          "A concessão do crédito, a aprovação da operação e a definição das condições aplicáveis pertencem à instituição de crédito responsável pela decisão.",
        ],
      },
      {
        titulo: "A apresentação de um pedido garante aprovação?",
        paragrafos: [
          "Não. Nenhum processo de intermediação deve ser entendido como uma garantia automática de aprovação.",
          "A instituição de crédito analisa a situação financeira, documentação, características da operação e restantes critérios aplicáveis antes de tomar a decisão.",
        ],
      },
      {
        titulo: "O que deve verificar antes de trabalhar com um intermediário?",
        paragrafos: [
          "Antes de iniciar um processo, é importante confirmar o enquadramento e a autorização da entidade com quem pretende trabalhar.",
          "O Banco de Portugal disponibiliza informação sobre os intermediários de crédito autorizados a exercer atividade em Portugal.",
          "Também é importante compreender claramente os serviços prestados, eventuais custos e condições do acompanhamento antes de avançar.",
        ],
      },
    ],
  },
];

export function getInformativoBySlug(slug: string): Informativo | undefined {
  return informativos.find(informativo => informativo.slug === slug);
}
