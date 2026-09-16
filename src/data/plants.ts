import { Plant } from '../types';
import { MORE_PLANTS } from './morePlants';
import { ORCHARD_AND_MORE_PLANTS } from './orchardAndMorePlants';
import { MORE_PLANTS_EXTENDED } from './morePlantsExtended';
import { PLANTS_106_TO_130 } from './plants106To130';

const BASE_PLANTS_DATA: Plant[] = [
  // ==================== ORTAGGI DA FRUTTO ====================
  {
    id: 'pomodoro',
    nome: 'Pomodoro',
    nomeScientifico: 'Solanum lycopersicum',
    famiglia: 'Solanaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Il re indiscusso dell\'orto estivo. Pianta vigorosa che regala frutti ricchi di licopene e sapore, ideale sia per insalate sia per salse tradizionali.',
    difficolta: 'Media',
    icona: '🍅',
    coloreTema: 'rose',
    giorniGerminazione: { min: 6, max: 10 },
    giorniRaccolto: { min: 70, max: 90 },
    mesiSeminaSemenzaio: [2, 3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Seminare in luna crescente per stimolare lo sviluppo vegetativo e la fioritura vigorosa dei frutti.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 24,
      crescitaMin: 16,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 45,
      traFileCm: 80,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Bagnare regolarmente alla base senza mai bagnare le foglie per evitare la peronospora. Aumentare l\'apporto durante l\'ingrossamento dei frutti.'
    },
    terreno: 'Profondo, fertile, ricco di sostanza organica e ben drenato. pH ottimale tra 6.0 e 6.8.',
    consociazioni: {
      amiche: ['Basilico', 'Prezzemolo', 'Carota', 'Aglio', 'Lattuga', 'Cipolla'],
      nemiche: ['Patata', 'Finocchio', 'Cavolo', 'Mais'],
      motivo: 'Il basilico esalta il sapore del pomodoro e respinge mosche bianche e afidi; evitare le patate perché condividono la peronospora.'
    },
    cureColturali: [
      'Installare tutori o canne robuste alti almeno 1.5 - 2 metri',
      'Scacchiatura (sfemminellatura): asportare i germogli ascellari ogni settimana',
      'Cimatura della pianta a fine estate per concentrare la linfa sugli ultimi pomodori',
      'Pacciamatura con paglia per trattenere l\'umidità ed evitare erbe infestanti'
    ],
    avversita: [
      { nome: 'Peronospora (funghi)', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con poltiglia bordolese o rameico, e decotto di equiseto.' },
      { nome: 'Afidi e Mosca bianca', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio o olio di neem nebulizzato nelle ore fresche.' },
      { nome: 'Marciume apicale', tipo: 'malattia', rimedioBio: 'Non è un fungo: dovuta a carenza di calcio o irrigazioni irregolari. Regolarizzare le annaffiature.' }
    ],
    proprietaERaccolta: 'Raccogliere quando i frutti sono uniformemente colorati e sodi. Ricchissimo di vitamina C, potassio e potenti antiossidanti (licopene).',
    curiosita: 'Arrivato dalle Americhe, in Italia fu inizialmente coltivato solo come pianta ornamentale velenosa ("pomo d\'oro") prima di diventare sovrano della tavola.'
  },
  {
    id: 'zucchina',
    nome: 'Zucchina',
    nomeScientifico: 'Cucurbita pepo',
    famiglia: 'Cucurbitaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Pianta generosissima e a crescita rapidissima. Produce ininterrottamente deliziosi frutti cilindrici e squisiti fiori commestibili per tutta l\'estate.',
    difficolta: 'Facile',
    icona: '🥒',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 4, max: 7 },
    giorniRaccolto: { min: 45, max: 60 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5, 6, 7],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'La luna crescente favorisce la rapida allegagione e la copiosa emissione di fiori femminili.',
    temperaturaIdeale: {
      germinazioneMin: 18,
      germinazioneOttimale: 25,
      crescitaMin: 18,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 80,
      traFileCm: 100,
      profonditaSeminaCm: 2.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Richiede molta acqua, specialmente nei mesi torridi. Annaffiare preferibilmente la mattina presto alla base della pianta.'
    },
    terreno: 'Molto fertile, sciolto, arricchito con abbondante compost o letame maturo. pH 6.0 - 7.5.',
    consociazioni: {
      amiche: ['Mais', 'Fagiolo', 'Cipolla', 'Lattuga', 'Menta'],
      nemiche: ['Patata', 'Finocchio', 'Cetriolo'],
      motivo: 'Ottima consociazione con fagioli e mais (le 3 sorelle). Menta e cipolla tengono lontani parassiti terricoli.'
    },
    cureColturali: [
      'Raccogliere le zucchine quando sono ancora giovani (15-20 cm) per stimolare nuova fioritura',
      'Rimuovere le foglie vecchie basali ingiallite per favorire l\'aerazione',
      'Impollinazione manuale con un pennellino se notate che i piccoli frutticini ingialliscono prima di ingrossarsi'
    ],
    avversita: [
      { nome: 'Oidio o Mal Bianco', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio o zolfo bagnabile, oppure latte diluito al 10% in acqua.' },
      { nome: 'Afidi neri', tipo: 'parassita', rimedioBio: 'Macerato di ortica o sapone di Marsiglia spruzzato sulla pagina inferiore delle foglie.' }
    ],
    proprietaERaccolta: 'Idratante, ipocalorica, ricca di potassio e fibre. I fiori vanno raccolti al mattino presto quando sono aperti.',
    curiosita: 'Una sola pianta sana ben curata può produrre fino a 20-30 zucchine durante l\'intera stagione estiva!'
  },
  {
    id: 'melanzana',
    nome: 'Melanzana',
    nomeScientifico: 'Solanum melongena',
    famiglia: 'Solanaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Ortaggio mediterraneo amato per la polpa spugnosa e saporita. Ha bisogno di caldo e sole per svilupparsi rigogliosa con i suoi bellissimi fiori viola.',
    difficolta: 'Media',
    icona: '🍆',
    coloreTema: 'purple',
    giorniGerminazione: { min: 8, max: 14 },
    giorniRaccolto: { min: 80, max: 110 },
    mesiSeminaSemenzaio: [1, 2, 3],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente ideale per favorire la fruttificazione e l\'ingrossamento continuo dei frutti.',
    temperaturaIdeale: {
      germinazioneMin: 20,
      germinazioneOttimale: 26,
      crescitaMin: 18,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 50,
      traFileCm: 80,
      profonditaSeminaCm: 0.8
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari; non tollera stress idrici che renderebbero la polpa amara e fibrosa.'
    },
    terreno: 'Caldo, di medio impasto, profondo e concimato abbondantemente. pH tra 6.0 e 7.0.',
    consociazioni: {
      amiche: ['Basilico', 'Fagiolino', 'Insalata', 'Prezzemolo'],
      nemiche: ['Patata', 'Pomodoro', 'Finocchio'],
      motivo: 'I fagiolini fissano azoto prezioso nel suolo; il basilico tiene lontani insetti dannosi.'
    },
    cureColturali: [
      'Applicare un tutore per sostenere il fusto sotto il peso dei frutti',
      'Cimatura del fusto principale a 4-5 frutti per pianta nelle zone a clima fresco per farli maturare prima del gelo',
      'Asportare le prime foglie basali che toccano terra'
    ],
    avversita: [
      { nome: 'Dorifora', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis var. tenebrionis o rimozione manuale di uova e larve.' },
      { nome: 'Ragnetto rosso', tipo: 'parassita', rimedioBio: 'Aumentare l\'umidità fogliare ed erogare zolfo o macerato d\'aglio.' }
    ],
    proprietaERaccolta: 'Raccogliere quando la buccia è ancora lucida; se diventa opaca i semi interni induriscono. Ottima fonte di fibre e acido clorogenico.',
    curiosita: 'Nel Medioevo veniva chiamata "mela insana" perché consumata cruda risultava tossica per la presenza di solanina.'
  },
  {
    id: 'peperone',
    nome: 'Peperone & Peperoncino',
    nomeScientifico: 'Capsicum annuum',
    famiglia: 'Solanaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Colorato, croccante e ricchissimo di vitamina C. Dalle varietà dolci a corno e quadrate fino ai peperoncini piccanti più aromatici.',
    difficolta: 'Media',
    icona: '🫑',
    coloreTema: 'amber',
    giorniGerminazione: { min: 8, max: 15 },
    giorniRaccolto: { min: 75, max: 100 },
    mesiSeminaSemenzaio: [1, 2, 3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Seminare in semenzaio riscaldato in luna crescente per dare vigore ai fusti.',
    temperaturaIdeale: {
      germinazioneMin: 18,
      germinazioneOttimale: 25,
      crescitaMin: 18,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 60,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Annaffiature costanti ma senza ristagni. Non bagnare i fiori per evitare cascola precoce.'
    },
    terreno: 'Sciolto, permeabile, ricco di sostanza organica ben decomposta. pH 6.0 - 7.0.',
    consociazioni: {
      amiche: ['Basilico', 'Carote', 'Origano', 'Cipolla', 'Prezzemolo'],
      nemiche: ['Finocchio', 'Fagioli rampicanti', 'Cavolo'],
      motivo: 'Il basilico e l\'origano migliorano la vigoria della pianta e scoraggiano acari e tripidi.'
    },
    cureColturali: [
      'Legare la pianta a un tutore a canna per evitare che il vento spezzi i rami carichi',
      'Asportare il primo fiore all\'intersezione primaria per potenziare la ramificazione',
      'Pacciamatura per prevenire la disidratazione del colletto'
    ],
    avversita: [
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Sapone di Marsiglia o macerato d\'ortica.' },
      { nome: 'Verticilliosi (appassimento)', tipo: 'malattia', rimedioBio: 'Rotazione colturale quadriennale ed evitare ristagni idrici.' }
    ],
    proprietaERaccolta: 'I peperoni rossi e gialli contengono più del quadruplo di vitamina C di un\'arancia! Raccogliere tagliando il picciolo con forbici affilate.',
    curiosita: 'La piccantezza dei peperoncini è dovuta alla capsaicina, concentrata soprattutto nella placenta interna bianca e nei semi.'
  },
  {
    id: 'cetriolo',
    nome: 'Cetriolo',
    nomeScientifico: 'Cucumis sativus',
    famiglia: 'Cucurbitaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Rinfrescante e croccante protagonista delle insalate estive. Pianta rampicante vigorosa che predilige crescere su reti verticali per produrre frutti dritti e sani.',
    difficolta: 'Facile',
    icona: '🥒',
    coloreTema: 'teal',
    giorniGerminazione: { min: 4, max: 8 },
    giorniRaccolto: { min: 50, max: 70 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5, 6],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [6, 7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per una rapida crescita dei tralci e allegagione precoce.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 24,
      crescitaMin: 18,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 80,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Abbondante',
      dettagli: 'Irrigare regolarmente: la mancanza d\'acqua o sbalzi idrici rendono i cetrioli amari.'
    },
    terreno: 'Sciolto, soffice, ricchissimo di sostanza organica e molto drenante.',
    consociazioni: {
      amiche: ['Fagioli', 'Mais', 'Piselli', 'Girasole', 'Lattuga', 'Aneto'],
      nemiche: ['Patata', 'Pomodoro', 'Erbe aromatiche forti'],
      motivo: 'L\'aneto attira predatori benefici e insetti impollinatori; il mais fa da supporto naturale ai tralci.'
    },
    cureColturali: [
      'Far salire i tralci su una rete per risparmiare spazio ed evitare marciumi da contatto col suolo',
      'Cimatura della cima dopo il sesto nodo per indurre emissione di rami laterali fruttiferi'
    ],
    avversita: [
      { nome: 'Oidio (mal bianco)', tipo: 'malattia', rimedioBio: 'Bicarbonato di sodio o zolfo ventilato alle prime avvisaglie.' },
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Lancio di coccinelle o spruzzature con sapone potassico.' }
    ],
    proprietaERaccolta: 'Composto al 96% d\'acqua, depurativo, antinfiammatorio e rimineralizzante. Raccogliere giovani prima che i semi interni ingrossino.',
    curiosita: 'Coltivato in India da oltre 3000 anni, era adorato dall\'imperatore romano Tiberio che ne voleva uno al giorno tutto l\'anno!'
  },
  {
    id: 'zucca',
    nome: 'Zucca',
    nomeScientifico: 'Cucurbita moschata / maxima',
    famiglia: 'Cucurbitaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Regina autunnale dell\'orto. Pianta strisciante maestosa che produce frutti zuccherini a lunghissima conservazione, perfetti per risotti, vellutate e dolci.',
    difficolta: 'Facile',
    icona: '🎃',
    coloreTema: 'orange',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 90, max: 130 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [8, 9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce la ramificazione e l\'ingrossamento del fusto.',
    temperaturaIdeale: {
      germinazioneMin: 18,
      germinazioneOttimale: 25,
      crescitaMin: 16,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 120,
      traFileCm: 180,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Generosa nella fase iniziale e di ingrossamento; sospendere le irrigazioni 15 giorni prima della raccolta per aumentare gli zuccheri.'
    },
    terreno: 'Profondo, molto ricco di letame maturo, fresco e drenante.',
    consociazioni: {
      amiche: ['Mais', 'Fagiolo rampicante', 'Nasturzio', 'Menta'],
      nemiche: ['Patata', 'Zucchina (per ibridazione)'],
      motivo: 'Le grandi foglie della zucca pacciamano naturalmente il terreno all\'ombra del mais.'
    },
    cureColturali: [
      'Posare una tavoletta di legno o tegola sotto le zucche in crescita per isolarle dal terreno umido',
      'Cimatura dei tralci dopo 2-3 frutti per pianta per favorire lo sviluppo di zucche più grandi e zuccherine'
    ],
    avversita: [
      { nome: 'Oidio', tipo: 'malattia', rimedioBio: 'Polvere di zolfo o decotto di equiseto preventivo.' },
      { nome: 'Lumache sui germogli', tipo: 'parassita', rimedioBio: 'Fosfato ferrico naturale o barriere di cenere/gusci d\'uovo tritati.' }
    ],
    proprietaERaccolta: 'Raccogliere quando il picciolo si secca ed è sugheroso. Conservare al buio e asciutto per tutto l\'inverno.',
    curiosita: 'I semi di zucca tostati sono uno snack eccezionale ricco di zinco, magnesio e omega-3.'
  },

  // ==================== ORTAGGI DA FOGLIA ====================
  {
    id: 'lattuga',
    nome: 'Lattuga & Insalate',
    nomeScientifico: 'Lactuca sativa',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'L\'ortaggio da foglia più diffuso e veloce. Dalla canasta alla lattuga cappuccia o romana, garantisce insalate fresche per quasi tutto l\'anno.',
    difficolta: 'Facile',
    icona: '🥬',
    coloreTema: 'green',
    giorniGerminazione: { min: 4, max: 7 },
    giorniRaccolto: { min: 35, max: 65 },
    mesiSeminaSemenzaio: [2, 3, 4, 8, 9],
    mesiSeminaTerra: [3, 4, 5, 6, 7, 8, 9],
    mesiTrapianto: [3, 4, 5, 6, 7, 8, 9, 10],
    mesiRaccolta: [4, 5, 6, 7, 8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Seminare in luna calante per ritardare la precoce montata a seme (fioritura) e avere cespi compatti.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 12,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 35,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiature frequenti ma leggere per mantenere il terreno costantemente fresco. Evitare ristagni sul cespo.'
    },
    terreno: 'Sciolto, fertile, ricco di humus, privo di sassi superficiali.',
    consociazioni: {
      amiche: ['Carota', 'Fragola', 'Ravanello', 'Cipolla', 'Cetriolo'],
      nemiche: ['Prezzemolo', 'Sedano'],
      motivo: 'Le carote e i ravanelli sfruttano lo strato profondo mentre la lattuga quello superficiale.'
    },
    cureColturali: [
      'Semine scalari ogni 2-3 settimane per avere un raccolto continuo',
      'Ombreggiamento durante i mesi estivi per evitare che le foglie diventino amare',
      'Sarchiatura delicata tra le file'
    ],
    avversita: [
      { nome: 'Lumache e Limacce', tipo: 'parassita', rimedioBio: 'Barriere di lana vergine, cenere, o trappole a birra.' },
      { nome: 'Marciume del colletto (Sclerotinia)', tipo: 'malattia', rimedioBio: 'Non interrare troppo il colletto durante il trapianto e arieggiare.' }
    ],
    proprietaERaccolta: 'Ricca di provitamina A, acido folico e sostanze con effetto blandamente rilassante (lactucario).',
    curiosita: 'Gli antichi romani la consumavano a fine banchetto per favorire il sonno e la digestione.'
  },
  {
    id: 'spinacio',
    nome: 'Spinacio',
    nomeScientifico: 'Spinacia oleracea',
    famiglia: 'Amaranthaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Verdura a foglia verde scuro, regina dei mesi freschi primaverili e autunnali. Rapido da coltivare e delizioso sia crudo da baby leaf che cotto.',
    difficolta: 'Facile',
    icona: '🍃',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 6, max: 12 },
    giorniRaccolto: { min: 40, max: 60 },
    mesiSeminaSemenzaio: [1, 2, 8, 9],
    mesiSeminaTerra: [2, 3, 4, 8, 9, 10],
    mesiTrapianto: [2, 3, 9, 10],
    mesiRaccolta: [3, 4, 5, 10, 11, 12],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per evitare che vada in fioritura anzitempo col risalire delle temperature.',
    temperaturaIdeale: {
      germinazioneMin: 7,
      germinazioneOttimale: 15,
      crescitaMin: 8,
      crescitaMax: 20
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 25,
      profonditaSeminaCm: 1.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Mantenere il suolo umido; la siccità induce fioritura prematura.'
    },
    terreno: 'Fresco, ricco di azoto organico, con ottimo drenaggio dell\'acqua.',
    consociazioni: {
      amiche: ['Fragole', 'Cavoli', 'Fave', 'Piselli', 'Ravanelli'],
      nemiche: ['Bietola', 'Patata'],
      motivo: 'Le leguminose (fave e piselli) rilasciano azoto naturale che nutre le foglie dello spinacio.'
    },
    cureColturali: [
      'Diradamento delle piantine a 10-15 cm quando hanno 3-4 foglie vere',
      'Raccolta scalare asportando solo le foglie esterne più grandi per stimolare nuova ricrescita'
    ],
    avversita: [
      { nome: 'Peronospora dello spinacio', tipo: 'malattia', rimedioBio: 'Rameici preventivi a basse dosi o decotto d\'aglio.' },
      { nome: 'Grillotalpa', tipo: 'parassita', rimedioBio: 'Nematodi entomopatogeni benefici.' }
    ],
    proprietaERaccolta: 'Ottima fonte di ferro, luteina per la vista, vitamine A, C, K e antiossidanti.',
    curiosita: 'Il mito del ferro esagerato di Braccio di Ferro nacque da un errore di battitura di una virgola decimale da parte di un biochimico nel 1870!'
  },
  {
    id: 'cavolo_nero',
    nome: 'Cavolo Nero di Toscana',
    nomeScientifico: 'Brassica oleracea var. acephala',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Icona dell\'orto toscano e superfood acclamato nel mondo. Pianta rustica e scultorea che sopporta il gelo invernale diventando ancora più dolce dopo le prime brinate.',
    difficolta: 'Facile',
    icona: '🥬',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 70, max: 90 },
    mesiSeminaSemenzaio: [5, 6, 7],
    mesiSeminaTerra: [6, 7, 8],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il continuo ricaccio di nuove foglie dal fusto eretto.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
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
      dettagli: 'Bagnare durante l\'estate dopo il trapianto; in autunno e inverno le piogge sono spesso sufficienti.'
    },
    terreno: 'Argilloso o di medio impasto, profondo, compatto e ben concimato.',
    consociazioni: {
      amiche: ['Rosmarino', 'Salvia', 'Timo', 'Cipolla', 'Sedano'],
      nemiche: ['Fragola', 'Pomodoro', 'Aglio'],
      motivo: 'Le piante aromatiche come salvia e rosmarino confondono la farfalla cavolaia con i loro intensi oli essenziali.'
    },
    cureColturali: [
      'Rincalzatura del fusto per rendere la pianta stabile contro i venti invernali',
      'Raccogliere le foglie dal basso verso l\'alto lasciando il ciuffo apicale per continuare la crescita'
    ],
    avversita: [
      { nome: 'Cavolaia (bruchi verdi)', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis var. kurstaki, eccezionale e selettivo biologico.' },
      { nome: 'Altica (pulce della terra)', tipo: 'parassita', rimedioBio: 'Polvere di roccia (zeolite o caolino) spolverata sulle foglie.' }
    ],
    proprietaERaccolta: 'Ingrediente d\'onore della ribollita toscana. Contiene antiossidanti glucosinolati, calcio e vitamina K.',
    curiosita: 'Il gelo invernale trasforma gli amidi delle foglie in zuccheri semplici, rendendole incredibilmente tenere e dolci!'
  },
  {
    id: 'bietola',
    nome: 'Bietola da Coste ed Erbetta',
    nomeScientifico: 'Beta vulgaris subsp. vulgaris',
    famiglia: 'Amaranthaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Resistente, produttiva e facilissima da coltivare. Offre coste carnose e foglie verdi tenere che ricrescono continuamente dopo ogni taglio.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 6, max: 10 },
    giorniRaccolto: { min: 50, max: 70 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 5, 6, 7, 8, 9],
    mesiTrapianto: [4, 5, 8, 9],
    mesiRaccolta: [5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per irrobustire il cespo e ritardare l\'emissione dello scapo fiorifero.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 12,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari mantengono le coste croccanti e prive di amarezza.'
    },
    terreno: 'Fertile, profondo, con buona riserva idrica ma senza ristagni persistenti.',
    consociazioni: {
      amiche: ['Cipolla', 'Fagiolo nano', 'Carota', 'Cavolo'],
      nemiche: ['Spinacio', 'Porro'],
      motivo: 'Le cipolle aiutano a tenere lontani insetti minatori fogliari.'
    },
    cureColturali: [
      'Diradare i glomeruli (ogni seme contiene spesso 2-3 germogli)',
      'Tagliare le foglie esterne a 2-3 cm dal terreno lasciando intatto il cuore per una ricrescita perenne durante l\'anno'
    ],
    avversita: [
      { nome: 'Cercospora (macchie fogliari)', tipo: 'malattia', rimedioBio: 'Rameico leggero o macerato di equiseto.' },
      { nome: 'Afidi neri', tipo: 'parassita', rimedioBio: 'Sapone di Marsiglia o getto d\'acqua mirato.' }
    ],
    proprietaERaccolta: 'Altamente digeribile, ricca di acido folico, magnesio e ferro biodisponibile.',
    curiosita: 'Esistono varietà a coste colorate (rosse, gialle, fucsia) decorative e spettacolari anche nei vasi di casa.'
  },
  {
    id: 'rucola',
    nome: 'Rucola',
    nomeScientifico: 'Eruca vesicaria',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Foglia',
    descrizione: 'Dal gusto pepato e inconfondibile, è una delle piante più veloci da raccogliere dell\'orto. Pronta in meno di un mese dalla semina.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'lime',
    giorniGerminazione: { min: 3, max: 6 },
    giorniRaccolto: { min: 25, max: 40 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 5, 6, 7, 8, 9, 10],
    mesiTrapianto: [3, 4, 9],
    mesiRaccolta: [4, 5, 6, 7, 8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per favorire lo sviluppo delle foglie basali prima della fioritura.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 10,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 10,
      traFileCm: 20,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiature frequenti per mitigare l\'eccessiva piccantezza e mantenere le foglie tenere.'
    },
    terreno: 'Adattabile a qualsiasi terreno, preferibilmente sciolto e ben arieggiato.',
    consociazioni: {
      amiche: ['Pomodoro', 'Lattuga', 'Carota', 'Fragola'],
      nemiche: ['Altri cavoli'],
      motivo: 'Le piante di pomodoro ombreggiano la rucola durante le giornate più torride dell\'estate.'
    },
    cureColturali: [
      'Tagliare a 1-2 cm dal colletto per favorire fino a 3-4 sfalci consecutivi',
      'Cimare prontamente i fiori gialli se si desiderano continuare a raccogliere le foglie'
    ],
    avversita: [
      { nome: 'Altica (bucherella le foglie)', tipo: 'parassita', rimedioBio: 'Mantenere il terreno umido (l\'altica odia l\'umidità) e polvere di roccia.' }
    ],
    proprietaERaccolta: 'Digestiva, ricca di vitamina C e composti solforati dalle comprovate proprietà antiossidanti.',
    curiosita: 'Nell\'antica Roma era considerata un potente afrodisiaco sacro al dio Priapo.'
  },

  // ==================== ORTAGGI DA RADICE E TUBERO ====================
  {
    id: 'carota',
    nome: 'Carota',
    nomeScientifico: 'Daucus carota',
    famiglia: 'Apiaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Croccante, dolce e coloratissima. Richiede un terreno soffice e privo di sassi per sviluppare radici dritte, uniformi e zuccherine.',
    difficolta: 'Media',
    icona: '🥕',
    coloreTema: 'orange',
    giorniGerminazione: { min: 10, max: 20 },
    giorniRaccolto: { min: 70, max: 100 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 4, 5, 6, 7, 8],
    mesiTrapianto: [],
    mesiRaccolta: [5, 6, 7, 8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Fondamentale la luna calante: stimola l\'approfondimento e l\'ingrossamento della radice sotterranea.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 20,
      crescitaMin: 12,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 6,
      traFileCm: 25,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigazioni regolari e costanti; i colpi di secco seguiti da abbondante acqua fanno spaccare la radice.'
    },
    terreno: 'Sabbioso, soffice, lavorato finemente in profondità. I sassi provocano carote biforcute.',
    consociazioni: {
      amiche: ['Cipolla', 'Porro', 'Rosmarino', 'Lattuga', 'Ravanello'],
      nemiche: ['Sedano', 'Finocchio'],
      motivo: 'Consociazione aurea con la cipolla: l\'odore della cipolla respinge la mosca della carota, e quello della carota respinge la mosca della cipolla!'
    },
    cureColturali: [
      'Diradamento indispensabile quando le piantine raggiungono 3-4 cm',
      'Mescolare i finissimi semi con sabbia asciutta durante la semina per distribuirli uniformemente',
      'Rincalzare leggermente la terra alla base per evitare che la sommità della radice diventi verde per la luce'
    ],
    avversita: [
      { nome: 'Mosca della carota (larve nel fittone)', tipo: 'parassita', rimedioBio: 'Consociazione con cipolle o copertura con rete anti-insetto a maglia fine.' }
    ],
    proprietaERaccolta: 'Stupefacente riserva di beta-carotene (precursore della vitamina A), benefico per vista e pelle.',
    curiosita: 'Originariamente le carote erano viola o gialle; l\'arancione fu selezionato in Olanda nel XVII secolo in onore della Casa Reale d\'Orange!'
  },
  {
    id: 'patata',
    nome: 'Patata',
    nomeScientifico: 'Solanum tuberosum',
    famiglia: 'Solanaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Tubero',
    descrizione: 'Il tubero più amato e consumato al mondo. Una coltura soddisfacente che regala abbondanti raccolti sotterranei a fronte di semplici cure colturali.',
    difficolta: 'Facile',
    icona: '🥔',
    coloreTema: 'amber',
    giorniGerminazione: { min: 14, max: 25 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 5],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Seminare i tuberi-seme in luna calante per concentrare l\'energia sotterranea sui nuovi tuberi.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 14,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 70,
      profonditaSeminaCm: 10
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigare durante la fioritura (momento clou di formazione dei tuberi). Sospendere 2 settimane prima del raccolto.'
    },
    terreno: 'Sciolto, fertile, leggero e ben sminuzzato per permettere ai tuberi di espandersi liberamente.',
    consociazioni: {
      amiche: ['Fagiolo', 'Mais', 'Tagete', 'Aglio', 'Cumino'],
      nemiche: ['Pomodoro', 'Melanzana', 'Zucchina', 'Cetriolo'],
      motivo: 'I fagioli respingono la dorifora e arricchiscono il terreno; tenere lontano dai pomodori per via della peronospora comune.'
    },
    cureColturali: [
      'Pre-germogliare i tuberi alla luce circa 3-4 settimane prima della semina',
      'Rincalzatura fondamentale: accumulare terra attorno ai fusti 2 volte durante la crescita per evitare che i tuberi esposti alla luce diventino verdi e tossici',
      'Pacciamatura con paglia'
    ],
    avversita: [
      { nome: 'Dorifora della patata', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis o raccolta manuale precoce di larve e coleotteri arancioni.' },
      { nome: 'Peronospora', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con rame o poltiglia bordolese dopo piogge calde.' }
    ],
    proprietaERaccolta: 'Raccogliere quando la parte aerea della pianta si secca naturalmente. Lasciare asciugare al buio per qualche giorno prima di stoccare.',
    curiosita: 'I fiori della patata sono bellissimi, tanto che Maria Antonietta li indossava come ornamento nei capelli a Versailles!'
  },
  {
    id: 'ravanello',
    nome: 'Ravanello',
    nomeScientifico: 'Raphanus sativus',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Il velocista supremo dell\'orto: dal seme alla tavola in appena 20-30 giorni! Rosso acceso, croccante e gradevolmente piccante.',
    difficolta: 'Facile',
    icona: '🔴',
    coloreTema: 'rose',
    giorniGerminazione: { min: 3, max: 6 },
    giorniRaccolto: { min: 20, max: 35 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    mesiTrapianto: [],
    mesiRaccolta: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per sviluppare una radice tonda e soda ed evitare che indurisca e fili a fiore.',
    temperaturaIdeale: {
      germinazioneMin: 6,
      germinazioneOttimale: 18,
      crescitaMin: 10,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 5,
      traFileCm: 15,
      profonditaSeminaCm: 1
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Acqua frequente: se soffre la sete diventa legnoso, cavo e troppo piccante.'
    },
    terreno: 'Morbido, fresco, senza ristagni.',
    consociazioni: {
      amiche: ['Lattuga', 'Carota', 'Spinacio', 'Piselli', 'Pomodoro'],
      nemiche: ['Cavoli'],
      motivo: 'Ottimo intercalare tra carote e lattughe; cresce e si raccoglie prima che le altre piante abbiano occupato lo spazio.'
    },
    cureColturali: [
      'Semine scalari ogni 10-15 giorni per averne sempre di freschi e teneri',
      'Diradare rapidamente a 5 cm di distanza'
    ],
    avversita: [
      { nome: 'Altica', tipo: 'parassita', rimedioBio: 'Bagnare spesso il terreno per allontanarla.' }
    ],
    proprietaERaccolta: 'Diuretico, purificante del fegato, ricco di vitamina C e zolfo.',
    curiosita: 'Anche le foglie giovani del ravanello sono deliziose in insalata o saltate in padella come gli spinaci!'
  },

  // ==================== ORTAGGI DA BULBO E FUSTO ====================
  {
    id: 'cipolla',
    nome: 'Cipolla (Dorata e Rossa)',
    nomeScientifico: 'Allium cepa',
    famiglia: 'Amaryllidaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Bulbo',
    descrizione: 'Base irrinunciabile della cucina italiana. Dalla dolce rossa di Tropea alle dorate da lungo serbo, ortaggio rustico che protegge l\'intero orto.',
    difficolta: 'Facile',
    icona: '🧅',
    coloreTema: 'amber',
    giorniGerminazione: { min: 10, max: 15 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [1, 2, 8, 9],
    mesiSeminaTerra: [2, 3, 4, 10, 11],
    mesiTrapianto: [3, 4, 10, 11],
    mesiRaccolta: [5, 6, 7, 8],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante imperativa per evitare la prefioritura e stimolare la formazione del bulbo.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 12,
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
      dettagli: 'Irrigare solo quando il terreno è completamente asciutto. Sospendere del tutto 3 settimane prima del raccolto per favorire l\'asciugatura delle tuniche.'
    },
    terreno: 'Leggero, sabbioso o di medio impasto, privo di letame fresco che farebbe marcire i bulbi.',
    consociazioni: {
      amiche: ['Carota', 'Fragola', 'Pomodoro', 'Lattuga', 'Cetriolo'],
      nemiche: ['Fagiolo', 'Pisello', 'Fava'],
      motivo: 'Le allicine della cipolla proteggono le carote; inibisce invece i batteri azotofissatori dei legumi.'
    },
    cureColturali: [
      'Piegare le foglie a terra quando ingialliscono per accelerare la maturazione finale del bulbo',
      'Sarchiatura per tenere il terreno pulito da erbe infestanti concorrenti'
    ],
    avversita: [
      { nome: 'Mosca della cipolla', tipo: 'parassita', rimedioBio: 'Consociazione con carote ed evitare letame fresco.' },
      { nome: 'Peronospora della cipolla', tipo: 'malattia', rimedioBio: 'Poltiglia bordolese e arieggiamento del terreno.' }
    ],
    proprietaERaccolta: 'Antibatterico naturale, ipoglicemizzante, protegge il sistema cardiocircolatorio.',
    curiosita: 'Far piangere tagliando le cipolle è dovuto all\'ossido di tiopropanale, rilasciato quando si rompono le cellule vegetali.'
  },
  {
    id: 'aglio',
    nome: 'Aglio',
    nomeScientifico: 'Allium sativum',
    famiglia: 'Amaryllidaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Bulbo',
    descrizione: 'Il guardiano dell\'orto. Facilissimo da piantare piantando i singoli spicchi in autunno o a fine inverno, produce teste aromatiche e tiene lontani parassiti e funghi.',
    difficolta: 'Facile',
    icona: '🧄',
    coloreTema: 'stone',
    giorniGerminazione: { min: 10, max: 20 },
    giorniRaccolto: { min: 120, max: 180 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [10, 11, 12, 1, 2, 3],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per stimolare l\'emissione delle radici e lo sdoppiamento dei bulbilli sotterranei.',
    temperaturaIdeale: {
      germinazioneMin: 5,
      germinazioneOttimale: 15,
      crescitaMin: 10,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 12,
      traFileCm: 25,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Quasi mai necessaria in autunno/inverno; moderata solo in primavera inoltrata se non piove.'
    },
    terreno: 'Sciolto, ben drenato, senza ristagni idrici che causerebbero marciumi.',
    consociazioni: {
      amiche: ['Pomodoro', 'Fragola', 'Rosa', 'Carota', 'Melanzana'],
      nemiche: ['Fagioli', 'Piselli', 'Cavoli'],
      motivo: 'Le sue secrezioni radicali solforate agiscono come un potente fungicida e repellente naturale per l\'intero orto.'
    },
    cureColturali: [
      'Interrare gli spicchi con la punta rivolta verso l\'alto',
      'Annodare i fusti a inizio estate per concentrare la linfa sul bulbo'
    ],
    avversita: [
      { nome: 'Marciume bianco', tipo: 'malattia', rimedioBio: 'Rotazioni colturali ampie di almeno 4 anni e drenaggio impeccabile.' }
    ],
    proprietaERaccolta: 'Antibiotico naturale per eccellenza, fluidificante sanguigno e disinfettante intestinale.',
    curiosita: 'L\'aglio selvatico cresceva già nel Neolitico e sosteneva i costruttori delle piramidi d\'Egitto per prevenire infezioni.'
  },
  {
    id: 'finocchio',
    nome: 'Finocchio',
    nomeScientifico: 'Foeniculum vulgare var. dulce',
    famiglia: 'Apiaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Bulbo',
    descrizione: 'Dal sapore fresco e aniciato, ortaggio d\'elezione autunnale e invernale. Il suo grumolo bianco e croccante richiede cure attente per non andare a seme.',
    difficolta: 'Media',
    icona: '🤍',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 7, max: 12 },
    giorniRaccolto: { min: 80, max: 110 },
    mesiSeminaSemenzaio: [6, 7],
    mesiSeminaTerra: [6, 7, 8],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [10, 11, 12, 1],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante fondamentale per evitare la prefioritura e ottenere grumoli compatti.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 50,
      profonditaSeminaCm: 1.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari e abbondanti: la siccità porta a grumoli duri, fibrosi e spaccati.'
    },
    terreno: 'Profondo, leggero, ben concimato e privo di ciottoli che deformerebbero il grumolo.',
    consociazioni: {
      amiche: ['Cicoria', 'Lattuga', 'Cetriolo', 'Pisello'],
      nemiche: ['Pomodoro', 'Fagiolo', 'Finocchio selvatico'],
      motivo: 'Il finocchio è un vicino permaloso: rilascia sostanze che inibiscono la crescita di pomodori e fagioli.'
    },
    cureColturali: [
      'Imbianchimento (rincalzatura): accumulare terra attorno al grumolo 2-3 settimane prima della raccolta per mantenerlo bianco, tenero e dolce',
      'Proteggere con tessuto non tessuto dalle forti gelate invernali'
    ],
    avversita: [
      { nome: 'Bruco Macaone (farfalla)', tipo: 'parassita', rimedioBio: 'Splendida farfalla protetta: rimuovere a mano i pochi bruchi senza usare insetticidi.' },
      { nome: 'Marciume del colletto', tipo: 'malattia', rimedioBio: 'Evitare ristagni idrici e non rincalzare con terra fradicia.' }
    ],
    proprietaERaccolta: 'Digestivo per eccellenza, contrasta il gonfiore addominale ed è ricchissimo di potassio e flavonoidi.',
    curiosita: 'Il termine "infinocchiare" deriva dai mercanti di vino medievali che offrivano finocchio per alterare il palato dei compratori mascherando vini andati a male!'
  },

  // ==================== LEGUMI ====================
  {
    id: 'pisello',
    nome: 'Pisello',
    nomeScientifico: 'Pisum sativum',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Uno dei primi doni della primavera. Pianta benefica che grazie ai batteri rizobi fissa azoto atmosferico nel suolo, migliorando l\'orto per le colture successive.',
    difficolta: 'Facile',
    icona: '🟢',
    coloreTema: 'green',
    giorniGerminazione: { min: 7, max: 14 },
    giorniRaccolto: { min: 65, max: 90 },
    mesiSeminaSemenzaio: [1, 2],
    mesiSeminaTerra: [2, 3, 4, 10, 11],
    mesiTrapianto: [2, 3],
    mesiRaccolta: [4, 5, 6],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la rapida salita sui tutori e la fioritura.',
    temperaturaIdeale: {
      germinazioneMin: 7,
      germinazioneOttimale: 18,
      crescitaMin: 10,
      crescitaMax: 20
    },
    distanze: {
      traPianteCm: 10,
      traFileCm: 50,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Irrigare soprattutto all\'inizio della fioritura e durante l\'ingrossamento dei baccelli.'
    },
    terreno: 'Sciolto, ben drenato; non richiede grandi concimazioni azotate.',
    consociazioni: {
      amiche: ['Carota', 'Ravanello', 'Lattuga', 'Cetriolo', 'Spinacio'],
      nemiche: ['Cipolla', 'Aglio', 'Scalogno', 'Porro'],
      motivo: 'Le alliacée inibiscono i noduli azotofissatori radicali del pisello.'
    },
    cureColturali: [
      'Posizionare frasche o reti di supporto appena le piantine raggiungono 10-15 cm per le varietà rampicanti o mezza rama',
      'Rincalzare leggermente alla base delle file'
    ],
    avversita: [
      { nome: 'Tonchio del pisello', tipo: 'parassita', rimedioBio: 'Semine precoci per sfalsare il ciclo vitale dell\'insetto.' },
      { nome: 'Oidio', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio.' }
    ],
    proprietaERaccolta: 'Dolcissimi appena colti. Ricchi di proteine vegetali, acido folico, fibre solubili e magnesio.',
    curiosita: 'Fu proprio studiando i piselli che Gregor Mendel scoprì nell\'Ottocento le leggi fondamentali della genetica!'
  },
  {
    id: 'fagiolo',
    nome: 'Fagiolo e Fagiolino',
    nomeScientifico: 'Phaseolus vulgaris',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Pilastro proteico dell\'orto. Si divide tra fagiolini mangiatutto (cornetti) e fagioli da sgranare (borlotti, cannellini), nani o rampicanti spettacolari.',
    difficolta: 'Facile',
    icona: '🫘',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 55, max: 85 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5, 6, 7],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce la vigorosa crescita vegetativa e la produzione copiosa di baccelli.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: 16,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 60,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiare con costanza senza inzuppare il terreno. La fioritura è il momento di maggior fabbisogno idrico.'
    },
    terreno: 'Fresco, sciolto, non calcareo, ben drenato.',
    consociazioni: {
      amiche: ['Mais', 'Zucchina', 'Patata', 'Pomodoro', 'Santoreggia'],
      nemiche: ['Cipolla', 'Aglio', 'Finocchio'],
      motivo: 'La santoreggia protegge i fagioli dall\'afide nero e ne esalta il sapore in cottura.'
    },
    cureColturali: [
      'Costruire capannelli di canne per le varietà rampicanti',
      'Rincalzare la terra quando le piantine sono alte 15 cm per irrobustire il colletto'
    ],
    avversita: [
      { nome: 'Afide nero del fagiolo', tipo: 'parassita', rimedioBio: 'Sapone molle o macerato d\'ortica.' },
      { nome: 'Ruggine del fagiolo', tipo: 'malattia', rimedioBio: 'Rameici preventivi a basse dosi.' }
    ],
    proprietaERaccolta: 'I fagiolini vanno raccolti giovani prima che il filo indurisca; i fagioli da sgranare quando il baccello è striato e semisecco.',
    curiosita: 'I nativi americani coltivavano la "triade sacra": mais (che fa da tutore), fagiolo (che nutre col nitrogeno) e zucca (che copre il suolo con le foglie).'
  },

  // ==================== FRUTTI DA ORTO E GIARDINO ====================
  {
    id: 'fragola',
    nome: 'Fragola (Rifiorente)',
    nomeScientifico: 'Fragaria × ananassa',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Piccolo frutto',
    descrizione: 'Dolcissima, profumata e irresistibile per grandi e piccini. Le varietà rifiorenti regalano frutti da maggio fino ai primi geli autunnali.',
    difficolta: 'Facile',
    icona: '🍓',
    coloreTema: 'rose',
    giorniGerminazione: { min: 14, max: 28 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [1, 2],
    mesiSeminaTerra: [3, 4],
    mesiTrapianto: [3, 4, 8, 9, 10],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la rapida emissione dei fiori e l\'ingrossamento del falso frutto.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 20,
      crescitaMin: 14,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiare con regolarità senza mai bagnare i frutti e i fiori per prevenire la muffa grigia (Botrite).'
    },
    terreno: 'Sub-acido (pH 5.5 - 6.5), fertile, ricco di sostanza organica e senza ristagni d\'acqua.',
    consociazioni: {
      amiche: ['Aglio', 'Cipolla', 'Spinacio', 'Borragine', 'Lattuga', 'Timo'],
      nemiche: ['Cavoli', 'Patata'],
      motivo: 'L\'aglio piantato vicino alle fragole previene le infezioni fungine da botrite; la borragine attira impollinatori.'
    },
    cureColturali: [
      'Pacciamatura con paglia o telo per tenere i frutti sollevati da terra e puliti',
      'Tagliare gli stoloni (i rami striscianti) se non si desidera moltiplicare la pianta per concentrare l\'energia sulla fruttificazione',
      'Rinnovare le piantine ogni 3 anni'
    ],
    avversita: [
      { nome: 'Muffa grigia (Botrytis cinerea)', tipo: 'malattia', rimedioBio: 'Pacciamare con paglia, areare bene ed erogare propoli o bicarbonato.' },
      { nome: 'Lumache e uccelli', tipo: 'parassita', rimedioBio: 'Reti protettive anti-uccello e trappole ecologiche a birra per le lumache.' }
    ],
    proprietaERaccolta: 'Cogliere a frutto completamente rosso e profumato col picciolo. Ricchissima di vitamina C, polifenoli e iodio.',
    curiosita: 'Botanicamente la fragola non è un frutto ma un ricettacolo floreale ingrossato; i veri frutti sono i minuscoli semini gialli sulla superficie (acheni)!'
  },
  {
    id: 'melone',
    nome: 'Melone',
    nomeScientifico: 'Cucumis melo',
    famiglia: 'Cucurbitaceae',
    categoria: 'frutto',
    sottoCategoria: 'Frutto',
    descrizione: 'Simbolo della dolcezza estiva italiana. Dai meloni retati a quelli lisci cantalupo o gialli d\'inverno, necessita di calore e sole abbondante.',
    difficolta: 'Media',
    icona: '🍈',
    coloreTema: 'amber',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 80, max: 110 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce l\'energia zuccherina e l\'accrescimento volumetrico.',
    temperaturaIdeale: {
      germinazioneMin: 20,
      germinazioneOttimale: 26,
      crescitaMin: 22,
      crescitaMax: 34
    },
    distanze: {
      traPianteCm: 80,
      traFileCm: 120,
      profonditaSeminaCm: 2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Costante nelle prime fasi di crescita; ridurre drasticamente durante la maturazione per concentrare il grado zuccherino (Brix).'
    },
    terreno: 'Argilloso-calcareo o di medio impasto, ben drenato e ricco di potassio e sostanza organica.',
    consociazioni: {
      amiche: ['Mais', 'Ravanello', 'Girasole', 'Insalata'],
      nemiche: ['Cetriolo', 'Zucca'],
      motivo: 'I ravanelli attirano parassiti minori lontano dal melone; il mais offre frangivento naturale.'
    },
    cureColturali: [
      'Cimatura del tralcio principale sopra la quarta foglia per favorire i rami laterali fruttiferi',
      'Posizionare una tavoletta sotto i frutti in accrescimento per evitare contatti umidi'
    ],
    avversita: [
      { nome: 'Oidio', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio o zolfo idrosolubile.' },
      { nome: 'Afidi', tipo: 'parassita', rimedioBio: 'Sapone nero o olio di neem.' }
    ],
    proprietaERaccolta: 'Si riconosce maturo dal profumo intenso sprigionato dal peduncolo e da una lieve crepa circolare attorno all\'attaccatura del ramo.',
    curiosita: 'Il melone cantalupo prende il nome da Cantalupo in Sabina, dove i monaci lo coltivavano per i Papi nei giardini pontifici.'
  },
  {
    id: 'lampone',
    nome: 'Lampone',
    nomeScientifico: 'Rubus idaeus',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Piccolo frutto',
    descrizione: 'Arbusto generoso dei sottoboschi, perfetto per siepi da frutti deliziosi. Le varietà rifiorenti fruttificano generosamente fino all\'autunno.',
    difficolta: 'Facile',
    icona: '🫐',
    coloreTema: 'rose',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 70, max: 90 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la vigorosa emissione dei nuovi polloni radicali.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 12,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 50,
      traFileCm: 150,
      profonditaSeminaCm: 10
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Apparato radicale superficiale: necessita di umidità costante senza ristagni asfittici.'
    },
    terreno: 'Sub-acido (pH 6.0 - 6.5), fresco, ricco di humus di bosco e privo di calcare attivo.',
    consociazioni: {
      amiche: ['Aglio', 'Tansia', 'Menta', 'Mirtilli'],
      nemiche: ['Patata', 'Pomodoro', 'Mora selvatica'],
      motivo: 'L\'aglio piantato alla base allontana i funghi radicali; la menta respinge insetti dannosi.'
    },
    cureColturali: [
      'Palificazione con fili di sostegno orizzontali tesi tra pali a 80 e 130 cm',
      'Potatura: per i rifiorenti tagliare a raso terra i rami secchi a fine inverno',
      'Abbondante pacciamatura con corteccia di pino o foglie secche'
    ],
    avversita: [
      { nome: 'Verme del lampone (Byturus tomentosus)', tipo: 'parassita', rimedioBio: 'Trappole cromotropiche bianche ed estratti di piretro naturale.' }
    ],
    proprietaERaccolta: 'Si stacca facilmente lasciando il ricettacolo bianco attaccato alla pianta. Antinfiammatorio, ricchissimo di acido ellagico e vitamina C.',
    curiosita: 'Le foglie essiccate del lampone sono tradizionalmente usate in erboristeria per infusi benefici per la salute femminile.'
  },
  {
    id: 'mirtillo',
    nome: 'Mirtillo Gigante Americano',
    nomeScientifico: 'Vaccinium corymbosum',
    famiglia: 'Ericaceae',
    categoria: 'frutto',
    sottoCategoria: 'Piccolo frutto',
    descrizione: 'Superfood per antonomasia. Arbusto elegante con magnifiche fioriture bianche e foglie rosse accese in autunno. Esige terreno rigorosamente acido.',
    difficolta: 'Media',
    icona: '🫐',
    coloreTema: 'blue',
    giorniGerminazione: { min: 30, max: 90 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [10, 11, 2, 3, 4],
    mesiRaccolta: [6, 7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la formazione dei grappoli di bacche.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 100,
      traFileCm: 180,
      profonditaSeminaCm: 15
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigare tassativamente con acqua piovana o demineralizzata: l\'acqua del rubinetto calcarea fa morire la pianta per clorosi ferrica.'
    },
    terreno: 'Fortemente acido (pH 4.0 - 5.2), miscelato con torba acida di sfagno, aghi di pino e corteccia.',
    consociazioni: {
      amiche: ['Azalee', 'Rododendri', 'Fragoline di bosco', 'Pino'],
      nemiche: ['Ortaggi a terreno alcalino (cavoli, legumi)'],
      motivo: 'Condivide esigenze pedologiche con le altre piante acidofile e funghi micorrizici specifici.'
    },
    cureColturali: [
      'Coltivazione in grandi vasi se il terreno dell\'orto è calcareo o argilloso',
      'Pacciamatura perenne con aghi di pino per preservare l\'acidità del suolo',
      'Reti protettive anti-merlo durante la maturazione'
    ],
    avversita: [
      { nome: 'Clorosi ferrica (ingiallimento foglie)', tipo: 'malattia', rimedioBio: 'Correggere il pH con zolfo ventilato e somministrare chelato di ferro.' }
    ],
    proprietaERaccolta: 'Campione assoluto di antociani e antiossidanti, protegge microcircolo sanguigno, vista e memoria.',
    curiosita: 'I mirtilli hanno una naturale pruina cerosa bianca sulla buccia che li protegge dai raggi UV e dalla disidratazione: non lavateli prima di conservarli!'
  },

  // ==================== PIANTE AROMATICHE E OFFICINALI ====================
  {
    id: 'basilico',
    nome: 'Basilico Genovese',
    nomeScientifico: 'Ocimum basilicum',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Il profumo dell\'estate mediterranea e l\'anima del pesto. Pianta aromatica dalle foglie bombate e tenerissime, compagna preziosa dei pomodori nell\'orto.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 10 },
    giorniRaccolto: { min: 30, max: 50 },
    mesiSeminaSemenzaio: [2, 3, 4],
    mesiSeminaTerra: [4, 5, 6, 7],
    mesiTrapianto: [4, 5, 6],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il rigoglio vegetativo e lo sviluppo continuativo di nuove foglie profumate.',
    temperaturaIdeale: {
      germinazioneMin: 18,
      germinazioneOttimale: 24,
      crescitaMin: 16,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 20,
      traFileCm: 25,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiare regolarmente al mattino alla base. Non tollera la siccità prolungata ma teme i ristagni che fanno annerire il colletto.'
    },
    terreno: 'Morbido, fertile, drenante, ricco di compost ben maturo.',
    consociazioni: {
      amiche: ['Pomodoro', 'Peperone', 'Melanzana', 'Origano', 'Insalata'],
      nemiche: ['Ruta', 'Rosmarino'],
      motivo: 'Migliora la crescita e il sapore del pomodoro e allontana mosche, zanzare e afidi grazie ai suoi oli essenziali.'
    },
    cureColturali: [
      'Cimatura costante delle infiorescenze apicali: impedire la fioritura prolunga la vita della pianta e mantiene le foglie dolci e non legnose',
      'Raccogliere staccando le cime anziché le singole foglie per stimolare rami doppi'
    ],
    avversita: [
      { nome: 'Peronospora del basilico', tipo: 'malattia', rimedioBio: 'Evitare di bagnare la chioma ed esporre in luogo ben arieggiato.' },
      { nome: 'Lumache', tipo: 'parassita', rimedioBio: 'Barriere ecologiche e trappole a birra.' }
    ],
    proprietaERaccolta: 'Digestivo, antispasmodico e calmante. Consumare fresco a crudo spezzettato con le mani per non ossidarlo.',
    curiosita: 'Il nome deriva dal greco "Basilikon", che significa "pianta reale o degna di un re".'
  },
  {
    id: 'rosmarino',
    nome: 'Rosmarino',
    nomeScientifico: 'Salvia rosmarinus',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Arbusto sempreverde rustico, vigoroso e perenne. Con i suoi aghi resinosi e piccoli fiori azzurro-violacei amati dalle api, profuma arrosti, patate e pane.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'teal',
    giorniGerminazione: { min: 15, max: 25 },
    giorniRaccolto: { min: 60, max: 90 },
    mesiSeminaSemenzaio: [2, 3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [3, 4, 9, 10],
    mesiRaccolta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per favorire la radicazione di talee e la vegetazione legnosa.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 60,
      traFileCm: 80,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Pianta xerofila mediterranea: resiste alla siccità. Annaffiare solo in caso di caldo estremo o in vaso. Teme l\'eccesso d\'acqua.'
    },
    terreno: 'Povero, sassoso, arido, calcareo e perfettamente drenato.',
    consociazioni: {
      amiche: ['Cavolo', 'Carota', 'Fagiolo', 'Salvia'],
      nemiche: ['Basilico', 'Pomodoro'],
      motivo: 'Il suo forte aroma resinoso disorienta la farfalla cavolaia e la mosca della carota.'
    },
    cureColturali: [
      'Potatura di contenimento e pulizia a inizio primavera per stimolare vegetazione fresca',
      'Moltiplicazione facilissima per talea estiva di rametti semilegnosi immersi in acqua o sabbia umida'
    ],
    avversita: [
      { nome: 'Crisomela del rosmarino (coleottero striato)', tipo: 'parassita', rimedioBio: 'Raccolta manuale degli insetti scuotendo i rami su un telo bianco.' },
      { nome: 'Marciume radicale', tipo: 'malattia', rimedioBio: 'Alleggerire il terreno con sabbia e ghiaia.' }
    ],
    proprietaERaccolta: 'Raccoglibile 365 giorni all\'anno! Tonico, digestivo, stimolante cerebrale e potente antiossidante naturale.',
    curiosita: 'Gli studenti dell\'antica Grecia indossavano ghirlande di rosmarino durante gli esami perché si riteneva potenziasse la memoria!'
  },
  {
    id: 'salvia',
    nome: 'Salvia Officinale',
    nomeScientifico: 'Salvia officinalis',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Regina della salute e della cucina. Foglie vellutate verde-argenteo ricche di oli essenziali balsamici, compagne ideali di burro e primi piatti.',
    difficolta: 'Facile',
    icona: '🍃',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 12, max: 20 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [3, 4, 9, 10],
    mesiRaccolta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la vigoria delle foglie e l\'intensità dell\'olio essenziale.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 50,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Acqua moderata solo a terreno completamente asciutto. Teme i ristagni idrici.'
    },
    terreno: 'Asciutto, calcareo, permeabile e ghiaioso.',
    consociazioni: {
      amiche: ['Rosmarino', 'Cavolo', 'Carota', 'Fragola'],
      nemiche: ['Cetriolo', 'Cipolla'],
      motivo: 'Protegge i cavoli dalla cavolaia e le carote dalla mosca grazie al profumo penetrante.'
    },
    cureColturali: [
      'Potare a inizio primavera tagliando i rami vecchi legnosi per ringiovanire il cespuglio',
      'Evitare concimazioni azotate che renderebbero le foglie acquose e meno profumate'
    ],
    avversita: [
      { nome: 'Oidio (mal bianco delle foglie)', tipo: 'malattia', rimedioBio: 'Zolfo o infuso di equiseto.' },
      { nome: 'Sputacchina', tipo: 'parassita', rimedioBio: 'Getti d\'acqua mirati.' }
    ],
    proprietaERaccolta: 'Antisettica, purificante del cavo orale, digestiva e regolatrice ormonale naturale.',
    curiosita: 'Il nome deriva dal latino "salvus" (salute, salvezza). La Scuola Medica Salernitana recitava: "Cur moriatur homo cui Salvia crescit in horto?" (Perché mai dovrebbe morire l\'uomo a cui cresce la salvia nell\'orto?).'
  },
  {
    id: 'timo',
    nome: 'Timo Comune',
    nomeScientifico: 'Thymus vulgaris',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Piccolo arbusto tappezzante tenace e rustico. Ricco di timolo, dalle note aromatiche calde e balsamiche, perfetto per marinature e tisane espettoranti.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'green',
    giorniGerminazione: { min: 14, max: 21 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [3, 4, 9, 10],
    mesiRaccolta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per arricchire il tenore di oli essenziali nella foglia.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 20,
      crescitaMin: 6,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 30,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Resistentissimo alla siccità. Bagnare sporadicamente solo nei periodi più aridi.'
    },
    terreno: 'Povero, drenatissimo, sabbioso o pietroso.',
    consociazioni: {
      amiche: ['Cavoli', 'Melanzana', 'Pomodoro', 'Fragola'],
      nemiche: ['Maggiorana (per competizione)'],
      motivo: 'Repelle afidi, mosche bianche e lumache fungendo da sentinella biologica.'
    },
    cureColturali: [
      'Spuntare le cime dopo la fioritura per mantenere il cespuglietto compatto',
      'Moltiplicare per divisione dei cespi in autunno o primavera'
    ],
    avversita: [
      { nome: 'Marciumi da asfissia radicale', tipo: 'malattia', rimedioBio: 'Garantire drenaggio perfetto con ghiaia.' }
    ],
    proprietaERaccolta: 'Formidabile antibiotico e disinfettante delle vie respiratorie (tosse, raffreddore).',
    curiosita: 'Nell\'antico Egitto il timo era ingrediente fondamentale nell\'imbalsamazione per via delle sue potentissime proprietà antibatteriche e conservative.'
  },
  {
    id: 'menta',
    nome: 'Menta Piperita',
    nomeScientifico: 'Mentha × piperita',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Freschezza esplosiva. Pianta vigorosissima e stolonifera con foglie dal profumo inebriante di mentolo, sovrana di cocktail, sciroppi, dolci e tisane estive.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'teal',
    giorniGerminazione: { min: 10, max: 15 },
    giorniRaccolto: { min: 40, max: 60 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [3, 4, 5, 9, 10],
    mesiRaccolta: [4, 5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il rapido sviluppo delle foglie e dei germogli teneri.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 22,
      crescitaMin: 10,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Ama il terreno fresco e costantemente umido. Non sopporta la siccità.'
    },
    terreno: 'Fertile, ricco di humus, umido ma senza ristagno stagnante.',
    consociazioni: {
      amiche: ['Cavolo', 'Pomodoro', 'Zucchina'],
      nemiche: ['Camomilla', 'Prezzemolo'],
      motivo: 'Mantiene lontani topi, formiche e parassiti con il suo forte aroma di mentolo.'
    },
    cureColturali: [
      'Consigliato coltivarla in vaso o delimitare le radici con una barriera interrata perché è molto invasiva ed espansiva',
      'Falciare a zero a inizio autunno per vederla ricacciare splendida la primavera seguente'
    ],
    avversita: [
      { nome: 'Ruggine della menta (pustole arancioni)', tipo: 'malattia', rimedioBio: 'Tagliare a raso le parti colpite e distruggerle; non bagnare le foglie.' }
    ],
    proprietaERaccolta: 'Digestiva, rinfrescante, analgesica per il mal di testa e decongestionante.',
    curiosita: 'Nella mitologia greca, Myntha era una ninfa amata da Ade; Persefone gelosa la trasformò in un\'erba calpestabile, ma Ade le donò quel profumo delizioso per renderla immortale.'
  },
  {
    id: 'origano',
    nome: 'Origano',
    nomeScientifico: 'Origanum vulgare',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Il sapore della pizza e della tradizione mediterranea. I suoi capolini fioriti essiccati sprigionano un aroma caldo, intenso e inconfondibile.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 10, max: 15 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [6, 7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente prima della piena fioritura per massimizzare la concentrazione di carvacrolo.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 22,
      crescitaMin: 12,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 0.2
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Irrigare solo al bisogno a terreno asciutto; il sole cocente ne aumenta l\'aroma.'
    },
    terreno: 'Arido, calcareo, povero e molto ben drenato.',
    consociazioni: {
      amiche: ['Peperone', 'Pomodoro', 'Melanzana', 'Cetriolo'],
      nemiche: ['Nessuna particolare'],
      motivo: 'Attira una miriade di insetti impollinatori e allontana afidi e parassiti dell\'orto.'
    },
    cureColturali: [
      'Raccogliere i rami a inizio fioritura (luglio-agosto)',
      'Legare in mazzetti a testa in giù all\'ombra e ventilati per l\'essiccazione invernale'
    ],
    avversita: [
      { nome: 'Marciume radicale', tipo: 'malattia', rimedioBio: 'Evitare terreni argillosi e asfittici.' }
    ],
    proprietaERaccolta: 'Antibatterico, antimicotico naturale, digestivo e ricchissimo di antiossidanti.',
    curiosita: 'Il nome deriva dalle parole greche "oros" (montagna) e "ganos" (splendore), ovvero "splendore della montagna".'
  },
  {
    id: 'prezzemolo',
    nome: 'Prezzemolo',
    nomeScientifico: 'Petroselinum crispum',
    famiglia: 'Apiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: '"Come il prezzemolo, sta bene dappertutto!". Pianta biennale rustica che fornisce foglie aromatiche fresche per quasi tutto l\'arco dell\'anno.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'green',
    giorniGerminazione: { min: 15, max: 28 },
    giorniRaccolto: { min: 60, max: 80 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 5, 6, 7, 8],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per favorire la crescita delle radici e ritardare la montata a seme nel secondo anno.',
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
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Mantenere il terreno sempre umido senza ristagni, specialmente durante la lunga germinazione.'
    },
    terreno: 'Fertile, soffice, ricco di sostanza organica e ben sminuzzato.',
    consociazioni: {
      amiche: ['Pomodoro', 'Asparago', 'Mais', 'Rosa'],
      nemiche: ['Lattuga', 'Menta'],
      motivo: 'Protegge i pomodori e le rose stimolandone il profumo e la vigoria generale.'
    },
    cureColturali: [
      'Mettere a bagno i semi in acqua tiepida per 24 ore prima della semina per accelerare la germinazione lenta',
      'Tagliare le foglie esterne lasciando il ciuffo centrale per stimolare nuove emissioni'
    ],
    avversita: [
      { nome: 'Mosca della carota', tipo: 'parassita', rimedioBio: 'Rete anti-insetto o pacciamatura naturale.' }
    ],
    proprietaERaccolta: 'Miniere di vitamina C, ferro e caroteni. Da consumare fresco a fine cottura per non disperdere le vitamine.',
    curiosita: 'Dato che impiega fino a un mese per germogliare, un antico proverbio inglese diceva che il seme deve andare sette volte dal diavolo e tornare indietro prima di spuntare!'
  },
  {
    id: 'lavanda',
    nome: 'Lavanda',
    nomeScientifico: 'Lavandula angustifolia',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Arbusto provenzale dalle spighe viola inebrianti. Magnete instancabile per api e farfalle impollinatrici, allontana tarme e zanzare ed è ottima per tisane e profumatori.',
    difficolta: 'Facile',
    icona: '🪻',
    coloreTema: 'purple',
    giorniGerminazione: { min: 20, max: 30 },
    giorniRaccolto: { min: 90, max: 120 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [3, 4, 9, 10],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente durante l\'emissione delle spighe fiorifere.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 45,
      traFileCm: 60,
      profonditaSeminaCm: 0.3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Pochissima acqua; sopporta siccità prolungate. Teme l\'umidità stagnante.'
    },
    terreno: 'Calcareo, drenato, sassoso e povero.',
    consociazioni: {
      amiche: ['Rose', 'Alberi da frutto', 'Erbe mediterranee'],
      nemiche: ['Piante da umidità elevata'],
      motivo: 'Protegge le rose dagli afidi e attira miriadi di bombi e api all\'orto.'
    },
    cureColturali: [
      'Potatura annuale a fine fioritura spuntando 2-3 cm sopra la parte legnosa per mantenere la forma a cupola'
    ],
    avversita: [
      { nome: 'Marciume da ristagno', tipo: 'malattia', rimedioBio: 'Drenaggio sabbioso.' }
    ],
    proprietaERaccolta: 'Calmante del sistema nervoso, rilassante contro l\'insonnia e antisettica cutanea.',
    curiosita: 'I romani usavano i fiori di lavanda per profumare l\'acqua dei bagni termali (da cui il nome dal verbo "lavare").'
  },
  {
    id: 'anguria',
    nome: 'Anguria / Cocomero',
    nomeScientifico: 'Citrullus lanatus',
    famiglia: 'Cucurbitaceae',
    categoria: 'frutto',
    sottoCategoria: 'Frutto',
    descrizione: 'Il frutto regina delle calde giornate d\'agosto. Polpa zuccherina, dissetante e scarlatta con oltre il 93% d\'acqua.',
    difficolta: 'Media',
    icona: '🍉',
    coloreTema: 'rose',
    giorniGerminazione: { min: 6, max: 10 },
    giorniRaccolto: { min: 85, max: 110 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [5, 6],
    mesiRaccolta: [7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il rigoglio vegetativo e lo sviluppo di frutti voluminosi.',
    temperaturaIdeale: {
      germinazioneMin: 20,
      germinazioneOttimale: 28,
      crescitaMin: 22,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 100,
      traFileCm: 150,
      profonditaSeminaCm: 2.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Abbondante nelle prime fasi di ingrossamento; diminuire fortemente 10 giorni prima della raccolta per non annacquare il sapore dolce.'
    },
    terreno: 'Sciolto, sabbioso o di medio impasto, ricchissimo di sostanza organica e molto caldo.',
    consociazioni: {
      amiche: ['Mais', 'Ravanelli', 'Girasole'],
      nemiche: ['Zucca', 'Cetriolo'],
      motivo: 'I ravanelli proteggono i germogli; il mais funge da barriera frangivento.'
    },
    cureColturali: [
      'Posare paglia pulita sotto il frutto per proteggerlo dall\'umidità del suolo',
      'Cimatura dopo la terza foglia per stimolare ramificazioni fruttifere secondarie'
    ],
    avversita: [
      { nome: 'Oidio', tipo: 'malattia', rimedioBio: 'Bicarbonato di potassio o zolfo.' }
    ],
    proprietaERaccolta: 'Matura quando il cirro (il ricciolo vicino al peduncolo) è completamente secco e percuotendo il frutto produce un suono sordo e cupo.',
    curiosita: 'In Egitto venivano collocate angurie nelle tombe dei faraoni come riserva d\'acqua per il viaggio nell\'oltretomba.'
  },
  {
    id: 'cavolfiore',
    nome: 'Cavolfiore & Broccolo',
    nomeScientifico: 'Brassica oleracea var. botrytis',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Inflorescenza compatta e nutriente protagonista della cucina autunnale e invernale. Esige terreno molto fertile e umidità costante.',
    difficolta: 'Media',
    icona: '🥦',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 5, max: 9 },
    giorniRaccolto: { min: 80, max: 120 },
    mesiSeminaSemenzaio: [5, 6, 7],
    mesiSeminaTerra: [6, 7],
    mesiTrapianto: [7, 8, 9],
    mesiRaccolta: [10, 11, 12, 1, 2, 3],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce la rapida formazione del cespo floreale carnoso.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 10,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 50,
      traFileCm: 70,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari evitando che il terreno si asciughi completamente.'
    },
    terreno: 'Compatto, fertile, ricco di azoto e boro, con buon drenaggio.',
    consociazioni: {
      amiche: ['Salvia', 'Rosmarino', 'Timo', 'Cipolla', 'Sedano'],
      nemiche: ['Fragola', 'Pomodoro', 'Aglio'],
      motivo: 'Le erbe aromatiche profumate disorientano la farfalla cavolaia.'
    },
    cureColturali: [
      'Piegare 1 o 2 foglie interne sopra la testa bianca per proteggerla dall\'ingiallimento dovuto al sole',
      'Rincalzare la terra alla base per sostenere il cespo pesante'
    ],
    avversita: [
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis var. kurstaki.' },
      { nome: 'Ernia del cavolo', tipo: 'malattia', rimedioBio: 'Calcitazione del suolo per alzare il pH ed evitare terreni acidi.' }
    ],
    proprietaERaccolta: 'Preziosissimo per la prevenzione tumorale grazie ai sulforafani e glucosinolati; ricchissimo di vitamina C.',
    curiosita: 'Mark Twain lo definiva con ironia: "Il cavolfiore non è altro che un cavolo che ha frequentato l\'università".'
  },
  {
    id: 'carciofo',
    nome: 'Carciofo',
    nomeScientifico: 'Cynara cardunculus var. scolymus',
    famiglia: 'Asteraceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Frutto',
    descrizione: 'Nobile pianta perenne mediterranea con maestose foglie verde-cenere. Si raccolgono i capolini immaturi, teneri e saporiti.',
    difficolta: 'Media',
    icona: '🪴',
    coloreTema: 'teal',
    giorniGerminazione: { min: 14, max: 21 },
    giorniRaccolto: { min: 180, max: 240 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [],
    mesiTrapianto: [9, 10, 11, 2, 3],
    mesiRaccolta: [2, 3, 4, 5, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce lo sviluppo vegetativo e la salita del fiore.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 22,
      crescitaMin: 12,
      crescitaMax: 25
    },
    distanze: {
      traPianteCm: 80,
      traFileCm: 120,
      profonditaSeminaCm: 5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigare bene a fine estate per la "risvegliatura" (scarducciatura) autunnale.'
    },
    terreno: 'Profondo, fresco, ricco di nutrienti e privo di ristagni che fanno marcire il rizoma.',
    consociazioni: {
      amiche: ['Insalata', 'Cipolla', 'Fave', 'Borragine'],
      nemiche: ['Patata'],
      motivo: 'Le insalate e le fave convivono senza rubare spazio alle radici profonde del carciofo.'
    },
    cureColturali: [
      'Scarducciatura a inizio autunno: rimuovere i germogli basali in eccesso (carducci) lasciandone solo 2-3 per ceppaia',
      'Proteggere i colletti dal gelo invernale con pacciamatura di foglie'
    ],
    avversita: [
      { nome: 'Afidi neri del carciofo', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio tempestivo.' }
    ],
    proprietaERaccolta: 'Straordinario tonico del fegato e coleretico grazie alla cinarina, abbassa il colesterolo ematico.',
    curiosita: 'Se non raccolto, il carciofo sboccia in uno splendido fiore viola elettrico amato da api e insetti utili!'
  },
  {
    id: 'porro',
    nome: 'Porro',
    nomeScientifico: 'Allium ampeloprasum var. porrum',
    famiglia: 'Amaryllidaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Rustico ed elegante ortaggio invernale dal sapore più delicato e dolce della cipolla. Resiste intrepidamente sotto la neve e il ghiaccio.',
    difficolta: 'Facile',
    icona: '🎋',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 10, max: 15 },
    giorniRaccolto: { min: 100, max: 130 },
    mesiSeminaSemenzaio: [2, 3, 4],
    mesiSeminaTerra: [4, 5, 6],
    mesiTrapianto: [5, 6, 7],
    mesiRaccolta: [9, 10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Luna calante per irrobustire il fusto bianco sotterraneo ed evitare fioriture.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 24
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 35,
      profonditaSeminaCm: 10
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Regolare durante la crescita estiva.'
    },
    terreno: 'Fertile, profondo, fresco e ricco di sostanza organica matura.',
    consociazioni: {
      amiche: ['Carota', 'Fragola', 'Sedano', 'Pomodoro'],
      nemiche: ['Fagiolo', 'Pisello'],
      motivo: 'Protezione reciproca con la carota contro i rispettivi parassiti volatili.'
    },
    cureColturali: [
      'Rincalzare più volte la terra lungo il fusto per ottenere una parte bianca lunga, tenera e saporita',
      'Spuntare le radici e le punte delle foglie al momento del trapianto'
    ],
    avversita: [
      { nome: 'Tignola del porro', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis e reti protettive.' }
    ],
    proprietaERaccolta: 'Diuretico, ricco di fibre prebiotiche (inulina) ottime per il microbiota e mineralizzante.',
    curiosita: 'L\'imperatore Nerone ne mangiava quantità enormi ogni giorno perché convinto che migliorasse la voce per i suoi canti!'
  },
  {
    id: 'fava',
    nome: 'Fava',
    nomeScientifico: 'Vicia faba',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Il legume che apre la primavera all\'orto. Tipica la tradizione di consumarla cruda con formaggio pecorino fresco il primo maggio.',
    difficolta: 'Facile',
    icona: '🫛',
    coloreTema: 'green',
    giorniGerminazione: { min: 8, max: 14 },
    giorniRaccolto: { min: 100, max: 160 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [10, 11, 2, 3],
    mesiTrapianto: [],
    mesiRaccolta: [4, 5, 6],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente per stimolare la vigorosa crescita dello stelo eretto.',
    temperaturaIdeale: {
      germinazioneMin: 5,
      germinazioneOttimale: 15,
      crescitaMin: 6,
      crescitaMax: 20
    },
    distanze: {
      traPianteCm: 20,
      traFileCm: 60,
      profonditaSeminaCm: 5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Spesso bastano le piogge invernali e primaverili. Bagnare solo se siccità in fioritura.'
    },
    terreno: 'Argilloso o di medio impasto, tollera bene terreni pesanti e arricchisce la terra di azoto.',
    consociazioni: {
      amiche: ['Lattuga', 'Carciofo', 'Spinacio', 'Patata'],
      nemiche: ['Cipolla', 'Aglio'],
      motivo: 'Migliora la struttura del suolo e nutre le colture affini con azoto radicale.'
    },
    cureColturali: [
      'Cimatura della cima dello stelo (ultimi 10 cm) dopo la fioritura per eliminare i giovani getti amati dall\'afide nero',
      'Rincalzatura iniziale delle file'
    ],
    avversita: [
      { nome: 'Afide nero della fava', tipo: 'parassita', rimedioBio: 'Cimatura tempestiva e sapone molle.' }
    ],
    proprietaERaccolta: 'Ricchissima di L-dopa, ferro, fibre e proteine vegetali nobili.',
    curiosita: 'Pitagora e la sua scuola filosofica proibivano categoricamente il consumo di fave ai discepoli per ragioni mistiche e mediche.'
  },
  {
    id: 'alloro',
    nome: 'Alloro',
    nomeScientifico: 'Laurus nobilis',
    famiglia: 'Lauraceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Arbusto nobile, perenne e sempreverde dalle foglie coriacee e lucide. Indispensabile per brodi, stufati, legumi e arrosti della tradizione.',
    difficolta: 'Facile',
    icona: '🌿',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 30, max: 60 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 9, 10],
    mesiRaccolta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce lo sviluppo vegetativo delle gemme.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 20,
      crescitaMin: 6,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 100,
      traFileCm: 150,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Bagnare solo nei periodi di prolungata siccità estiva. Molto rustico.'
    },
    terreno: 'Qualsiasi terreno purché ben drenato.',
    consociazioni: {
      amiche: ['Alberi da frutto', 'Legumi'],
      nemiche: ['Nessuna'],
      motivo: 'L\'aroma delle foglie tiene lontani parassiti e tarme.'
    },
    cureColturali: [
      'Potature di sagomatura a fine inverno',
      'Le foglie possono essere essiccate all\'ombra per conservare il profumo per anni'
    ],
    avversita: [
      { nome: 'Cocciniglia', tipo: 'parassita', rimedioBio: 'Olio bianco minerale estivo o sapone molle.' }
    ],
    proprietaERaccolta: 'Foglie digestive (tisana alloro e limone), carminative e profumate.',
    curiosita: 'Simbolo di gloria, saggezza e vittoria nell\'antica Roma: con l\'alloro (laurus) si incoronavano poeti e imperatori, da cui deriva la parola "laurea"!'
  },
  {
    id: 'erba_cipollina',
    nome: 'Erba Cipollina',
    nomeScientifico: 'Allium schoenoprasum',
    famiglia: 'Amaryllidaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Perenne rustica e decorativa, con sottili foglie tubolari dal delicato sapore di cipolla fresca e splendidi fiori sferici lilla commestibili.',
    difficolta: 'Facile',
    icona: '🌱',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 8, max: 14 },
    giorniRaccolto: { min: 45, max: 60 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 5],
    mesiTrapianto: [3, 4, 9],
    mesiRaccolta: [4, 5, 6, 7, 8, 9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Luna crescente favorisce il rapido rinnovo delle foglie dopo il taglio.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 25,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Annaffiare con regolarità per evitare che gli steli induriscano e diventino gialli.'
    },
    terreno: 'Fresco, soffice, ben drenato e ricco di sostanza organica.',
    consociazioni: {
      amiche: ['Carote', 'Pomodori', 'Meli', 'Fragole'],
      nemiche: ['Piselli', 'Fagioli'],
      motivo: 'Aiuta a prevenire la ticchiolatura e allontana afidi e acari.'
    },
    cureColturali: [
      'Tagliare con le forbici alla base lasciando 2 cm: ricrescerà continuamente',
      'Anche i fiori lilla sono commestibili e spettacolari nelle insalate estive'
    ],
    avversita: [
      { nome: 'Ruggine', tipo: 'malattia', rimedioBio: 'Taglio rasoterra per indurre nuova vegetazione sana.' }
    ],
    proprietaERaccolta: 'Digestiva, ricca di vitamina C e allicina senza appesantire l\'alito come la cipolla comune.',
    curiosita: 'Nell\'antica Roma veniva appesa a ciuffi nelle case come amuleto di protezione contro il malocchio.'
  }
];

export const PLANTS_DATA: Plant[] = [
  ...BASE_PLANTS_DATA, 
  ...MORE_PLANTS, 
  ...ORCHARD_AND_MORE_PLANTS, 
  ...MORE_PLANTS_EXTENDED,
  ...PLANTS_106_TO_130
];

export const MONTH_NAMES = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
];
