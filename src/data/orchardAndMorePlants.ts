import { Plant } from '../types';

export const ORCHARD_AND_MORE_PLANTS: Plant[] = [
  // ==================== LEGUMI E TUBERI SPECIALI ====================
  {
    id: 'cece',
    nome: 'Cece',
    nomeScientifico: 'Cicer arietinum',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Legume rustico e frugale della tradizione contadina mediterranea. Arricchisce naturalmente il suolo di azoto e sopporta estati asciutte e terreni sassosi.',
    difficolta: 'Facile',
    icona: '🧆',
    coloreTema: 'amber',
    giorniGerminazione: { min: 7, max: 14 },
    giorniRaccolto: { min: 110, max: 140 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 4],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Seminare a luna crescente a inizio primavera quando la terra comincia a scaldarsi.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 12,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 45,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Teme moltissimo i ristagni idrici. Annaffiare solo nei periodi di prolungata siccità durante la fioritura.'
    },
    terreno: 'Povero, arido o calcareo, molto ben drenato. Evitare terreni argillosi e compatti.',
    consociazioni: {
      amiche: ['Rosmarino', 'Salvia', 'Pomodoro'],
      nemiche: ['Aglio', 'Cipolla'],
      motivo: 'Le alliacée inibiscono i batteri azoto-fissatori radicali delle leguminose.'
    },
    cureColturali: [
      'Rincalzare leggermente le piantine quando raggiungono i 15 cm di altezza',
      'Tenere pulita la proda dalle infestanti nelle prime 4 settimane',
      'Raccogliere estirpando l\'intera pianta quando i baccelli sono secchi e giallini'
    ],
    avversita: [
      { nome: 'Tonchio dei legumi', tipo: 'parassita', rimedioBio: 'Conservare i semi ben secchi in barattoli ermetici con foglie d\'alloro.' },
      { nome: 'Rabbia del cece (Ascochita)', tipo: 'malattia', rimedioBio: 'Rotazioni colturali quadriennali ed evitare di bagnare la chioma.' }
    ],
    proprietaERaccolta: 'Ricchissimo di proteine vegetali nobili, fibre e ferro. Ottimo per zuppe, vellutate e farina di ceci.',
    curiosita: 'I Romani ne erano grandi consumatori; il cognomen di Cicerone derivava da un antenato che aveva un porro a forma di cece sul naso.'
  },
  {
    id: 'lenticchia',
    nome: 'Lenticchia',
    nomeScientifico: 'Lens culinaris',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Uno dei legumi più antichi coltivati dall\'umanità. Pianta cespugliosa ed elegante, ideale per terreni poveri di collina e montagna.',
    difficolta: 'Facile',
    icona: '🥣',
    coloreTema: 'amber',
    giorniGerminazione: { min: 8, max: 15 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente nei primi tepori di marzo o aprile.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 16,
      crescitaMin: 10,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 35,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Necessita di pochissima acqua; piogge primaverili sono spesso sufficienti.'
    },
    terreno: 'Sciolto, sabbioso o calcareo, senza ristagni. Non necessita di letamazione organica fresca.',
    consociazioni: {
      amiche: ['Carota', 'Cetriolo', 'Patata'],
      nemiche: ['Cipolla', 'Aglio', 'Porro'],
      motivo: 'Le liliacee ostacolano la crescita e lo sviluppo radicale simbiotico.'
    },
    cureColturali: [
      'Seminare a file regolari per facilitare la sarchiatura manuale',
      'Falciare o estirpare all\'alba quando le piante sono ancora umide di rugiada per non far aprire i baccelli',
      'Completare l\'essiccazione all\'ombra ventilata'
    ],
    avversita: [
      { nome: 'Afide nero', tipo: 'parassita', rimedioBio: 'Macerato d\'ortica o sapone molle di potassio.' },
      { nome: 'Peronospora', tipo: 'malattia', rimedioBio: 'Drenaggio impeccabile e decotto di equiseto.' }
    ],
    proprietaERaccolta: 'Simbolo di prosperità e abbondanza, ricca di antiossidanti, ferro e acido folico.',
    curiosita: 'Nella tradizione italiana la forma appiattita ricorda piccole monete, motivo per cui si mangiano a Capodanno come augurio di ricchezza.'
  },
  {
    id: 'topinambur',
    nome: 'Topinambur',
    nomeScientifico: 'Helianthus tuberosus',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Tubero',
    descrizione: 'Parente selvatico del girasole con alti fusti dai fiori gialli luminosi. Sotto terra produce tuberi carnosi con delizioso sapore di carciofo, adatti anche ai diabetici.',
    difficolta: 'Facile',
    icona: '🌻',
    coloreTema: 'amber',
    giorniGerminazione: { min: 14, max: 25 },
    giorniRaccolto: { min: 150, max: 200 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 4],
    mesiTrapianto: [],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'I tuberi si interrano in luna calante per concentrare le energie nell\'apparato radicale.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 6,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 70,
      profonditaSeminaCm: 10
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Resiste bene alla siccità, ma un paio d\'annaffiature in piena estate raddoppiano la grandezza dei tuberi.'
    },
    terreno: 'Qualsiasi terreno, anche pesante e argilloso; predilige comunque substrati sciolti per estrarre facilmente i tuberi.',
    consociazioni: {
      amiche: ['Mais', 'Fagioli rampicanti'],
      nemiche: ['Pomodoro', 'Patata'],
      motivo: 'Cresce fino a 2-3 metri d\'altezza creando ombra intensa sulle orticole basse.'
    },
    cureColturali: [
      'Delimitare l\'area con cura: è una pianta perenne assai vigorosa e infestante',
      'Rincalzare la terra attorno ai fusti a inizio estate',
      'I tuberi non temono il gelo e si possono lasciare nel terreno raccogliendoli all\'occorrenza per tutto l\'inverno'
    ],
    avversita: [
      { nome: 'Oidio / Mal bianco', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio o zolfo bagnabile sulle foglie tardo-estive.' },
      { nome: 'Arvicole e roditori', tipo: 'parassita', rimedioBio: 'Protezione meccanica con reti sotterranee nei pressi dei tuberi.' }
    ],
    proprietaERaccolta: 'I tuberi contengono inulina anziché amido, risultando a bassissimo indice glicemico e ottimi per il microbiota intestinale.',
    curiosita: 'Originario del Nord America, durante la Seconda Guerra Mondiale fu la salvezza alimentare di molte famiglie contadine europee.'
  },
  {
    id: 'batata',
    nome: 'Patata Dolce / Batata',
    nomeScientifico: 'Ipomoea batatas',
    famiglia: 'Convolvulaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Tubero',
    descrizione: 'Delizioso tubero dolce e cremoso a polpa arancione o violacea, appartenente alla famiglia delle campanelle (Convolvulaceae). Le sue foglie tenere sono ottime cucinate come spinaci.',
    difficolta: 'Media',
    icona: '🍠',
    coloreTema: 'amber',
    giorniGerminazione: { min: 14, max: 28 },
    giorniRaccolto: { min: 120, max: 150 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Messa a dimora dei giovani germogli radicati in luna calante per irrobustire i tuberi.',
    temperaturaIdeale: {
      germinazioneMin: 18,
      germinazioneOttimale: 25,
      crescitaMin: 18,
      crescitaMax: 34
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 80,
      profonditaSeminaCm: 8
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari durante lo sviluppo estivo, riducendo nelle 3 settimane antecedenti la raccolta.'
    },
    terreno: 'Molto soffice, sabbioso e permeabile, ricco di sostanza organica ben decomposta. Terreni compatti creano tuberi deformi.',
    consociazioni: {
      amiche: ['Mais', 'Fagiolo', 'Origano'],
      nemiche: ['Zucca'],
      motivo: 'Entrambe hanno portamento strisciante vigoroso ed entrerebbero in fitta competizione per lo spazio.'
    },
    cureColturali: [
      'Far germogliare i tuberi in acqua o sabbia umida a fine inverno per prelevare i tralci radicati',
      'Creare aiuole rialzate a baula per favorire l\'espansione delle radici tuberose',
      'Curare i tuberi al sole per 4-7 giorni dopo la raccolta per zuccherarli ed aumentarne la conservabilità'
    ],
    avversita: [
      { nome: 'Nematodi galligeni', tipo: 'parassita', rimedioBio: 'Rotazione con tagete o sovescio di senape biofumigante.' },
      { nome: 'Marciumi da stoccaggio', tipo: 'malattia', rimedioBio: 'Conservare al buio e all\'asciutto a 12-15°C senza refrigerare.' }
    ],
    proprietaERaccolta: 'Ricchissima di carotenoidi, vitamina A e fibre. Ha un indice glicemico più equilibrato rispetto alla patata comune.',
    curiosita: 'In Veneto e nel Lazio è coltivata tradizionalmente con denominazione De.Co. e PAT (Patata americana di Anguillara e Zero Branco).'
  },
  {
    id: 'sedano_rapa',
    nome: 'Sedano Rapa',
    nomeScientifico: 'Apium graveolens var. rapaceum',
    famiglia: 'Apiaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Ortaggio autunnale squisito e aromatico che sviluppa una radice rotonda e nodosa dalla polpa bianca e croccante. Protagonista delle insalate invernali e vellutate.',
    difficolta: 'Esperto',
    icona: '🥔',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 14, max: 21 },
    giorniRaccolto: { min: 140, max: 180 },
    mesiSeminaSemenzaio: [2, 3, 4],
    mesiSeminaTerra: [],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [9, 10, 11, 12],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina e trapianto in luna calante per stimolare l\'ingrossamento ipogeo della palla.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 12,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 45,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Esige terriccio costantemente fresco e bagnato; la siccità estiva blocca la crescita e rende la radice cava e legnosa.'
    },
    terreno: 'Fertile, profondo, friabile e con forte apporto di compost maturo o letame sfarinato.',
    consociazioni: {
      amiche: ['Cavolo', 'Porro', 'Fagioli nani', 'Pomodoro'],
      nemiche: ['Mais', 'Patata'],
      motivo: 'L\'aroma del sedano rapa disorienta la cavolaia, difendendo le crucifere.'
    },
    cureColturali: [
      'Mantenere umidi i semenzai: i semi sono minuscoli e lenti a spuntare',
      'Al trapianto non interrare mai il colletto vegetativo centrale',
      'Asportare periodicamente le foglie esterne più vecchie per permettere al fittone di arrotondarsi alla luce'
    ],
    avversita: [
      { nome: 'Septoriosi del sedano', tipo: 'malattia', rimedioBio: 'Rame e decotto di equiseto preventivi in estate.' },
      { nome: 'Mosca del sedano', tipo: 'parassita', rimedioBio: 'Rete antinsetto a maglia fitta da giugno ad agosto.' }
    ],
    proprietaERaccolta: 'Diuretico, depurativo e pochissimo calorico. Ottimo tagliato a julienne crudo con maionese all\'antica o cotto al forno.',
    curiosita: 'Molto amato nella cucina mitteleuropea e dell\'Italia settentrionale, dove è chiamato anche "sedano di Verona".'
  },
  {
    id: 'pastinaca',
    nome: 'Pastinaca',
    nomeScientifico: 'Pastinaca sativa',
    famiglia: 'Apiaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Antica radice simile a una grande carota color avorio, dal sapore deliziosamente zuccherino e nocciolato che si esalta con le gelate autunnali.',
    difficolta: 'Media',
    icona: '🥕',
    coloreTema: 'amber',
    giorniGerminazione: { min: 14, max: 28 },
    giorniRaccolto: { min: 120, max: 160 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5],
    mesiTrapianto: [],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Seminare a luna calante direttamente a dimora nel solco profondo.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 16,
      crescitaMin: 6,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 35,
      profonditaSeminaCm: 1.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari soprattutto nella fase iniziale per evitare la biforcazione della radice fittonante.'
    },
    terreno: 'Profondo almeno 40 cm, sciolto, senza pietre che devierebbero il fittone. Non sopporta letame fresco.',
    consociazioni: {
      amiche: ['Cipolla', 'Aglio', 'Lattuga'],
      nemiche: ['Carota', 'Finocchio'],
      motivo: 'Condividono le stesse ombrellifere e attirano la medesima mosca della carota.'
    },
    cureColturali: [
      'Usare semi freschissimi dell\'anno precedente: perdono rapidamente germinabilità',
      'Diradare a 15 cm appena le piantine hanno 3-4 foglioline',
      'Lasciare svernare nel terreno: le prime brinate trasformano gli amidi in zuccheri aromatici'
    ],
    avversita: [
      { nome: 'Mosca della carota', tipo: 'parassita', rimedioBio: 'Consociazione ravvicinata con cipolle e aglio.' },
      { nome: 'Marciume radicale', tipo: 'malattia', rimedioBio: 'Sistemare il terreno con sabbia di fiume e non eccedere con l\'azoto.' }
    ],
    proprietaERaccolta: 'Molto ricca di potassio, folati e fibre solubili. Straordinaria arrosto con miele e timo o fritta a chips.',
    curiosita: 'Prima dell\'introduzione della patata americana nel XVI secolo, la pastinaca era la principale fonte di amidi per le campagne europee.'
  },
  {
    id: 'scorzonera',
    nome: 'Scorzonera Nera',
    nomeScientifico: 'Scorzonera hispanica',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Rinomata radice fittonante dalla buccia scura e polpa candida dolcissima, considerata l\'asparago d\'inverno per la sua consistenza vellutata e raffinata.',
    difficolta: 'Media',
    icona: '🥢',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 10, max: 18 },
    giorniRaccolto: { min: 130, max: 170 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5],
    mesiTrapianto: [],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina rigorosamente a luna calante per favorire fittoni dritti e affusolati.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 12,
      traFileCm: 30,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Mantenere il suolo umido durante la bella stagione per evitare che le radici induriscano precocemente.'
    },
    terreno: 'Lavorato finemente e profondo almeno 35 cm, sabbioso o di medio impasto, privo di sassi.',
    consociazioni: {
      amiche: ['Porri', 'Lattuga', 'Spinaci'],
      nemiche: ['Finocchio'],
      motivo: 'I porri tengono lontani parassiti terricoli senza competere per la luce.'
    },
    cureColturali: [
      'Diradamento rigoroso quando le piantine raggiungono 5 cm',
      'Sarchiatura superficiale per arieggiare la crosta terrosa',
      'Estrarre con forca da vanga facendo molta attenzione a non spezzare i lunghi fittoni fragili'
    ],
    avversita: [
      { nome: 'Oidio fogliare', tipo: 'malattia', rimedioBio: 'Trattamenti con decotto di equiseto o bicarbonato.' },
      { nome: 'Elateridi (ferretti)', tipo: 'parassita', rimedioBio: 'Trappole con spicchi di patata interrati per catturare le larve.' }
    ],
    proprietaERaccolta: 'Altissimo contenuto di inulina, calcio e ferro; favorisce la funzionalità epatica ed è adatta all\'alimentazione ipoglicemica.',
    curiosita: 'Il nome botanico deriva dallo spagnolo "escorzo" (vipera), poiché nell\'antichità era considerata rimedio efficace contro i morsi di serpente.'
  },
  {
    id: 'cardo',
    nome: 'Cardo Gobbo',
    nomeScientifico: 'Cynara cardunculus var. altilis',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Ortaggio monumentale della tradizione piemontese e centro-italiana. Le coste carnose vengono imbiancate sottoterra diventando dolci, tenere e perfette con la bagna cauda.',
    difficolta: 'Esperto',
    icona: '🎋',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 10, max: 20 },
    giorniRaccolto: { min: 180, max: 220 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [10, 11, 12, 1],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina a luna calante; rincalzatura e piegatura per imbianchimento a luna calante di fine estate.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: 10,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 80,
      traFileCm: 100,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Pianta grandissima che richiede abbondanti apporti d\'acqua settimanali durante il caldo estivo.'
    },
    terreno: 'Profondissimo, sostanzioso, ben concimato con letame bovino o equino maturo.',
    consociazioni: {
      amiche: ['Fave', 'Piselli', 'Timo'],
      nemiche: ['Carciofo', 'Patata'],
      motivo: 'Condivide parassiti con il carciofo ed ha una mole vegetativa enorme che soffoca piante vicine.'
    },
    cureColturali: [
      'Fornire largo spazio nell\'orto: ogni pianta sviluppa cespi larghi fino a un metro',
      'Fase di imbianchimento fondamentale: a fine estate legare le foglie e rincalzare con terra o cartone per 3-4 settimane',
      'La piegatura laterale sotto terra rende il gambo "gobbo" e croccante senza spine'
    ],
    avversita: [
      { nome: 'Afide nero del cardo', tipo: 'parassita', rimedioBio: 'Macerato d\'ortica concentrato e sapone molle.' },
      { nome: 'Marciume del colletto', tipo: 'malattia', rimedioBio: 'Evitare ristagni idrici attorno al monticello d\'imbiancatura.' }
    ],
    proprietaERaccolta: 'Depurativo eccellente per il fegato grazie alla cinarina, ipocalorico e saziante. Si consuma crudo intinto in salse calde o gratinato.',
    curiosita: 'Il Cardo Gobbo di Nizza Monferrato è un presidio Slow Food tutelato in tutto il mondo per la sua dolcezza unica.'
  },

  // ==================== FOGLIE, CAVOLI E INSALATE DI PREGIO ====================
  {
    id: 'scarola',
    nome: 'Scarola & Indivia Riccia',
    nomeScientifico: 'Cichorium endivia',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'La regina delle insalate autunnali e invernali. A foglie lisce (scarola) o fittamente increspate (riccia), con un cuore imbiancato tenero, croccante e gradevolmente amarognolo.',
    difficolta: 'Facile',
    icona: '🥗',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 10 },
    giorniRaccolto: { min: 65, max: 85 },
    mesiSeminaSemenzaio: [6, 7, 8],
    mesiSeminaTerra: [7, 8, 9],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [9, 10, 11, 12, 1],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Seminare e trapiantare a luna calante per scongiurare la precoce salita a fiore.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
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
      dettagli: 'Annaffiare con frequenza al piede senza bagnare il cuore per prevenire marciumi centrali.'
    },
    terreno: 'Fresco, fertile, ricco di sostanza organica e ben lavorato.',
    consociazioni: {
      amiche: ['Finocchio', 'Porro', 'Cavoli', 'Carote'],
      nemiche: ['Prezzemolo'],
      motivo: 'Ottima alternanza con colture a sviluppo verticale come porri e cavoli.'
    },
    cureColturali: [
      'Per imbiancare il cuore, legare la testa con rafia o coprire con un piatto fondo 10 giorni prima del raccolto',
      'Tollera brevi gelate autunnali ma giova di tessuto non tessuto in caso di freddo intenso',
      'Raccogliere tagliando il cespo alla radice al mattino presto'
    ],
    avversita: [
      { nome: 'Lumache e chiocciole', tipo: 'parassita', rimedioBio: 'Bordure di cenere secca o fosfato ferrico biologico.' },
      { nome: 'Marciume basale', tipo: 'malattia', rimedioBio: 'Non interrare troppo il colletto e arieggiare i filari.' }
    ],
    proprietaERaccolta: 'Favorisce la digestione e stimola la bile; pilastro della pizza ripiena di scarole napoletana con olive e capperi.',
    curiosita: 'Già nota agli antichi Egizi e Greci, Plinio il Vecchio ne raccomandava il consumo per purificare il sangue in autunno.'
  },
  {
    id: 'cavolo_cappuccio',
    nome: 'Cavolo Cappuccio',
    nomeScientifico: 'Brassica oleracea var. capitata',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Forma una testa compatta, tonda e pesante di foglie serrate lisce biancastre o rosse rubino. Base tradizionale per i crauti fermentati e le insalate fresche.',
    difficolta: 'Media',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 6, max: 10 },
    giorniRaccolto: { min: 80, max: 120 },
    mesiSeminaSemenzaio: [2, 3, 5, 6, 7],
    mesiSeminaTerra: [4, 5, 6],
    mesiTrapianto: [4, 5, 7, 8],
    mesiRaccolta: [6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente per ottenere teste vigorose e serrate.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 7,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 45,
      traFileCm: 60,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari; sbalzi idrici eccessivi possono far spaccare la testa giunta a maturazione.'
    },
    terreno: 'Argilloso-medio, ricco di azoto e calcio, con ottimo potere di ritenzione idrica.',
    consociazioni: {
      amiche: ['Menta', 'Rosmarino', 'Salvia', 'Timo', 'Sedano'],
      nemiche: ['Fragola', 'Pomodoro', 'Cipolla'],
      motivo: 'Le aromatiche mediterranee allontanano la farfalla cavolaia con i loro forti oli essenziali.'
    },
    cureColturali: [
      'Rincalzare la terra alla base del fusto per mantenere eretta la pesante testa',
      'Pacciamare con paglia per proteggere le radici dal calore estivo',
      'Raccogliere tagliando il ceppo quando la palla risulta dura e sferica al tatto'
    ],
    avversita: [
      { nome: 'Bruco della cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis kurstaki nebulizzato al crepuscolo.' },
      { nome: 'Altica (pulce della terra)', tipo: 'parassita', rimedioBio: 'Polvere di roccia (zeolite) e irrigazioni a pioggia.' }
    ],
    proprietaERaccolta: 'Virtù antiulcera, antinfiammatorie e ricchissimo di vitamina C e composti solforati protettivi.',
    curiosita: 'I marinai del capitano James Cook navigavano con barili di crauti di cavolo cappuccio per azzerare lo scorbuto a bordo.'
  },
  {
    id: 'cavolo_romanesco',
    nome: 'Broccolo Romanesco',
    nomeScientifico: 'Brassica oleracea var. botrytis',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Infiorescenza',
    descrizione: 'Il capolavoro geometrico dell\'orto. Infiorescenza verde brillante con spettacolari rosette a spirale piramidale secondo la successione matematica di Fibonacci.',
    difficolta: 'Media',
    icona: '🥦',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 6, max: 10 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [5, 6, 7],
    mesiSeminaTerra: [6, 7],
    mesiTrapianto: [7, 8],
    mesiRaccolta: [10, 11, 12, 1],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina in luna crescente a inizio estate per lo sviluppo armonioso del corimbo.',
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
      dettagli: 'Annaffiare con costanza durante l\'accrescimento; diminuire con l\'arrivo dei primi freddi autunnali.'
    },
    terreno: 'Profondo, fresco, ben drenato e generosamente concimato con compost ben maturo.',
    consociazioni: {
      amiche: ['Sedano', 'Spinaci', 'Timo', 'Menta'],
      nemiche: ['Aglio', 'Cipolla'],
      motivo: 'Il sedano previene gli attacchi di parassiti della foglia e migliora la vigoria vegetativa.'
    },
    cureColturali: [
      'Trapiantare entro fine agosto per consentire alla pianta di formare il fiore prima delle gelate severe',
      'Rincalzare la pianta a inizio autunno per riparare il colletto dal vento',
      'Raccogliere la testa quando le punte piramidali sono serrate e sode'
    ],
    avversita: [
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis ai primi avvistamenti delle piccole larve.' },
      { nome: 'Ernia del cavolo', tipo: 'malattia', rimedioBio: 'Rotazioni colturali e correzione del pH del suolo con calce viva.' }
    ],
    proprietaERaccolta: 'Sapore delicato, dolce e privo di odori pungenti in cottura. Ricco di antiossidanti, vitamina K e zolfo organico.',
    curiosita: 'È uno dei più celebri esempi di geometria frattale in natura: ogni singola rosetta è una replica in miniatura dell\'intero broccolo.'
  },
  {
    id: 'cavolo_rapa',
    nome: 'Cavolo Rapa',
    nomeScientifico: 'Brassica oleracea var. gongylodes',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Curioso e squisito ortaggio che ingrossa il fusto appena sopra il terreno formando una sfera croccante verde mela o violacea, dal sapore fresco e zuccherino.',
    difficolta: 'Facile',
    icona: '🟣',
    coloreTema: 'purple',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 55, max: 70 },
    mesiSeminaSemenzaio: [2, 3, 4, 7],
    mesiSeminaTerra: [4, 5, 8],
    mesiTrapianto: [4, 5, 8],
    mesiRaccolta: [5, 6, 7, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente per una crescita rapida e uniforme del fusto globoso.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 35,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari: la siccità rende la polpa legnosa e stimola spaccature verticali.'
    },
    terreno: 'Soffice, ricco di humus, umifero e senza ristagni.',
    consociazioni: {
      amiche: ['Lattuga', 'Cetriolo', 'Barbabietola', 'Piselli'],
      nemiche: ['Finocchio', 'Pomodoro'],
      motivo: 'Si sviluppa in fretta occupando poco spazio tra colture a crescita più lenta.'
    },
    cureColturali: [
      'Non interrare la palla al trapianto: deve crescere sollevata dal pelo del terreno',
      'Raccogliere quando ha la dimensione di una palla da tennis (6-8 cm); se troppo grande diventa fibrosa',
      'Le foglie più giovani sono deliziose stufate in padella'
    ],
    avversita: [
      { nome: 'Altica', tipo: 'parassita', rimedioBio: 'Pelle vegetale protetta con zeolite o farina di roccia micronizzata.' },
      { nome: 'Afide ceroso', tipo: 'parassita', rimedioBio: 'Sapone nero o sapone di Marsiglia spruzzato alla sera.' }
    ],
    proprietaERaccolta: 'Straordinario crudo tagliato a fettine sottili con olio ed erbe aromatiche. Altissimo tenore di vitamina C.',
    curiosita: 'Molto diffuso in Alto Adige e Germania, dove è chiamato Kohlrabi, è uno degli ortaggi più veloci da portare a tavola.'
  },
  {
    id: 'cavolo_riccio_kale',
    nome: 'Cavolo Riccio / Kale',
    nomeScientifico: 'Brassica oleracea var. acephala',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Superfood per eccellenza a foglie frastagliate e arricciate, resistentissimo al gelo invernale. Si raccolgono le singole foglie dal basso verso l\'alto man mano che cresce.',
    difficolta: 'Facile',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 60, max: 90 },
    mesiSeminaSemenzaio: [4, 5, 6, 7],
    mesiSeminaTerra: [5, 6, 7],
    mesiTrapianto: [6, 7, 8],
    mesiRaccolta: [9, 10, 11, 12, 1, 2, 3],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente; le foglie crescono vigorose e ricche di linfa.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 4,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 45,
      traFileCm: 60,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Bagnare regolarmente durante l\'estate; in autunno e inverno le piogge sono sufficienti.'
    },
    terreno: 'Adattabile a qualsiasi terreno, predilige suoli mediamente pesanti e ricchi di sostanza nutritiva.',
    consociazioni: {
      amiche: ['Aromatica mista', 'Cipolla', 'Barbabietola'],
      nemiche: ['Fragole'],
      motivo: 'Le piante aromatiche proteggono la vegetazione fogliare da bruchi e insetti masticatori.'
    },
    cureColturali: [
      'Raccogliere staccando le foglie basali una alla volta: il fusto continuerà a produrre in altezza per mesi',
      'Non teme temperature fino a -12°C: le gelate ne migliorano la morbidezza e il sapore zuccherino',
      'Ottimo sia per orto in terra che per grandi vasi da balcone'
    ],
    avversita: [
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis kurstaki biologico.' },
      { nome: 'Mosca bianca delle crucifere', tipo: 'parassita', rimedioBio: 'Lotta preventiva con sapone molle e trappole cromatiche gialle.' }
    ],
    proprietaERaccolta: 'Bomba vitaminica (A, C, K), ricchissimo di calcio assimilabile e molecole antiossidanti. Ottimo crudo massaggiato o cotto a chips croccanti al forno.',
    curiosita: 'Negli orti medievali era il cavolo più comune in Europa prima che venissero selezionate le varietà a testa chiusa.'
  },
  {
    id: 'pak_choi',
    nome: 'Pak Choi / Cavolo Cinese',
    nomeScientifico: 'Brassica rapa subsp. chinensis',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Grazioso ortaggio a cespo con coste candide carnose e foglie verde intenso dal sapore delicato e croccante. Cresce rapidissimo ed è perfetto per orti primaverili e autunnali.',
    difficolta: 'Facile',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 4, max: 7 },
    giorniRaccolto: { min: 40, max: 55 },
    mesiSeminaSemenzaio: [3, 4, 8, 9],
    mesiSeminaTerra: [4, 8, 9],
    mesiTrapianto: [4, 5, 8, 9],
    mesiRaccolta: [5, 6, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina a luna calante per ridurre la tendenza alla fioritura anticipata dovuta alle lunghe giornate estive.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 35,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Terriccio sempre fresco; la secchezza provoca immediata salita a seme.'
    },
    terreno: 'Sciolto, fertile, ricco di compost e molto drenante.',
    consociazioni: {
      amiche: ['Menta', 'Lattuga', 'Cetriolo'],
      nemiche: ['Altre brassicacee'],
      motivo: 'Evitare vicinanza con altri cavoli per non concentrare gli attacchi delle altiche.'
    },
    cureColturali: [
      'Evitare i mesi più torridi di giugno e luglio: coltura tipica di fine estate o inizio primavera',
      'Raccogliere tagliando l\'intero cespo alla base dopo soli 45 giorni',
      'Ottimo saltato al wok con aglio, zenzero e olio d\'oliva'
    ],
    avversita: [
      { nome: 'Altica', tipo: 'parassita', rimedioBio: 'Rete antinsetto o polvere di roccia (zeolite) sulle foglie tenere.' },
      { nome: 'Lumache', tipo: 'parassita', rimedioBio: 'Fosfato ferrico o barriere fisiche.' }
    ],
    proprietaERaccolta: 'Basso apporto calorico, ricchissimo di beta-carotene, potassio e vitamina C.',
    curiosita: 'Chiamato anche "cavolo cucchiaio" per la forma delle sue coste basali, si coltiva in Asia da oltre 1500 anni.'
  },
  {
    id: 'scalogno',
    nome: 'Scalogno',
    nomeScientifico: 'Allium ascalonicum',
    famiglia: 'Amaryllidaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Bulbo',
    descrizione: 'Bulbo nobile dal profumo delicato e aromatico, via di mezzo tra aglio e cipolla ma con una grazia sublime. Non produce semi ma si moltiplica piantando i singoli spicchi a fine autunno o inizio primavera.',
    difficolta: 'Facile',
    icona: '🧅',
    coloreTema: 'amber',
    giorniGerminazione: { min: 10, max: 15 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 10, 11],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Interrare i bulbilli in luna calante per concentrare l\'ingrossamento del cespo sotterraneo.',
    temperaturaIdeale: {
      germinazioneMin: 6,
      germinazioneOttimale: 15,
      crescitaMin: 5,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 30,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Tollera l\'asciutto; annaffiare solo se la primavera è del tutto priva di piogge. Sospendere 1 mese prima del raccolto.'
    },
    terreno: 'Sciolto, sabbioso, leggero e perfettamente drenato; marcisce se trova ristagni.',
    consociazioni: {
      amiche: ['Carota', 'Fragola', 'Barbabietola', 'Lattuga'],
      nemiche: ['Piselli', 'Fagioli', 'Fave'],
      motivo: 'Le alliacée allontanano la mosca della carota ma ostacolano lo sviluppo dei legumi.'
    },
    cureColturali: [
      'Interrare il bulbo lasciando spuntare appena la punta apicale verso l\'alto',
      'Da ogni singolo bulbo interrato si formerà un cespo di 4-8 nuovi scalogni',
      'Raccogliere quando le foglie iniziano a piegarsi e ingiallire; far essiccare al sole per qualche giorno'
    ],
    avversita: [
      { nome: 'Mosca della cipolla', tipo: 'parassita', rimedioBio: 'Consociazione con carote ed estratti di tanaceto.' },
      { nome: 'Marciume basale', tipo: 'malattia', rimedioBio: 'Terreno ben arieggiato senza letamazione fresca.' }
    ],
    proprietaERaccolta: 'Ricco di quercetina, allicina e zolfo organico. Ingrediente principe per soffritti delicati, salse francesi e aceti aromatizzati.',
    curiosita: 'Prende il nome dalla città portuale di Ascalona in Palestina, da cui i crociati lo portarono in Europa nel XII secolo.'
  },
  {
    id: 'cipollotto',
    nome: 'Cipollotto Fresco',
    nomeScientifico: 'Allium fistulosum',
    famiglia: 'Amaryllidaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Bulbo',
    descrizione: 'Cipolla a fusto verde da cogliere fresca e giovane prima dell\'ingrossamento del bulbo tondo. Tenerissimo e saporito, si mangia intero compresa la parte verde brillante.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 8, max: 14 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [1, 2, 3, 7, 8],
    mesiSeminaTerra: [3, 4, 8, 9],
    mesiTrapianto: [4, 5, 9],
    mesiRaccolta: [4, 5, 6, 7, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Semina a luna calante per prevenire la salita a fiore.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 10,
      traFileCm: 25,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari per mantenere la canna tenera, succulenta e poco fibrosa.'
    },
    terreno: 'Soffice, drenato e fresco, ricco di humus ben decomposto.',
    consociazioni: {
      amiche: ['Carota', 'Fragola', 'Pomodoro', 'Bietola'],
      nemiche: ['Fagiolo', 'Pisello'],
      motivo: 'Ottima barriera protettiva contro insetti volanti nocivi alle orticole.'
    },
    cureColturali: [
      'Rincalzare leggermente la terra lungo i filari per allungare la porzione bianca sotterranea',
      'Raccogliere estirpando gradualmente a partire dalle piante più sviluppate',
      'Ottimo da coltivare anche in fioriere profonde sul balcone'
    ],
    avversita: [
      { nome: 'Mosca delle liliacee', tipo: 'parassita', rimedioBio: 'Rete antinsetto o polvere di roccia.' },
      { nome: 'Peronospora della cipolla', tipo: 'malattia', rimedioBio: 'Arieggiare le file e applicare decotto di equiseto.' }
    ],
    proprietaERaccolta: 'Diuretico, antibatterico e rinfrescante; esalta insalate estive, frittate contadine e pinzimoni.',
    curiosita: 'In Campania il Cipollotto Nocerino DOP è celebrato per la sua polpa dolce e digeribile priva di pungenza.'
  },
  {
    id: 'senape',
    nome: 'Senape Bianca',
    nomeScientifico: 'Sinapis alba',
    famiglia: 'Brassicaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Pianta poliedrica a crescita fulminea: foglie giovani piccanti per insalate, fioritura gialla benefica per gli impollinatori, semi aromatici per salse e radici con potente effetto biofumigante antinematodi.',
    difficolta: 'Facile',
    icona: '🌾',
    coloreTema: 'amber',
    giorniGerminazione: { min: 3, max: 6 },
    giorniRaccolto: { min: 30, max: 60 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5, 8, 9, 10],
    mesiTrapianto: [],
    mesiRaccolta: [4, 5, 6, 9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente per una rapida emergenza vegetativa.',
    temperaturaIdeale: {
      germinazioneMin: 6,
      germinazioneOttimale: 18,
      crescitaMin: 6,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 25,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Poco esigente; annaffiare nelle prime due settimane per stimolare la gemmazione.'
    },
    terreno: 'Qualsiasi terreno, anche arido o povero. Usata comunemente come sovescio miglioratore.',
    consociazioni: {
      amiche: ['Patata', 'Pomodoro', 'Leguminose'],
      nemiche: ['Altri cavoli'],
      motivo: 'Le sue radici secernono sostanze che disinfettano il suolo da nematodi e funghi dannosi per le solanacee.'
    },
    cureColturali: [
      'Come verdura da taglio: cimare a 10 cm quando le foglie sono tenere e pepate',
      'Come sovescio verde: sfalciare a inizio fioritura e interrare per sterilizzare e concimare il terreno in modo biologico',
      'Come spezia: attendere che i baccelli secchino per estrarre i semi gialli'
    ],
    avversita: [
      { nome: 'Altiche', tipo: 'parassita', rimedioBio: 'Irrigazioni a spruzzo fogliare e zeolite.' }
    ],
    proprietaERaccolta: 'Digestiva, revulsiva e stimolante; i semi macinati con aceto e miele creano la celebre salsa senape artigianale.',
    curiosita: 'Nella parabola evangelica il granello di senape è citato come il più piccolo tra tutti i semi che genera un arbusto rigoglioso.'
  },
  {
    id: 'crescione',
    nome: 'Crescione Comune',
    nomeScientifico: 'Lepidium sativum',
    famiglia: 'Brassicaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'La pianta più veloce dell\'orto: germoglia in 48 ore e si raccoglie a sole due settimane dalla semina. Foglioncine aromatiche dal gusto fresco, pungente e speziato simile al rafano.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 2, max: 4 },
    giorniRaccolto: { min: 14, max: 25 },
    mesiSeminaSemenzaio: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    mesiSeminaTerra: [3, 4, 5, 9, 10],
    mesiTrapianto: [],
    mesiRaccolta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente per lo sviluppo rapidissimo dei primi cotiledoni.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 6,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 5,
      traFileCm: 15,
      profonditaSeminaCm: 0.2
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Esige substrato sempre inumidito; anche un giorno di siccità brucia le tenere foglioline.'
    },
    terreno: 'Leggero, torboso o terriccio da vaso, ottimo da coltivare persino su ovatta umida sul davanzale.',
    consociazioni: {
      amiche: ['Ravanelli', 'Lattughe'],
      nemiche: [],
      motivo: 'Non entra in competizione con nessun ortaggio data la rapidità fulminea del ciclo biologico.'
    },
    cureColturali: [
      'Seminare a spaglio a scalare ogni 10 giorni per averlo fresco tutto l\'anno',
      'Tagliare con forbicine affilate sopra la base',
      'Consumare tassativamente crudo: la cottura ne distrugge la fragranza aromatica e le vitamine'
    ],
    avversita: [
      { nome: 'Marciume da ristagno', tipo: 'malattia', rimedioBio: 'Fornire buona circolazione d\'aria e non inzuppare.' }
    ],
    proprietaERaccolta: 'Purificante del sangue, ricco di iodio, ferro e vitamina C. Ideale nei panini, formaggi freschi o tartine.',
    curiosita: 'I soldati persiani di Ciro il Grande consumavano pane e crescione prima delle lunghe marce per aumentare la resistenza fisica.'
  },
  {
    id: 'aneto',
    nome: 'Aneto',
    nomeScientifico: 'Anethum graveolens',
    famiglia: 'Apiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Elegante aromatica dalle foglie piumose e ombrelle dorate, con un aroma fresco a metà strada tra finocchietto e anice. Indispensabile per sottaceti, piatti di pesce e salse allo yogurt.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'teal',
    giorniGerminazione: { min: 8, max: 14 },
    giorniRaccolto: { min: 50, max: 70 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5, 6],
    mesiTrapianto: [5],
    mesiRaccolta: [6, 7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente per fogliame vigoroso e profumato.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 20,
      traFileCm: 35,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiare con regolarità senza ristagni, specialmente durante la fioritura.'
    },
    terreno: 'Sciolto, fertile e ben drenato, al riparo da venti forti che spezzerebbero i fusti leggeri.',
    consociazioni: {
      amiche: ['Cetriolo', 'Cavoli', 'Lattuga', 'Cipolla'],
      nemiche: ['Finocchio', 'Carota'],
      motivo: 'Non consociare col finocchio: possono ibridarsi dando semi con aroma sgradevole.'
    },
    cureColturali: [
      'Seminare a file diradando a 20 cm tra le piantine',
      'Cimare le cime fogliari giovani per uso fresco',
      'Raccogliere le ombrelle a fine estate per essiccarne i semi'
    ],
    avversita: [
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Spruzzi d\'acqua fresca o macerato d\'ortica leggero.' }
    ],
    proprietaERaccolta: 'Carminativo, digestivo e antispasmodico; stimola l\'appetito e attenua i gonfiori addominali.',
    curiosita: 'Nell\'antica Grecia i gladiatori si cospargevano il corpo con olio all\'aneto prima dei combattimenti per tonificare i muscoli.'
  },
  {
    id: 'santoreggia',
    nome: 'Santoreggia',
    nomeScientifico: 'Satureja montana',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Piccolo arbusto perenne mediterraneo dai fusticini legnosi e fiorellini bianchi. Ha un profumo rustico, intenso e pepato, perfetta compagna dei legumi per renderli digeribili.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'teal',
    giorniGerminazione: { min: 10, max: 18 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [5],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente per infittire il cespuglio perenne.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 40,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Ama terreni asciutti e ciottolosi; annaffiare solo le giovani piantine appena messe a dimora.'
    },
    terreno: 'Povero, calcareo, molto ben drenato; l\'eccesso di fertilità riduce la concentrazione aromatica.',
    consociazioni: {
      amiche: ['Fagioli', 'Fave', 'Piselli', 'Cipolle'],
      nemiche: [],
      motivo: 'Tradizionalmente piantata accanto ai fagioli perché ne allontana l\'afide nero.'
    },
    cureColturali: [
      'Potare a inizio primavera a 5 cm dalla base per stimolare getti fitti e compatti',
      'Moltiplicare facilmente per talea a inizio estate',
      'Raccogliere i rametti prima della fioritura per essiccarli all\'ombra'
    ],
    avversita: [
      { nome: 'Marciume radicale', tipo: 'malattia', rimedioBio: 'Garantire drenaggio perfetto e posizioni ben soleggiate.' }
    ],
    proprietaERaccolta: 'Potente antibatterico naturale e stimolante digestivo. Detta anche "erba dei fagioli".',
    curiosita: 'I Romani la dedicavano ai Satiri considerandola un potente afrodisiaco, motivo per cui nel Medioevo era vietata nei monasteri.'
  },

  // ==================== FRUTTETO, PICCOLI FRUTTI & AGRUMI ====================
  {
    id: 'uva_spina',
    nome: 'Uva Spina',
    nomeScientifico: 'Ribes uva-crispa',
    famiglia: 'Grossulariaceae',
    categoria: 'frutto',
    sottoCategoria: 'Piccolo frutto',
    descrizione: 'Arbusto spinoso rustico e generoso dei climi montani e collinari. Produce bacche traslucide verdi, gialle o rosse dal sapore agrodolce irresistibile, eccellenti fresche o in confettura.',
    difficolta: 'Media',
    icona: '🍇',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 20, max: 40 },
    giorniRaccolto: { min: 100, max: 130 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [10, 11, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Impianto a radice nuda o in vaso a luna calante invernale; potatura a fine inverno.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 6,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 100,
      traFileCm: 150,
      profonditaSeminaCm: 25
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Teme la calura estiva asciutta; mantenere le radici fresche con abbondante pacciamatura di corteccia.'
    },
    terreno: 'Fresco, ricco di sostanza organica, subacido o neutro (pH 6.0-6.8), senza ristagni.',
    consociazioni: {
      amiche: ['Ribes', 'Lamponi', 'Erba cipollina', 'Menta'],
      nemiche: ['Solanacee'],
      motivo: 'L\'erba cipollina alla base tiene lontani funghi e parassiti fogliari.'
    },
    cureColturali: [
      'Potare arieggiando il centro del cespuglio per agevolare la raccolta tra le spine',
      'Eliminare rami più vecchi di 3-4 anni per favorire i nuovi getti produttivi',
      'Pacciamare con compost maturo e foglie secche in autunno'
    ],
    avversita: [
      { nome: 'Oidio dell\'uva spina (Mal bianco)', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio e zolfo bagnabile prima della fioritura.' },
      { nome: 'Tentredine', tipo: 'parassita', rimedioBio: 'Raccolta manuale delle larve bruciformi o sapone molle.' }
    ],
    proprietaERaccolta: 'Ricchissima di vitamina C, bioflavonoidi e pectina naturale, ideale per gelatine e crostate.',
    curiosita: 'Nel XIX secolo in Inghilterra nacquero centinaia di "Gooseberry Clubs" con gare di peso tra gli orticoltori per la bacca più gigante.'
  },
  {
    id: 'fico',
    nome: 'Fico Comune',
    nomeScientifico: 'Ficus carica',
    famiglia: 'Moraceae',
    categoria: 'frutto',
    sottoCategoria: 'Frutto',
    descrizione: 'Albero simbolo del paesaggio mediterraneo, frugale e antichissimo. Regala dolcissimi fioroni a inizio estate e fichi veri da agosto a ottobre, splendidi freschi o essiccati al sole.',
    difficolta: 'Facile',
    icona: '🫐',
    coloreTema: 'purple',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 2, 3],
    mesiTrapianto: [11, 2, 3],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Messa a dimora dell\'alberello e potature invernali in luna calante per limitare la fuoriuscita di lattice.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 24,
      crescitaMin: 12,
      crescitaMax: 36
    },
    distanze: {
      traPianteCm: 400,
      traFileCm: 500,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Apparato radicale profondo ed espanso che attinge acqua in profondità; annaffiare solo nei primi 2 anni dall\'impianto.'
    },
    terreno: 'Povero, arido, sassoso, anche calcareo. Non sopporta terreni asfittici o acquitrinosi.',
    consociazioni: {
      amiche: ['Olivo', 'Vite', 'Melograno', 'Rosmarino'],
      nemiche: [],
      motivo: 'Armoniosa triade mediterranea classica che condivide esigenze climatiche e idriche.'
    },
    cureColturali: [
      'Potatura minima di rimonda per eliminare rami secchi o che si incrociano al centro',
      'Proteggere il fusto dal gelo nei primi inverni nelle zone più a nord',
      'Raccogliere quando il frutto pende e la buccia cede leggermente alla pressione delle dita'
    ],
    avversita: [
      { nome: 'Mosca del fico', tipo: 'parassita', rimedioBio: 'Trappole alimentari a bottiglia tipo Spintor Fly o rameico preventivo.' },
      { nome: 'Cocciniglia a barchetta', tipo: 'parassita', rimedioBio: 'Olio bianco minerale bio o sapone molle a fine inverno.' }
    ],
    proprietaERaccolta: 'Energetico, ricco di calcio, potassio, enzimi digestivi (ficina) e fibre benefiche per il transito intestinale.',
    curiosita: 'Botanicamente il fico non è un frutto singolo ma un siconio, un\'infiorescenza chiusa che racchiude centinaia di microscopici fiorellini interni.'
  },
  {
    id: 'melo',
    nome: 'Melo da Frutteto',
    nomeScientifico: 'Malus domestica',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'L\'albero da frutto più amato e coltivato d\'Europa. Dalle antiche varietà rustiche (Renetta, Annurca) alle moderne croccanti, regala splendide fioriture primaverili e frutti conservabili tutto l\'inverno.',
    difficolta: 'Media',
    icona: '🍎',
    coloreTema: 'rose',
    giorniGerminazione: { min: 30, max: 90 },
    giorniRaccolto: { min: 120, max: 160 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potatura di produzione a fine inverno in luna calante prima del rigonfiamento delle gemme.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 450,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigazioni regolari nel periodo estivo durante l\'ingrossamento dei frutti, soprattutto nei primi 3 anni.'
    },
    terreno: 'Profondo, fresco, fertile e ben drenato con pH ottimale tra 6.0 e 7.2.',
    consociazioni: {
      amiche: ['Erba cipollina', 'Nasturzio', 'Trifoglio', 'Aglio'],
      nemiche: ['Noce'],
      motivo: 'L\'erba cipollina alla base del tronco previene la ticchiolatura fogliare.'
    },
    cureColturali: [
      'Diradamento dei frutticini a giugno lasciando 1-2 mele per corimbo per avere pezzatura omogenea',
      'Potatura di ritorno per far entrare luce e soleggiamento nella chioma',
      'Fasciare il tronco con colla o cartone ondulato per intercettare le larve svernanti'
    ],
    avversita: [
      { nome: 'Carpocapsa (verme della mela)', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis, trappole a feromoni e nematodi entomopatogeni.' },
      { nome: 'Ticchiolatura', tipo: 'malattia', rimedioBio: 'Poltiglia bordolese, polvere di roccia e decotto di equiseto.' },
      { nome: 'Oidio del melo', tipo: 'malattia', rimedioBio: 'Zolfo bagnabile e potatura dei rametti apicali infetti.' }
    ],
    proprietaERaccolta: 'Povero di calorie, ricco di pectina prebiotica, quercetina e vitamina C. Si conserva per mesi in cantina fresca e buia.',
    curiosita: 'L\'Italia vanta alcune tra le cultivar più antiche del mondo, come la Mela Annurca campana, maturata tradizionalmente sui "melai" di paglia.'
  },
  {
    id: 'pero',
    nome: 'Pero da Tavola',
    nomeScientifico: 'Pyrus communis',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero maestoso che produce pere succose e zuccherine (Abate, Williams, Decana, Coscia). La polpa aromatica e fondente regala gioie dall\'estate fino a inverno inoltrato.',
    difficolta: 'Media',
    icona: '🍐',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 30, max: 90 },
    giorniRaccolto: { min: 110, max: 150 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [7, 8, 9, 10],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potature a fine inverno in luna calante per favorire la formazione di lamburde fertili.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 450,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Più esigente in fatto d\'acqua rispetto al melo: l\'irrigazione goccia a goccia estiva è fondamentale.'
    },
    terreno: 'Profondo, fresco, argilloso-siliceo ma ben drenato; teme il calcare attivo eccessivo se innestato su cotogno.',
    consociazioni: {
      amiche: ['Trifoglio bianco', 'Lavanda', 'Rosmarino'],
      nemiche: ['Ginepro'],
      motivo: 'Il ginepro ospita la ruggine del pero compiendo l\'alternanza dell\'infezione fungina.'
    },
    cureColturali: [
      'Diradare i frutti dopo la cascola fisiologica di giugno',
      'Sostenere i rami più carichi per non farli spezzare dal peso delle pere',
      'Raccogliere leggermente prima della piena maturità: la pera matura al meglio in cantina'
    ],
    avversita: [
      { nome: 'Psilla del pero', tipo: 'parassita', rimedioBio: 'Lavaggi con sapone molle e polvere di caolino (argilla bianca protettiva).' },
      { nome: 'Ticchiolatura del pero', tipo: 'malattia', rimedioBio: 'Rameici preventivi al bruno e decotto d\'equiseto.' }
    ],
    proprietaERaccolta: 'Altamente digeribile, ipoallergenica e ricca di boro, potassio e fibre idrosolubili (pectina).',
    curiosita: 'Il proverbio contadino "Al contadino non far sapere quanto è buono il formaggio con le pere" risale al Medioevo, quando le pere erano cibo nobile e il cacio cibo plebeo.'
  },
  {
    id: 'pesco',
    nome: 'Pesco & Nettarina',
    nomeScientifico: 'Prunus persica',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Il vanto dell\'estate mediterranea: pesche vellutate, nettarine lisce e dolcissime percoche. La magnifica fioritura rosa a inizio primavera annuncia il risveglio della natura.',
    difficolta: 'Esperto',
    icona: '🍑',
    coloreTema: 'rose',
    giorniGerminazione: { min: 60, max: 120 },
    giorniRaccolto: { min: 90, max: 130 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [6, 7, 8, 9],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potatura a fine inverno o verde a luna calante per favorire i rami misti produttivi.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: 10,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 400,
      traFileCm: 500,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari ma senza bagnare il tronco; la carenza idrica dimezza la pezzatura delle pesche.'
    },
    terreno: 'Sciolto, sabbioso o franco, perfettamente drenante. Teme in modo assoluto i ristagni e il calcare eccessivo.',
    consociazioni: {
      amiche: ['Aglio selvatico', 'Tansia', 'Assenzio'],
      nemiche: ['Patata', 'Pomodoro'],
      motivo: 'L\'aglio piantato sotto la chioma aiuta a ridurre la presenza di afidi e la bolla del pesco.'
    },
    cureColturali: [
      'Trattamento fondamentale anti-bolla a caduta foglie in autunno e a fine inverno prima dell\'apertura gemme',
      'Diradamento accurato dei frutticini: lasciare un frutto ogni 15 cm di ramo',
      'Forma di allevamento a vaso aperto per portare sole nel cuore della pianta'
    ],
    avversita: [
      { nome: 'Bolla del pesco (Taphrina deformans)', tipo: 'malattia', rimedioBio: 'Poltiglia bordolese / rame a riposo vegetativo e propoli in primavera.' },
      { nome: 'Mosca della frutta (Ceratitis capitata)', tipo: 'parassita', rimedioBio: 'Trappole a cattura massale e caolino protettivo.' },
      { nome: 'Monilia', tipo: 'malattia', rimedioBio: 'Asportazione dei frutti mummificati e trattamenti con rame o zeolite.' }
    ],
    proprietaERaccolta: 'Rinfrescante, remineralizzante e ricca di beta-carotene, potassio e vitamina C. Si coglie quando il profumo è intenso e la polpa cede al tatto.',
    curiosita: 'Originario della Cina dove era considerato simbolo di immortalità, giunse a Roma attraverso la Persia (da cui il nome "persica").'
  },
  {
    id: 'albicocco',
    nome: 'Albicocco',
    nomeScientifico: 'Prunus armeniaca',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero precoce e generoso che regala piccoli soli dorati e profumati a inizio estate. Le albicocche sono tra i frutti più ricchi di vitamina A e potassio di tutto l\'orto.',
    difficolta: 'Media',
    icona: '🟡',
    coloreTema: 'amber',
    giorniGerminazione: { min: 60, max: 90 },
    giorniRaccolto: { min: 80, max: 110 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [6, 7],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potature leggere a luna calante estiva dopo la raccolta per rimarginare presto i tagli.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 450,
      traFileCm: 500,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Resiste bene alla siccità; evitare annaffiature eccessive a ridosso della maturazione che farebbero spaccare i frutti.'
    },
    terreno: 'Caldo, asciutto, calcareo o franco-sabbioso. Soffre moltissimo terreni freddi, umidi e argille pesanti.',
    consociazioni: {
      amiche: ['Basilico', 'Rosmarino', 'Aglio'],
      nemiche: ['Solanacee'],
      motivo: 'Le piante aromatiche proteggono la corteccia dagli insetti xilofagi.'
    },
    cureColturali: [
      'Posizionare in luoghi riparati dalle gelate tardive di marzo: fiorisce precocemente',
      'Diradare i frutticini in eccesso per evitare l\'alternanza di produzione',
      'Potare con molta moderazione: l\'albicocco cicatrizza con difficoltà e produce gommosi se tagliato bruscamente'
    ],
    avversita: [
      { nome: 'Moniliosi dei fiori e frutti', tipo: 'malattia', rimedioBio: 'Rameico al bruno vegetativo e decotto di equiseto in fioritura.' },
      { nome: 'Corineo (vaiolatura)', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con poltiglia bordolese a caduta foglie.' }
    ],
    proprietaERaccolta: 'Contenuto eccezionale di caroteni benefici per la pelle e la vista. Spettacolare mangiata al sole dall\'albero o in marmellata contadina.',
    curiosita: 'L\'albicocco fu portato in Italia dai Romani dalla Grecia, che a sua volta lo conobbe con le spedizioni di Alessandro Magno in Armenia.'
  },
  {
    id: 'susino',
    nome: 'Susino / Prugno',
    nomeScientifico: 'Prunus domestica',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero robusto e adattabile che produce prugne allungate bluastre (ottime essiccate) o susine tonde dorate e rosse succose. Resiste al freddo e regala raccolti copiosi.',
    difficolta: 'Facile',
    icona: '🟣',
    coloreTema: 'purple',
    giorniGerminazione: { min: 60, max: 100 },
    giorniRaccolto: { min: 90, max: 130 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [6, 7, 8, 9],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potature invernali a luna calante per regolare la carica dei dardi fioriferi.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 400,
      traFileCm: 500,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Meno esigente del pesco; irrigare durante la formazione del nocciolo e ingrossamento dei frutti.'
    },
    terreno: 'Adattabile anche a terreni argillosi e compatti, purché privi di ristagni idrici cronici.',
    consociazioni: {
      amiche: ['Trifoglio', 'Aglio', 'Menta piperita'],
      nemiche: [],
      motivo: 'Migliora la fertilità del suolo attorno al tronco e disturba la cocciniglia.'
    },
    cureColturali: [
      'Eliminare periodicamente i polloni radicali che spuntano vigorosi attorno al piede',
      'Diradare se la carica di susine è eccessiva per scongiurare la rottura delle branche',
      'Raccogliere mantenendo la pruina bianca intatta sulla buccia per aumentarne la conservabilità'
    ],
    avversita: [
      { nome: 'Cydia delle susine', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis e trappole a feromoni sessuali.' },
      { nome: 'Afide farinoso del susino', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio e macerato di ortica.' }
    ],
    proprietaERaccolta: 'Celebri proprietà regolatrici del transito intestinale grazie a fibre solubili, sorbitolo e fenoli antiossidanti.',
    curiosita: 'La prugna secca di Agen e la susina di Dro DOP sono due eccellenze storiche rinomate fin dal Rinascimento.'
  },
  {
    id: 'ciliegio',
    nome: 'Ciliegio Dolce',
    nomeScientifico: 'Prunus avium',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero maestoso dai fiori bianchi a nuvola e dai frutti rubino irresistibili ("uno tira l\'altro"). Dai duroni croccanti di Vignola alle tenerine precoci, è la regina di maggio e giugno.',
    difficolta: 'Media',
    icona: '🍒',
    coloreTema: 'rose',
    giorniGerminazione: { min: 90, max: 150 },
    giorniRaccolto: { min: 60, max: 90 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [5, 6, 7],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potature leggere esclusivamente a luna calante a fine estate subito dopo la raccolta.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 500,
      traFileCm: 600,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiare con moderazione; piogge abbondanti in maturazione provocano il temuto "cracking" (spaccatura dei frutti).'
    },
    terreno: 'Profondo, fresco, ben arieggiato e drenante. Teme moltissimo i ristagni radicali prolungati.',
    consociazioni: {
      amiche: ['Erba cipollina', 'Tarassaco', 'Trifoglio'],
      nemiche: [],
      motivo: 'L\'inerbimento controllato sotto la chioma favorisce la presenza di insetti impollinatori.'
    },
    cureColturali: [
      'Attenzione all\'impollinazione: molte varietà sono autosterili e necessitano di un secondo ciliegio compatibile vicino',
      'Proteggere i frutti con reti antipassero e antinsetto per la mosca della ciliegia',
      'Evitare potature drastiche in inverno che scatenano colature di gomma incurabili'
    ],
    avversita: [
      { nome: 'Mosca delle ciliegie (Rhagoletis cerasi)', tipo: 'parassita', rimedioBio: 'Reti antinsetto a maglia fitta o trappole cromotropiche gialle con attrattivo alimentare.' },
      { nome: 'Afide nero del ciliegio', tipo: 'parassita', rimedioBio: 'Sapone molle e olio di neem a germogliamento.' }
    ],
    proprietaERaccolta: 'Disintossicante, drenante e ricco di antociani antinfiammatori e melatonina naturale.',
    curiosita: 'Il generale e gourmet romano Lucullo portò i primi alberi di ciliegio a Roma da Cerasunte nel Ponto nel 73 a.C.'
  },
  {
    id: 'vite',
    nome: 'Vite da Tavola',
    nomeScientifico: 'Vitis vinifera',
    famiglia: 'Vitaceae',
    categoria: 'frutto',
    sottoCategoria: 'Frutto',
    descrizione: 'La pianta classica del pergolato e dell\'orto familiare. Grappoli d\'oro e di porpora (Italia, Regina, Pizzutello, Uva Fragola) con acini dolcissimi e succulenti da gustare sotto il pergolato.',
    difficolta: 'Media',
    icona: '🍇',
    coloreTema: 'purple',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 110, max: 150 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [8, 9, 10],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potatura invernale a secco in luna calante prima del "pianto della vite".',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 22,
      crescitaMin: 10,
      crescitaMax: 34
    },
    distanze: {
      traPianteCm: 150,
      traFileCm: 250,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Radici profonde che trovano umidità; irrigare con parsimonia solo in caso di prolungata siccità estiva.'
    },
    terreno: 'Sciolto, collinare, ciottoloso o argilloso-calcareo ben drenato. Non tollera i ristagni.',
    consociazioni: {
      amiche: ['Rosa', 'Origano', 'Senape', 'Rosmarino'],
      nemiche: ['Cavolo'],
      motivo: 'La rosa sentinella posta a capo filare manifesta per prima l\'oidio consentendo tempestivi rimedi biologici.'
    },
    cureColturali: [
      'Potatura verde estiva: scacchiatura, cimatura e sfogliatura attorno ai grappoli per favorire l\'aerazione e la maturazione',
      'Legatura dei tralci vigorosi alla pergola o a spalliera con fili metallici',
      'Proteggere i grappoli zuccherini con sacchetti microforati contro vespe e uccelli'
    ],
    avversita: [
      { nome: 'Peronospora della vite', tipo: 'malattia', rimedioBio: 'Poltiglia bordolese a basse dosi e decotto di equiseto preventivo.' },
      { nome: 'Oidio / Mal bianco', tipo: 'malattia', rimedioBio: 'Zolfo ventilato o bagnabile e bicarbonato di potassio.' },
      { nome: 'Tignola dell\'uva', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis al comparire delle prime tignole.' }
    ],
    proprietaERaccolta: 'Energetica, rimineralizzante, ricca di resveratrolo, polifenoli e zuccheri prontamente assimilabili.',
    curiosita: 'La cura dell\'uva ("ampeloterapia") era praticata fin dall\'antichità come ciclo rigenerante e depurativo a inizio autunno.'
  },
  {
    id: 'kiwi',
    nome: 'Kiwi / Actinidia',
    nomeScientifico: 'Actinidia deliciosa',
    famiglia: 'Actinidiaceae',
    categoria: 'frutto',
    sottoCategoria: 'Frutto',
    descrizione: 'Vigorosissimo rampicante dai tralci lunghi e grandi foglie a cuore. Produce cascate di frutti a polpa verde smeraldo ricchissimi di vitamina C, perfetti per pergole ombreggianti.',
    difficolta: 'Media',
    icona: '🥝',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 140, max: 180 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Potatura invernale a luna calante per regolare i rami a frutto e le pergole.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: 10,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 300,
      traFileCm: 400,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Grandi consumatori d\'acqua: in estate esigono terreno costantemente umido senza ristagno, pena la caduta delle foglie.'
    },
    terreno: 'Profondo, fertile, soffice e subacido (pH 6.0-6.8). Teme assolutamente il calcare attivo che provoca clorosi ferrica.',
    consociazioni: {
      amiche: ['Menta', 'Fragole', 'Consolida maggiore'],
      nemiche: ['Noce'],
      motivo: 'Le tappezzanti ombreggiano l\'apparato radicale superficiale dell\'actinidia.'
    },
    cureColturali: [
      'Pianta dioica: indispensabile mettere a dimora almeno una pianta maschio ogni 5-7 piante femmina per l\'impollinazione',
      'Costruire sostegni e pergole molto robuste per sopportare il peso della vegetazione e dei frutti',
      'Raccogliere a inizio novembre prima delle forti gelate e lasciar maturare con mele in cantina'
    ],
    avversita: [
      { nome: 'Batteriosi del kiwi (PSA)', tipo: 'malattia', rimedioBio: 'Disinfezione attrezzi di potatura e trattamenti rameici a caduta foglie.' },
      { nome: 'Cocciniglia bianca', tipo: 'parassita', rimedioBio: 'Olio bianco minerale bio in inverno e sapone molle.' }
    ],
    proprietaERaccolta: 'Contiene il doppio della vitamina C delle arance, enzima digestivo actinidina, potassio e fibre prebiotiche.',
    curiosita: 'L\'Italia è uno dei primi produttori mondiali di kiwi: introdotto negli anni \'70, ha trovato in Piemonte, Lazio e Veneto il suo habitat ideale.'
  },
  {
    id: 'nocciolo',
    nome: 'Nocciolo',
    nomeScientifico: 'Corylus avellana',
    famiglia: 'Betulaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Arbusto cespuglioso rustico e generoso della macchia e delle colline italiane (Tonda Gentile delle Langhe, Giffoni). Produce deliziose nocciole croccanti e nutritive che si conservano per un anno intero.',
    difficolta: 'Facile',
    icona: '🌰',
    coloreTema: 'amber',
    giorniGerminazione: { min: 90, max: 180 },
    giorniRaccolto: { min: 120, max: 150 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [10, 11, 12, 1, 2],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [8, 9],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Impianto e diradamento dei polloni basali in luna calante invernale.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 16,
      crescitaMin: 6,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 400,
      traFileCm: 500,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Poco esigente una volta attecchito; giova di irrigazioni estive per il riempimento del guscio.'
    },
    terreno: 'Fresco, permeabile, collinare e con buon drenaggio. Evita terreni asfittici e paludosi.',
    consociazioni: {
      amiche: ['Frutti di bosco', 'Trifoglio', 'Aglio selvatico'],
      nemiche: [],
      motivo: 'I rami flessibili del nocciolo creano eccellenti tutori naturali per l\'orto (canne per fagioli e pomodori).'
    },
    cureColturali: [
      'Spollonatura fondamentale: eliminare i getti erbacei alla base ogni anno lasciando 4-5 branche principali',
      'I fiori maschili (amentos) compaiono a pieno inverno regalando polline prezioso alle api nei giorni miti',
      'Raccogliere le nocciole cadute a terra e asciugarle al sole prima dello stoccaggio'
    ],
    avversita: [
      { nome: 'Balanino del nocciolo (Curculio nucum)', tipo: 'parassita', rimedioBio: 'Lavorazioni invernali del suolo sotto chioma per esporre le larve e nematodi benefici.' },
      { nome: 'Cimice del nocciolo', tipo: 'parassita', rimedioBio: 'Scuotimento mattutino con teli ed estratti di piretro naturale.' }
    ],
    proprietaERaccolta: 'Ricchissimo di grassi monoinsaturi benefici per il cuore, vitamina E protettiva e magnesio contro la stanchezza.',
    curiosita: 'I rami biforcati di nocciolo sono lo strumento tradizionale preferito dai rabdomanti per localizzare vene d\'acqua sotterranee.'
  },
  {
    id: 'noce',
    nome: 'Noce Comune',
    nomeScientifico: 'Juglans regia',
    famiglia: 'Juglandaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero monumentale, solenne e secolare. Fornisce noci squisite, legname pregiatissimo e malli verdi aromatici con cui la tradizione prepara il nocino a San Giovanni.',
    difficolta: 'Facile',
    icona: '🥜',
    coloreTema: 'amber',
    giorniGerminazione: { min: 90, max: 180 },
    giorniRaccolto: { min: 140, max: 180 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [10, 11, 12, 1],
    mesiTrapianto: [11, 12, 2],
    mesiRaccolta: [9, 10],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Messa a dimora in luna calante; il noce va potato pochissimo e solo all\'occorrenza.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 800,
      traFileCm: 1000,
      profonditaSeminaCm: 60
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Apparato fittonante profondissimo; necessita d\'acqua solo nei primi due anni di gioventù.'
    },
    terreno: 'Profondo, fertile, permeabile, ricco di sostanza organica con buona umidità di fondo.',
    consociazioni: {
      amiche: ['Prato rustico'],
      nemiche: ['Pomodoro', 'Melo', 'Patata', 'Ortaggi'],
      motivo: 'Le radici e le foglie emettono "juglone", sostanza allelopatica naturale che inibisce la crescita di quasi tutti gli ortaggi sottostanti.'
    },
    cureColturali: [
      'Dedicargli una posizione isolata nell\'orto per la sua mole e per l\'effetto juglone',
      'Raccolta delle noci quando il mallo verde esterno si spacca lasciando cadere il guscio legnoso',
      'Lavare via i residui di mallo e far essiccare al sole per qualche settimana'
    ],
    avversita: [
      { nome: 'Mosca del noce (Rhagoletis completa)', tipo: 'parassita', rimedioBio: 'Trappole a cattura massale e caolino sui frutti a inizio estate.' },
      { nome: 'Antracnosi del noce', tipo: 'malattia', rimedioBio: 'Raccolta ed eliminazione delle foglie infette in autunno.' }
    ],
    proprietaERaccolta: 'Regina degli acidi grassi Omega-3, benefica per il cervello e la circolazione arteriosa.',
    curiosita: 'La notte di San Giovanni (24 giugno) si raccolgono tradizionalmente 24 o 33 noci ancora verdi e tenere per preparare il celebre liquore Nocino.'
  },
  {
    id: 'melograno',
    nome: 'Melograno',
    nomeScientifico: 'Punica granatum',
    famiglia: 'Lythraceae',
    categoria: 'frutto',
    sottoCategoria: 'Frutto',
    descrizione: 'Antico arbusto sacro dai fiori rosso corallo fiammeggianti e frutti coriacei colmi di chicchi rubino succosi e aciduli. Simbolo millenario di fertilità, fortuna e longevità.',
    difficolta: 'Facile',
    icona: '🍎',
    coloreTema: 'rose',
    giorniGerminazione: { min: 20, max: 45 },
    giorniRaccolto: { min: 120, max: 150 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [11, 12, 1, 2, 3],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora e concimazione organica autunnale in luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 24,
      crescitaMin: 10,
      crescitaMax: 36
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 450,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Tollera siccità estreme; irrigazioni regolari e senza sbalzi a fine estate evitano la spaccatura dei frutti maturi.'
    },
    terreno: 'Sciolto, sabbioso o calcareo, molto ben drenato. Rifugge terreni pesanti e asfittici.',
    consociazioni: {
      amiche: ['Lavanda', 'Rosmarino', 'Salvia', 'Fico'],
      nemiche: [],
      motivo: 'Le essenze aromatiche mediterranee ne esaltano l\'estetica e proteggono i boccioli fiorali.'
    },
    cureColturali: [
      'Allevabile a cespuglio libero o a monoverso ad alberello con tronco singolo',
      'Eliminare i polloni basali superflui a fine inverno',
      'Raccogliere tagliando il picciolo quando la scorza acquisisce il tipico colore rosso screziato'
    ],
    avversita: [
      { nome: 'Afidi dei germogli', tipo: 'parassita', rimedioBio: 'Sapone molle e getti d\'acqua mirati.' },
      { nome: 'Spaccatura dei frutti', tipo: 'malattia', rimedioBio: 'Fisiopatia: regolarizzare le irrigazioni evitando terreni aridi seguiti da piogge torrenziali.' }
    ],
    proprietaERaccolta: 'Uno dei più potenti antiossidanti naturali, ricchissimo di acido ellagico, punicalagina e vitamina C.',
    curiosita: 'Nella mitologia greca e nella Roma antica le spose intrecciavano rami di melograno nei capelli come auspicio di prole numerosa e prosperità.'
  },
  {
    id: 'limone',
    nome: 'Limone in Vaso e Giardino',
    nomeScientifico: 'Citrus limon',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Il principe degli agrumi: zagara profumatissima, foglie lucide sempreverdi e frutti d\'oro che maturano continuamente per tutto l\'anno. Splendido in terra al sud e in grandi vasi di terracotta al centro-nord.',
    difficolta: 'Media',
    icona: '🍋',
    coloreTema: 'amber',
    giorniGerminazione: { min: 20, max: 40 },
    giorniRaccolto: { min: 180, max: 240 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5],
    mesiTrapianto: [3, 4, 5],
    mesiRaccolta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Rinvaso e concimazione primaverile a luna crescente con lupini macinati.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 24,
      crescitaMin: 12,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 300,
      traFileCm: 400,
      profonditaSeminaCm: 40
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiare con regolarità in estate lasciando asciugare i primi 3 cm di terra prima di ribagnare. Ridurre in inverno.'
    },
    terreno: 'Sciolto, fertile, ricco di sostanza organica con terriccio specifico per agrumi e ottimo drenaggio basale con argilla espansa.',
    consociazioni: {
      amiche: ['Timo', 'Origano', 'Nasturzio'],
      nemiche: [],
      motivo: 'Le piante aromatiche basse proteggono il terreno del vaso dall\'eccessiva evaporazione solare.'
    },
    cureColturali: [
      'Nutrire con lupini macinati a inizio primavera e concimi organici ricchi di ferro per prevenire l\'ingiallimento fogliare (clorosi)',
      'Al nord ritirare in limonaia o proteggere con doppio strato di tessuto non tessuto prima che scendano sotto i 2-3°C',
      'Potatura di pulizia a inizio estate per arieggiare la chioma e togliere rami secchi o succhioni verticali'
    ],
    avversita: [
      { nome: 'Cocciniglia cotonosa o a scudetto', tipo: 'parassita', rimedioBio: 'Olio bianco minerale bio e pulizia manuale con alcool o sapone molle.' },
      { nome: 'Minatrice serpentina delle foglie', tipo: 'parassita', rimedioBio: 'Olio di neem sulle foglie tenere e rimozione manuale delle parti colpite.' },
      { nome: 'Fumaggine', tipo: 'malattia', rimedioBio: 'Lavaggio con sapone di potassio per togliere la melata degli afidi.' }
    ],
    proprietaERaccolta: 'Antibatterico, ricchissimo di vitamina C e acido citrico; scorza carica di limonene per liquori (Limoncello) e dolci.',
    curiosita: 'La coltivazione in conche di terracotta toscana e nelle famose "limonaie" del Lago di Garda è un\'arte centenaria rinomata fin dai tempi dei Medici.'
  }
];
