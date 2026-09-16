import { Plant } from '../types';

export const MORE_PLANTS: Plant[] = [
  {
    id: 'peperoncino',
    nome: 'Peperoncino Piccante',
    nomeScientifico: 'Capsicum annuum / chinense',
    famiglia: 'Solanaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Pianta solare e generosa, essenziale per la cucina mediterranea. Produce bacche piccanti ricche di capsaicina, vitamina C e antiossidanti, ottime fresche o essiccate.',
    difficolta: 'Media',
    icona: '🌶️',
    coloreTema: 'rose',
    giorniGerminazione: { min: 8, max: 18 },
    giorniRaccolto: { min: 80, max: 110 },
    mesiSeminaSemenzaio: [1, 2, 3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [7, 8, 9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina in luna crescente a caldo per favorire la fioritura e la fruttificazione piccante.',
    temperaturaIdeale: {
      germinazioneMin: 20,
      germinazioneOttimale: 26,
      crescitaMin: 18,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 60,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Bagnare solo quando il terreno è asciutto. Una leggera carenza idrica in maturazione esalta la piccantezza.'
    },
    terreno: 'Sciolto, sabbioso, molto ben drenato senza ristagni. pH tra 6.0 e 7.0.',
    consociazioni: {
      amiche: ['Basilico', 'Origano', 'Carota', 'Aglio'],
      nemiche: ['Finocchio', 'Fagiolo', 'Cavolo'],
      motivo: 'Le erbe aromatiche esaltano l\'aroma e allontanano insetti dannosi.'
    },
    cureColturali: [
      'Seminare a caldo con tappetino riscaldante o al chiuso a inizio anno',
      'Rincalzare leggermente la base e sostenere con un tutore leggero',
      'Raccogliere a piena maturazione cromatica (rosso vivo o arancione)'
    ],
    avversita: [
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio e macerato d\'aglio.' },
      { nome: 'Ragnetto rosso', tipo: 'parassita', rimedioBio: 'Nebulizzazioni di acqua fresca sotto le foglie.' }
    ],
    proprietaERaccolta: 'Potente stimolante circolatorio, termogenico e antibatterico. Si raccoglie tagliando il picciolo con forbici.',
    curiosita: 'La scala Scoville misura il grado di piccantezza in base alla concentrazione di capsaicina pura.'
  },
  {
    id: 'broccolo',
    nome: 'Broccolo Calabrese / Ramoso',
    nomeScientifico: 'Brassica oleracea var. italica',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Ortaggio autunno-invernale prelibatissimo. Dopo il raccolto del corimbo principale continua a produrre teneri germogli ascellari (broccoletti) per settimane.',
    difficolta: 'Media',
    icona: '🥦',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 65, max: 90 },
    mesiSeminaSemenzaio: [5, 6, 7],
    mesiSeminaTerra: [6, 7, 8],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per favorire lo sviluppo compatto e sodo della testa fiorale.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 50,
      traFileCm: 70,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari per mantenere il terreno fresco senza inzupparlo.'
    },
    terreno: 'Profondo, di medio impasto, ricco di sostanza organica e calcareo.',
    consociazioni: {
      amiche: ['Sedano', 'Timo', 'Menta', 'Cipolla', 'Salvia'],
      nemiche: ['Fragola', 'Pomodoro', 'Finocchio'],
      motivo: 'Aromatiche come menta e timo mascherano l\'odore respingendo la cavolaia.'
    },
    cureColturali: [
      'Rincalzatura del fusto per proteggere le piante dal vento invernale',
      'Pacciamare con foglie secche o paglia per difendere le radici dal gelo',
      'Tagliare l\'infiorescenza centrale prima che i singoli boccioli gialli si aprano'
    ],
    avversita: [
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis kurstaki e macerato di pomodoro.' },
      { nome: 'Alternaria', tipo: 'malattia', rimedioBio: 'Rameico preventivo e arieggiamento tra i cespi.' }
    ],
    proprietaERaccolta: 'Straordinaria fonte di sulforafano anticancro, ferro e vitamina C. Tagliare con taglio netto inclinato.',
    curiosita: 'Coltivato fin dai tempi dei Romani, Plinio il Vecchio ne lodava le virtù depurative.'
  },
  {
    id: 'verza',
    nome: 'Cavolo Verza',
    nomeScientifico: 'Brassica oleracea var. sabauda',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Regina delle zuppe invernali e della cassoeula. Le sue caratteristiche foglie bollose e arricciate migliorano incredibilmente in dolcezza e tenerezza dopo le prime gelate.',
    difficolta: 'Facile',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 4, max: 8 },
    giorniRaccolto: { min: 75, max: 100 },
    mesiSeminaSemenzaio: [5, 6, 7],
    mesiSeminaTerra: [6, 7],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [10, 11, 12, 1, 2, 3],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per favorire la chiusura compatta della palla.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 5,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 45,
      traFileCm: 60,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigazioni regolari all\'attecchimento, poi moderate in autunno/inverno.'
    },
    terreno: 'Terreno consistente, fresco e ben concimato con compost ben maturo.',
    consociazioni: {
      amiche: ['Rosmarino', 'Salvia', 'Sedano', 'Bietola', 'Porro'],
      nemiche: ['Fragole', 'Aglio', 'Cipolla'],
      motivo: 'Il sedano e il rosmarino creano una barriera aromatica contro gli insetti.'
    },
    cureColturali: [
      'Resiste sotto la neve fino a -8°C senza problemi',
      'Rincalzare la terra attorno al fusto per evitare il ribaltamento col peso della pioggia'
    ],
    avversita: [
      { nome: 'Lumache', tipo: 'parassita', rimedioBio: 'Trappole a birra e cenere di legna asciutta.' },
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis e rimozione manuale uova.' }
    ],
    proprietaERaccolta: 'Digestiva, ricca di potassio e vitamine. Raccogliere tagliando il cespo alla base con un coltello affilato.',
    curiosita: 'Il gelo trasforma gli amidi della verza in zuccheri semplici, rendendola irresistibilmente dolce in inverno.'
  },
  {
    id: 'radicchio',
    nome: 'Radicchio Rosso di Treviso / Chioggia',
    nomeScientifico: 'Cichorium intybus var. silvestre',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Fiore all\'occhiello dell\'orto autunnale veneto e italiano. Foglie croccanti dal caratteristico sapore piacevolmente amarognolo e dal colore rosso rubino striato di bianco.',
    difficolta: 'Media',
    icona: '🥗',
    coloreTema: 'rose',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 70, max: 95 },
    mesiSeminaSemenzaio: [5, 6, 7],
    mesiSeminaTerra: [6, 7, 8],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [9, 10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per evitare la salita a seme precoce e stimolare cespi fitti.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 6,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari e costanti; la siccità accentua eccessivamente l\'amaro.'
    },
    terreno: 'Sciolto, fresco, drenante, non troppo concimato.',
    consociazioni: {
      amiche: ['Carote', 'Finocchio', 'Lattuga', 'Fagiolo nano'],
      nemiche: ['Prezzemolo', 'Sedano'],
      motivo: 'Le carote e i fagioli mantengono fresco il terreno migliorando la radice.'
    },
    cureColturali: [
      'Legatura dei cespi con elastico o rafia a fine autunno per favorire l\'imbianchimento del cuore',
      'Le varietà tardive migliorano straordinariamente dopo le gelate'
    ],
    avversita: [
      { nome: 'Lumache', tipo: 'parassita', rimedioBio: 'Fosfato ferrico bio e barriere fisiche.' },
      { nome: 'Marciume del colletto', tipo: 'malattia', rimedioBio: 'Evitare ristagni e bagnare solo alla radice.' }
    ],
    proprietaERaccolta: 'Straordinario tonico epatico e depurativo del fegato, ricco di inulina e antociani antiossidanti.',
    curiosita: 'L\'imbianchimento tradizionale avveniva immergendo i cespi al buio in vasche di risorgiva.'
  },
  {
    id: 'puntarelle',
    nome: 'Cicoria Catalogna / Puntarelle',
    nomeScientifico: 'Cichorium intybus var. foliosum',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Ortaggio amatissimo della tradizione romana e centromeridionale. Produce un cespo con spighette e germogli interni cavi e carnosi che si sfilettano in acqua ghiacciata.',
    difficolta: 'Facile',
    icona: '🥗',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 4, max: 7 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [6, 7, 8],
    mesiSeminaTerra: [7, 8, 9],
    mesiTrapianto: [8, 9, 10],
    mesiRaccolta: [10, 11, 12, 1, 2, 3],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per favorire la formazione di germogli densi senza spigare.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 45,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Bagnare regolarmente per mantenere le coste croccanti e non coriacee.'
    },
    terreno: 'Fertile, fresco, arieggiato e ricco di humus.',
    consociazioni: {
      amiche: ['Carota', 'Finocchio', 'Porro', 'Lattuga'],
      nemiche: ['Cavoli'],
      motivo: 'Ottima alternanza tra radici profonde e cespi vigorosi.'
    },
    cureColturali: [
      'Diradare prontamente se seminata direttamente a spaglio',
      'Raccogliere tagliando l\'intero cespo alla base lasciando 1 cm per indurre possibili rigetti'
    ],
    avversita: [
      { nome: 'Afidi della radice', tipo: 'parassita', rimedioBio: 'Sarchiatura frequente e allicina d\'aglio.' },
      { nome: 'Lumache', tipo: 'parassita', rimedioBio: 'Trappole di birra.' }
    ],
    proprietaERaccolta: 'Diuretica, rinfrescante e amica della digestione. Celebre servita cruda con alici, aglio ed extravergine.',
    curiosita: 'Immergendo le striscioline tagliate in acqua ghiacciata, queste si arricciano a ricciolo croccante in pochi minuti!'
  },
  {
    id: 'valeriana',
    nome: 'Valeriana / Songino',
    nomeScientifico: 'Valerianella locusta',
    famiglia: 'Caprifoliaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Tenerissima insalatina autunno-invernale a piccole rosette carnose. Resiste tenacemente al gelo estremo e offre insalate freschissime anche sotto la neve.',
    difficolta: 'Facile',
    icona: '🍃',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 7, max: 14 },
    giorniRaccolto: { min: 40, max: 60 },
    mesiSeminaSemenzaio: [8, 9],
    mesiSeminaTerra: [8, 9, 10, 11, 2, 3],
    mesiTrapianto: [9, 10],
    mesiRaccolta: [10, 11, 12, 1, 2, 3, 4],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per cespi folti a crescita lenta e compatta.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 15,
      crescitaMin: 2,
      crescitaMax: 20
    },
    distanze: {
      traPianteCm: 10,
      traFileCm: 20,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiature a pioggia finissima; evitare ristagni ma non far seccare la superficie.'
    },
    terreno: 'Qualsiasi terreno d\'orto, leggero e privo di erbacce infestanti.',
    consociazioni: {
      amiche: ['Cipolla', 'Carota', 'Fragola', 'Cavoli'],
      nemiche: [],
      motivo: 'Occupa poco spazio ed è ideale come intercoltura tra file di ortaggi più grandi.'
    },
    cureColturali: [
      'Semina a filetti stretti per facilitare la pulizia delle infestanti',
      'Tagliare le rosette con un coltellino rasoterra: spesso rispunta un secondo raccolto'
    ],
    avversita: [
      { nome: 'Lumache', tipo: 'parassita', rimedioBio: 'Cenere asciutta o fosfato ferrico bio.' }
    ],
    proprietaERaccolta: 'Ricchissima di omega-3 vegetali, ferro, fosforo e vitamina B. Ha virtù naturalmente rilassanti.',
    curiosita: 'Nonostante il nome comune, non è la pianta medicinale officinale (Valeriana officinalis), ma un parente orticolo squisito.'
  },
  {
    id: 'sedano',
    nome: 'Sedano da Coste',
    nomeScientifico: 'Apium graveolens var. dulce',
    famiglia: 'Apiaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Pilastro aromatico del soffritto italiano e delle insalate croccanti. Pianta biennale che sviluppa coste carnose, profumatissime e ricche di oli essenziali benefici.',
    difficolta: 'Esperto',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 14, max: 21 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [2, 3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [5, 6, 7],
    mesiRaccolta: [7, 8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per stimolare l\'ispessimento del fusto ed evitare la prefioritura.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 20,
      crescitaMin: 14,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 45,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Pianta idrovora: richiede annaffiature costanti e abbondanti. Lo stress idrico rende le coste fibrose e vuote.'
    },
    terreno: 'Molto fertile, ricco di sostanza organica decomposta, umido ma senza marciumi.',
    consociazioni: {
      amiche: ['Cavoli', 'Pomodori', 'Porri', 'Fagiolini'],
      nemiche: ['Mais', 'Patata', 'Pastinaca'],
      motivo: 'Protegge i cavoli dalla cavolaia con il suo aroma pungente.'
    },
    cureColturali: [
      'I semi microscopici vanno appena pressati nel terriccio senza coprirli troppo',
      'Imbianchimento: fasciare le coste con cartone o carta paglia 15 giorni prima del raccolto per renderle chiare e dolci'
    ],
    avversita: [
      { nome: 'Septoria del sedano', tipo: 'malattia', rimedioBio: 'Rameico preventivo e macerato d\'equiseto.' },
      { nome: 'Mosca del sedano', tipo: 'parassita', rimedioBio: 'Reti antinsetto e polvere di roccia.' }
    ],
    proprietaERaccolta: 'Diuretico per eccellenza, abbassa la pressione e vanta calorie praticamente negative.',
    curiosita: 'Nella Grecia antica le corone di foglie di sedano venivano offerte ai vincitori dei giochi Nemei.'
  },
  {
    id: 'cima-di-rapa',
    nome: 'Cima di Rapa',
    nomeScientifico: 'Brassica rapa sylvestris',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Icona gastronomica della Puglia e del Mezzogiorno (celebri con le orecchiette). A ciclo veloce, si consumano sia le foglie tenere che i boccioli fiorali non ancora aperti (friarielli).',
    difficolta: 'Facile',
    icona: '🥦',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 3, max: 6 },
    giorniRaccolto: { min: 45, max: 65 },
    mesiSeminaSemenzaio: [7, 8],
    mesiSeminaTerra: [8, 9, 10],
    mesiTrapianto: [9, 10],
    mesiRaccolta: [10, 11, 12, 1, 2, 3],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per allungare il periodo prima che i fiorellini gialli aprano.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 35,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigare regolarmente alla nascita delle piantine, poi secondo necessità.'
    },
    terreno: 'Sciolto, povero o mediamente fertile, con ottimo sgrondo delle acque.',
    consociazioni: {
      amiche: ['Lattuga', 'Spinaci', 'Cipolle'],
      nemiche: ['Cavoli', 'Ravanelli'],
      motivo: 'Evitare altre crucifere per non concentrare gli insetti specifici.'
    },
    cureColturali: [
      'Germina rapidissimamente in soli 3-4 giorni a terra',
      'Raccogliere recifendo le infiorescenze con le prime 3-4 foglie tenere prima della fioritura'
    ],
    avversita: [
      { nome: 'Altica (pulce di terra)', tipo: 'parassita', rimedioBio: 'Polvere di caolino e bagnature frequenti.' },
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis.' }
    ],
    proprietaERaccolta: 'Ricchissima di ferro, calcio, acido folico e antiossidanti fenolici amari benefici per l\'intestino.',
    curiosita: 'In Campania i giovani germogli teneri sono noti e venerati col nome di friarielli.'
  },
  {
    id: 'asparago',
    nome: 'Asparago',
    nomeScientifico: 'Asparagus officinalis',
    famiglia: 'Asparagaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Nobilissima pianta perenne da orto. Una volta impiantata l\'asparagiaia ("zampe"), produce ininterrottamente ogni primavera per oltre 12-15 anni deliziosi turioni teneri.',
    difficolta: 'Esperto',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 20, max: 30 },
    giorniRaccolto: { min: 360, max: 700 }, // Pluriennale
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [3, 4],
    mesiTrapianto: [2, 3, 4],
    mesiRaccolta: [3, 4, 5, 6],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente stimola la salita vigorosa dei turioni dalla zampa sotterranea.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: 12,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 100,
      profonditaSeminaCm: 15
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigazioni regolari nei primi 2 anni; tollera bene la siccità una volta radicata a fondo.'
    },
    terreno: 'Sciolto, sabbioso, leggero e privo di sassi (indispensabile per turioni dritti e teneri).',
    consociazioni: {
      amiche: ['Pomodoro', 'Prezzemolo', 'Basilico'],
      nemiche: ['Cipolla', 'Aglio', 'Patata'],
      motivo: 'Il pomodoro allontana la mosca dell\'asparago e l\'asparago scaccia i nematodi del pomodoro.'
    },
    cureColturali: [
      'Nei primi 2 anni non si raccolgono turioni per permettere all\'apparato radicale di fortificarsi',
      'Per asparagi bianchi: rincalzare con colmi di terra alti 30 cm per non esporli alla luce del sole',
      'A fine autunno tagliare la vegetazione secca e coprire con abbondante letame maturo'
    ],
    avversita: [
      { nome: 'Criocera dell\'asparago', tipo: 'parassita', rimedioBio: 'Piretro naturale o olio di neem.' },
      { nome: 'Ruggine dell\'asparago', tipo: 'malattia', rimedioBio: 'Zolfo e rame a fine stagione.' }
    ],
    proprietaERaccolta: 'Virtù diuretiche e disintossicanti eccezionali grazie all\'asparagina e al glutatione.',
    curiosita: 'L\'imperatore Augusto adorava gli asparagi e creò la flotta militare "Asparagus" per trasportarli rapidamente freschi a Roma!'
  },
  {
    id: 'barbabietola',
    nome: 'Barbabietola Rossa / Rapa Rossa',
    nomeScientifico: 'Beta vulgaris var. conditiva',
    famiglia: 'Amaranthaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Radice tonda e carnosa dal colore rosso purpureo splendente. Ricchissima di nitrati naturali che migliorano la resistenza fisica, ottima cotta al forno, lessata o cruda marinata.',
    difficolta: 'Facile',
    icona: '🟣',
    coloreTema: 'purple',
    giorniGerminazione: { min: 6, max: 10 },
    giorniRaccolto: { min: 55, max: 75 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 5, 6, 7],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [6, 7, 8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per favorire l\'ingrossamento sotterraneo della radice.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 12,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 30,
      profonditaSeminaCm: 1.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Mantenere il terreno umido: la siccità indurisce le fibre della radice rendendola legnosa.'
    },
    terreno: 'Profondo, fertile e privo di ciottoli che provocherebbero biforcazioni.',
    consociazioni: {
      amiche: ['Cipolla', 'Lattuga', 'Cavolo', 'Aglio'],
      nemiche: ['Carota', 'Spinacio'],
      motivo: 'Ottima simbiosi con cipolle e porri che proteggono dai parassiti ipogei.'
    },
    cureColturali: [
      'Il seme è in realtà un glomerulo con 2-4 semi: è tassativo diradare a 10 giorni dalla nascita',
      'Anche le foglie giovani screziate di rosso sono deliziose consumate come bietole'
    ],
    avversita: [
      { nome: 'Cercospora della bietola', tipo: 'malattia', rimedioBio: 'Rameico o decotto d\'equiseto.' },
      { nome: 'Grillotalpa', tipo: 'parassita', rimedioBio: 'Nematodi entomopatogeni biologici.' }
    ],
    proprietaERaccolta: 'Migliora l\'ossigenazione muscolare, ricca di ferro, folati e betanina antiossidante.',
    curiosita: 'Il suo pigmento rosso brillante (betanina) è uno dei coloranti naturali per alimenti più usati al mondo (E162).'
  },
  {
    id: 'fagiolino',
    nome: 'Fagiolino Mangiatutto / Cornetto',
    nomeScientifico: 'Phaseolus vulgaris var. nanus',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Legume tenerissimo di cui si mangia l\'intero baccello prima che si formino i semi duri. A rapido sviluppo (fagiolino nano o rampicante), arricchisce il terreno di azoto naturale.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 50, max: 65 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5, 6, 7],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce la rapida emissione di fiori e la formazione continua di baccelli.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 24,
      crescitaMin: 16,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 10,
      traFileCm: 45,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari specialmente dalla fioritura all\'allegagione dei baccelli.'
    },
    terreno: 'Sciolto, drenato e fresco. Non necessita di concimi azotati grazie ai rizobi radicali.',
    consociazioni: {
      amiche: ['Santoreggia', 'Mais', 'Zucchina', 'Carota', 'Fragola'],
      nemiche: ['Cipolla', 'Aglio', 'Finocchio'],
      motivo: 'La santoreggia protegge i fagiolini dall\'afide nero ed esalta il gusto nel piatto.'
    },
    cureColturali: [
      'Semina a postarelle di 3-4 semi ogni 20 cm',
      'Raccogliere continuamente ogni 2-3 giorni: la raccolta frequente stimola la pianta a produrre nuovi baccelli'
    ],
    avversita: [
      { nome: 'Afide nero della fava e del fagiolo', tipo: 'parassita', rimedioBio: 'Sapone di Marsiglia e macerato d\'ortica.' },
      { nome: 'Ragnetto rosso', tipo: 'parassita', rimedioBio: 'Spruzzi d\'acqua fresca e zeolite.' }
    ],
    proprietaERaccolta: 'Ipocalorico, ricco di fibre solubili, potassio e silicio, ideale per depurare l\'organismo.',
    curiosita: 'I batteri simbiotici presenti nei noduli delle radici fissano l\'azoto dell\'aria concimando l\'orto a costo zero.'
  },
  {
    id: 'mora',
    nome: 'Mora di Rovo (senza spine)',
    nomeScientifico: 'Rubus fruticosus',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Piccolo frutto',
    descrizione: 'Piccolo frutto rustico e produttivissimo. Le moderne varietà coltivate senza spine permettono una raccolta facile e abbondante di frutti neri lucidi, dolcissimi e succulenti.',
    difficolta: 'Facile',
    icona: '🫐',
    coloreTema: 'purple',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 120, max: 150 },
    mesiSeminaSemenzaio: [10, 11],
    mesiSeminaTerra: [11, 2, 3],
    mesiTrapianto: [10, 11, 2, 3],
    mesiRaccolta: [7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il vigore dei tralci fruttiferi.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 150,
      traFileCm: 250,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigare regolarmente durante l\'ingrossamento dei frutti in piena estate.'
    },
    terreno: 'Subacido o neutro, ricco di humus, ben drenato e fresco.',
    consociazioni: {
      amiche: ['Lampone', 'Fragola', 'Menta', 'Aglio'],
      nemiche: ['Solanacee (pomodoro, patata)'],
      motivo: 'Evitare vicinanza con patate per prevenire la verticilliosi radicale.'
    },
    cureColturali: [
      'Legare i vigorosi tralci a spalliera con fili metallici a 3 altezze',
      'Potatura estiva: asportare alla base i rami vecchi che hanno già fruttificato'
    ],
    avversita: [
      { nome: 'Botrite dei frutti', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con polvere di zeolite o caolino.' },
      { nome: 'Antracnosi', tipo: 'malattia', rimedioBio: 'Rameico a fine inverno sui tralci spogli.' }
    ],
    proprietaERaccolta: 'Regina degli antociani antiossidanti, ricca di acido folico, vitamina C e fibra solubile.',
    curiosita: 'Le varietà senza spine come "Thornless" hanno rivoluzionato la frutticoltura amatoriale.'
  },
  {
    id: 'ribes',
    nome: 'Ribes Rosso / Nero',
    nomeScientifico: 'Ribes rubrum / nigrum',
    famiglia: 'Grossulariaceae',
    categoria: 'frutto',
    sottoCategoria: 'Piccolo frutto',
    descrizione: 'Arbusto compatto e generosissimo di bacche traslucide a grappolo. Il ribes rosso ha un sapore piacevolmente acidulo e rinfrescante; il ribes nero è la pianta regina dell\'erboristeria antinfiammatoria.',
    difficolta: 'Facile',
    icona: '🍒',
    coloreTema: 'rose',
    giorniGerminazione: { min: 30, max: 90 },
    giorniRaccolto: { min: 100, max: 130 },
    mesiSeminaSemenzaio: [10, 11],
    mesiSeminaTerra: [11, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il vigore dei germogli e la pezzatura delle bacche.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 100,
      traFileCm: 180,
      profonditaSeminaCm: 2
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Apparato radicale superficiale: annaffiare regolarmente senza allagare.'
    },
    terreno: 'Fresco, ricco di sostanza organica, subacido o neutro (pH 6.0 - 6.8).',
    consociazioni: {
      amiche: ['Mirtillo', 'Uva spina', 'Erba cipollina'],
      nemiche: ['Pini e conifere'],
      motivo: 'Condivide lo stesso habitat fresco di sottobosco con uva spina e piccoli frutti.'
    },
    cureColturali: [
      'Pacciamare con corteccia di pino o cippato per proteggere le radici dal caldo estivo',
      'Rinnovare la pianta potando ogni anno i rami più vecchi di 3-4 anni'
    ],
    avversita: [
      { nome: 'Afide golligeno del ribes', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio precoce.' },
      { nome: 'Oidio del ribes', tipo: 'malattia', rimedioBio: 'Zolfo bagnabile o bicarbonato di potassio.' }
    ],
    proprietaERaccolta: 'Il ribes nero è considerato un cortisone naturale ("cortison-like") antiallergico e capillaroprotettore.',
    curiosita: 'In Francia il ribes nero è alla base del leggendario liquore "Crème de Cassis" per il celebre cocktail Kir.'
  },
  {
    id: 'maggiorana',
    nome: 'Maggiorana',
    nomeScientifico: 'Origanum majorana',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Sorella aristocratica dell\'origano, dal profumo più delicato, floreale, dolce e balsamico. Fondamentale nei ripieni liguri, nelle verdure grigliate e nelle carni bianche.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'teal',
    giorniGerminazione: { min: 8, max: 14 },
    giorniRaccolto: { min: 50, max: 70 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5, 6],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce la concentrazione di oli essenziali volatili nelle foglioline.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 22,
      crescitaMin: 14,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 35,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Teme i ristagni radicali: annaffiare moderatamente quando il terreno è asciutto.'
    },
    terreno: 'Leggero, ben drenato, calcareo o sabbioso. Ottima anche in vaso.',
    consociazioni: {
      amiche: ['Pomodori', 'Zucchine', 'Melanzane', 'Peperoni'],
      nemiche: [],
      motivo: 'Attira farfalle e api impollinatrici scacciando insetti dannosi con il suo profumo.'
    },
    cureColturali: [
      'Al Nord va riparata in inverno o pacciamata perché teme le gelate prolungate sotto lo zero',
      'Cimare regolarmente le cime per mantenere il cespuglietto compatto e vigoroso'
    ],
    avversita: [
      { nome: 'Marciume radicale', tipo: 'malattia', rimedioBio: 'Garantire perfetto drenaggio.' }
    ],
    proprietaERaccolta: 'Digestiva, calmante per l\'ansia e antispasmodica. Raccogliere al mattino prima della fioritura.',
    curiosita: 'Nella mitologia greca Afrodite, dea dell\'amore, creò la maggiorana come simbolo di felicità.'
  },
  {
    id: 'coriandolo',
    nome: 'Coriandolo / Cilantro',
    nomeScientifico: 'Coriandrum sativum',
    famiglia: 'Apiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Pianta aromatica bifunzionale: si usano sia le foglie fresche pungenti (amatissime in guacamole, curry e ceviche) sia i semini secchi rotondi, dolci e speziati.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'teal',
    giorniGerminazione: { min: 7, max: 12 },
    giorniRaccolto: { min: 35, max: 50 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [3, 4, 5, 6, 8, 9],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la rapida emissione di foglioline aromatiche.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 25,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiature costanti per evitare che la pianta vada a seme precocemente col caldo secco.'
    },
    terreno: 'Sciolto, permeabile, di medio impasto.',
    consociazioni: {
      amiche: ['Carota', 'Spinacio', 'Finocchio', 'Anice'],
      nemiche: [],
      motivo: 'Allontana la mosca della carota e attira sirfidi predatori di afidi.'
    },
    cureColturali: [
      'Seminare scalare ogni 3 settimane per avere foglie fresche continue tutta la stagione',
      'Per raccogliere i semi: lasciare che la pianta fiorisca a ombrelle bianche ed essiccare i globi'
    ],
    avversita: [
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Sapone di Marsiglia o macerato d\'aglio.' }
    ],
    proprietaERaccolta: 'Carminativo, digestivo e chelante naturale dei metalli pesanti.',
    curiosita: 'I semi di coriandolo glassati di zucchero nel Medioevo diedero origine al nome dei moderni "coriandoli" di Carnevale!'
  },
  {
    id: 'melissa',
    nome: 'Melissa Officinale (Erba Limoncina)',
    nomeScientifico: 'Melissa officinalis',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Erba perenne rinfrescante dal meraviglioso e inconfondibile profumo di limone agrumato. Regina delle tisane rilassanti serali e formidabile pianta mellifera amica delle api.',
    difficolta: 'Facile',
    icona: '🍋',
    coloreTema: 'teal',
    giorniGerminazione: { min: 10, max: 18 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 9],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il rilascio di citrale e citronellolo nelle foglie.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 45,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Ama terreni freschi ma non fradici; annaffiare con moderazione.'
    },
    terreno: 'Fresco, fertile, umifero e ben drenato.',
    consociazioni: {
      amiche: ['Alberi da frutto', 'Pomodori', 'Zucche'],
      nemiche: [],
      motivo: 'Attira nugoli di api e bombi garantendo la perfetta impollinazione di tutti i frutti dell\'orto.'
    },
    cureColturali: [
      'Tagliare a 10 cm dal suolo a metà estate per stimolare un nuovo ricaccio tenerissimo autunnale',
      'Resiste benissimo al gelo invernale rispuntando rigogliosa ogni primavera'
    ],
    avversita: [
      { nome: 'Oidio', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio e sfalcio rasoterra.' }
    ],
    proprietaERaccolta: 'Calmante dell\'ansia, antispasmodica gastrointestinale e sedativa per un sonno profondo.',
    curiosita: 'Il nome "Melissa" deriva dal greco e significa letteralmente "ape": gli apicoltori ne strofinavano le foglie nelle arnie per attirare gli sciami.'
  }
];
