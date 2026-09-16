import { Plant } from '../types';

export const PLANTS_106_TO_130: Plant[] = [
  // ==================== ALBERI DA FRUTTO & FRUTTI DELLA TRADIZIONE ====================
  {
    id: 'corbezzolo',
    nome: 'Corbezzolo',
    nomeScientifico: 'Arbutus unedo',
    famiglia: 'Ericaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Simbolo botanico d\'Italia per i suoi colori (foglie verdi, fiori bianchi e frutti rossi). Arbusto sempreverde mediterraneo rusticissimo che regala bacche sferiche dolci-acidule in tardo autunno.',
    difficolta: 'Facile',
    icona: '🔴',
    coloreTema: 'rose',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 300, max: 365 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [10, 11, 2, 3, 4],
    mesiRaccolta: [10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora della piantina a radice nuda o in vaso in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 5,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 250,
      traFileCm: 350,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Molto resistente alla siccità una volta affrancato. Annaffiare solo nei primi due estati dall\'impianto.'
    },
    terreno: 'Terreno sub-acido o acido, ben drenato, sabbioso o pietroso. Teme i suoli troppo calcarei e i ristagni d\'acqua.',
    consociazioni: {
      amiche: ['Rosmarino', 'Lavanda', 'Mirto', 'Ginestra'],
      nemiche: ['Noce'],
      motivo: 'Le specie tipiche della macchia mediterranea condividono le stesse esigenze idriche e stimolano l\'attività delle api.'
    },
    cureColturali: [
      'Pacciamatura con corteccia di pino o aghi di pino per mantenere l\'acidità del suolo',
      'Potatura minima a fine inverno solo per eliminare rami secchi o danneggiati',
      'I frutti e i nuovi fiori convivono sulla pianta contemporaneamente tra ottobre e dicembre'
    ],
    avversita: [
      { nome: 'Afidi sulle giovani foglie', tipo: 'parassita', rimedioBio: 'Sapone nero o sapone molle di potassio.' },
      { nome: 'Maculatura fogliare', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con macerato di equiseto.' }
    ],
    proprietaERaccolta: 'I frutti rossi sono ricchi di pectina, arbutina e vitamina C. Ideali per confetture, distillati e il celebre miele amaro di corbezzolo sardo.',
    curiosita: 'Plinio il Vecchio conia il termine "unedo" da "unum tantum edo" ("ne mangio solo uno"), riferendosi al gusto astringente se consumato non perfettamente maturo.'
  },
  {
    id: 'giuggiolo',
    nome: 'Giuggiolo (Zizzifo)',
    nomeScientifico: 'Ziziphus jujuba',
    famiglia: 'Rhamnaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero rustico antichissimo, capace di resistere al gelo invernale e alla canicola estiva. Produce le celebri "giuggiole", piccoli frutti ovoidali che diventano bruni e rugosi, dolcissimi come datteri.',
    difficolta: 'Facile',
    icona: '🟤',
    coloreTema: 'amber',
    giorniGerminazione: { min: 25, max: 45 },
    giorniRaccolto: { min: 180, max: 210 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto a radice nuda nel riposo vegetativo in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 25,
      crescitaMin: -15,
      crescitaMax: 40
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 450,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Pianta frugale e resistente alla siccità estrema. Un\'irrigazione di soccorso durante l\'ingrossamento dei frutti ne aumenta la pezzatura.'
    },
    terreno: 'Tollerante verso qualsiasi terreno, anche arido, sassoso o calcareo. Necessita di eccellente drenaggio.',
    consociazioni: {
      amiche: ['Olivo', 'Vite', 'Fico', 'Timo'],
      nemiche: ['Noce'],
      motivo: 'Condivide habitat aridi e soleggiati senza alcuna competizione nutritiva.'
    },
    cureColturali: [
      'Concimazione autunnale con letame maturo o stallatico pellettato',
      'Potatura di formazione nei primi anni e poi solo sfoltimento dei rami secchi o incrociati'
    ],
    avversita: [
      { nome: 'Mosca della frutta (Ceratitis capitata)', tipo: 'parassita', rimedioBio: 'Trappole cromotropiche gialle con attrattivo alimentare tipo Spintor Fly o trappole a base di ammoniaca.' }
    ],
    proprietaERaccolta: 'Le giuggiole sono ricchissime di vitamina C, tannini e zuccheri naturali. Raccolte acerbe sanno di mela renetta; mature sanno di dattero.',
    curiosita: 'L\'espressione "andare in brodo di giuggiole" (uscire di sé per la gioia) deriva da un delizioso liquore rinascimentale preparato dalla famiglia Medici ad Arquà Petrarca.'
  },
  {
    id: 'cotogno',
    nome: 'Melo Cotogno / Cotogno',
    nomeScientifico: 'Cydonia oblonga',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Alberello da frutto storico dal profumo inebriante. I grandi pomi giallo-oro, ricoperti da una peluria vellutata, sono duri da crudi ma si trasformano in squisite cotognate, gelatine e mostarde.',
    difficolta: 'Facile',
    icona: '🍐',
    coloreTema: 'amber',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 180, max: 210 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora dell\'alberello a radice nuda nel periodo invernale in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 22,
      crescitaMin: -18,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 450,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigazioni regolari nel periodo estivo durante la formazione del frutto, specialmente su piante giovani.'
    },
    terreno: 'Predilige terreni profondi, fertili, freschi e leggermente acidi (evitare suoli con calcare attivo superiore all\'8-9%).',
    consociazioni: {
      amiche: ['Erba cipollina', 'Lavanda', 'Consolida maggiore', 'Aglio'],
      nemiche: ['Noce', 'Finocchio'],
      motivo: 'L\'erba cipollina e l\'aglio alla base del tronco aiutano a prevenire la ticchiolatura della mela cotogna.'
    },
    cureColturali: [
      'Trattamenti invernali con rameici dopo la caduta delle foglie per prevenire il cancro rameale',
      'Diradamento dei frutti in eccesso a inizio estate se l\'allegagione è troppo abbondante'
    ],
    avversita: [
      { nome: 'Ticchiolatura e Monilia', tipo: 'malattia', rimedioBio: 'Poltiglia bordolese a gemma gonfia e decotto di equiseto primaverile.' },
      { nome: 'Carpocapsa del melo', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis e trappole a feromoni sessuali.' }
    ],
    proprietaERaccolta: 'Frutto astringente e profumatissimo, straordinariamente ricco di pectina, utile per gelificare marmellate e lenire l\'apparato gastrointestinale.',
    curiosita: 'Nell\'antica Grecia era considerato il frutto sacro ad Afrodite, simbolo di fertilità e amore, donato agli sposi il giorno delle nozze.'
  },
  {
    id: 'gelso',
    nome: 'Gelso (Nero e Bianco)',
    nomeScientifico: 'Morus nigra / Morus alba',
    famiglia: 'Moraceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero maestoso della tradizione contadina europea. Produce copiose more di gelso dolcissime e dissetanti. Storicamente protagonista della via della seta per le sue foglie destinate al baco.',
    difficolta: 'Facile',
    icona: '🍇',
    coloreTema: 'purple',
    giorniGerminazione: { min: 20, max: 40 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto dell\'alberello in luna crescente durante il sonno invernale.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 25,
      crescitaMin: -15,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 500,
      traFileCm: 600,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Autonomo grazie al profondo apparato radicale fittonante. Soccorrere solo nei primi anni in caso di prolungata siccità.'
    },
    terreno: 'Adattabile a qualsiasi terreno, anche povero e sassoso, purché privo di ristagni persistenti.',
    consociazioni: {
      amiche: ['Graminacee da foraggio', 'Trifoglio', 'Aromatiche mediterranee'],
      nemiche: ['Noce'],
      motivo: 'Il trifoglio alla base fissa azoto e arricchisce la corona radicale del gelso.'
    },
    cureColturali: [
      'Potatura di formazione nei primi anni per impostare la chioma ad ombrello',
      'Raccolta scuotendo i rami stendendo teli puliti a terra sotto la chioma'
    ],
    avversita: [
      { nome: 'Cocciniglia bianca del gelso', tipo: 'parassita', rimedioBio: 'Spazzolatura dei tronchi e trattamenti con olio bianco minerale invernale.' }
    ],
    proprietaERaccolta: 'I frutti sono ricchi di resveratrolo, antociani, ferro e zuccheri ad assorbimento graduale. Raccogliere a piena maturazione quando si staccano da soli.',
    curiosita: 'In Sicilia la celebre granita di gelsi neri accompagnata dalla brioche col tuppo è un caposaldo millenario della colazione estiva.'
  },
  {
    id: 'sorbo',
    nome: 'Sorbo Domestico (Sorbole)',
    nomeScientifico: 'Sorbus domestica',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Antico albero da frutto rurale con pomi piriformi o sferici. Le sorbole maturano sulla paglia (ammezzimento) come le nespole invernali, acquisendo una polpa vellutata e dolce con sentori di cannella.',
    difficolta: 'Facile',
    icona: '🍁',
    coloreTema: 'amber',
    giorniGerminazione: { min: 60, max: 90 },
    giorniRaccolto: { min: 210, max: 240 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora dell\'alberello in luna crescente nei mesi invernali.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: -20,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 450,
      traFileCm: 550,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Rustico ed estremamente parsimonioso; non richiede annaffiature una volta attecchito.'
    },
    terreno: 'Predilige terreni calcarei, asciutti e collinari, ma vegeta bene anche in terreni argillosi ben drenati.',
    consociazioni: {
      amiche: ['Castagno', 'Nocciolo', 'Melo selvatico', 'Pesco'],
      nemiche: ['Noce'],
      motivo: 'Tipica specie del frutteto antico biodiversificato, arricchisce la microfauna utile.'
    },
    cureColturali: [
      'Non richiede potature regolari: basta rimuovere rami secchi o malformati',
      'Stendere i frutti colti ancora duri sulla paglia per farli "ammezzire" e ammorbidire'
    ],
    avversita: [
      { nome: 'Ticchiolatura del sorbo', tipo: 'malattia', rimedioBio: 'Rameico preventivo in autunno a caduta foglie.' }
    ],
    proprietaERaccolta: 'Frutto astringente ricchissimo di sorbitolo (dolcificante naturale), tannini e vitamina C. Ideale per confetture montane e liquori.',
    curiosita: 'L\'antico adagio contadino "Col tempo e con la paglia maturano le nespole e le sorbe" insegna il valore della pazienza di fronte agli eventi della vita.'
  },
  {
    id: 'azzeruolo',
    nome: 'Azzeruolo (Lazzarolo)',
    nomeScientifico: 'Crataegus azarolus',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Piccolo arbusto o alberello spinoso dai frutti simili a minuscole mele rosse o gialle. Molto apprezzato nei giardini di campagna per la rusticità e il sapore agrodolce delle azzeruole.',
    difficolta: 'Facile',
    icona: '🍎',
    coloreTema: 'rose',
    giorniGerminazione: { min: 40, max: 90 },
    giorniRaccolto: { min: 150, max: 180 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora autunno-invernale in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 22,
      crescitaMin: -20,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 300,
      traFileCm: 400,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Molto resistente alla siccità; tollera estati torride senza perdita di fruttificazione.'
    },
    terreno: 'Terreno calcareo, asciutto e ben drenato. Vegeta anche su pendii sassosi e argillosi.',
    consociazioni: {
      amiche: ['Biancospino', 'Prugnolo', 'Rosa canina', 'Lavanda'],
      nemiche: ['Noce'],
      motivo: 'Forma siepi campestri impenetrabili ed ecologiche che ospitano uccelli insettivori e impollinatori.'
    },
    cureColturali: [
      'Potatura leggera per arieggiare la chioma e facilitare la raccolta tra i rami spinosi',
      'Ottimo come portinnesto rustico per nespole e peri in terreni siccitosi'
    ],
    avversita: [
      { nome: 'Afide verde', tipo: 'parassita', rimedioBio: 'Sapone di potassio e presenza di coccinelle predatrici.' }
    ],
    proprietaERaccolta: 'Frutti rinfrescanti ricchi di provitamina A e antiossidanti, consumati freschi o trasformati in composte e mostarde tipiche mantovane e romagnole.',
    curiosita: 'Diffuso in Italia durante il Rinascimento dai mercanti orientali, compariva spesso nei banchetti nobiliari medicei e sforzeschi.'
  },
  {
    id: 'bergamotto',
    nome: 'Bergamotto di Calabria',
    nomeScientifico: 'Citrus bergamia',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Il principe degli agrumi italiani, gioiello della costa ionica reggina. I suoi frutti rotondi giallo-verdi racchiudono nella buccia un olio essenziale nobile e inconfondibile, e una polpa intensamente aromatica.',
    difficolta: 'Media',
    icona: '🍋',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 25, max: 40 },
    giorniRaccolto: { min: 240, max: 300 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 5],
    mesiRaccolta: [11, 12, 1, 2, 3],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora in primavera in luna crescente per incoraggiare il nuovo flusso di linfa.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 26,
      crescitaMin: 12,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 450,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari evitando ristagni d\'acqua alle radici. In vaso annaffiare quando i primi 3 cm di terriccio sono asciutti.'
    },
    terreno: 'Terreno profondo, alluvionale, fertile e ricco di humus, con pH compreso tra 6.0 e 7.2.',
    consociazioni: {
      amiche: ['Borragine', 'Calendula', 'Salvia', 'Maggiorana'],
      nemiche: ['Noce', 'Finocchio'],
      motivo: 'I fiori amici attirano insetti impollinatori e allontanano i parassiti pungenti.'
    },
    cureColturali: [
      'Al Nord o all\'interno coltivare esclusivamente in vaso grande e riparare in serra fredda sotto i 3°C',
      'Concimazione periodica con lupino macinato o concimi azotati a lenta cessione per agrumi'
    ],
    avversita: [
      { nome: 'Cocciniglia cotonosa', tipo: 'parassita', rimedioBio: 'Olio bianco minerale estivo o spugnature con alcool e sapone di Marsiglia.' },
      { nome: 'Fumaggine', tipo: 'malattia', rimedioBio: 'Lavaggio fogliare con sapone molle di potassio e trattamenti con rameico a basso dosaggio.' }
    ],
    proprietaERaccolta: 'Studi clinici confermano la straordinaria ricchezza in flavonoidi capaci di abbattere il colesterolo LDL e i trigliceridi ematici.',
    curiosita: 'L\'essenza di bergamotto è la nota di testa base dell\'originale "Acqua di Colonia" creata dall\'italiano Giovanni Maria Farina nel 1709.'
  },
  {
    id: 'chinotto',
    nome: 'Chinotto di Savona',
    nomeScientifico: 'Citrus myrtifolia',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Agrume ornamentale e fruttifero a crescita lenta, con foglioline fitte simili al mirto. I suoi frutti, amari e profumatissimi, sono la base della celebre bevanda scura e di canditi prelibati.',
    difficolta: 'Media',
    icona: '🍊',
    coloreTema: 'orange',
    giorniGerminazione: { min: 25, max: 45 },
    giorniRaccolto: { min: 240, max: 300 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 5],
    mesiRaccolta: [9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto primaverile in luna crescente a terreno riscaldato.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 25,
      crescitaMin: 8,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 250,
      traFileCm: 350,
      profonditaSeminaCm: 35
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiature regolari senza eccedere. Più tollerante al freddo rispetto a limoni e aranci (resiste a brevi gelate fino a -3°C).'
    },
    terreno: 'Terreno sciolto, calcareo-argilloso ma ben drenato. Ideale per la coltivazione in grandi vasi di terracotta.',
    consociazioni: {
      amiche: ['Rosmarino', 'Timo', 'Origano', 'Lavanda'],
      nemiche: ['Noce'],
      motivo: 'Le aromatiche mediterranee creano un microclima repellente per i tripidi.'
    },
    cureColturali: [
      'Potatura quasi inesistente: asportare solo rami secchi per mantenere la tipica forma a cespuglio sferico',
      'Nutrire a inizio primavera e a fine estate con concimi biologici per agrumi'
    ],
    avversita: [
      { nome: 'Cocciniglie a scudetto', tipo: 'parassita', rimedioBio: 'Olio minerale leggero bio e sapone molle.' }
    ],
    proprietaERaccolta: 'Ricco di naringina e principi amari tonici, favorisce la digestione e stimola l\'appetito.',
    curiosita: 'Importato dalla Cina nel Cinquecento da un navigatore savonese, ha trovato sulla riviera ligure un terroir ideale divenendo presidio Slow Food.'
  },
  {
    id: 'feijoa',
    nome: 'Feijoa (Acca sellowiana)',
    nomeScientifico: 'Acca sellowiana',
    famiglia: 'Myrtaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Arbusto sempreverde ornamentale con stupendi fiori dai petali carnosi commestibili e bacche verdi dal profumo esotico, che unisce l\'aroma di ananas, fragola e menta.',
    difficolta: 'Facile',
    icona: '🍈',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 20, max: 40 },
    giorniRaccolto: { min: 150, max: 180 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 5, 10],
    mesiRaccolta: [10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora in primavera in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 24,
      crescitaMin: -10,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 250,
      traFileCm: 350,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Resiste bene alla siccità, ma per ottenere frutti grossi e polposi richiede annaffiature estive regolari.'
    },
    terreno: 'Sciolto, sabbioso o di medio impasto, ricco di sostanza organica. Teme il calcare eccessivo e l\'asfissia radicale.',
    consociazioni: {
      amiche: ['Mirtillo', 'Fragola', 'Arancio', 'Melograno'],
      nemiche: ['Noce'],
      motivo: 'Condivide esigenze di suoli freschi e attira api e bombi sui suoi magnifici stami purpurei.'
    },
    cureColturali: [
      'Per una produzione abbondante si consiglia di piantare almeno due varietà diverse per favorire l\'impollinazione incrociata',
      'I petali dei fiori in giugno possono essere colti e mangiati freschi: sono dolcissimi come caramelle!'
    ],
    avversita: [
      { nome: 'Mosca mediterranea della frutta', tipo: 'parassita', rimedioBio: 'Reti antinsetto o trappole a base di ammoniaca e attrattivi.' }
    ],
    proprietaERaccolta: 'I frutti si raccolgono quando cadono a terra o si staccano al minimo tocco. Straordinaria fonte di iodio e vitamina C.',
    curiosita: 'Originaria del Sud America, deve il nome al naturalista brasiliano João da Silva Feijó.'
  },
  {
    id: 'fico-dindia',
    nome: "Fico d'India",
    nomeScientifico: 'Opuntia ficus-indica',
    famiglia: 'Cactaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Icona indiscussa del paesaggio rurale del Sud Italia e delle isole. Pianta succulenta dalle grandi "pale" (cladodi) che produce frutti spinosi coloratissimi, dolci e zuccherini (i celebri "bastardoni").',
    difficolta: 'Facile',
    icona: '🌵',
    coloreTema: 'orange',
    giorniGerminazione: { min: 20, max: 40 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [8, 9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Interramento di una pala tagliata e cicatrizzata per qualche giorno, in luna crescente primaverile.',
    temperaturaIdeale: {
      germinazioneMin: 18,
      germinazioneOttimale: 28,
      crescitaMin: 0,
      crescitaMax: 45
    },
    distanze: {
      traPianteCm: 300,
      traFileCm: 400,
      profonditaSeminaCm: 15
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Pianta xerofila: non necessita di alcuna annaffiatura in piena terra; teme mortalmente i ristagni d\'acqua.'
    },
    terreno: 'Arido, sabbioso, sassoso, vulcanico o calcareo. Cresce anche nelle fessure della roccia lavica.',
    consociazioni: {
      amiche: ['Cappero', 'Agave', 'Rosmarino', 'Timo'],
      nemiche: ['Ortaggi a forte fabbisogno idrico'],
      motivo: 'Perfetta per siepi frangivento e terrazzamenti solatii a manutenzione zero.'
    },
    cureColturali: [
      'Scapolatura ("scozzolatura") a fine maggio: eliminazione dei primi fiori per stimolare una seconda fioritura di frutti più grandi e tardivi ("scozzolati")',
      'Maneggiare sempre con guanti spessi di cuoio per evitare le minuscole spine (glochidi)'
    ],
    avversita: [
      { nome: 'Cocciniglia del carminio (Dactylopius coccus)', tipo: 'parassita', rimedioBio: 'Trattamenti mirati con sapone di potassio e getti d\'acqua a pressione.' }
    ],
    proprietaERaccolta: 'I frutti contengono fibre solubili, betalaine antiossidanti e potassio. Anche le pale giovani ("nopales") sono commestibili e consumate alla piastra o sott\'aceto.',
    curiosita: 'Introdotto dai conquistadores spagnoli al ritorno dalle Americhe, si è naturalizzato così profondamente nel Mediterraneo da sembrare una pianta autoctona.'
  },

  // ==================== ORTAGGI DIMENTICATI & RADICI RUSTICHE ====================
  {
    id: 'scorzobianca',
    nome: 'Scorzobianca (Tragopogon porrifolius)',
    nomeScientifico: 'Tragopogon porrifolius',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Antico ortaggio da radice dal sapore delicato e zuccherino che ricorda quello delle ostriche o del carciofo. Coltivata per le lunghe radici bianche e per i teneri germogli primaverili.',
    difficolta: 'Facile',
    icona: '🥕',
    coloreTema: 'amber',
    giorniGerminazione: { min: 10, max: 15 },
    giorniRaccolto: { min: 120, max: 150 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5],
    mesiTrapianto: [],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina diretta a luna calante per concentrare la linfa nell\'allungamento della radice a fittone.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 5,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 12,
      traFileCm: 30,
      profonditaSeminaCm: 1.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigazioni regolari per mantenere il terreno fresco ed evitare che la radice diventi fibrosa o legnosa.'
    },
    terreno: 'Profondo, leggero, sciolto e privo di sassi che possano biforcare la radice. Molto simile alle carote.',
    consociazioni: {
      amiche: ['Carota', 'Porro', 'Lattuga', 'Spinacio'],
      nemiche: ['Finocchio', 'Cavoli'],
      motivo: 'Si alterna bene con le insalate e tiene il terreno lavorato per le rotazioni autunnali.'
    },
    cureColturali: [
      'Diradare quando le piantine hanno 3-4 foglie lasciando 10-12 cm tra una e l\'altra',
      'Resiste sotto la neve: si raccoglie scalare per tutto l\'inverno direttamente dalla terra gelata'
    ],
    avversita: [
      { nome: 'Oidio (mal bianco)', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio e zolfo bagnabile a dosaggi leggeri.' },
      { nome: 'Nottue e grillotalpa', tipo: 'parassita', rimedioBio: 'Lavorazione del terreno e trappole con esche vegetali.' }
    ],
    proprietaERaccolta: 'Ricchissima di inulina, prebiotico eccellente per la flora batterica intestinale e perfetta per regimi alimentari a basso indice glicemico.',
    curiosita: 'In Francia e Inghilterra è chiamata popolarmente "Oyster Plant" (pianta ostrica) per la somiglianza di aroma una volta lessata o stufata con burro e prezzemolo.'
  },
  {
    id: 'crosne',
    nome: 'Crosne del Giappone (Stachys affinis)',
    nomeScientifico: 'Stachys affinis',
    famiglia: 'Lamiaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Tubero',
    descrizione: 'Ortaggio insolito e prelibato della famiglia della menta. Produce piccoli tuberi spiralati bianchi simili a conchiglie o bruchi, dalla consistenza croccante e sapore dolce tra il carciofo e la nocciola fresca.',
    difficolta: 'Media',
    icona: '🐚',
    coloreTema: 'stone',
    giorniGerminazione: { min: 14, max: 21 },
    giorniRaccolto: { min: 180, max: 240 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4],
    mesiTrapianto: [],
    mesiRaccolta: [11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Interramento dei tuberi a luna calante a inizio primavera.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 5,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 45,
      profonditaSeminaCm: 8
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Mantenere il terreno costantemente fresco durante l\'estate per favorire la moltiplicazione dei tuberi autunnali.'
    },
    terreno: 'Molto soffice, ricco di sostanza organica e torba, drenante per consentire una facile raccolta senza rompere i tuberetti.',
    consociazioni: {
      amiche: ['Fagiolo', 'Lattuga', 'Mais'],
      nemiche: ['Patata', 'Pomodoro'],
      motivo: 'Le piante alte forniscono una benefica ombreggiatura nei caldi pomeriggi estivi.'
    },
    cureColturali: [
      'Rincalzatura a metà estate come per le patate',
      'Pacciamatura con paglia per proteggere i tuberi dalle gelate severe e raccogliere comodamente in inverno'
    ],
    avversita: [
      { nome: 'Marciume radicale da asfissia', tipo: 'malattia', rimedioBio: 'Garantire terreno molto sciolto e sabbioso.' }
    ],
    proprietaERaccolta: 'Si consumano interi senza sbucciarli, saltati nel burro, fritti o in agrodolce. Ricchi di stachiosio, carboidrato prebiotico.',
    curiosita: 'Portato in Europa dalla Cina alla fine dell\'Ottocento, prese il nome dalla cittadina francese di Crosne dove fu coltivato per la prima volta su larga scala.'
  },
  {
    id: 'ocra',
    nome: 'Ocra / Gombo (Abelmoschus esculentus)',
    nomeScientifico: 'Abelmoschus esculentus',
    famiglia: 'Malvaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Pianta orticola estiva dai grandi fiori simili all\'ibisco. Produce baccelli prismatici allungati verdi, ricchi di mucillagini benefiche, consumati in stufati, curry, zuppe e fritti in pastella.',
    difficolta: 'Media',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 6, max: 12 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [5, 6],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente con temperature minime stabili sopra i 16°C.',
    temperaturaIdeale: {
      germinazioneMin: 20,
      germinazioneOttimale: 28,
      crescitaMin: 18,
      crescitaMax: 36
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 70,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Ama il caldo intenso e sopporta bene brevi periodi secchi. Annaffiare alla base evitando ristagni.'
    },
    terreno: 'Terreno ben drenato, sciolto e moderatamente fertile con pH 6.5 - 7.5.',
    consociazioni: {
      amiche: ['Peperone', 'Melanzana', 'Basilico', 'Melone'],
      nemiche: ['Finocchio'],
      motivo: 'Condivide le stesse elevate esigenze termiche degli ortaggi estivi solanacei.'
    },
    cureColturali: [
      'Ammollo dei semi per 24 ore in acqua tiepida prima della semina per ammorbidire il tegumento duro',
      'Raccolta scalare frequente (ogni 2-3 giorni): i baccelli vanno colti quando sono ancora teneri (lunghi 6-8 cm)'
    ],
    avversita: [
      { nome: 'Verticilliosi e Oidio', tipo: 'malattia', rimedioBio: 'Rotazioni colturali e decotto di equiseto o zolfo.' },
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio.' }
    ],
    proprietaERaccolta: 'Basso apporto calorico e ricchezza di folati, vitamina K e fibre solubili che aiutano a regolarizzare i livelli di glucosio.',
    curiosita: 'Le mucillagini naturali rilasciate dall\'ocra in cottura fungono da addensante biologico perfetto per zuppe tradizionali come il celebre "Gumbo" di New Orleans.'
  },
  {
    id: 'taccole',
    nome: 'Taccole (Piselli Mangiatutto)',
    nomeScientifico: 'Pisum sativum var. macrocarpon',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Varietà pregiata di pisello primaverile di cui si mangia l\'intero baccello piatto e croccante prima che i semi interni si ingrossino. Dolcissime, tenere e versatili in cucina.',
    difficolta: 'Facile',
    icona: '🫛',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 7, max: 12 },
    giorniRaccolto: { min: 65, max: 80 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 4, 10, 11],
    mesiTrapianto: [],
    mesiRaccolta: [4, 5, 6],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina diretta a luna crescente a fine inverno o inizio primavera.',
    temperaturaIdeale: {
      germinazioneMin: 7,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 6,
      traFileCm: 50,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigare con regolarità durante la fioritura e la formazione dei baccelli, evitando i colpi di siccità.'
    },
    terreno: 'Terreno fresco, di medio impasto, ben lavorato. Teme i suoli troppo compatti o calcarei.',
    consociazioni: {
      amiche: ['Carota', 'Ravanello', 'Lattuga', 'Cetriolo'],
      nemiche: ['Aglio', 'Cipolla', 'Porro', 'Scalogno'],
      motivo: 'Le liliacee inibiscono i batteri rizobi azotofissatori delle radici dei legumi.'
    },
    cureColturali: [
      'Predisporre reti o frasche di sostegno se si coltivano varietà a sviluppo rampicante o semirampicante',
      'Rincalzare leggermente la base quando le piantine raggiungono 10 cm di altezza'
    ],
    avversita: [
      { nome: 'Oidio del pisello', tipo: 'malattia', rimedioBio: 'Bicarbonato di sodio e ventilazione delle file.' },
      { nome: 'Tonchio del pisello', tipo: 'parassita', rimedioBio: 'Semine anticipate e conservazione dei semi al freddo.' }
    ],
    proprietaERaccolta: 'Ottima fonte di ferro vegetale, fibre prebiotiche, vitamina C e proteine vegetali a bassissimo contenuto calorico.',
    curiosita: 'In Veneto e Lombardia sono chiamate "baccelli matti" o "piselli mangiatutto" per via della totale assenza della membrana pergamenacea interna al baccello.'
  },
  {
    id: 'tatsoi',
    nome: 'Tatsoi (Spinacio Cinese a Rosetta)',
    nomeScientifico: 'Brassica rapa subsp. narinosa',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Foglia orientale spettacolare a forma di rosetta piatta con foglioline verde scuro a cucchiaio. Resiste a temperature gelide fino a -10°C, garantendo verdura fresca croccante per tutto l\'inverno.',
    difficolta: 'Facile',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 4, max: 7 },
    giorniRaccolto: { min: 40, max: 55 },
    mesiSeminaSemenzaio: [7, 8],
    mesiSeminaTerra: [8, 9, 10],
    mesiTrapianto: [8, 9, 10],
    mesiRaccolta: [10, 11, 12, 1, 2, 3],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina di fine estate a luna calante per scongiurare la precoce salita a fiore.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 20,
      crescitaMin: 3,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 20,
      traFileCm: 30,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Mantenere il letto di semina sempre umido; ridurre drasticamente con l\'arrivo del freddo invernale.'
    },
    terreno: 'Terreno sciolto, ricco di humus, fertile e ben drenato.',
    consociazioni: {
      amiche: ['Aglio', 'Cipolla', 'Menta', 'Mizuna'],
      nemiche: ['Cavoli consimili', 'Fragola'],
      motivo: 'L\'aglio protegge le brassicacee dagli attacchi delle altiche saltatrici.'
    },
    cureColturali: [
      'Si può raccogliere a cespo intero o tagliando le foglie esterne che ricrescono dal cuore',
      'Proteggere con un velo di tessuto non tessuto durante le nevicate abbondanti'
    ],
    avversita: [
      { nome: 'Altica (pulce delle crucifere)', tipo: 'parassita', rimedioBio: 'Polvere di roccia (zeolite o caolino) e irrigazioni a pioggia.' }
    ],
    proprietaERaccolta: 'Contiene il doppio di calcio rispetto al latte vaccino, oltre a vitamina A, C e carotenoidi ad alta biodisponibilità.',
    curiosita: 'Crescendo così appiattita contro il terreno, la pianta sfrutta il calore geotermico del suolo per sopravvivere alle gelate più intense.'
  },
  {
    id: 'mizuna',
    nome: 'Mizuna (Senape Giapponese)',
    nomeScientifico: 'Brassica rapa var. japonica',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Elegante insalata da taglio giapponese dalle foglie profondamente frastagliate e piccioli bianchi croccanti. Ha un sapore fresco, leggermente pepato e aromatico, perfetta da cruda o saltata nel wok.',
    difficolta: 'Facile',
    icona: '🥗',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 3, max: 6 },
    giorniRaccolto: { min: 25, max: 40 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 8, 9, 10],
    mesiTrapianto: [3, 4, 9],
    mesiRaccolta: [4, 5, 9, 10, 11, 12],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina a luna calante in autunno per evitare la fioritura estiva dovuta al caldo.',
    temperaturaIdeale: {
      germinazioneMin: 7,
      germinazioneOttimale: 18,
      crescitaMin: 4,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 25,
      profonditaSeminaCm: 0.8
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari e leggere per mantenere le foglie tenere e poco piccanti.'
    },
    terreno: 'Fresco, fertile, ricco di sostanza organica e senza ristagni d\'acqua.',
    consociazioni: {
      amiche: ['Carote', 'Lattuga', 'Cipollotti', 'Piselli'],
      nemiche: ['Ravanello', 'Cavolo'],
      motivo: 'Crescita rapidissima ideale come intercalare tra ortaggi a ciclo lungo.'
    },
    cureColturali: [
      'Tagliare a 3 cm dalla base: ricaccia velocemente permettendo fino a 4-5 tagli nella stagione',
      'In estate fornire una leggera ombreggiatura per evitare che monti a seme precocemente'
    ],
    avversita: [
      { nome: 'Lumache e chiocciole', tipo: 'parassita', rimedioBio: 'Bordi di cenere, gusci d\'uovo polverizzati o trappole a birra.' }
    ],
    proprietaERaccolta: 'Ricca di glucosinolati antiossidanti, acido folico, ferro e vitamina K. Si consuma freschissima appena tagliata.',
    curiosita: 'Il nome Mizuna in giapponese significa letteralmente "erba d\'acqua", per la sua predilezione per i suoli freschi delle valli intorno a Kyoto.'
  },
  {
    id: 'lampascione',
    nome: 'Lampascione (Cipollaccio con fiocco)',
    nomeScientifico: 'Leopoldia comosa',
    famiglia: 'Asparagaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Bulbo',
    descrizione: 'Tipico bulbo spontaneo e coltivato della tradizione pugliese, lucana e calabra. Piccolo bulbo dal caratteristico retrogusto amarognolo e aromatico, protagonista indiscusso dei piatti rustici del Sud.',
    difficolta: 'Media',
    icona: '🧅',
    coloreTema: 'purple',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 180, max: 240 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [9, 10, 11],
    mesiTrapianto: [],
    mesiRaccolta: [1, 2, 3, 4],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Interramento dei bulbilli a luna calante nei primi mesi d\'autunno.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 2,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 30,
      profonditaSeminaCm: 12
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Non necessita di annaffiature se coltivato all\'aperto nel periodo autunno-invernale; tollera il secco.'
    },
    terreno: 'Terreno calcareo, pietroso, sciolto e molto ben drenato. Teme il marciume in terreni asfittici.',
    consociazioni: {
      amiche: ['Fava', 'Ceci', 'Cicoria selvatica', 'Grano'],
      nemiche: ['Cavoli'],
      motivo: 'Condivide lo stesso terreno asciutto della macchia e delle colture da campo aperte.'
    },
    cureColturali: [
      'Interrare i bulbi a buona profondità (10-15 cm) per favorire la formazione di teste compatte',
      'Prima del consumo i bulbi vanno incisi a croce alla base e tenuti a bagno in acqua fresca per smorzarne l\'amaro'
    ],
    avversita: [
      { nome: 'Marciume del bulbo', tipo: 'malattia', rimedioBio: 'Evitare terreni argillosi bagnati e usare rotazioni lunghe.' }
    ],
    proprietaERaccolta: 'Ricco di mucillagini, sali minerali e principi amari tonico-digestivi, lassativo naturale ed epatoprotettore.',
    curiosita: 'Già i medici greci e romani, tra cui Galeno e Dioscoride, lo ritenevano un potente afrodisiaco e rinvigorente fisico.'
  },
  {
    id: 'rabarbaro-gigante',
    nome: 'Rabarbaro Alpino / Cinese',
    nomeScientifico: 'Rheum palmatum',
    famiglia: 'Polygonaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Pianta monumentale da fogliame ornamentale e lunghi fusti carnosi rosso-porpora. I piccioli aciduli e freschi sono ideali per confetture montane, sciroppi, torte rustiche e liquori tonici.',
    difficolta: 'Media',
    icona: '🌿',
    coloreTema: 'rose',
    giorniGerminazione: { min: 14, max: 21 },
    giorniRaccolto: { min: 365, max: 730 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 9, 10],
    mesiRaccolta: [4, 5, 6, 7],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora dei rizomi a luna crescente in primavera.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: -15,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 100,
      traFileCm: 120,
      profonditaSeminaCm: 5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Ama terreni sempre umidi ma non paludosi. Soffre i calori torridi prolungati oltre i 30°C.'
    },
    terreno: 'Molto fertile, profondo, fresco, ricco di sostanza organica e letame maturo con pH 6.0 - 6.8.',
    consociazioni: {
      amiche: ['Cavolo', 'Fagiolo nano', 'Bietola', 'Fragole'],
      nemiche: ['Ortaggi a radice profonda'],
      motivo: 'Le grandi foglie ombreggiano il suolo e riducono l\'evaporazione a beneficio delle piantine vicine.'
    },
    cureColturali: [
      'Rimuovere subito lo stelo floreale quando spunta al centro per evitare di indebolire la pianta',
      'Non raccogliere steli il primo anno di impianto per consentire al ceppo di sviluppare un potente apparato radicale',
      'Attenzione: consumare solo i piccioli! I lembi fogliari sono tossici per l\'alto contenuto di acido ossalico'
    ],
    avversita: [
      { nome: 'Maculatura fogliare (Ascochyta)', tipo: 'malattia', rimedioBio: 'Rameico dopo la raccolta e asportazione delle foglie colpite.' }
    ],
    proprietaERaccolta: 'I gambi contengono acido malico, tannini, calcio e polifenoli. Rinomato digestivo rinfrescante.',
    curiosita: 'Lungo le valli alpine piemontesi e valdostane è ingrediente d\'onore della pasticceria casalinga di inizio estate.'
  },

  // ==================== PIANTE AROMATICHE, OFFICINALI & DA TISANA ====================
  {
    id: 'elicriso',
    nome: 'Elicriso Italico (Erba del Curry)',
    nomeScientifico: 'Helichrysum italicum',
    famiglia: 'Asteraceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Arbusto perenne aromatico argenteo delle coste tirreniche e della Sardegna. Le foglie e i capolini gialli sprigionano un intenso aroma speziato di curry e liquirizia, prezioso in cucina e fitoterapia.',
    difficolta: 'Facile',
    icona: '🌼',
    coloreTema: 'amber',
    giorniGerminazione: { min: 14, max: 25 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 9],
    mesiRaccolta: [5, 6, 7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina o trapianto in luna crescente a primavera.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 22,
      crescitaMin: 5,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 50,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Resiste a siccità prolungate e alla salinità marina. Annaffiare solo in caso di caldo estremo su piante giovani.'
    },
    terreno: 'Arido, sabbioso o pietroso, calcareo o neutro. Teme assolutamente i ristagni idrici.',
    consociazioni: {
      amiche: ['Lavanda', 'Santoreggia', 'Timo', 'Salvia'],
      nemiche: ['Ortaggi a forte irrigazione'],
      motivo: 'Condivide le stesse condizioni xerofile e l\'aroma balsamico respinge insetti terricoli nocivi.'
    },
    cureColturali: [
      'Potare a inizio primavera accorciando i rami per mantenere la pianta compatta ed evitare che legnifichi al centro',
      'I fiori secchi mantengono colore e profumo per anni nei bouquet di fiori essiccati'
    ],
    avversita: [
      { nome: 'Marciume radicale (Phytophthora)', tipo: 'malattia', rimedioBio: 'Assicurare drenaggio perfetto e non esagerare con l\'acqua.' }
    ],
    proprietaERaccolta: 'L\'olio essenziale è un potente antinfiammatorio, balsamico ed elasticizzante per la pelle.',
    curiosita: 'In Sardegna è chiamato "Erba di San Giovanni" e veniva bruciato per purificare l\'aria delle case e profumare i prosciutti.'
  },
  {
    id: 'mirto',
    nome: 'Mirto di Sardegna',
    nomeScientifico: 'Myrtus communis',
    famiglia: 'Myrtaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Arbusto sempreverde profumato della macchia mediterranea. Le sue foglie cuoiose rilasciano oli balsamici ed essenziali unici, mentre le bacche blu-violacee tardo-autunnali creano il celebre liquore digestivo sardo.',
    difficolta: 'Facile',
    icona: '🫐',
    coloreTema: 'purple',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 240, max: 300 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 10, 11],
    mesiRaccolta: [11, 12, 1],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora in luna crescente in autunno o inizio primavera.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: -4,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 150,
      traFileCm: 200,
      profonditaSeminaCm: 30
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Grande resistenza alla siccità estiva mediterranea. Annaffiare con moderazione solo durante il primo anno.'
    },
    terreno: 'Siliceo o sub-acido, leggero, privo di calcare attivo elevato e con ottimo sgrondo delle acque.',
    consociazioni: {
      amiche: ['Rosmarino', 'Corbezzolo', 'Lentisco', 'Elicriso'],
      nemiche: ['Noce'],
      motivo: 'Specie cardine dell\'ecosistema della macchia mediterranea costiera.'
    },
    cureColturali: [
      'Potatura di ringiovanimento dopo la raccolta delle bacche a fine inverno',
      'Le foglie possono essere usate tutto l\'anno per aromatizzare arrosti (es. porceddu) e cacciagione'
    ],
    avversita: [
      { nome: 'Cocciniglia cerifera', tipo: 'parassita', rimedioBio: 'Olio bianco estivo e sapone nero vegetale.' }
    ],
    proprietaERaccolta: 'Bacche e foglie ricche di mirtenolo, geraniolo, tannini e vitamina C con spiccate virtù astringenti e digestive.',
    curiosita: 'Nell\'antichità classica era la pianta sacra a Venere (Afrodite), simbolo di purezza, amore fedele e pace.'
  },
  {
    id: 'camomilla',
    nome: 'Camomilla Comune / Matricaria',
    nomeScientifico: 'Matricaria chamomilla',
    famiglia: 'Asteraceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Pianta erbacea campestre annuale dai deliziosi capolini bianchi e gialli profumati di mela. Facilissima da coltivare nell\'orto, attira miriadi di insetti utili e regala infusi rilassanti e digestivi.',
    difficolta: 'Facile',
    icona: '🌼',
    coloreTema: 'amber',
    giorniGerminazione: { min: 7, max: 12 },
    giorniRaccolto: { min: 60, max: 75 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 9, 10],
    mesiTrapianto: [3, 4],
    mesiRaccolta: [5, 6, 7],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente; i minuscoli semi necessitano di luce per germinare (non interrare troppo!).',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 6,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 20,
      traFileCm: 30,
      profonditaSeminaCm: 0.2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiare con nebulizzazioni fini fino all\'affrancamento, poi bagnare solo quando il terreno asciuga.'
    },
    terreno: 'Povero, leggero, sciolto e ben drenato. Cresce spontanea sui bordi dei campi di grano.',
    consociazioni: {
      amiche: ['Cipolla', 'Porro', 'Cavolo', 'Menta'],
      nemiche: ['Finocchio'],
      motivo: 'Stimola la vitalità delle piante vicine, incrementa la produzione di oli essenziali e allontana la mosca della cipolla.'
    },
    cureColturali: [
      'Raccogliere i capolini fioriti in giornate calde e asciutte verso mezzogiorno quando sono aperti al massimo',
      'Essiccare all\'ombra in luogo areato su teli o graticci'
    ],
    avversita: [
      { nome: 'Afidi neri sugli steli', tipo: 'parassita', rimedioBio: 'Macerato d\'ortica o getti d\'acqua con sapone molle.' }
    ],
    proprietaERaccolta: 'L\'infuso di camomilla è antispasmodico, distensivo muscolare, antinfiammatorio gastrico e lenitivo per gli occhi.',
    curiosita: 'Il nome "Matricaria" deriva dal latino "matrix" (utero), per la secolare efficacia contro i dolori mestruali femminili.'
  },
  {
    id: 'lemongrass',
    nome: 'Lemongrass / Erba Luisa Asiatica',
    nomeScientifico: 'Cymbopogon citratus',
    famiglia: 'Poaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Graminacea tropicale a cespo denso con lunghi fusti carnosi dal profumo intensissimo di limone fresco e zenzero. Indispensabile nella cucina asiatica e perfetta per tisane digestive e rinfrescanti.',
    difficolta: 'Media',
    icona: '🌾',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 10, max: 20 },
    giorniRaccolto: { min: 75, max: 100 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto in luna crescente a tarda primavera quando non c\'è più pericolo di ritorni di gelo.',
    temperaturaIdeale: {
      germinazioneMin: 20,
      germinazioneOttimale: 28,
      crescitaMin: 12,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 45,
      traFileCm: 60,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Ama l\'umidità costante nei mesi caldi. Non tollera la siccità prolungata.'
    },
    terreno: 'Fertile, ricco di compost, soffice e drenante. Ideale coltivarlo in grandi vasi da ritirare in inverno.',
    consociazioni: {
      amiche: ['Peperoncino', 'Zenzero', 'Basilico tailandese', 'Pomodoro'],
      nemiche: ['Finocchio'],
      motivo: 'L\'intenso aroma di citrale funge da potente repellente naturale contro zanzare e moscerini.'
    },
    cureColturali: [
      'Nelle regioni settentrionali riparare in casa o serra riscaldata prima che le temperature scendano sotto gli 8°C',
      'Si raccoglie recidendo la base dello stelo carnoso a pochi centimetri dal colletto'
    ],
    avversita: [
      { nome: 'Ragnetto rosso', tipo: 'parassita', rimedioBio: 'Nebulizzazioni di acqua fresca sulle foglie e olio di neem.' }
    ],
    proprietaERaccolta: 'Contiene oltre il 75% di citrale, potente antibatterico naturale, digestivo e rinfrescante.',
    curiosita: 'In tutto il sud-est asiatico è l\'ingrediente chiave delle famose zuppe Tom Yum thailandesi.'
  },
  {
    id: 'cedrina',
    nome: 'Cedrina / Erba Luigia (Lippia)',
    nomeScientifico: 'Aloysia citrodora',
    famiglia: 'Verbenaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Foglia',
    descrizione: 'Arbusto perenne dalle foglie lanceolate ruvide che al solo sfioramento liberano un profumo penetrante e squisito di scorza di limone. La regina incontrastata dei liquori d\'erba e delle tisane serali.',
    difficolta: 'Facile',
    icona: '🍃',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 20, max: 35 },
    giorniRaccolto: { min: 60, max: 90 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora della piantina in primavera a luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 24,
      crescitaMin: 0,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 60,
      traFileCm: 80,
      profonditaSeminaCm: 25
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiare con regolarità in estate quando il terreno superficiale è asciutto. Ridurre a zero in inverno.'
    },
    terreno: 'Terreno sciolto, fertile e perfettamente drenato. Teme le gelate severe sotto i -3°C.',
    consociazioni: {
      amiche: ['Menta', 'Melissa', 'Camomilla', 'Salvia'],
      nemiche: ['Noce'],
      motivo: 'Crea angoli aromatici ricchi di impollinatori che allontanano insetti molesti.'
    },
    cureColturali: [
      'Proteggere il colletto in inverno con abbondante pacciamatura di foglie secche o paglia',
      'Potare a inizio primavera tagliando a metà i rami dell\'anno precedente per favorire folti germogli'
    ],
    avversita: [
      { nome: 'Afidi sulle cime tenere', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio.' }
    ],
    proprietaERaccolta: 'Proprietà digestive, carminative e distensive sul sistema nervoso. Eccellente per aromatizzare macedonie e creme.',
    curiosita: 'Dedicata a Maria Luisa di Parma, regina consorte di Spagna, fu portata in Europa dal Perù nel Settecento dal botanico francese Philibert Commerson.'
  },
  {
    id: 'santolina',
    nome: 'Santolina (Crespolina)',
    nomeScientifico: 'Santolina chamaecyparissus',
    famiglia: 'Asteraceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Arbusto perenne a cuscino compatto dal caratteristico fogliame grigio-argenteo piumoso e fiorellini a bottone giallo dorato. Profumo canforato pungente che protegge l\'orto e tiene lontane le tarme.',
    difficolta: 'Facile',
    icona: '🏵️',
    coloreTema: 'stone',
    giorniGerminazione: { min: 14, max: 28 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 9, 10],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto primaverile o autunnale in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 22,
      crescitaMin: -10,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 45,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Rusticissima: sopporta siccità estrema senza mostrare cedimenti. Non sopporta i terreni zuppi.'
    },
    terreno: 'Povero, asciutto, ghiaioso o calcareo, molto ben drenato.',
    consociazioni: {
      amiche: ['Lavanda', 'Rosmarino', 'Timo', 'Origano'],
      nemiche: ['Ortaggi a radice tenera'],
      motivo: 'Forma bordure protettive che tengono lontani parassiti volanti e lumache.'
    },
    cureColturali: [
      'Cimare i fiori secchi a fine estate per mantenere la forma a cupola compatta',
      'I rametti essiccati sono il rimedio antitarme naturale più potente da riporre negli armadi'
    ],
    avversita: [
      { nome: 'Marciume da ristagno', tipo: 'malattia', rimedioBio: 'Coltivare su aiuole rialzate e terreno drenante.' }
    ],
    proprietaERaccolta: 'Proprietà antielmintiche, vermifughe, digestive e antisettiche.',
    curiosita: 'Nel Medioevo veniva cosparsa sui pavimenti delle chiese e dei castelli come disinfettante aromatico per scacciare pulci e zecche.'
  },
  {
    id: 'fieno-greco',
    nome: 'Fieno Greco (Trigonella)',
    nomeScientifico: 'Trigonella foenum-graecum',
    famiglia: 'Fabaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Leguminosa annuale della tradizione contadina e officinale. I semi prismatici sprigionano un aroma caldo che ricorda il caramello, la noce e il sedano, formidabile ricostituente e arricchitore naturale di azoto per il suolo.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'amber',
    giorniGerminazione: { min: 3, max: 7 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5, 9],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7, 8, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a spaglio o a file a luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 30,
      profonditaSeminaCm: 1.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiare con moderazione fino alla formazione dei baccelli; sospendere prima della mietitura dei semi.'
    },
    terreno: 'Qualsiasi terreno di medio impasto, anche calcareo o sabbioso, purché non asfittico.',
    consociazioni: {
      amiche: ['Pomodoro', 'Melanzana', 'Mais', 'Zucchina'],
      nemiche: ['Aglio', 'Cipolla'],
      motivo: 'Come leguminosa fissa grandi quantitativi di azoto atmosferico arricchendo l\'orto per le colture successive.'
    },
    cureColturali: [
      'Ottima anche come sovescio concimante primaverile da trinciare prima della semina degli ortaggi estivi',
      'I semi si raccolgono quando i baccelli iniziano a ingiallire e seccare'
    ],
    avversita: [
      { nome: 'Oidio', tipo: 'malattia', rimedioBio: 'Zolfo ventilato a dosaggio leggero.' }
    ],
    proprietaERaccolta: 'I semi sono straordinariamente ricchi di saponine, trigonellina, ferro e proteine. Riconosciuto ricostituente dell\'appetito e stimolante muscolare naturale.',
    curiosita: 'Il nome latino "foenum graecum" ricorda come nell\'antica Grecia e a Roma venisse coltivato per rinvigorire i cavalli da corsa e il bestiame da tiro.'
  }
];
