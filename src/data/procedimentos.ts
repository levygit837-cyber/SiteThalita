export interface ProcedimentoDetalhe {
  slug: string;
  categoria: string;
  categoriaSlug: string;
  icon: string;
  title: string;
  subtitle: string;
  resumo: string;
  oQueE: string;
  paraQuem: string[];
  comoFunciona: string;
  passos?: { ordem: number; titulo: string; descricao: string }[];
  areasTratadas: string[];
  resultados: string;
  duracao: string;
  recuperacao: string;
  cuidadosAntes: string[];
  cuidadosDepois: string[];
  perguntasFrequentes: { pergunta: string; resposta: string }[];
  proximoSlug?: string;
  proximoTitulo?: string;
  anteriorSlug?: string;
  anteriorTitulo?: string;
}

export interface CategoriaProcedimento {
  slug: string;
  icon: string;
  title: string;
  description: string;
  procedimentos: ProcedimentoDetalhe[];
}

export const categoriasProcedimentos: CategoriaProcedimento[] = [
  {
    slug: 'toxina-botulinica',
    icon: 'ph-activity',
    title: 'Toxina Botulínica',
    description: 'Tratamentos estéticos e terapêuticos para suavizar linhas de expressão, prevenir rugas e melhorar condições funcionais.',
    procedimentos: [
      {
        slug: 'botox-baby',
        categoria: 'Toxina Botulínica',
        categoriaSlug: 'toxina-botulinica',
        icon: 'ph-activity',
        title: 'Botox Baby',
        subtitle: 'Aplicação sutil e preventiva',
        resumo: 'Aplicação sutil e preventiva para suavização leve de linhas de expressão. Ideal para quem busca prevenir o envelhecimento precoce com resultados naturais.',
        oQueE: 'O Botox Baby é uma aplicação de toxina botulínica em doses reduzidas, focada na prevenção de rugas dinâmicas e na suavização de linhas de expressão iniciantes. É um tratamento preventivo que preserva a naturalidade dos movimentos faciais enquanto retarda o aparecimento de marcas mais profundas.',
        paraQuem: [
          'Pessoas entre 20 e 35 anos que desejam prevenir rugas',
          'Quem tem linhas de expressão iniciantes na testa ou ao redor dos olhos',
          'Pacientes que buscam resultados naturais e sutis',
          'Quem quer retardar o envelhecimento precoce',
          'Pessoas que desejam manter a expressividade facial'
        ],
        comoFunciona: 'A toxina botulínica age bloqueando temporariamente a transmissão nervosa para os músculos responsáveis pelas expressões repetitivas. Com doses menores e pontos de aplicação estratégicos, o Botox Baby relaxa suavemente esses músculos sem paralisá-los completamente, permitindo que você continue expressando emoções naturalmente.',
        passos: [
          { ordem: 1, titulo: 'Avaliação', descricao: 'Análise individualizada da anatomia facial e dos padrões de expressão.' },
          { ordem: 2, titulo: 'Limpeza', descricao: 'Higienização completa da área a ser tratada.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Injeções precisas com agulhas ultrafinas em pontos estratégicos.' },
          { ordem: 4, titulo: 'Orientações', descricao: 'Instruções de cuidados pós-procedimento para otimizar resultados.' }
        ],
        areasTratadas: ['Testa', 'Glabela', 'Pés de galinha', 'Contorno dos olhos'],
        resultados: 'Os resultados começam a aparecer entre 3 e 7 dias após a aplicação, atingindo o efeito máximo em cerca de 14 dias. A pele fica mais lisa, com linhas de expressão suavizadas e aparência mais descansada. A durabilidade média é de 3 a 4 meses.',
        duracao: '15 a 20 minutos',
        recuperacao: 'Retorno imediato às atividades',
        cuidadosAntes: [
          'Evitar álcool 24h antes do procedimento',
          'Não usar anti-inflamatórios 7 dias antes',
          'Informar sobre alergias e medicações em uso'
        ],
        cuidadosDepois: [
          'Não deitar nas primeiras 4 horas',
          'Evitar exercícios físicos por 24h',
          'Não massagear a área tratada por 3 dias',
          'Usar protetor solar diariamente'
        ],
        perguntasFrequentes: [
          { pergunta: 'Dói?', resposta: 'A aplicação é feita com agulhas ultrafinas e a maioria dos pacientes relata apenas um leve desconforto, semelhante a uma picada de mosquito.' },
          { pergunta: 'Quando posso maquiar?', resposta: 'Você pode retomar a maquiagem após 6 horas do procedimento, desde que os produtos sejam de boa qualidade e a pele esteja limpa.' },
          { pergunta: 'O resultado é natural?', resposta: 'Sim. O Botox Baby utiliza doses menores e pontos estratégicos para preservar a expressividade facial, resultando em um aspecto descansado e jovem, sem o efeito congelado.' }
        ],
        proximoSlug: 'terco-superior-medio',
        proximoTitulo: 'Terço Superior e Médio',
        anteriorSlug: 'preenchimento-facial',
        anteriorTitulo: 'Preenchimento Facial'
      },
      {
        slug: 'terco-superior-medio',
        categoria: 'Toxina Botulínica',
        categoriaSlug: 'toxina-botulinica',
        icon: 'ph-activity',
        title: 'Terço Superior e Médio',
        subtitle: 'Testa, glabela, região dos olhos e áreas associadas',
        resumo: 'Tratamento clássico da toxina botulínica para suavização de rugas do terço superior e médio da face, proporcionando um aspecto mais jovem e descansado.',
        oQueE: 'O tratamento do Terço Superior e Médio com toxina botulínica é o procedimento estético mais realizado mundialmente. Visa suavizar rugas dinâmicas da testa, glabela (entre as sobrancelhas) e região dos olhos (pés de galinha), criando um aspecto mais suave e rejuvenescido.',
        paraQuem: [
          'Pessoas com rugas de expressão acentuadas na testa',
          'Quem apresenta linhas verticais entre as sobrancelhas (rugas da glabela)',
          'Pacientes com pés de galinha marcados ao sorrir',
          'Quem deseja um olhar mais aberto e descansado',
          'Pessoas que buscam prevenção do aprofundamento de rugas'
        ],
        comoFunciona: 'A toxina botulínica é injetada em pontos específicos dos músculos responsáveis pelas expressões do terço superior. Ela bloqueia temporariamente a liberação de acetilcolina no neuromuscular, reduzindo a contração muscular e, consequentemente, a formação de rugas. O resultado é uma pele mais lisa com expressões naturais preservadas.',
        passos: [
          { ordem: 1, titulo: 'Avaliação Facial', descricao: 'Mapeamento dos músculos de expressão e análise das rugas em repouso e movimento.' },
          { ordem: 2, titulo: 'Preparação', descricao: 'Limpeza da pele e, se necessário, aplicação de anestésico tópico.' },
          { ordem: 3, titulo: 'Aplicação Estratégica', descricao: 'Injeções em múltiplos pontos do terço superior conforme planejamento individualizado.' },
          { ordem: 4, titulo: 'Finalização', descricao: 'Compressão suave e orientações detalhadas de cuidados pós-procedimento.' }
        ],
        areasTratadas: ['Testa', 'Glabela', 'Pés de galinha', 'Cauda das sobrancelhas'],
        resultados: 'A suavização das rugas começa a ser percebida entre 3 a 5 dias, com resultado final em 10 a 14 dias. A face fica com aspecto mais jovem, olhar descansado e expressões suavizadas. A durabilidade média é de 4 a 6 meses, variável conforme metabolismo individual.',
        duracao: '20 a 30 minutos',
        recuperacao: 'Retorno imediato às atividades',
        cuidadosAntes: [
          'Evitar álcool 24h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Não fazer depilação na região 3 dias antes'
        ],
        cuidadosDepois: [
          'Manter-se em posição ereta por 4 horas',
          'Evitar exercícios físicos intensos por 24h',
          'Não massagear ou aplicar pressão na área por 1 semana',
          'Evitar sol excessivo e sauna por 3 dias'
        ],
        perguntasFrequentes: [
          { pergunta: 'Vou ficar com cara de surpresa?', resposta: 'Não quando realizado por um profissional experiente. O planejamento individualizado preserva a harmonia facial e evita o efeito de espanto.' },
          { pergunta: 'Posso usar óculos de sol após?', resposta: 'Sim, mas evite apertar muito a região das têmporas nas primeiras 4 horas após o procedimento.' },
          { pergunta: 'Combina com preenchimento?', resposta: 'Sim, é muito comum associar toxina botulínica com preenchimento para rejuvenescimento completo. Podem ser feitos no mesmo dia ou em sessões separadas.' }
        ],
        proximoSlug: 'terco-inferior-nefertiti',
        proximoTitulo: 'Terço Inferior + Nefertiti',
        anteriorSlug: 'botox-baby',
        anteriorTitulo: 'Botox Baby'
      },
      {
        slug: 'terco-inferior-nefertiti',
        categoria: 'Toxina Botulínica',
        categoriaSlug: 'toxina-botulinica',
        icon: 'ph-activity',
        title: 'Terço Inferior + Nefertiti',
        subtitle: 'Região inferior da face, contorno mandibular e pescoço',
        resumo: 'Técnica avançada para lifting do terço inferior da face e pescoço, melhorando o contorno mandibular e reduzindo a flacidez sem cirurgia.',
        oQueE: 'O tratamento do Terço Inferior combinado com a técnica Nefertiti é uma abordagem avançada da toxina botulínica que visa melhorar o contorno da mandíbula, elevar os cantos da boca e suavizar rugas do pescoço. A técnica Nefertiti recebeu esse nome em homenagem à rainha egípcia, famosa por seu pescoço longo e elegante.',
        paraQuem: [
          'Pessoas com flacidez leve a moderada do terço inferior',
          'Quem deseja melhorar o contorno da mandíbula sem cirurgia',
          'Pacientes com linhas de marionete (rugas ao redor da boca)',
          'Quem apresenta bandas musculares no pescoço',
          'Pessoas que buscam um lifting não cirúrgico'
        ],
        comoFunciona: 'A toxina botulínica é aplicada nos músculos depressores da face e no platisma (músculo do pescoço). Ao relaxar esses músculos que puxam a face para baixo, os músculos elevadores atuam de forma mais eficiente, criando um efeito de lifting natural. No pescoço, a técnica suaviza as bandas musculares verticais e melhora a textura da pele.',
        passos: [
          { ordem: 1, titulo: 'Análise Global', descricao: 'Avaliação da simetria facial, flacidez e padrões musculares do terço inferior e pescoço.' },
          { ordem: 2, titulo: 'Marcação', descricao: 'Marcação precisa dos pontos de aplicação para otimizar o resultado.' },
          { ordem: 3, titulo: 'Aplicação Multinível', descricao: 'Injeções em camadas profundas e superficiais conforme a necessidade de cada área.' },
          { ordem: 4, titulo: 'Acompanhamento', descricao: 'Retorno para avaliação do resultado após 15 dias, com retoque se necessário.' }
        ],
        areasTratadas: ['Mandíbula', 'Cantos da boca', 'Mentão', 'Pescoço', 'Band musculares do platisma'],
        resultados: 'O resultado começa em 5 a 7 dias, com efeito máximo em 14 a 21 dias. Há melhora significativa no contorno mandibular, elevação dos cantos da boca e suavização das bandas do pescoço. A durabilidade é de 4 a 5 meses.',
        duracao: '30 a 40 minutos',
        recuperacao: 'Retorno imediato às atividades',
        cuidadosAntes: [
          'Evitar álcool 48h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Informar sobre procedimentos dentários recentes'
        ],
        cuidadosDepois: [
          'Não massagear a área por 1 semana',
          'Evitar movimentos bruscos de pescoço por 24h',
          'Não fazer tratamentos faciais por 2 semanas',
          'Dormir de barriga para cima nas primeiras 3 noites'
        ],
        perguntasFrequentes: [
          { pergunta: 'Faz diferença na papada?', resposta: 'A técnica Nefertiti melhora o contorno do pescoço e a flacidez leve, mas para gordura localizada na papada, o protocolo lipolítico é mais indicado.' },
          { pergunta: 'Precisa de manutenção frequente?', resposta: 'Sim, para manter o efeito de lifting, recomenda-se reaplicação a cada 4 a 5 meses.' },
          { pergunta: 'Dá para fazer junto com o terço superior?', resposta: 'Sim, muitos pacientes optam por tratar a face completa no mesmo momento para resultado harmonioso e uniforme.' }
        ],
        proximoSlug: 'face-completa-toxina',
        proximoTitulo: 'Face Completa',
        anteriorSlug: 'terco-superior-medio',
        anteriorTitulo: 'Terço Superior e Médio'
      },
      {
        slug: 'face-completa-toxina',
        categoria: 'Toxina Botulínica',
        categoriaSlug: 'toxina-botulinica',
        icon: 'ph-activity',
        title: 'Face Completa',
        subtitle: 'Planejamento global da face para equilíbrio e naturalidade',
        resumo: 'Tratamento integral da face com toxina botulínica, abordando todos os terços de forma harmoniosa para rejuvenescimento completo e natural.',
        oQueE: 'O tratamento de Face Completa com toxina botulínica é um planejamento global que abrange os três terços da face (superior, médio e inferior). Em vez de tratar áreas isoladas, essa abordagem considera a harmonia facial como um todo, resultando em rejuvenescimento equilibrado e natural.',
        paraQuem: [
          'Pessoas que desejam rejuvenescimento facial global',
          'Quem apresenta rugas em múltiplas áreas da face',
          'Pacientes que buscam harmonização facial completa',
          'Quem já faz tratamentos e deseja otimizar resultados',
          'Pessoas que querem um plano integrado de cuidados estéticos'
        ],
        comoFunciona: 'Através de um planejamento detalhado, a toxina botulínica é aplicada em todos os músculos de expressão da face de forma estratégica. Cada terço recebe a dosagem e os pontos adequados para seu padrão muscular individual, garantindo que o resultado seja coeso e natural em toda a face.',
        passos: [
          { ordem: 1, titulo: 'Consulta de Planejamento', descricao: 'Avaliação fotográfica, análise de expressões e definição do protocolo personalizado.' },
          { ordem: 2, titulo: 'Preparação', descricao: 'Limpeza completa da face e marcação dos pontos de aplicação em todos os terços.' },
          { ordem: 3, titulo: 'Aplicação Integrada', descricao: 'Injeções sequenciais nos terços superior, médio e inferior com técnicas específicas para cada região.' },
          { ordem: 4, titulo: 'Revisão', descricao: 'Retorno em 15 dias para ajustes finos e otimização do resultado.' }
        ],
        areasTratadas: ['Testa', 'Glabela', 'Pés de galinha', 'Sobrancelhas', 'Nariz', 'Bochechas', 'Mandíbula', 'Mentão', 'Pescoço'],
        resultados: 'A face fica com aspecto globalmente mais jovem, suave e harmonioso. Rugas são significativamente reduzidas, o contorno é melhorado e o olhar fica mais aberto. O resultado completo é visível em 14 dias e dura de 4 a 6 meses.',
        duracao: '45 a 60 minutos',
        recuperacao: 'Retorno imediato às atividades',
        cuidadosAntes: [
          'Evitar álcool 48h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Evitar tratamentos faciais 1 semana antes'
        ],
        cuidadosDepois: [
          'Não deitar nas primeiras 4 horas',
          'Evitar exercícios por 24h',
          'Não massagear o rosto por 1 semana',
          'Evitar calor excessivo (sauna, sol) por 3 dias'
        ],
        perguntasFrequentes: [
          { pergunta: 'É o mesmo que fazer separado?', resposta: 'Não. O planejamento integrado permite dosagens mais harmoniosas entre as áreas, evitando assimetrias e garantindo um resultado mais natural.' },
          { pergunta: 'Tem desconto em relação às áreas separadas?', resposta: 'Sim, o tratamento de face completa geralmente tem um valor mais vantajoso do que a soma dos tratamentos individuais.' },
          { pergunta: 'Qual a frequência ideal de manutenção?', resposta: 'Recomenda-se reaplicação a cada 4 a 6 meses, conforme a resposta individual e os objetivos de cada paciente.' }
        ],
        proximoSlug: 'hiperidrose-axilar',
        proximoTitulo: 'Hiperidrose Axilar',
        anteriorSlug: 'terco-inferior-nefertiti',
        anteriorTitulo: 'Terço Inferior + Nefertiti'
      },
      {
        slug: 'hiperidrose-axilar',
        categoria: 'Toxina Botulínica Terapêutica',
        categoriaSlug: 'toxina-botulinica',
        icon: 'ph-activity',
        title: 'Hiperidrose Axilar',
        subtitle: 'Controle do suor excessivo nas axilas',
        resumo: 'Tratamento terapêutico que controla o suor excessivo nas axilas, melhorando a qualidade de vida e a autoconfiança do paciente.',
        oQueE: 'A hiperidrose axilar é a condição de suor excessivo nas axilas que não está relacionada ao calor ou exercício. O tratamento com toxina botulínica bloqueia temporariamente os nervos que estimulam as glândulas sudoríparas, reduzindo drasticamente a produção de suor na região.',
        paraQuem: [
          'Pessoas com suor excessivo nas axilas que interfere na rotina',
          'Quem precisa trocar de roupa várias vezes ao dia',
          'Pacientes que já tentaram antitranspirantes sem sucesso',
          'Quem evita cores claras ou certos tecidos por causa do suor',
          'Pessoas que buscam melhora na qualidade de vida'
        ],
        comoFunciona: 'A toxina botulínica é injetada superficialmente na pele das axilas, onde bloqueia a liberação do neurotransmissor acetilcolina nas glândulas sudoríparas. Sem esse estímulo, as glândulas param de produzir suor excessivo. O tratamento é rápido, minimamente invasivo e extremamente eficaz.',
        passos: [
          { ordem: 1, titulo: 'Teste do Amido', descricao: 'Teste simples para mapear as áreas de maior produção de suor.' },
          { ordem: 2, titulo: 'Anestesia Tópica', descricao: 'Aplicação de anestésico para conforto durante o procedimento.' },
          { ordem: 3, titulo: 'Aplicação em Grade', descricao: 'Injeções distribuídas uniformemente na área mapeada.' },
          { ordem: 4, titulo: 'Avaliação de Resultado', descricao: 'Retorno para avaliação em 15 dias, com retoque se necessário.' }
        ],
        areasTratadas: ['Axilas'],
        resultados: 'A redução do suor é perceptível em 3 a 7 dias, atingindo o máximo em 2 semanas. O paciente pode experimentar uma redução de até 90% na produção de suor. O efeito dura de 6 a 12 meses, sendo um dos tratamentos mais duradouros com toxina botulínica.',
        duracao: '30 a 45 minutos',
        recuperacao: 'Retorno imediato às atividades',
        cuidadosAntes: [
          'Não usar desodorante no dia do procedimento',
          'Evitar depilação na região 3 dias antes',
          'Informar sobre condições neuromusculares pré-existentes'
        ],
        cuidadosDepois: [
          'Evitar exercícios que suem muito por 24h',
          'Não massagear a área por 3 dias',
          'Aguardar 24h para usar desodorante',
          'Manter a área limpa e seca'
        ],
        perguntasFrequentes: [
          { pergunta: 'O suor vai para outro lugar?', resposta: 'Não. As outras glândulas do corpo compensam naturalmente, sem causar hiperidrose compensatória significativa.' },
          { pergunta: 'É seguro para longo prazo?', resposta: 'Sim, o tratamento é considerado seguro e pode ser repetido anualmente conforme necessidade.' },
          { pergunta: 'Cobre o plano de saúde?', resposta: 'Alguns planos cobrem parcialmente para casos de hiperidrose severa diagnosticada. É necessário verificar a cobertura específica do seu plano.' }
        ],
        proximoSlug: 'hiperidrose-palmar-plantar',
        proximoTitulo: 'Hiperidrose Palmar/Plantar',
        anteriorSlug: 'face-completa-toxina',
        anteriorTitulo: 'Face Completa'
      }
    ]
  },
  {
    slug: 'preenchimento',
    icon: 'ph-drop-half',
    title: 'Preenchimento com Ácido Hialurônico',
    description: 'Preenchimento facial com planejamento individualizado para realçar contornos, restaurar volume e manter resultados naturais.',
    procedimentos: [
      {
        slug: 'preenchimento-facial',
        categoria: 'Preenchimento com Ácido Hialurônico',
        categoriaSlug: 'preenchimento',
        icon: 'ph-drop-half',
        title: 'Preenchimento Facial',
        subtitle: 'Olheiras, malar, bigode chinês, código de barras, lábios, mento e mandíbula',
        resumo: 'Restauração de volume e contorno facial com ácido hialurônico de alta qualidade, proporcionando resultados naturais e harmoniosos.',
        oQueE: 'O preenchimento facial com ácido hialurônico é um procedimento minimamente invasivo que restaura volume perdido, preenche sulcos e redefine contornos faciais. O ácido hialurônico é uma substância naturalmente presente na pele, responsável por hidratação e elasticidade, e quando injetado em pontos estratégicos, rejuvenesce a face de forma imediata.',
        paraQuem: [
          'Pessoas com perda de volume facial devido à idade',
          'Quem tem olheiras profundas ou sulcos nasolabiais',
          'Pacientes que desejam aumento labial natural',
          'Quem busca definição do contorno da mandíbula ou mento',
          'Pessoas que querem prevenir o afundamento de estruturas faciais'
        ],
        comoFunciona: 'O ácido hialurônico é injetado em camadas específicas da pele (superficial, média ou profunda) conforme a área e o objetivo. Ele atrai moléculas de água, criando volume imediato e hidratando a pele de dentro para fora. Além do efeito volumizador, estimula a produção de colágeno, melhorando a qualidade da pele ao longo do tempo.',
        passos: [
          { ordem: 1, titulo: 'Consulta de Avaliação', descricao: 'Análise facial detalhada, fotografias e planejamento do volume e pontos de aplicação.' },
          { ordem: 2, titulo: 'Anestesia', descricao: 'Aplicação de anestésico tópico ou infiltração para conforto máximo.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Injeções lentas e precisas com cânulas ou agulhas conforme a técnica escolhida.' },
          { ordem: 4, titulo: 'Modelagem', descricao: 'Ajuste fino da distribuição do produto para resultado simétrico e natural.' }
        ],
        areasTratadas: ['Olheiras', 'Maçãs do rosto (malar)', 'Sulcos nasolabiais (bigode chinês)', 'Código de barras', 'Lábios', 'Mento', 'Mandíbula'],
        resultados: 'O resultado é imediato, com melhora progressiva nas primeiras 2 semanas devido à hidratação. A face fica mais harmoniosa, com volumes restaurados e contornos definidos. A durabilidade varia de 12 a 18 meses conforme a área, o produto e o metabolismo individual.',
        duracao: '30 a 60 minutos',
        recuperacao: 'Pode haver leve inchaço por 2 a 7 dias',
        cuidadosAntes: [
          'Evitar álcool 48h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Não fazer outros procedimentos injetáveis 2 semanas antes'
        ],
        cuidadosDepois: [
          'Não massagear a área por 1 semana',
          'Evitar exercícios intensos por 48h',
          'Não consumir álcool por 24h',
          'Evitar calor excessivo (sauna, sol direto) por 1 semana'
        ],
        perguntasFrequentes: [
          { pergunta: 'Dói muito?', resposta: 'O desconforto é minimizado com anestésico tópico. A maioria dos pacientes relata apenas uma leve pressão durante a aplicação.' },
          { pergunta: 'Posso desfazer se não gostar?', resposta: 'Sim. O ácido hialurônico pode ser dissolvido com a enzima hialuronidase em caso de insatisfação ou complicação.' },
          { pergunta: 'Fica com cara de artificial?', resposta: 'Não quando realizado com técnica e produto adequados. O objetivo é realçar sua beleza natural, não criar volumes exagerados.' }
        ],
        proximoSlug: 'rinomodelacao',
        proximoTitulo: 'Rinomodelação',
        anteriorSlug: 'hiperidrose-palmar-plantar',
        anteriorTitulo: 'Hiperidrose Palmar/Plantar'
      },
      {
        slug: 'rinomodelacao',
        categoria: 'Preenchimento com Ácido Hialurônico',
        categoriaSlug: 'preenchimento',
        icon: 'ph-drop-half',
        title: 'Rinomodelação',
        subtitle: 'Harmonização do contorno nasal com ácido hialurônico',
        resumo: 'Procedimento não cirúrgico para correção de imperfeições no nariz, melhorando a harmonia facial sem necessidade de cirurgia.',
        oQueE: 'A rinomodelação é um procedimento estético não cirúrgico que utiliza ácido hialurônico para corrigir imperfeições no contorno do nariz. É ideal para suavizar giba, levantar a ponta, corrigir assimetrias e melhorar a projeção nasal, oferecendo resultados imediatos sem os riscos e o tempo de recuperação de uma rinoplastia.',
        paraQuem: [
          'Pessoas com giba nasal pequena ou moderada',
          'Quem deseja levantar a ponta do nariz',
          'Pacientes com assimetrias leves no dorso nasal',
          'Quem busca melhora na harmonia facial sem cirurgia',
          'Pessoas que desejam visualizar o resultado antes de uma rinoplastia'
        ],
        comoFunciona: 'O ácido hialurônico é injetado em pontos estratégicos do nariz para preencher depressões, suavizar saliências e levantar a ponta. A técnica exige grande precisão e conhecimento anatômico, pois a região nasal é altamente vascularizada. O resultado é um nariz mais harmonioso e proporcional ao restante do rosto.',
        passos: [
          { ordem: 1, titulo: 'Avaliação Anatômica', descricao: 'Análise detalhada da anatomia nasal, espessura da pele e objetivos do paciente.' },
          { ordem: 2, titulo: 'Preparação', descricao: 'Limpeza rigorosa e aplicação de anestésico tópico.' },
          { ordem: 3, titulo: 'Aplicação Estratégica', descricao: 'Injeções em camadas profundas com cânula ou agulha conforme a necessidade.' },
          { ordem: 4, titulo: 'Avaliação e Ajustes', descricao: 'Verificação do resultado com espelho e ajustes finos se necessário.' }
        ],
        areasTratadas: ['Dorso nasal', 'Ponta do nariz', 'Coluna nasal'],
        resultados: 'O resultado é imediato e fica ainda melhor após a redução do leve inchaço inicial (2 a 5 dias). O nariz fica mais reto, simétrico e harmonioso. A durabilidade é de 12 a 18 meses, podendo variar conforme o metabolismo e a área tratada.',
        duracao: '20 a 40 minutos',
        recuperacao: 'Inchaço leve por 2 a 5 dias',
        cuidadosAntes: [
          'Evitar álcool 48h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Não usar maquiagem no dia do procedimento'
        ],
        cuidadosDepois: [
          'Não usar óculos por 2 semanas',
          'Não massagear o nariz por 2 semanas',
          'Dormir de barriga para cima por 1 semana',
          'Evitar exercícios e calor excessivo por 1 semana'
        ],
        perguntasFrequentes: [
          { pergunta: 'É perigoso?', resposta: 'Quando realizado por um profissional experiente, é seguro. A região nasal requer conhecimento avançado de anatomia para evitar complicações vasculares.' },
          { pergunta: 'Diminui o nariz?', resposta: 'A rinomodelação não reduz o tamanho do nariz, mas cria a ilusão óptica de um nariz menor e mais harmônico através do preenchimento estratégico.' },
          { pergunta: 'Posso fazer rinoplastia depois?', resposta: 'Sim, o ácido hialurônico é completamente reabsorvível e não interfere em cirurgias futuras.' }
        ],
        proximoSlug: 'regeneracao-facial',
        proximoTitulo: 'Regeneração Facial',
        anteriorSlug: 'preenchimento-facial',
        anteriorTitulo: 'Preenchimento Facial'
      }
    ]
  },
  {
    slug: 'regenerativos',
    icon: 'ph-sparkle',
    title: 'Tratamentos Regenerativos',
    description: 'Protocolos regenerativos para estimular a recuperação da pele, melhorar textura, vitalidade e qualidade tecidual de forma progressiva.',
    procedimentos: [
      {
        slug: 'regeneracao-facial',
        categoria: 'Tratamentos Regenerativos',
        categoriaSlug: 'regenerativos',
        icon: 'ph-sparkle',
        title: 'Regeneração Facial',
        subtitle: 'Exossomos + PDRN para revitalização da pele',
        resumo: 'Protocolo avançado que combina exossomos e PDRN para regeneração celular, melhorando textura, luminosidade e qualidade da pele.',
        oQueE: 'A Regeneração Facial com Exossomos + PDRN é um tratamento de bioestimulação que acelera a regeneração celular da pele. Os exossomos são vesículas ricas em fatores de crescimento que comunicam-se com as células, enquanto o PDRN (polidesoxirribonucleotídeo) estimula a reparação tecidual e a síntese de colágeno. Juntos, criam um efeito sinérgico de rejuvenescimento.',
        paraQuem: [
          'Pessoas com pele desvitalizada e sem luminosidade',
          'Quem busca melhora na textura e poros dilatados',
          'Pacientes que querem prevenir o envelhecimento',
          'Quem deseja resultados progressivos e naturais',
          'Pessoas que buscam complementar outros tratamentos estéticos'
        ],
        comoFunciona: 'O tratamento consiste na aplicação microinjetada de uma solução concentrada de exossomos e PDRN na derme. Esses bioestimuladores ativam os fibroblastos, células responsáveis pela produção de colágeno e elastina. O resultado é uma pele mais firme, luminosa e com textura aprimorada, além de efeito anti-inflamatório que melhora condições como acne e rosácea.',
        passos: [
          { ordem: 1, titulo: 'Limpeza Profunda', descricao: 'Higienização completa e, se necessário, esfoliação suave da pele.' },
          { ordem: 2, titulo: 'Anestesia', descricao: 'Aplicação de anestésico tópico para conforto durante as microinjeções.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Microinjeções distribuídas uniformemente em toda a face ou áreas específicas.' },
          { ordem: 4, titulo: 'Finalização', descricao: 'Aplicação de máscara calmante e protetor solar.' }
        ],
        areasTratadas: ['Face completa', 'Pescoço', 'Colo'],
        resultados: 'A pele fica mais hidratada e luminosa já nas primeiras semanas. A melhora na firmeza e na textura é progressiva, atingindo o auge entre 1 e 3 meses após o tratamento. Recomenda-se protocolo de 3 a 4 sessões para resultado ideal.',
        duracao: '30 a 45 minutos',
        recuperacao: 'Vermelhidão leve por 24 a 48h',
        cuidadosAntes: [
          'Evitar álcool 24h antes',
          'Não usar ácidos ou retinoides 3 dias antes',
          'Informar sobre condições dermatológicas ativas'
        ],
        cuidadosDepois: [
          'Não maquiar por 12h',
          'Evitar sol direto por 3 dias',
          'Não usar ácidos ou retinoides por 5 dias',
          'Manter a pele hidratada'
        ],
        perguntasFrequentes: [
          { pergunta: 'Quantas sessões preciso?', resposta: 'Recomenda-se protocolo de 3 a 4 sessões espaçadas em 15 a 30 dias para resultado ideal, com manutenção a cada 3 a 6 meses.' },
          { pergunta: 'Posso fazer no verão?', resposta: 'Sim, desde que os cuidados com o sol sejam rigorosos. O ideal é fazer o protocolo completo antes da exposição solar intensa.' },
          { pergunta: 'Diferença para o skinbooster?', resposta: 'Enquanto o skinbooster foca na hidratação com ácido hialurônico, este protocolo foca na regeneração celular com fatores de crescimento, resultando em melhora estrutural da pele.' }
        ],
        proximoSlug: 'regeneracao-capilar',
        proximoTitulo: 'Regeneração Capilar',
        anteriorSlug: 'rinomodelacao',
        anteriorTitulo: 'Rinomodelação'
      },
      {
        slug: 'regeneracao-capilar',
        categoria: 'Tratamentos Regenerativos',
        categoriaSlug: 'regenerativos',
        icon: 'ph-sparkle',
        title: 'Regeneração Capilar',
        subtitle: 'Exossomos + PDRN para estimulação capilar',
        resumo: 'Tratamento regenerativo para fortalecimento dos fios, redução da queda e estímulo ao crescimento capilar de forma natural.',
        oQueE: 'A Regeneração Capilar com Exossomos + PDRN é um tratamento injetável que revitaliza o couro cabeludo, fortalece os folículos capilares e reduz a queda de cabelo. Os bioestimuladores promovem a formação de novos vasos sanguíneos no couro cabeludo, melhoram a nutrição dos fios e ativam folículos adormecidos, favorecendo o crescimento de novos fios.',
        paraQuem: [
          'Pessoas com queda capilar excessiva',
          'Quem tem cabelos finos e sem volume',
          'Pacientes com alopecia androgenética incipiente',
          'Quem deseja prevenir a queda capilar',
          'Pessoas que buscam fortalecimento dos fios de forma natural'
        ],
        comoFunciona: 'A solução de exossomos e PDRN é aplicada no couro cabeludo através de microinjeções. Os fatores de crescimento estimulam a microcirculação sanguínea, aumentam a espessura dos folículos e prolongam a fase anágena (crescimento) do ciclo capilar. O resultado é cabelo mais forte, com menos queda e maior densidade.',
        passos: [
          { ordem: 1, titulo: 'Avaliação do Couro Cabeludo', descricao: 'Análise tricoscópica e identificação das áreas de maior necessidade.' },
          { ordem: 2, titulo: 'Preparação', descricao: 'Limpeza do couro cabeludo e aplicação de anestésico tópico.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Microinjeções distribuídas no couro cabeludo com técnica de mesoterapia.' },
          { ordem: 4, titulo: 'Orientações', descricao: 'Recomendações de cuidados e produtos capilares específicos.' }
        ],
        areasTratadas: ['Couro cabeludo', 'Linha frontal', 'Coroa', 'Áreas de rarefação'],
        resultados: 'A redução da queda é perceptível após 2 a 3 sessões. O crescimento de novos fios e o aumento da espessura dos existentes ficam evidentes após 3 a 6 meses de tratamento. O protocolo ideal é de 6 sessões espaçadas em 15 dias, com manutenção mensal.',
        duracao: '30 a 45 minutos',
        recuperacao: 'Sensibilidade leve no couro cabeludo por 24h',
        cuidadosAntes: [
          'Lavar o cabelo no dia do procedimento',
          'Evitar produtos oleosos no couro cabeludo',
          'Não colorir os cabelos 3 dias antes'
        ],
        cuidadosDepois: [
          'Não lavar o cabelo por 24h',
          'Evitar chapinha e secador quente por 2 dias',
          'Não colorir os cabelos por 1 semana',
          'Usar produtos capilares indicados pelo médico'
        ],
        perguntasFrequentes: [
          { pergunta: 'Funciona para calvície?', resposta: 'É mais eficaz em casos incipientes e de queda excessiva. Em áreas sem fios há muito tempo, o resultado pode ser limitado.' },
          { pergunta: 'Preciso parar de usar minoxidil?', resposta: 'Não necessariamente. O tratamento pode ser combinado com outras terapias capilares sob orientação médica.' },
          { pergunta: 'Quando vejo resultado?', resposta: 'A redução da queda em 2 a 3 sessões; crescimento e espessura em 3 a 6 meses.' }
        ],
        proximoSlug: 'regeneracao-sobrancelhas',
        proximoTitulo: 'Regeneração de Sobrancelhas',
        anteriorSlug: 'regeneracao-facial',
        anteriorTitulo: 'Regeneração Facial'
      },
      {
        slug: 'regeneracao-sobrancelhas',
        categoria: 'Tratamentos Regenerativos',
        categoriaSlug: 'regenerativos',
        icon: 'ph-sparkle',
        title: 'Regeneração de Sobrancelhas',
        subtitle: 'Exossomos para fortalecimento dos fios',
        resumo: 'Tratamento regenerativo específico para sobrancelhas ralas ou com falhas, estimulando o crescimento natural dos fios.',
        oQueE: 'A Regeneração de Sobrancelhas com Exossomos é um tratamento inovador que utiliza fatores de crescimento derivados de vesículas extracelulares para estimular o crescimento de fios nas sobrancelhas. É ideal para quem tem sobrancelhas ralas, com falhas devido à superdepilação ou que desejam um olhar mais preenchido e definido sem depender apenas da maquiagem.',
        paraQuem: [
          'Pessoas com sobrancelhas ralas ou com falhas',
          'Quem superdepilou as sobrancelhas no passado',
          'Pacientes que desejam sobrancelhas mais densas',
          'Quem busca complementar a laminação ou micropigmentação',
          'Pessoas que querem resultados naturais e progressivos'
        ],
        comoFunciona: 'Os exossomos são aplicados nas áreas das sobrancelhas através de microinjeções superficiais. Eles ativam os folículos pilosos, prolongam a fase de crescimento dos fios e melhoram a vascularização local. O resultado é o surgimento de novos fios e o fortalecimento dos já existentes, criando sobrancelhas mais cheias e definidas.',
        passos: [
          { ordem: 1, titulo: 'Mapeamento', descricao: 'Definição do formato ideal das sobrancelhas conforme a anatomia facial.' },
          { ordem: 2, titulo: 'Preparação', descricao: 'Limpeza da região e aplicação de anestésico tópico.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Microinjeções nos pontos de falha e ao longo do formato desejado.' },
          { ordem: 4, titulo: 'Cuidados', descricao: 'Orientações para não depilar ou mexer nos fios durante o tratamento.' }
        ],
        areasTratadas: ['Sobrancelhas', 'Região periocular'],
        resultados: 'O fortalecimento dos fios é percebido após 2 a 3 sessões. Novos fios começam a surgir entre 1 e 3 meses de tratamento. O protocolo ideal é de 3 sessões mensais, com manutenção a cada 3 meses.',
        duracao: '15 a 25 minutos',
        recuperacao: 'Leve vermelhidão por algumas horas',
        cuidadosAntes: [
          'Não depilar as sobrancelhas 1 semana antes',
          'Evitar maquiagem na região no dia do procedimento',
          'Informar sobre alergias ou sensibilidades na área'
        ],
        cuidadosDepois: [
          'Não depilar por 2 semanas',
          'Evitar maquiagem por 12h',
          'Não coçar ou mexer na região tratada',
          'Aplicar sérums indicados pelo médico'
        ],
        perguntasFrequentes: [
          { pergunta: 'Preciso parar de fazer laminação?', resposta: 'Não, mas é recomendado espaçar o tratamento regenerativo da laminação em pelo menos 2 semanas.' },
          { pergunta: 'Funciona para quem nunca teve sobrancelhas cheias?', resposta: 'Sim, desde que haja folículos pilosos ativos na região. O tratamento ativa folículos adormecidos.' },
          { pergunta: 'Dura para sempre?', resposta: 'Os resultados são progressivos e duradouros com manutenção, mas requerem sessões de manutenção periódicas.' }
        ],
        proximoSlug: 'glow-skin-presencial',
        proximoTitulo: 'Glow Skin Presencial',
        anteriorSlug: 'regeneracao-capilar',
        anteriorTitulo: 'Regeneração Capilar'
      }
    ]
  },
  {
    slug: 'skincare',
    icon: 'ph-sun',
    title: 'Skincare Clínico Personalizado',
    description: 'Rotina de skincare personalizada com avaliação médica, dossiê da pele e orientação individualizada para melhorar saúde, textura e luminosidade.',
    procedimentos: [
      {
        slug: 'glow-skin-presencial',
        categoria: 'Skincare Clínico Personalizado',
        categoriaSlug: 'skincare',
        icon: 'ph-sun',
        title: 'Glow Skin Presencial',
        subtitle: 'Dossiê completo personalizado com avaliação presencial',
        resumo: 'Avaliação médica presencial completa da pele com dossiê personalizado e orientação de rotina skincare individualizada.',
        oQueE: 'O Glow Skin Presencial é uma consulta especializada de medicina estética focada na avaliação completa da pele. A Dra. Thalita realiza uma análise detalhada das condições cutâneas, identifica necessidades específicas e elabora um dossiê completo com rotina de skincare personalizada, indicação de produtos e planejamento de tratamentos.',
        paraQuem: [
          'Pessoas que não sabem por onde começar nos cuidados com a pele',
          'Quem tem condições como acne, melasma, rosácea ou sensibilidade',
          'Pacientes que usam produtos aleatórios sem resultados',
          'Quem deseja uma rotina eficiente e personalizada',
          'Pessoas que buscam prevenção do envelhecimento com ciência'
        ],
        comoFunciona: 'A consulta inclui anamnese detalhada, avaliação dermatoscópica da pele, análise de fototipo e condições específicas. Com base nesses dados, é elaborado um dossiê completo com rotina diária (manhã e noite), indicação de princípios ativos adequados, orientações de proteção solar e, se necessário, prescrição de medicamentos tópicos ou sistêmicos.',
        passos: [
          { ordem: 1, titulo: 'Anamnese', descricao: 'Questionário completo sobre histórico de pele, hábitos, alimentação e exposição solar.' },
          { ordem: 2, titulo: 'Avaliação Dermatoscópica', descricao: 'Exame detalhado da pele com lupa e dermatoscópio para identificar condições e necessidades.' },
          { ordem: 3, titulo: 'Elaboração do Dossiê', descricao: 'Criação do dossiê Glow Skin com rotina completa e personalizada.' },
          { ordem: 4, titulo: 'Orientações', descricao: 'Explicação detalhada de cada produto, ordem de aplicação e dicas de uso.' }
        ],
        areasTratadas: ['Face', 'Pescoço', 'Colo'],
        resultados: 'O paciente recebe um plano de cuidados completo e personalizado. Com a rotina adequada, a pele começa a mostrar melhora em 4 a 8 semanas, com redução de imperfeições, aumento da luminosidade e melhora da textura.',
        duracao: '45 a 60 minutos',
        recuperacao: 'Não há necessidade de recuperação',
        cuidadosAntes: [
          'Levar os produtos que atualmente usa',
          'Não usar maquiagem no dia da consulta',
          'Preencher o formulário de anamnese antecipadamente'
        ],
        cuidadosDepois: [
          'Seguir a rotina indicada fielmente',
          'Retornar para reavaliação em 30 dias',
          'Tirar fotos semanais para acompanhar a evolução'
        ],
        perguntasFrequentes: [
          { pergunta: 'Preciso comprar produtos caros?', resposta: 'Não necessariamente. A indicação é baseada na necessidade da sua pele, não no preço. Há opções em todas as faixas de valor.' },
          { pergunta: 'Você vende os produtos?', resposta: 'A Dra. Thalita indica produtos disponíveis no mercado, sem vínculo com marcas específicas, garantindo imparcialidade na prescrição.' },
          { pergunta: 'Posso fazer online?', resposta: 'Sim, existe a opção Glow Skin Online para quem prefere ou não pode comparecer presencialmente, embora a avaliação presencial seja mais completa.' }
        ],
        proximoSlug: 'glow-skin-online',
        proximoTitulo: 'Glow Skin Online',
        anteriorSlug: 'regeneracao-sobrancelhas',
        anteriorTitulo: 'Regeneração de Sobrancelhas'
      },
      {
        slug: 'glow-skin-online',
        categoria: 'Skincare Clínico Personalizado',
        categoriaSlug: 'skincare',
        icon: 'ph-sun',
        title: 'Glow Skin Online',
        subtitle: 'Dossiê completo personalizado com avaliação online',
        resumo: 'Consulta online para orientação de skincare personalizado, ideal para quem não pode comparecer presencialmente.',
        oQueE: 'O Glow Skin Online é uma consulta de skincare realizada de forma remota, ideal para pacientes que não podem comparecer presencialmente ou preferem a conveniência do atendimento online. Através de fotos detalhadas da pele e questionário completo, a Dra. Thalita elabora um dossiê personalizado com rotina de cuidados e indicações de produtos.',
        paraQuem: [
          'Pessoas que moram em outras cidades',
          'Quem tem agenda apertada e prefere atendimento remoto',
          'Pacientes que já fazem acompanhamento presencial e querem manutenção',
          'Quem busca uma segunda opinião sobre rotina de skincare',
          'Pessoas que querem começar a cuidar da pele com orientação médica'
        ],
        comoFunciona: 'O paciente preenche um questionário detalhado e envia fotos da pele em boa iluminação. A Dra. Thalita analisa as informações e elabora o dossiê Glow Skin, que é entregue em PDF com rotina completa, indicação de produtos e dicas personalizadas. Uma videochamada pode ser agendada para tirar dúvidas.',
        passos: [
          { ordem: 1, titulo: 'Questionário Online', descricao: 'Formulário detalhado sobre histórico de pele, hábitos e objetivos.' },
          { ordem: 2, titulo: 'Envio de Fotos', descricao: 'Instruções para tirar fotos da pele em diferentes condições de luz.' },
          { ordem: 3, titulo: 'Análise', descricao: 'Avaliação cuidadosa das informações e criação do dossiê personalizado.' },
          { ordem: 4, titulo: 'Entrega + Dúvidas', descricao: 'Envio do dossiê e agendamento de videochamada para esclarecimentos.' }
        ],
        areasTratadas: ['Face', 'Pescoço', 'Colo'],
        resultados: 'O paciente recebe um plano de cuidados completo e personalizado, com a conveniência do atendimento remoto. Os resultados na pele são os mesmos de um planejamento presencial quando a rotina é seguida corretamente.',
        duracao: '30 minutos (videochamada)',
        recuperacao: 'Não há necessidade de recuperação',
        cuidadosAntes: [
          'Preencher o questionário com atenção',
          'Tirar fotos conforme as instruções enviadas',
          'Listar todos os produtos que atualmente usa'
        ],
        cuidadosDepois: [
          'Seguir a rotina indicada',
          'Tirar fotos semanais para acompanhar',
          'Agendar retorno em 30 a 45 dias'
        ],
        perguntasFrequentes: [
          { pergunta: 'É tão bom quanto presencial?', resposta: 'Para a maioria dos casos, sim. Condições mais complexas podem requerer avaliação presencial complementar.' },
          { pergunta: 'Como envio as fotos?', resposta: 'Você recebe instruções detalhadas por e-mail/WhatsApp sobre como tirar e enviar as fotos corretamente.' },
          { pergunta: 'Posso tirar dúvidas depois?', resposta: 'Sim, uma videochamada está incluída na consulta, e dúvidas pontuais podem ser esclarecidas por mensagem.' }
        ],
        proximoSlug: 'laminacao-ativacao-periocular',
        proximoTitulo: 'Laminação + Ativação Periocular',
        anteriorSlug: 'glow-skin-presencial',
        anteriorTitulo: 'Glow Skin Presencial'
      }
    ]
  },
  {
    slug: 'sobrancelhas',
    icon: 'ph-eye',
    title: 'Protocolo de Sobrancelhas',
    description: 'Protocolos para valorizar o olhar, organizar os fios, melhorar a região periocular e criar um aspecto mais harmônico.',
    procedimentos: [
      {
        slug: 'laminacao-ativacao-periocular',
        categoria: 'Protocolo de Sobrancelhas',
        categoriaSlug: 'sobrancelhas',
        icon: 'ph-eye',
        title: 'Laminação + Ativação Periocular',
        subtitle: 'Região periocular com revitalização do olhar',
        resumo: 'Combinação de laminação de sobrancelhas com tratamento revitalizante da região periocular para um olhar mais jovem e harmônico.',
        oQueE: 'Este protocolo combina a laminação de sobrancelhas — técnica que alinha e fixa os fios na direção desejada — com a ativação periocular, um tratamento que melhora a qualidade da pele ao redor dos olhos. O resultado são sobrancelhas organizadas e um olhar mais descansado, iluminado e rejuvenescido.',
        paraQuem: [
          'Pessoas com sobrancelhas desalinhadas ou rebeldes',
          'Quem tem olheiras ou flacidez leve na região dos olhos',
          'Pacientes que buscam um olhar mais aberto e jovem',
          'Quem quer organizar os fios sem procedimentos permanentes',
          'Pessoas que buscam harmonização do olhar de forma natural'
        ],
        comoFunciona: 'A laminação utiliza uma solução especial para moldar os fios das sobrancelhas, deixando-os alinhados e volumosos por 4 a 6 semanas. A ativação periocular consiste na aplicação de ativos revitalizantes (vitaminas, peptídeos e ácido hialurônico) na região ao redor dos olhos, melhorando a textura da pele, reduzindo sinais de fadiga e iluminando o olhar.',
        passos: [
          { ordem: 1, titulo: 'Design das Sobrancelhas', descricao: 'Mapeamento do formato ideal conforme a anatomia facial.' },
          { ordem: 2, titulo: 'Laminação', descricao: 'Aplicação da solução de laminação e fixação dos fios na direção desejada.' },
          { ordem: 3, titulo: 'Ativação Periocular', descricao: 'Aplicação de ativos revitalizantes na região dos olhos.' },
          { ordem: 4, titulo: 'Finalização', descricao: 'Hidratação dos fios e orientações de cuidados.' }
        ],
        areasTratadas: ['Sobrancelhas', 'Pálpebras', 'Região periocular'],
        resultados: 'Sobrancelhas organizadas e volumosas que duram 4 a 6 semanas. A região periocular fica mais luminosa, com aspecto descansado e rejuvenescido. A combinação dos dois tratamentos cria um olhar mais harmonioso e expressivo.',
        duracao: '60 a 75 minutos',
        recuperacao: 'Manter as sobrancelhas secas por 24h',
        cuidadosAntes: [
          'Não depilar as sobrancelhas 1 semana antes',
          'Evitar ácidos na região 3 dias antes',
          'Não usar lentes de contato no dia (para ativação periocular)'
        ],
        cuidadosDepois: [
          'Não molhar as sobrancelhas por 24h',
          'Não usar maquiagem na região por 12h',
          'Evitar calor excessivo (sauna, sol) por 3 dias',
          'Pentear as sobrancelhas diariamente no sentido dos fios'
        ],
        perguntasFrequentes: [
          { pergunta: 'A laminação danifica os fios?', resposta: 'Não quando realizada corretamente e com produtos de qualidade. Inclui hidratação para manter a saúde dos fios.' },
          { pergunta: 'Posso fazer tintura junto?', resposta: 'Sim, a tintura pode ser feita na mesma sessão da laminação para realçar ainda mais o resultado.' },
          { pergunta: 'Quanto tempo dura?', resposta: 'A laminação dura 4 a 6 semanas. A ativação periocular tem efeito acumulativo e dura cerca de 1 mês.' }
        ],
        proximoSlug: 'laminacao-lifting-sobrancelhas',
        proximoTitulo: 'Laminação + Lifting de Sobrancelhas',
        anteriorSlug: 'glow-skin-online',
        anteriorTitulo: 'Glow Skin Online'
      },
      {
        slug: 'laminacao-lifting-sobrancelhas',
        categoria: 'Protocolo de Sobrancelhas',
        categoriaSlug: 'sobrancelhas',
        icon: 'ph-eye',
        title: 'Laminação + Lifting de Sobrancelhas',
        subtitle: 'Brow lamination com terço superior para elevação',
        resumo: 'Protocolo completo que combina laminação de sobrancelhas com toxina botulínica no terço superior para elevação e rejuvenescimento do olhar.',
        oQueE: 'Este protocolo premium combina a laminação de sobrancelhas com a aplicação de toxina botulínica no terço superior da face. A laminação organiza e volumiza os fios, enquanto a toxina botulínica eleva a cauda das sobrancelhas, suaviza rugas da testa e abre o olhar. É o tratamento completo para quem deseja um olhar renovado e sobrancelhas perfeitas.',
        paraQuem: [
          'Pessoas que desejam sobrancelhas elevadas e organizadas',
          'Quem tem sobrancelhas caídas ou com pouca definição',
          'Pacientes com rugas no terço superior que desejam suavização',
          'Quem busca um olhar mais aberto e rejuvenescido',
          'Pessoas que querem o máximo de resultado na região do olhar'
        ],
        comoFunciona: 'Primeiramente é realizada a laminação das sobrancelhas para alinhar os fios e criar volume. Em seguida, a toxina botulínica é aplicada nos músculos depressores do terço superior (músculo prócero e parte do corrugador), permitindo que os músculos elevadores atuem de forma mais eficiente, levantando a cauda das sobrancelhas e suavizando rugas.',
        passos: [
          { ordem: 1, titulo: 'Avaliação do Olhar', descricao: 'Análise da simetria das sobrancelhas, posição e padrões de expressão.' },
          { ordem: 2, titulo: 'Laminação', descricao: 'Moldagem e fixação dos fios das sobrancelhas na direção desejada.' },
          { ordem: 3, titulo: 'Aplicação da Toxina', descricao: 'Injeções estratégicas no terço superior para elevação da sobrancelha.' },
          { ordem: 4, titulo: 'Ajustes', descricao: 'Avaliação final e orientações completas de cuidados pós-procedimento.' }
        ],
        areasTratadas: ['Sobrancelhas', 'Testa', 'Glabela', 'Cauda das sobrancelhas'],
        resultados: 'Sobrancelhas organizadas, volumosas e levemente elevadas que duram 4 a 6 semanas. O terço superior fica suavizado, com olhar mais aberto e aspecto rejuvenescido. O efeito da toxina dura 3 a 4 meses.',
        duracao: '45 a 60 minutos',
        recuperacao: 'Retorno imediato, manter sobrancelhas secas por 24h',
        cuidadosAntes: [
          'Não depilar as sobrancelhas 1 semana antes',
          'Evitar álcool 24h antes',
          'Suspender anti-inflamatórios 7 dias antes'
        ],
        cuidadosDepois: [
          'Não molhar as sobrancelhas por 24h',
          'Manter-se ereta por 4h após a toxina',
          'Não massagear a região por 3 dias',
          'Evitar exercícios por 24h'
        ],
        perguntasFrequentes: [
          { pergunta: 'Posso fazer só a laminação?', resposta: 'Sim, a laminação pode ser feita isoladamente. O lifting com toxina é um complemento para quem deseja elevação adicional.' },
          { pergunta: 'As sobrancelhas ficam muito altas?', resposta: 'Não. O objetivo é uma elevação natural e harmoniosa, respeitando a anatomia de cada paciente.' },
          { pergunta: 'Preciso de manutenção?', resposta: 'A laminação precisa ser refeita a cada 4 a 6 semanas. A toxina a cada 3 a 4 meses.' }
        ],
        proximoSlug: 'protocolo-lipolitico-submentoniano',
        proximoTitulo: 'Protocolo Lipolítico Submentoniano',
        anteriorSlug: 'laminacao-ativacao-periocular',
        anteriorTitulo: 'Laminação + Ativação Periocular'
      }
    ]
  },
  {
    slug: 'lipolitico',
    icon: 'ph-scales',
    title: 'Protocolo Lipolítico',
    description: 'Protocolos direcionados para áreas específicas de gordura localizada, com planejamento individualizado e acompanhamento profissional.',
    procedimentos: [
      {
        slug: 'protocolo-lipolitico-submentoniano',
        categoria: 'Protocolo Lipolítico',
        categoriaSlug: 'lipolitico',
        icon: 'ph-scales',
        title: 'Protocolo Lipolítico Submentoniano',
        subtitle: 'Papada — 3 sessões para redução de gordura localizada',
        resumo: 'Tratamento injetável para redução de gordura localizada na região submentoniana (papada), melhorando o contorno do pescoço.',
        oQueE: 'O Protocolo Lipolítico Submentoniano é um tratamento não cirúrgico para redução de gordura localizada na papada. Utiliza substâncias lipolíticas de alta qualidade que quebram as células de gordura na região, que são posteriormente eliminadas pelo sistema linfático do organismo. O resultado é um contorno mandibular mais definido e um pescoço mais harmonioso.',
        paraQuem: [
          'Pessoas com gordura localizada na papada',
          'Quem deseja melhorar o contorno do pescoço sem cirurgia',
          'Pacientes com papada hereditária ou de envelhecimento',
          'Quem já tentou dietas e exercícios sem sucesso na região',
          'Pessoas que buscam definição do ângulo mandibular'
        ],
        comoFunciona: 'A substância lipolítica é injetada na gordura subcutânea da papada. Seus componentes ativos destroem a membrana das células adiposas, liberando o conteúdo de gordura que é metabolizado e eliminado pelo corpo. O tratamento também estimula a produção de colágeno, melhorando a firmeza da pele na região.',
        passos: [
          { ordem: 1, titulo: 'Avaliação', descricao: 'Análise da quantidade de gordura, flacidez e expectativas do paciente.' },
          { ordem: 2, titulo: 'Marcação', descricao: 'Delimitação da área de tratamento e dos pontos de aplicação.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Injeções da substância lipolítica na camada de gordura submentoniana.' },
          { ordem: 4, titulo: 'Drenagem', descricao: 'Massagem modeladora para distribuição do produto e ativação linfática.' }
        ],
        areasTratadas: ['Papada', 'Região submentoniana', 'Ângulo mandibular'],
        resultados: 'A redução da gordura é progressiva e perceptível a partir da segunda sessão. O resultado final é visível 4 a 8 semanas após a última sessão, com melhora significativa no contorno do pescoço e definição do ângulo mandibular. O protocolo inclui 3 sessões espaçadas em 15 a 21 dias.',
        duracao: '20 a 30 minutos',
        recuperacao: 'Inchaço e sensibilidade por 2 a 5 dias',
        cuidadosAntes: [
          'Evitar álcool 48h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Fazer exames de coagulação se indicado'
        ],
        cuidadosDepois: [
          'Massagem modeladora diária conforme orientação',
          'Beber bastante água para ajudar na eliminação',
          'Evitar alimentos muito salgados por 3 dias',
          'Usar colarinho de compressão se indicado'
        ],
        perguntasFrequentes: [
          { pergunta: 'Quantas sessões preciso?', resposta: 'O protocolo inclui 3 sessões. Casos mais avançados podem necessitar de sessões adicionais.' },
          { pergunta: 'O resultado é permanente?', resposta: 'As células de gordura eliminadas não voltam, mas o ganho de peso pode aumentar as células restantes. Manter hábitos saudáveis é essencial.' },
          { pergunta: 'Preciso de lipo depois?', resposta: 'Na maioria dos casos, não. O protocolo lipolítico é uma alternativa não cirúrgica eficaz para gordura localizada moderada.' }
        ],
        proximoSlug: 'protocolo-lipolitico-corporal',
        proximoTitulo: 'Protocolo Lipolítico Corporal',
        anteriorSlug: 'laminacao-lifting-sobrancelhas',
        anteriorTitulo: 'Laminação + Lifting de Sobrancelhas'
      },
      {
        slug: 'protocolo-lipolitico-corporal',
        categoria: 'Protocolo Lipolítico',
        categoriaSlug: 'lipolitico',
        icon: 'ph-scales',
        title: 'Protocolo Lipolítico Corporal',
        subtitle: 'Abdomen — 4 sessões para contorno corporal',
        resumo: 'Tratamento para redução de gordura localizada em áreas corporais, melhorando o contorno e a definição da silhueta.',
        oQueE: 'O Protocolo Lipolítico Corporal é um tratamento não cirúrgico para redução de gordura localizada em áreas do corpo como abdômen, flancos, culotes, braços e coxas. Utiliza substâncias lipolíticas que destróem as células de gordura de forma seletiva, permitindo a modelagem corporal sem necessidade de cirurgia ou tempo de recuperação prolongado.',
        paraQuem: [
          'Pessoas com gordura localizada em áreas específicas do corpo',
          'Quem está próximo do peso ideal mas tem gordura persistente',
          'Pacientes que não querem ou não podem fazer cirurgia',
          'Quem busca melhora no contorno corporal',
          'Pessoas que já fazem exercícios e dieta mas têm gordura resistente'
        ],
        comoFunciona: 'A substância lipolítica é injetada na camada de gordura subcutânea da área tratada. Seus componentes rompem as membranas das células adiposas, liberando o conteúdo lipídico que é processado pelo fígado e eliminado pelo sistema linfático. O tratamento também melhora a flacidez da pele através da bioestimulação de colágeno.',
        passos: [
          { ordem: 1, titulo: 'Avaliação Corporal', descricao: 'Medidas, fotografias e definição das áreas prioritárias.' },
          { ordem: 2, titulo: 'Marcação', descricao: 'Grade de pontos de aplicação na área de gordura localizada.' },
          { ordem: 3, titulo: 'Aplicação', descricao: 'Injeções profundas na camada de gordura subcutânea.' },
          { ordem: 4, titulo: 'Pós-Tratamento', descricao: 'Massagem modeladora e orientações de drenagem linfática.' }
        ],
        areasTratadas: ['Abdômen', 'Flancos', 'Culotes', 'Braços', 'Coxas', 'Costas'],
        resultados: 'A redução da circunferência é progressiva, com resultados visíveis a partir da segunda sessão. O protocolo inclui 4 sessões espaçadas em 15 a 21 dias, com melhora máxima 8 a 12 semanas após a última sessão. A pele fica mais firme e o contorno corporal mais definido.',
        duracao: '30 a 45 minutos',
        recuperacao: 'Sensibilidade e inchaço por 3 a 7 dias',
        cuidadosAntes: [
          'Evitar álcool 48h antes',
          'Suspender anti-inflamatórios 7 dias antes',
          'Manter hidratação adequada nos dias anteriores'
        ],
        cuidadosDepois: [
          'Fazer drenagem linfática 48h após cada sessão',
          'Beber pelo menos 2 litros de água por dia',
          'Evitar alimentação rica em gordura e sal',
          'Manter atividade física regular'
        ],
        perguntasFrequentes: [
          { pergunta: 'Perde peso com o tratamento?', resposta: 'O lipolítico reduz gordura localizada, não promove emagrecimento geral. Recomenda-se associar com hábitos saudáveis.' },
          { pergunta: 'Dói muito?', resposta: 'Há sensibilidade e ardência leve durante as primeiras 24 a 48h, que são bem controladas com medicação simples.' },
          { pergunta: 'Posso fazer mais de uma área por vez?', resposta: 'Sim, mas é recomendado focar em 1 a 2 áreas por sessão para melhor controle da resposta e conforto.' }
        ],
        proximoSlug: 'botox-baby',
        proximoTitulo: 'Botox Baby',
        anteriorSlug: 'protocolo-lipolitico-submentoniano',
        anteriorTitulo: 'Protocolo Lipolítico Submentoniano'
      }
    ]
  }
];

export function getProcedimentoBySlug(slug: string): ProcedimentoDetalhe | undefined {
  for (const categoria of categoriasProcedimentos) {
    const found = categoria.procedimentos.find(p => p.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export function getAllProcedimentos(): ProcedimentoDetalhe[] {
  return categoriasProcedimentos.flatMap(c => c.procedimentos);
}

export function getAllSlugs(): string[] {
  return getAllProcedimentos().map(p => p.slug);
}

export function getCategoriaBySlug(slug: string): CategoriaProcedimento | undefined {
  return categoriasProcedimentos.find(c => c.slug === slug);
}

export function getProcedimentosByCategoria(categoriaSlug: string): ProcedimentoDetalhe[] {
  const categoria = categoriasProcedimentos.find(c => c.slug === categoriaSlug);
  return categoria?.procedimentos || [];
}

export function getAdjacentProcedimentos(slug: string): { anterior?: ProcedimentoDetalhe; proximo?: ProcedimentoDetalhe } {
  const all = getAllProcedimentos();
  const index = all.findIndex(p => p.slug === slug);
  if (index === -1) return {};
  
  return {
    anterior: index > 0 ? all[index - 1] : undefined,
    proximo: index < all.length - 1 ? all[index + 1] : undefined
  };
}
