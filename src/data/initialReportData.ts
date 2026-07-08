export const initialReportData = {
  header: {
    title: "Performance Digital Semanal",
    subtitle: "Dominar a atenção e personalizar valor no ecossistema Assaí.",
    period: "29 de Junho a 05 de Julho de 2026"
  },
  general: {
    engagement: { value: "2,14%", prev: "2,68%", growth: "-20,15%", isPositive: false },
    publications: { value: 87, prev: 101, growth: "-23,8%", isPositive: false },
    followers: { value: "6.421.301", prev: "6.414.038", growth: "+0,11%", isPositive: true },
    impressions: { value: "8.592.759", prev: "2.841.811", growth: "+202,37%", isPositive: true },
    interactions: { value: "110.439", prev: "72.032", growth: "+53,32%", isPositive: true },
  },
  channels: [
    {
      id: "facebook",
      name: "Facebook",
      icon: "Facebook",
      color: "bg-blue-600",
      textColor: "text-blue-600",
      metrics: {
        engagement: { value: "2,28%", prev: "2,43%", growth: "-6,2%", isPositive: false },
        followers: { value: "1.838.290", growth: "-0,005%", isPositive: false },
        pubs: { value: 20, prev: 18, growth: "+11,1%", isPositive: true },
        impressions: { value: "215.822", prev: "270.727", growth: "-20,3%", isPositive: false },
        interactions: { value: "1.218", prev: "6.895", growth: "-82,3%", isPositive: false }
      }
    },
    {
      id: "instagram-feed",
      name: "Instagram (Feed)",
      icon: "Instagram",
      color: "bg-pink-600",
      textColor: "text-pink-600",
      metrics: {
        engagement: { value: "0,92%", prev: "1,03%", growth: "-10,7%", isPositive: false },
        followers: { value: "4.469.888", growth: "+0,15%", isPositive: true },
        pubs: { value: 26, prev: 31, growth: "-16,1%", isPositive: false },
        impressions: { value: "1.746.710", prev: "2.313.585", growth: "-24,5%", isPositive: false },
        interactions: { value: "18.643", prev: "17.455", growth: "+6,8%", isPositive: true }
      }
    },
    {
      id: "instagram-stories",
      name: "Instagram (Stories)",
      icon: "Instagram",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      metrics: {
        engagement: { value: "2,86%", prev: "3,03%", growth: "-5,61%", isPositive: false },
        followers: { value: "4.469.888", growth: "+0,15%", isPositive: true },
        pubs: { value: 31, prev: 38, growth: "-18,4%", isPositive: false },
        impressions: { value: "2.578.761", prev: "2.848.108", growth: "-9,46%", isPositive: false },
        interactions: { value: "65.440", prev: "77.192", growth: "-15,2%", isPositive: false }
      }
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: "Video",
      color: "bg-black",
      textColor: "text-black",
      metrics: {
        engagement: { value: "3,72%", prev: "2,08%", growth: "+78,8%", isPositive: true },
        followers: { value: "113.123", growth: "+0,48%", isPositive: true },
        pubs: { value: 10, prev: 14, growth: "-28,6%", isPositive: false },
        impressions: { value: "475.574", prev: "996.889", growth: "-52,3%", isPositive: false },
        interactions: { value: "3.131", prev: "8.897", growth: "-64,8%", isPositive: false }
      }
    }
  ],
  behavior: {
    categories: [
      { name: "OFERTAS", percentage: 29.00, interactionPercentage: 51.50, color: "bg-orange-500" },
      { name: "RELACIONAL", percentage: 35.00, interactionPercentage: 23.00, color: "bg-rose-400" },
      { name: "FACILIDADES", percentage: 16.00, interactionPercentage: 16.50, color: "bg-emerald-600" },
      { name: "INFLUENCIADOR", percentage: 11.00, interactionPercentage: 3.50, color: "bg-violet-500" },
      { name: "INSTITUCIONAL", percentage: 9.00, interactionPercentage: 5.50, color: "bg-blue-600" }
    ],
    formats: [
      {
        channel: "Picos de Performance",
        desc: "O Instagram Stories registrou os maiores picos de eficiência da semana através das telas de urgência \"É amanhã\" e \"É hoje\" (13,93% e 12,34% de engajamento).\n\nO TikTok e o Instagram Feed lideraram o alcance bruto geral através das receitas juninas da Cozinha Assaí, ultrapassando 336 mil visualizações em um único post."
      },
      {
        channel: "1 Insight Comercial",
        desc: "Ativações comerciais com gatilhos de curtíssimo prazo e forte senso de escassez convertem até dez vezes mais engajamento do que posts institucionais tradicionais.\n\nUtilizar o entretenimento culinário focado em sazonalidades atrai público em massa, gerando a oportunidade perfeita para direcionar vendas integradas no aplicativo."
      },
      {
        channel: "Facebook",
        desc: "A plataforma gerou mais de 198 mil usuários alcançados, concentrando seu sucesso nas ofertas estruturadas para o \"Dia Imbatível\" e para o \"Acelera\".\n\nO conteúdo de aquecimento \"Prepare-se\" isolou-se como o campeão de visibilidade ao impactar 55 mil pessoas de forma orgânica com 4,66% de engajamento."
      },
      {
        channel: "Instagram Feed",
        desc: "O canal superou as 2,3 milhões de impressões totais, impulsionado pelas publicações de receitas com influenciadores e pelo patrocínio da Casa do Patrão.\n\nO vídeo de \"Canjica com Oreo\" quebrou a passividade de consumo do feed e liderou o envolvimento do formato ao registrar ótimos 6,49% de engajamento."
      },
      {
        channel: "Instagram Stories",
        desc: "Consolidou-se como a ferramenta mais agressiva de conversão da semana ao somar mais de 2,3 milhões de alcance e acumular 77 mil interações na semana.\n\nOs formatos de ofertas rápidas \"Imbatível\" e \"Acelera\" registraram as performances mais agressivas de cliques e conversões diretas do período."
      },
      {
        channel: "TikTok",
        desc: "A rede atingiu a marca de 996 mil visualizações focadas em gastronomia junina, consolidando grande visibilidade de marca e entrega algorítmica na plataforma.\n\nApesar do alcance bruto elevado da Cozinha Assaí, o topo de engajamento relativo foi conquistado pelo conteúdo focado em ofertas \"Fusão máxima\" (4,72%)."
      }
    ]
  },
  followerTimeline: [
    { date: "29/06", facebook: 1838374, instagram: 4463079, tiktok: 112585, total: 6414038 },
    { date: "30/06", facebook: 1838332, instagram: 4464078, tiktok: 112695, total: 6415105 },
    { date: "01/07", facebook: 1838324, instagram: 4465198, tiktok: 112768, total: 6416290 },
    { date: "02/07", facebook: 1838320, instagram: 4466516, tiktok: 112798, total: 6417634 },
    { date: "03/07", facebook: 1838335, instagram: 4467679, tiktok: 112837, total: 6418851 },
    { date: "04/07", facebook: 1838354, instagram: 4469274, tiktok: 112954, total: 6420582 },
    { date: "05/07", facebook: 1838290, instagram: 4469888, tiktok: 113123, total: 6421301 }
  ],
  highlights: [
    {
      network: "Instagram Stories",
      date: "02/06",
      title: "Alerta ta mais Barato!",
      eng: "19,5%",
      interactions: "17.980",
      type: "Ofertas",
      color: "border-orange-500",
      image: "https://i.imgur.com/PH45B36.png"
    },
    {
      network: "Facebook",
      date: "06/06",
      title: "Funcionário de loja | Copos da Torcida!",
      eng: "1,36%",
      interactions: "180",
      link: "https://www.facebook.com/reel/1515008893456599",
      type: "Ofertas",
      color: "border-blue-600",
      image: "https://i.imgur.com/BGgSojm.png"
    },
    {
      network: "Instagram Feed",
      date: "05/06",
      title: "Churrascômetro Assaí!",
      eng: "2,01%",
      interactions: "1.549",
      link: "https://www.instagram.com/p/DZM8b2JkR_X/",
      type: "Facilidade",
      color: "border-pink-600",
      image: "https://i.imgur.com/XZWo2IO.png"
    },
    {
      network: "TikTok",
      date: "05/06",
      title: "Funcionário de loja | Copa da Torcida!",
      eng: "4,31%",
      interactions: "116",
      link: "https://www.tiktok.com/@assaiatacadistaoficial/video/7647880123470990612",
      type: "Relacional",
      color: "border-black",
      image: "https://i.imgur.com/xQI5Mdn.png"
    }
  ],
  insights: [
    {
      title: "Acontecimento da Semana",
      desc: "A veiculação da campanha Casa do Patrão tiveram baixa performance essa semana, tivemos uma quantidade considerável de posts que não geraram conexão com o publico.",
      icon: "Users",
      type: "neutral"
    },
    {
      title: "Estratégias de Sucesso",
      desc: "No Feed, por mais que tivemos uma queda na rede tivemos a estratégia mais efetiva na rede, que é usar a disputa amigável e incentivar a interação com o post de sugestão de placar, unindo o momento da Copa com gamificação.",
      icon: "TrendingUp",
      type: "positive"
    },
    {
      title: "Alerta",
      desc: "Precisamos revisar o formato de postagens no feed que não geram conexão ou não possuem chamadas para ação (CTAs) claros. Entregar muito alcance sem um ponto de clique imediato ou automação de DM esfria o cliente e é severamente punido pelo algoritmo atual. O melhor post na rede é um exemplo que gera interação e gamificação.",
      icon: "AlertOctagon",
      type: "negative"
    },
    {
      title: "Correlação com o Mercado",
      desc: "O cenário desta semana reflete perfeitamente o \"Choque do CPM\" apontado pelo Meio & Mensagem em 2026. Com a mídia paga da Meta atingindo custos proibitivos, o mercado decretou o fim do tráfego barato, provando que marcas que não constroem relevância orgânica e \"conteúdos de conforto\" focados em utilidade estão desperdiçando orçamento.",
      icon: "Target",
      type: "neutral"
    },
    {
      title: "Foco para Próximas Produções",
      desc: "A prioridade absoluta será a execução cirúrgica das campanhas. Vamos focar em conveniência no Facebook/Feed e na implementação obrigatória de automação de links diretos via Direct nos Stories para fechar o funil sem atrito.",
      icon: "Lightbulb",
      type: "focus"
    }
  ],
  blog: {
    sessions: "11.345",
    avgTime: "35s",
    engagement: "55,22%",
    topArticles: [
      { path: "/blog/marcas-mais-valiosas", sessions: "1.926", engagement: "65,41%" },
      { path: "/blog/comidas-tipicas-sao-joao", sessions: "1.043", engagement: "65,41%" },
      { path: "/blog/comidas-de-festa-junina", sessions: "585", engagement: "48,55%" },
      { path: "/blog/copos-da-torcida", sessions: "521", engagement: "51,25%" },
      { path: "/blog/cortesia-de-aniversario", sessions: "312", engagement: "51,6%" }
    ]
  },
  marketTrends: [
    { title: 'Inteligência Artificial e Retail Media Conectando Indústria e Food Service', desc: 'O mercado de atacarejo consolidou o uso de inteligência artificial preditiva integrada a plataformas de Retail Media para otimizar radicalmente a jornada de compra do transformador de alimentos. Através dos dados de navegação capturados por aplicativos B2B, as grandes redes de atacado conseguem prever o esgotamento de estoque dos comércios locais e disparar anúncios, ofertas e cupons hiper-personalizados no momento exato em que o empreendedor abre o app para reabastecer. Essa inteligência preditiva eleva o faturamento das indústrias fornecedoras e reduz drasticamente o risco de desabastecimento em bares e restaurantes. A cobertura jornalística completa sobre as inovações tecnológicas e o avanço do varejo alimentar digital pode ser acompanhada diretamente no portal Valor Econômico em valor.globo.com.', icon: 'Zap', colorClass: 'text-[#0054A6]' },
    { title: 'Integração Logística e Insumos Ultra-Fracionados para Cozinhas Profissionais', desc: 'Diante da pressão contínua sobre os custos operacionais (aluguel, mão de obra e energia), os atacarejos assumiram o papel de hubs de conveniência e parceiros de estocagem terceirizados do food service. A grande tendência atual é a expansão de linhas de produtos ultra-fracionados, higienizados e pré-preparados voltados exclusivamente para cozinhas profissionais e dark kitchens, o que elimina etapas de manipulação e reduz o desperdício de matéria-prima. Essa cadeia sob demanda é potencializada por integrações diretas de frota com grandes aplicativos de entrega, permitindo que pequenos restaurantes operem com estoques mínimos e entregas programadas. Os relatórios mensais e os índices de desempenho macroeconômico do setor de alimentação fora do lar podem ser validados no site oficial da Abrasel em abrasel.com.br.', icon: 'ShoppingBag', colorClass: 'text-[#F37021]' },
    { title: 'Consolidação e Premiumização das Marcas Próprias como Defesa de Margem', desc: 'A busca acelerada por eficiência e blindagem contra a inflação de custos transformou a percepção das Marcas Próprias (Private Label) no atacarejo, que deixaram de ser vistas como produtos de segunda linha e passaram por um forte processo de premiumização. Em 2026, os operadores de food service utilizam massivamente os produtos exclusivos das redes de atacado em suas receitas estruturais, uma vez que essas marcas entregam a mesma qualidade técnica e sensorial das marcas líderes industriais, mas com uma economia que varia de 15% a 25%. Essa migração estratégica de consumo tem sido o principal mecanismo de defesa dos restaurantes para manter os preços dos cardápios competitivos para o consumidor final. As pesquisas de mercado, dados de penetração em gôndola e o comportamento de consumo desse segmento estão disponíveis na Associação Brasileira de Supermercados em abras.com.br.', icon: 'Users', colorClass: 'text-emerald-600' }
  ],
  campaigns: [
    { name: 'Acelera com Preço Baixo', reach: '550.233', eng: '4,04%', imp: '703.161', views: '0', clicks: '30.760', traffic: '0' },
    { name: 'Casa do Patrão', reach: '1.090.149', eng: '0,67%', imp: '1.320.974', views: '0', clicks: '6.159', traffic: '0' }
  ],
  networkView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'Conteúdo com narrativa supera conteúdo informativo.' },
      { title: 'Aprendizado 2', desc: 'Preço continua sendo o maior gatilho de interação.' },
      { title: 'Aprendizado 3', desc: 'Branding performa quando se comporta como entretenimento.' }
    ],
    panel: {
      reach: '+38%',
      engagement: '1.2M',
      impressions: '4.5M',
      views: '850K',
      clicks: '12K',
      videoViews: '+15%',
      insight: 'A audiência cresceu, mas o aumento de volume reduziu a profundidade das interações.'
    },
    behavior: {
      good: ['Oferta Clara & Direta', 'Senso de Urgência', 'Apelo de Economia', 'Identificação com a Rotina'],
      bad: ['Institucional puro sem contexto', 'Conteúdo Passivo / Apenas informativo', 'Excesso de frequência sem variação']
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '0,41%', meta: '257.501 / 1.060', label: 'Foto Evento / Pessoa Comendo (Institucional Passivo)', isPeak: false },
        { percentage: '1,78%', meta: '36.387 / 649', label: 'Prêmio Academia Assaí 2025 - Ele está de volta', isPeak: true },
        { percentage: '0,64%', meta: '31.174 / 200', label: '3 Dicas para aproveitar o #Sextou (Contexto Genérico)', isPeak: false },
        { percentage: '1,84%', meta: '130.448 / 2.404', label: 'Acelera com Preço Baixo (Vídeo de Balcão/Freezer)', isPeak: true },
        { percentage: '0,65%', meta: '49.521 / 322', label: 'Acelera com Preço Baixo - Baixou ainda mais (Excesso)', isPeak: false },
        { percentage: '2,55%', meta: '86.656 / 2.209', label: 'Post do Mascote Sol (Narrativa/Gamificação)', isPeak: true, highlight: 'Maior Pico' }
      ]
    },
    saturation: {
       weeks: [
         { period: 'Semana 1', volume: '10 posts', efficiency: 'Alta', color: 'bg-[#0054A6]', width: '85%' },
         { period: 'Semana 2', volume: '18 posts', efficiency: 'Baixa (Diluição)', color: 'bg-[#F37021]', width: '45%' },
       ],
       insight: 'O crescimento de distribuição não foi acompanhado pela mesma intensidade de interação, indicando estafa na audiência.'
    },
    champion: {
      title: 'Desconstruindo o caso "Dia do Sol"',
      desc: 'A performance excepcional não decorreu apenas de mídia isolada, mas da combinação de 4 fatores editoriais principais:',
      factors: [
        { num: '1', title: 'Narrativa', desc: 'História com início, meio e fim, conectando o usuário ao produto emocionalmente.' },
        { num: '2', title: 'Gamificação', desc: 'Mecânica leve e interativa que induz a retenção voluntária na peça.' },
        { num: '3', title: 'Curiosidade', desc: 'Quebra de expectativa no formato gerando tempo de tela prolongado.' },
        { num: '4', title: 'Participação', desc: 'Call-to-action inclusivo focando na opinião e vivência do cliente final.' }
      ]
    },
    categories: {
      nodes: [
        { title: 'Relacional', desc: '30.3% Volume', borderClass: 'border-rose-200 border-t-rose-400' },
        { title: 'Ofertas', desc: '29.8% Volume', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'Facilidades', desc: '19.7% Volume', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'Influenciador', desc: '14.3% Volume', borderClass: 'border-violet-200 border-t-violet-500' },
        { title: 'Institucional', desc: '5.4% Volume', borderClass: 'border-blue-200 border-t-blue-600' },
        { title: 'Dicas', desc: '0.5% Volume', borderClass: 'border-amber-200 border-t-amber-400' }
      ]
    },
    opportunities: [
      { title: 'Creators Regionais', desc: 'Micro influenciadores com alta penetração em praças-chave.' },
      { title: 'Social Commerce', desc: 'Integração nativa de compras diretamente nas plataformas (Loja In-App).' },
      { title: 'Vídeos de Bastidor', desc: 'Rotina crua das lojas gerando conexão e transparência com consumidores.' },
      { title: 'Prova Social & UGC', desc: 'Conteúdo gerado pelo próprio usuário endossando economia nas lojas.' },
      { title: 'Conteúdo Farma', desc: 'Setor com alta recorrência subaproveitado no grid principal.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Aumentar qualidade (Foco em Produndidade)', desc: 'Menos postagens superficiais e mais foco em conteúdos que prendem a atenção e iniciam conversas reais.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Reduzir saturação (Ajuste do Volume)', desc: 'Recalibrar o número de inserções semanais para evitar desgaste e fadiga do algoritmo e do público.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Escalar formatos vencedores', desc: 'Investimento dobrado em criadores de conteúdo validados e produções de vídeo mais curtas e ágeis.' }
    ]
  },
  tiktokView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'Conteúdos focados no aplicativo próprio e em parcerias de facilidades entregam os maiores picos de engajamento relativo da conta.' },
      { title: 'Aprendizado 2', desc: 'Vídeos que envolvem diretamente os funcionários da loja mantêm um patamar de conexão comunitária muito mais sólido do que vídeos institucionais vazios.' },
      { title: 'Aprendizado 3', desc: 'Postagens associadas a grandes patrocínios concentram quase a totalidade das visualizações brutas, mas falham drasticamente em engajamento proporcional se não forem humanizadas.' }
    ],
    panel: {
      views: '475.574',
      viewsComp: '-52,3% vs. 996.889 do período anterior',
      engagement: '3,72%',
      engagementComp: '+78,8% vs. 2,08% do período anterior',
      posts: '10',
      postsComp: '-28,6% vs. 14 do período anterior',
      interactions: '3.131',
      interactionsComp: '-64,8% vs. 8.897 do período anterior',
      videoViews: '4,6s',
      videoViewsComp: '',
      insight: 'O conteúdo focado em Patrocínio (Casa do Patrão) atuou de forma anômala: gerou 96,6% de todas as visualizações da semana (268.740 views) e 88,3% das interações, mas obteve o menor engajamento proporcional (0,98%). Em contrapartida, conteúdos menores com a participação de funcionários (APP e Passaí) performaram com as maiores taxas de engajamento (beirando 5%), indicando que o algoritmo pune o envolvimento percentual quando há uma entrega em massa sem estímulo direto à conversa.'
    },
    behavior: {
      good: [
        'Vídeos curtos sobre as funcionalidades e vantagens do aplicativo próprio (APP) estrelados por colaboradores locais.',
        'Apresentação de facilidades comerciais e serviços (como Passaí) conduzidos pela colaboradora Josy.',
        'Conteúdos focados na temática futebolística regional ("Copa da Torcida") com funcionários interagindo na loja.',
        'Quadros dinâmicos e leves com funcionários aos sábados pela manhã geram excelente envolvimento relativo (4,68%).'
      ],
      bad: [
        'Conteúdos massivos sobre grandes marcas parceiras ou patrocínios institucionais sem dinâmicas interativas focadas na comunidade.',
        'Linhas editoriais focadas em serviços terceiros (como Rappi e iFood) entregues de forma fria no final de semana.',
        'Vídeos com ausência de rostos humanos ou sem um interlocutor claro representando a marca ("Grupo vazio").',
        'Publicações institucionais repetitivas postadas de forma rígida exatamente no mesmo horário todos os dias.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '4,72%', meta: '1.166 / 55', label: 'Quinta-feira 18/06: Categoria FACILIDADES (Funcionário de loja | Copa Junina)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/Zxrtbnf.png' },
        { percentage: '0,18%', meta: '336.358 / 610', label: 'Terça-feira 23/06: Categoria RECEITA (Receita de Canjica com Oreo)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/ftF9WbN.png' },
        { percentage: '4,66%', meta: '343 / 16', label: 'Quarta-feira 24/06: Categoria FACILIDADES (App meu Assaí)', isPeak: true, image: 'https://i.imgur.com/qb4HNXN.png' },
        { percentage: '0,24%', meta: '207.667 / 494', label: 'Quarta-feira 24/06: Categoria RELACIONAL (Casa do Patrão)', isPeak: false, image: 'https://i.imgur.com/HqS1yhB.png' },
        { percentage: '4,68%', meta: '3.831 / 154', label: 'Domingo 28/06: Categoria RELACIONAL (Funcionário de loja | Josy | Copa da Torcida)', isPeak: true, image: 'https://i.imgur.com/wFvWKpn.png' }
      ]
    },
    champions: [
      {
        title: 'Estático de Relacional – Grupo: Placar do Jogo?',
        desc: '4,16% de Engajamento | 63 Interações | (Visualizações) | 1.513 de Alcance',
        link: 'https://www.tiktok.com/@assaiatacadistaoficial/video/7657922891182394641',
        image: 'https://i.imgur.com/3dyHuqf.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'Os funcionários no Tiktok, trás mais autoridade para divulgar pois são bem carismáticos e transmitem um reconhecimento com o publico maior. Então vincular campanhas e trends com eles tem alta taxa de resultados serem mais efetivos.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Representa 60,00% de toda a grade | 274.652 Visualizações | 2.845 Interações', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'FACILIDADES', desc: 'Corresponde a 40,00% do volume | 3.464 Visualizações | 150 Interações', borderClass: 'border-emerald-200 border-t-emerald-600' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Centralização extrema de todas as postagens às 10:00 da manhã, ignorando horários de almoço e finais de tarde.' },
      { title: 'Oportunidade', desc: 'Total ausência da categoria de OFERTAS na grade do TikTok, gerando um descolamento das promoções comerciais vigentes.' },
      { title: 'Oportunidade', desc: 'Falta de estímulo de engajamento ativo (como perguntas ou dinâmicas) nos posts com maior potencial de viralização de Patrocínio.' },
      { title: 'Oportunidade', desc: 'Baixo aproveitamento do potencial de cross-selling entre os parceiros de delivery (iFood/Rappi) e os funcionários da própria loja.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Flexibilizar a grade horária da semana, testando publicações estratégicas nos períodos das 12:00 e das 18:00.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Reintroduzir pílulas dinâmicas de OFERTAS adaptadas à linguagem nativa e ágil do TikTok.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Implementar perguntas provocativas ou CTAs focados nos comentários para os posts de grandes Patrocínios para aumentar o engajamento relativo.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Integrar influenciadores ou rostos conhecidos como a Josy nas postagens de parcerias com aplicativos para alavancar a tração dos vídeos de entrega.' }
    ]
  },
  facebookView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'O público do Facebook responde com alto volume de comentários e compartilhamentos em posts focados em interatividade direta e paixão pelo futebol.' },
      { title: 'Aprendizado 2', desc: 'A redução estratégica no volume de posts corporativos evitou a dispersão de alcance orgânico e elevou a eficiência percentual da página.' },
      { title: 'Aprendizado 3', desc: 'Formatos comerciais estáticos sem uma oferta agressiva ou benefício imediato de preço geram baixa tração na base tradicional de seguidores.' }
    ],
    panel: {
      reach: '164.992',
      reachComp: '-17,1% comparado ao período anterior de 198.915',
      engagement: '2,28%',
      engagementComp: '-6,2% comparado ao período anterior de 2,43%',
      impressions: '215.822',
      impressionsComp: '-20,3% comparado ao período anterior de 270.727',
      posts: '20',
      postsComp: '+11,1% comparado ao período anterior de 18',
      interactions: '1.218',
      interactionsComp: '-82,3% comparado ao período anterior de 6.895',
      insight: 'Qualidade concentrada superando o volume disperso: O encurtamento da grade semanal em 33% limpou o feed de postagens institucionais redundantes que flutuavam com baixa performance. Essa higienização permitiu que os conteúdos de Entretenimento e Ofertas retivessem a atenção da base madura de forma muito mais assertiva, fazendo a taxa de engajamento médio quase dobrar (+91,14%), provando que menos telas focadas em relevância geram maior conexão comunitária.'
    },
    behavior: {
      good: [
        'Posts de perguntas diretas e enquetes temáticas sobre futebol disparam o volume de respostas nos comentários.',
        'Cards informativos de utilidade pública detalhando horários de funcionamento em feriados recebem alta taxa de compartilhamento.',
        'Vídeos curtos com ganchos claros de economia e cupons de descontos para aplicativos estimulam interações rápidas.',
        'Publicações destacando marcas parceiras tradicionais do varejo ativam o interesse de compra da base de pequenos comerciantes.'
      ],
      bad: [
        'Textos institucionais longos com linguagem muito corporativa e sem rostos humanos locais afastam a interação do público.',
        'Publicações da linha editorial Relacional repetindo exaustivamente layouts da "Casa do Patrão" mostram forte fadiga de atenção.',
        'Conteúdos promocionais postados nas primeiras horas da manhã de segunda-feira sofrem com baixa tração orgânica absoluta.',
        'Formatos informativos de facilidades logísticas que não trazem uma vantagem financeira imediata geram baixo envolvimento.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '2,04%', meta: '6.602 / 112', label: 'Terça-feira 23/06: Categoria OFERTAS (Grupo: Esquenta para o Jogo)', isPeak: true, image: 'https://i.imgur.com/xKpJJnW.png' },
        { percentage: '0,92%', meta: '6.533 / 45', label: 'Terça-feira 23/06: Categoria FACILIDADES (Grupo: Rappi)', isPeak: false, image: 'https://i.imgur.com/vvNRUn4.png' },
        { percentage: '5,22%', meta: '23.957 / 1.251', label: 'Quinta-feira 25/06: Categoria OFERTAS (Grupo: É Amanhã | Acelera com Preço Baixo)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/t8gATIT.png' },
        { percentage: '1,10%', meta: '12.340 / 136', label: 'Sexta-feira 26/06: Categoria RELACIONAL (Grupo: Embalixo | Casa do Patrão)', isPeak: false, image: 'https://i.imgur.com/51NQhXl.png' },
        { percentage: '0,68%', meta: '2.363 / 16', label: 'Sábado 27/06: Categoria RECEITA (Grupo: Arroz Doce)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/s7m7WJn.png' }
      ]
    },
    champions: [
      {
        title: 'Estático de Institucional – Grupo: Horário de Funcionamento',
        desc: '4,01% de Engajamento | 514 Interações | 18.825 Impressões (Visualizações) | 12.815 de Alcance',
        link: 'https://www.facebook.com/assaiatacadistaoficial/posts/pfbid0tk8JhR7NzLmmE5FKJbfyup7cserDhTyNiBqStYZizgDR6pNZNf8vqeDG34AoPyT5l',
        image: 'https://i.imgur.com/dAtaY9j.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'O post com o horário de funcionamento das lojas apresentam e apresentaram no nosso histórico bons resultados, por que traz valor em informar o que p publico busca, tornando o post salvável e compartilhável.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Concentrou 37,50% do volume publicado na semana (3 posts), gerando o acumulado de 18.286 visualizações (impressões) e 115 interações.', borderClass: 'border-rose-200 border-t-rose-500' },
        { title: 'ENTRETENIMENTO', desc: 'Representou 25,00% das publicações da grade (2 posts), conquistando o maior engajamento proporcional com 22.500 visualizações (impressões) e 315 interações.', borderClass: 'border-purple-200 border-t-purple-600' },
        { title: 'OFERTAS / FACILIDADES', desc: 'Correspondeu a 25,00% do mix de conteúdos da plataforma (2 posts), somando 28.400 visualizações (impressões) e gerando 295 interações.', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'INSTITUCIONAL', desc: 'Ocupou 12,50% do inventário de telas distribuídas (1 post), registrando a entrega de 10.400 visualizações (impressões) e um total de 58 interações.', borderClass: 'border-blue-200 border-t-blue-600' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Falta de dinâmicas de vídeos de receitas rápidas econômicas voltadas para microempreendedores juninos na plataforma.' },
      { title: 'Oportunidade', desc: 'Subaproveitamento do espaço fixo dos comentários para embutir links de direcionamento direto para o e-commerce.' },
      { title: 'Oportunidade', desc: 'Ausência de cupons de descontos exclusivos ou dinâmicas nativas de recompensas para os seguidores do canal.' },
      { title: 'Oportunidade', desc: 'Escassez de postagens focadas em dicas de economia doméstica distribuídas nas faixas de horário nobre noturno.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Ampliar a linha de Entretenimento interativo utilizando ganchos de futebol e festas regionais para manter a página aquecida.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Concentrar as postagens comerciais de Ofertas estritamente nas faixas de final de tarde de quinta-feira a sábado.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Implementar respostas ativas e rápidas da marca nos comentários de maior destaque para inflar o engajamento orgânico.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Inserir o rosto de colaboradores reais na pauta de Facilidades para humanizar a entrega e aproximar o cliente do PDV.' }
    ]
  },
  instagramFeedView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'Receitas dinâmicas em parceria com influenciadores focadas em culinária afetiva sazonal são os maiores imãs de engajamento e conexão do feed.' },
      { title: 'Aprendizado 2', desc: 'Aumentar agressivamente a quantidade de posts dilui a taxa de engajamento se a grade for preenchida por linhas editoriais corporativas repetitivas.' },
      { title: 'Aprendizado 3', desc: 'Avisos operacionais de alta utilidade prática geram picos massivos de visualizações e interações se veiculados em datas estratégicas como vésperas de feriados e fins de semana.' }
    ],
    panel: {
      reach: '1.405.691',
      reachComp: '-16,7% em comparação ao período anterior (1.686.570)',
      engagement: '0,92%',
      engagementComp: '-10,7% comparado ao patamar anterior (1,03%)',
      impressions: '1.746.710',
      impressionsComp: '-24,5% frente ao volume anterior (2.313.585)',
      posts: '26',
      postsComp: '-16,1% no inventário da grade (anterior foi de 31)',
      interactions: '18.643',
      interactionsComp: '+6,8% (anterior foi de 17.455)',
      reposts: '753',
      repostsComp: '-51,5% em relação ao ciclo anterior (1.554)',
      videoViews: '4s',
      videoViewsComp: 'Desempenho consolidado com média de 4 segundos de atenção qualificada nos formatos audiovisuais.',
      insight: 'A armadilha da hiperfrequência sem diferenciação: Embora a duplicação no volume de postagens (+106,67%) tenha escalado a visibilidade absoluta do perfil para marcas históricas superiores a 2,3 milhões de impressões, a insistence em pautas institucionais repetitivas (como múltiplos posts da "Casa do Patrão" ou promoções estáticas frias) arrastou o engajamento médio para baixo (-11,97%). Isso prova que o algoritmo pune o excesso de conteúdos burocráticos, exigindo foco absoluto em narrativas de alta relevância comunitária e apelo prático, como a Cozinha Assaí.'
    },
    behavior: {
      good: [
        'Receitas dinâmicas unindo ingredientes populares com criadores de conteúdo explodem as métricas de curtidas e salvamentos.',
        'Parcerias no formato Reels em collab com influenciadores que dominam o universo do futebol garantem forte retenção emocional.',
        'Avisos essenciais sobre o horário de funcionamento de feriados centralizam o maior volume absoluto de interações e compartilhamentos da semana.',
        'Chamadas com gatilhos de antecipação claros sobre promoções futuras ("É amanhã") sustentam as taxas de cliques e envios.'
      ],
      bad: [
        'Sequências exaustivas e estáticas da pauta "Casa do Patrão" geram desinteresse imediato e derrubam o engajamento para os piores níveis.',
        'Anúncios promocionais focados apenas no logotipo de fornecedores sem contextualização de benefício real afastam o público.',
        'Formatos estáticos institucionais baseados em wallpapers e telas corporativas abstratas flutuam com curtidas residuais.',
        'Campanhas de "Esquenta pro jogo" sem incentivo interativo direto na legenda amargam baixíssima tração no feed.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '1,91%', meta: '24.495 / 467', label: 'Segunda-feira 22/06: Categoria INFLUENCER (Grupo: Gabrielholtz)', isPeak: true, image: 'https://i.imgur.com/XDwqusJ.png' },
        { percentage: '6,49%', meta: '35.661 / 2.314', label: 'Terça-feira 23/06: Categoria RELACIONAL (Grupo: Canjica com Oreo (Cozinha Assaí))', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/dPdGoJu.png' },
        { percentage: '0,27%', meta: '36.845 / 99', label: 'Terça-feira 23/06: Categoria RELACIONAL (Grupo: Esquenta pro jogo)', isPeak: false, image: 'https://i.imgur.com/xKpJJnW.png' },
        { percentage: '0,29%', meta: '31.496 / 90', label: 'Terça-feira 23/06: Categoria RELACIONAL (Grupo: Oral-B)', isPeak: false, image: 'https://i.imgur.com/GezZ307.png' },
        { percentage: '1,74%', meta: '66.394 / 1.157', label: 'Quinta-feira 25/06: Categoria OFERTAS (Grupo: É amanhã | Acelera)', isPeak: true, image: 'https://i.imgur.com/IeM1TW3.png' },
        { percentage: '0,32%', meta: '28.410 / 90', label: 'Quinta-feira 25/06: Categoria INSTITUCIONAL (Grupo: Wallpaper)', isPeak: false, image: 'https://i.imgur.com/ReRv6EA.png' },
        { percentage: '0,22%', meta: '44.740 / 97', label: 'Sexta-feira 26/06: Categoria RELACIONAL (Grupo: casa do Patrão | Embalixo)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/ZHRcXdt.png' },
        { percentage: '1,67%', meta: '188.719 / 3.151', label: 'Domingo 28/06: Categoria INSTITUCIONAL (Grupo: Horario de funcionamento | Copa)', isPeak: true, image: 'https://i.imgur.com/992r6Lf.png' }
      ]
    },
    champions: [
      {
        title: 'Estático de Relacional – Grupo: Placar do Jogo?',
        desc: '4,18% de Engajamento | 1.727 Interações | 70.003 Impressões (Visualizações) | 43.939 de Alcance',
        link: 'https://www.instagram.com/p/DaK2LbNltIF/',
        image: 'https://i.imgur.com/vxBYCMn.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'O incentivo a interação em fusão com o tema de copa, com um tema saldável para chamar o publico para dar seu palpite da para o jogo.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Liderou a grade com 35,48% de participação (11 posts), gerando 906.769 visualizações (impressões) e 7.352 interações.', borderClass: 'border-rose-200 border-t-rose-500' },
        { title: 'OFERTAS', desc: 'Correspondeu a 29,03% das postagens feitas (9 posts), somando 658.716 visualizações (impressões) e 4.592 interações.', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'INFLUENCIADOR', desc: 'Representou 16,13% do mix da plataforma (5 posts), registrando 234.403 visualizações (impressões) e 1.501 interações.', borderClass: 'border-purple-200 border-t-purple-600' },
        { title: 'FACILIDADES', desc: 'Respondeu por 9,68% do inventário da semana (3 posts), obtendo 72.191 visualizações (impressões) e 349 interações.', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'INSTITUCIONAL', desc: 'Ocupou 6,45% da grade semanal (2 posts), mas tracionou em massa ao registrar 374.309 visualizações (impressões) e 3.241 interações.', borderClass: 'border-blue-200 border-t-blue-600' },
        { title: 'PATROCINADOR', desc: 'Equivaleu a 3,23% da distribuição (1 post), alcançando 67.197 visualizações (impressões) e 420 interações.', borderClass: 'border-amber-200 border-t-amber-500' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Pouco aproveitamento do sucesso da "Cozinha Assaí" para ancorar pautas promocionais diretas de produtos juninos na mesma semana.' },
      { title: 'Oportunidade', desc: 'Subestimação do formato institucional de utilidade pública, que demonstrou a maior retenção de volume absoluto nos finais de semana.' },
      { title: 'Oportunidade', desc: 'Baixa eficiência dos carrosséis convencionais de receitas, revelando a necessidade de transformá-los completamente em Reels curtos.' },
      { title: 'Oportunidade', desc: 'Falta de dinâmicas interativas (como cupons de desconto ocultos) nas pautas de Facilidades para impulsionar o baixo engajamento da editoria.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Reduzir imediatamente a frequência de postagens corporativas frias da "Casa do Patrão" para reestabilizar o engajamento médio do perfil.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Migrar todas as pautas de receitas em carrossel estático para o formato Reels dinâmico com influenciadores da Cozinha Assaí.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Vincular de forma direta os posts de "Ofertas | É amanhã" a vídeos divertidos com colaboradores humanizados gravados em loja física.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Adotar o uso do SEO Social focado em festas regionais e culinária nas legendas dos posts de maior alcance para capitalizar buscas orgânicas.' }
    ]
  },
  instagramStoriesView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'A redução drástica de quase 47% no volume de posts higienizou o canal, eliminando visualizações ociosas e aumentando a relevância técnica perante o algoritmo.' },
      { title: 'Aprendizado 2', desc: 'A aplicação rigorosa de links direcionais obrigatórios converteu a atenção passiva em ações transacionais, gerando um salto de quase 60% nas interações totais.' },
      { title: 'Aprendizado 3', desc: 'Conteúdos focados em forte apelo de benefícios imediatos e parcerias de peso (como a ação Faro + iFood) são os maiores motores de cliques da rede' }
    ],
    panel: {
      reach: '2.178.528',
      reachComp: '-8,95% comparado ao período anterior de 2.392.739',
      engagement: '2,86%',
      engagementComp: '-5,61% comparado ao patamar anterior de 3,03%',
      impressions: '2.578.761',
      impressionsComp: '-9,46% frente ao volume anterior de 2.848.108',
      posts: '31',
      postsComp: '-18,4% no inventário de telas (anterior foi de 38)',
      interactions: '65.440',
      interactionsComp: '-15,2% comparado ao período anterior de 77.192',
      insight: 'A vitória da escassez produtiva sobre o volume vazio: A correção de rota nos Stories comprovou que a audiência do canal busca utilidade imediata. Ao eliminar telas redundantes da "Casa do Patrão" e concentrar a grade em apenas 17 publicações altamente intencionais com links explícitos e CTAs fortes para a Copa Junina, a marca limpou as impressões ociosas e fez o engajamento médio dobrar (+95,65%), consolidando o formato como uma máquina eficiente de conversão.'
    },
    behavior: {
      good: [
        'Adesivos de link direcionando para cupons e descontos da parceria Faro + iFood disparam a taxa de cliques imediatos.',
        'Enquetes interativas e caixas de perguntas sobre palpites dos jogos da Copa Junina estimulam respostas em massa.',
        'Telas de ofertas com gatilhos de escassez e contagem regressiva para o final de semana aceleram as reações do público.',
        'Sequências curtas de vídeos de bastidores com criadores de conteúdo humanizam o canal e geram conversas diretas via Direct.'
      ],
      bad: [
        'Telas institucionais estáticas e corporativas sem nenhum tipo de botão de clique ou sticker interativo.',
        'Longas sequências de imagens com excesso de textos promocionais que poluem a mensagem e provocam a saída do usuário.',
        'Publicações sobre facilidades e serviços logísticos desprovidas de rostos humanos ou benefícios claros de economia.',
        'Lançamento de ofertas frias nas primeiras horas da manhã de segunda-feira sem dinâmicas de aquecimento de algoritmo.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '0,34%', meta: '63.325 / 294', label: 'Terça-feira 23/06: Categoria INSTITUCIONAL (Grupo: Blog | Receita Oreo)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/wFvWKpn.png' },
        { percentage: '13,9%', meta: '67.228 / 9.364', label: 'Quinta-feira 25/06: Categoria OFERTAS (Grupo: É Amanhã | Acelera com Preço Baixo)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/cGFo6OC.png' },
        { percentage: '12,34%', meta: '70.146 / 8.653', label: 'Quinta-feira 25/06: Categoria OFERTAS (Grupo: É Hoje | Dia Imbatível)', isPeak: true, image: 'https://i.imgur.com/0PMwbmN.png' },
        { percentage: '0,41%', meta: '54.072 / 220', label: 'Sexta-feira 26/06: Categoria RELACIONAL (Grupo: Casa do Patrão)', isPeak: false, image: 'https://i.imgur.com/TPInGny.png' }
      ]
    },
    champions: [
      {
        title: 'Estático de Oferta – Grupo: Preço baixo Campeão',
        desc: '12,84% de Engajamento | 9.081 Interações | 89.680 Impressões (Visualizações) | 71.144 de Alcance',
        link: '',
        image: 'https://i.imgur.com/XzJj0eK.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'O post de Oferta com o link do encarte das ofertas, continuam performando bem na rede. Nosso histórico já vem mostrando essa sequencia de boas performances com post relacionados a Ofertas aproveitando o gancho para vincular ao tema da Copa.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Representa 23,53% da grade | 280.000 Visualizações | 7.066 Interações', borderClass: 'border-rose-200 border-t-rose-500' },
        { title: 'OFERTAS', desc: 'Consolidou 41,18% dos posts | 520.000 Visualizações | 38.276 Interações', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'FACILIDADES', desc: 'Respondeu por 12,50% da grade | 222.156 Visualizações | 12.399 Interações', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'INSTITUCIONAL', desc: 'Menor participação com 5,88% | 96.464 Visualizações | 1.767 Interações', borderClass: 'border-blue-200 border-t-blue-600' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Ausência de stickers de teste ou termômetros para aquecer a entrega orgânica do canal antes de postar as telas comerciais principais.' },
      { title: 'Oportunidade', desc: 'Falta de uso de ferramentas de automação de Direct (como "comente QUERO para receber o link") para multiplicar o volume de interações.' },
      { title: 'Oportunidade', desc: 'Subaproveitamento de sequências curtas em formato de "Achadinhos Juninos" focadas exclusivamente no público de pequenos comerciantes.' },
      { title: 'Oportunidade', desc: 'Escassez de reposts de conteúdos gerados pelos próprios clientes consumindo os produtos sazonais nas lojas físicas.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Manter o teto rígido e enxuto de publicações diárias nos Stories para continuar protegendo a conta contra impressões ociosas.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Implementar gatilhos de automação de mensagens em 100% das telas que envolverem cupons ou ofertas de grande relevância.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Inserir cronômetros de contagem regressiva visual para ativar o senso de urgência nas promoções relâmpago de final de semana.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Replicar o modelo de adesivos de links direcionais nos Stories da pauta Relacional com influenciadores para monetizar o entretenimento.' }
    ]
  },
  onePage: {
    header: {
      title: "Resultados e Estratégias 2026",
      period: "29 de Junho a 05 de Julho de 2026"
    },
    overview: {
      ig: { engagement: "2,13%", tag: "-24,73%", isUp: false },
      fb: { engagement: "2,28%", tag: "-6,2%", isUp: false },
      tk: { engagement: "3,72%", tag: "+78,8%", isUp: false },
      repost: { total: "661", tag: "-13,14%", isUp: false }
    },
    metas: {
      mensal: {
        ig_feed: { value: "1,15%", diff: "-0,42 P.P", isPositive: false },
        ig_stories: { value: "3,42%", diff: "+1,37 P.P", isPositive: true },
        fb: { value: "1,14%", diff: "-0,26 P.P", isPositive: false },
        tk: { value: "3,08%", diff: "+0,58 P.P", isPositive: true }
      },
      anual: {
        fb: { value: "1,27%", diff: "-0,48 P.P", isPositive: false },
        ig_feed: { value: "1,33%", diff: "-0,78 P.P", isPositive: false },
        ig_stories: { value: "5,22%", diff: "+0,68 P.P", isPositive: true },
        tk: { value: "3,10%", diff: "+0,17 P.P", isPositive: true }
      }
    },
    followers: {
      ig: { total: "6.809", new: "+0,15%" },
      fb: { total: "-84", new: "-0,005%" },
      tk: { total: "538", new: "+0,48%" }
    },
    instagramDetails: {
      performance: "Formato humanizado estrelado por colaboradores reais (Josy no PDV), com ganchos de urgência (\"Último Dia\").",
      insights: "Ofertas em vídeo com contagem regressiva blindam a entrega orgânica e geram retenção profunda.",
      opportunities: "Transformar interações em frentes de caixa com uso obrigatório de CTAs e links direcionais nos Stories.",
      stats: {
        reach: "4.079.309",
        eng: "2,13%",
        newFollowers: "6.809",
        reposts: "661"
      },
      mockups: [
        { label: "Feed - ENG: 0,92%", imageUrl: "https://i.imgur.com/cGFo6OC.png" },
        { label: "Stories - ENG: 2,86%", imageUrl: "https://i.imgur.com/cGFo6OC.png" }
      ]
    },
    facebookDetails: {
      performance: "Ofertas em vídeo, como o conteúdo de antecipação \"É amanhã\", que gerou picos de 40,7 mil pessoas alcançadas.",
      insights: "Gatilhos de urgência funcionam bem no feed, tracionando organicamente o vídeo curto.",
      opportunities: "Escalar formatos audiovisuais com ofertas diretas para aproveitar o alto CTR do público maduro.",
      stats: {
        reach: "164.992",
        eng: "2,28%",
        newFollowers: "-84",
        shares: "320"
      },
      mockups: [
        { label: "ENG: 2,28%", imageUrl: "https://i.imgur.com/UD5LNWh.png" }
      ]
    },
    tiktokDetails: {
      performance: "Conteúdos humanizados estrelados por colaboradores nas lojas.",
      insights: "Rostos familiares e locais ancoram a maior probabilidade de alcance orgânico na plataforma.",
      opportunities: "Investir em vídeos focados em hacks educativos e dicas práticas de economia.",
      stats: {
        reach: "475.574",
        eng: "3,72%",
        newFollowers: "538",
        shares: "640"
      },
      mockups: [
        { label: "ENG: 4,16%", imageUrl: "https://i.imgur.com/3dyHuqf.png" }
      ]
    },
    pillars: [
      {
        title: "Headlines Mais Fortes",
        desc: "Gatilhos de curiosidade explícita nos primeiros 3 segundos de vídeo elevaram a VTR (View-Through Rate) em 22% organicamente."
      },
      {
        title: "Foco em Vídeo",
        desc: "A massiva entrega algorítmica de Reels e Shorts compensou integralmente a queda basal de alcance em formatos estáticos e carrosséis."
      },
      {
        title: "Tendências + Humanização",
        desc: "Funcionários da linha de frente operando como protagonistas autênticos geraram o maior sentimento positivo (Sentiment Score) da marca."
      }
    ],
    projects: {
      subtitle: "Além do Assaí + iFood",
      desc: "Unir o poder de conversão de ofertas diretas com dinâmicas de gamificação e benefícios tangíveis para o usuário. É recomendável pois expandi de imediato a linha editorial de produtos colecionáveis e vantagens exclusivas, pois atrair forte engajamento, integrando essa temática em formatos de sucesso como Reels e vídeos curtos conduzidos pelos próprios colaboradores locais para manter a humanização ativa. Por fim, faz-se indispensável quebrar a rigidez do calendário de publicações, programando conteúdos de ofertas e facilidades para os horários que sucedem imediatamente os grandes eventos culturais e esportivos, transformando os picos sazonais de tráfego em downloads estáveis no aplicativo da marca.",
      mockups: [
        "https://i.imgur.com/HCGl5KB.png",
        "https://i.imgur.com/uoSCcqV.png",
        "https://i.imgur.com/d0hVYMU.png"
      ]
    }
  }
};
