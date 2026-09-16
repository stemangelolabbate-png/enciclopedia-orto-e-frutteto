import { Plant } from '../types';

export const MORE_PLANTS_EXTENDED: Plant[] = [
  // ==================== AGRUMI E ALBERI DA FRUTTO MEDITERRANEI ====================
  {
    id: 'mandarino',
    nome: 'Mandarino e Clementine',
    nomeScientifico: 'Citrus reticulata',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Piccolo agrume profumatissimo dalla chioma compatta e tondeggiante. I frutti, dolci e succosi, maturano tra l\'autunno e l\'inverno portando colore ed energia nel frutteto o in grandi vasi.',
    difficolta: 'Media',
    icona: '🍊',
    coloreTema: 'orange',
    giorniGerminazione: { min: 20, max: 40 },
    giorniRaccolto: { min: 240, max: 300 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 5],
    mesiRaccolta: [11, 12, 1, 2],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora e concimazione organica a luna crescente in primavera.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 24,
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
      dettagli: 'Irrigazioni regolari in primavera ed estate quando il terreno asciuga. In vaso evitare i ristagni nel sottovaso.'
    },
    terreno: 'Terreno sciolto, fertile, leggermente acido o sub-neutro (pH 6-7), ben drenato. Teme il ristagno e il calcare eccessivo.',
    consociazioni: {
      amiche: ['Lavanda', 'Rosmarino', 'Borragine', 'Nasturzio'],
      nemiche: ['Noce', 'Finocchio'],
      motivo: 'Le aromatiche e i fiori attirano api per l\'allegagione e tengono lontani parassiti come afidi e acari.'
    },
    cureColturali: [
      'Concimare ogni primavera con lupini macinati o concime organico per agrumi',
      'Proteggere con tessuto non tessuto (TNT) o riparare in limonaia al Nord in inverno (minima tollerata -2°C)',
      'Potatura leggera a inizio estate per sfoltire i rami interni e togliere i succhioni'
    ],
    avversita: [
      { nome: 'Cocciniglia a mezzo grano di pepe', tipo: 'parassita', rimedioBio: 'Olio bianco minerale bio o macerato di sapone molle di potassio.' },
      { nome: 'Minatrice serpentina degli agrumi', tipo: 'parassita', rimedioBio: 'Olio di neem sulle giovani foglie tenere e trappole a feromoni.' }
    ],
    proprietaERaccolta: 'Frutti ricchi di vitamina C, bromo e acido folico con proprietà distensive e antiossidanti. Raccogliere con cesoie lasciando il peduncolo.',
    curiosita: 'Originario della Cina meridionale, il nome deriverebbe dai funzionari imperiali "Mandarini" che indossavano abiti del medesimo colore arancio brillante.'
  },
  {
    id: 'arancio',
    nome: 'Arancio Dolce',
    nomeScientifico: 'Citrus sinensis',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Regina degli agrumi mediterranei, celebre per la spettacolare fioritura primaverile ("zagara") dal profumo inebriante e per i frutti dorati ricchi di succo.',
    difficolta: 'Media',
    icona: '🍊',
    coloreTema: 'orange',
    giorniGerminazione: { min: 25, max: 45 },
    giorniRaccolto: { min: 240, max: 320 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 5],
    mesiRaccolta: [11, 12, 1, 2, 3],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Impianto e innesto a luna crescente all\'inizio della ripresa vegetativa primaverile.',
    temperaturaIdeale: {
      germinazioneMin: 15,
      germinazioneOttimale: 25,
      crescitaMin: 13,
      crescitaMax: 34
    },
    distanze: {
      traPianteCm: 450,
      traFileCm: 500,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Frequente e costante durante l\'ingrossamento dei frutti in estate. Ridurre in inverno.'
    },
    terreno: 'Profondo, fertile, di medio impasto, con ottimo drenaggio. Sensibile ai suoli argillosi asfittici.',
    consociazioni: {
      amiche: ['Borragine', 'Calendula', 'Salvia', 'Trifoglio nano'],
      nemiche: ['Noce', 'Patata'],
      motivo: 'I fiori da sovescio apportano sostanza organica e attirano insetti utili pronubi.'
    },
    cureColturali: [
      'Apporto di letame maturo e ferro chelato in caso di clorosi ferrica (ingiallimento fogliare)',
      'Rimuovere regolarmente i polloni basali e i rami spezzati o secchi',
      'Nelle regioni settentrionali coltivare in grandi vasi di terracotta e ricoverare al riparo dal gelo'
    ],
    avversita: [
      { nome: 'Afide nero degli agrumi', tipo: 'parassita', rimedioBio: 'Trattamenti tempestivi con sapone molle di potassio e lancio di coccinelle.' },
      { nome: 'Mal secco degli agrumi', tipo: 'malattia', rimedioBio: 'Taglio e bruciatura dei rametti infetti e disinfezione con poltiglia bordolese.' }
    ],
    proprietaERaccolta: 'Polpa dolce e acidula con altissimo contenuto di vitamina C, antiossidanti e bioflavonoidi. Raccogliere a maturazione completa.',
    curiosita: 'I fiori d\'arancio (zagare) sono simbolo storico di purezza e nozze in tutta l\'area del Mediterraneo.'
  },
  {
    id: 'pompelmo',
    nome: 'Pompelmo',
    nomeScientifico: 'Citrus paradisi',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Agrume vigoroso dai grandi frutti globosi a polpa gialla o rosata, dall\'inconfondibile aroma rinfrescante e gradevolmente amarognolo.',
    difficolta: 'Media',
    icona: '🟡',
    coloreTema: 'yellow',
    giorniGerminazione: { min: 25, max: 45 },
    giorniRaccolto: { min: 250, max: 330 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [3, 4, 5],
    mesiRaccolta: [11, 12, 1, 2, 3, 4],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Impianto a luna crescente a primavera inoltrata quando il pericolo di gelate è svanito.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 26,
      crescitaMin: 14,
      crescitaMax: 35
    },
    distanze: {
      traPianteCm: 500,
      traFileCm: 600,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazione estiva a goccia costante, evitando stress idrici che causerebbero la cascola dei frutticini.'
    },
    terreno: 'Fertile, sabbioso-limoso o di medio impasto, profondo e privo di ristagni d\'acqua.',
    consociazioni: {
      amiche: ['Lavanda', 'Rosmarino', 'Borragine', 'Calendula'],
      nemiche: ['Noce', 'Finocchio'],
      motivo: 'Le piante aromatiche proteggono la corteccia e la chioma favorendo la presenza di insetti impollinatori.'
    },
    cureColturali: [
      'Pacciamatura organica sotto la proiezione della chioma con paglia o corteccia per conservare l\'umidità',
      'Concimazioni organiche azotate e potassiche a fine inverno e a metà primavera',
      'Proteggere dai venti freddi invernali con barriere frangivento'
    ],
    avversita: [
      { nome: 'Cocciniglia cotonosa', tipo: 'parassita', rimedioBio: 'Olio bianco vegetale emulsionato con sapone nero.' },
      { nome: 'Ragnetto rosso', tipo: 'parassita', rimedioBio: 'Spruzzi d\'acqua fresca sulla chioma nelle ore serali o macerato di aglio.' }
    ],
    proprietaERaccolta: 'Straordinario drenante e depurativo naturale, ricchissimo di naringina, licopene e vitamina C.',
    curiosita: 'È uno dei pochissimi agrumi che non ha origini asiatiche antiche: nacque per ibridazione spontanea nelle Barbados nel XVIII secolo.'
  },
  {
    id: 'cedro',
    nome: 'Cedro',
    nomeScientifico: 'Citrus medica',
    famiglia: 'Rutaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Uno dei quattro agrumi capostipiti originari da cui derivano quasi tutti gli agrumi coltivati. Produce frutti enormi e bitorzoluti con spessissimo albedo bianco profumato, celebre nella pasticceria e nella cucina tradizionale.',
    difficolta: 'Esperto',
    icona: '🍋',
    coloreTema: 'yellow',
    giorniGerminazione: { min: 25, max: 50 },
    giorniRaccolto: { min: 240, max: 320 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [10, 11, 12, 1],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto in primavera avanzata a luna crescente con suolo caldo.',
    temperaturaIdeale: {
      germinazioneMin: 16,
      germinazioneOttimale: 26,
      crescitaMin: 14,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 350,
      traFileCm: 400,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Irrigazioni regolari ma senza eccessi; l\'apparato radicale è delicato e teme ristagni e siccità prolungata.'
    },
    terreno: 'Substrato sciolto, ricco di humus, pH tra 6.0 e 6.8, perfetto drenaggio con sabbia o perlite.',
    consociazioni: {
      amiche: ['Tagete', 'Calendula', 'Timo'],
      nemiche: ['Noce', 'Patata'],
      motivo: 'Fiori e aromatiche al piede proteggono da nematodi e mantengono attivo l\'ecosistema di superficie.'
    },
    cureColturali: [
      'Molto sensibile al gelo (soffre già a 0°C): indispensabile la coltivazione in vaso al Centro-Nord con riparo invernale',
      'Sostenere i rami carichi con tutori per evitare che il peso dei frutti (fino a 1-2 kg ciascuno) li spezzi',
      'Somministrare ferro e microelementi in primavera'
    ],
    avversita: [
      { nome: 'Cocciniglia fioccosa', tipo: 'parassita', rimedioBio: 'Spazzolatura dei rami con soluzione di alcol denaturato e sapone vegetale molle.' },
      { nome: 'Marciume radicale', tipo: 'malattia', rimedioBio: 'Garantire fori di scolo perfetti ed evitare sottovasi con acqua stagnante.' }
    ],
    proprietaERaccolta: 'La spessa scorza bianca è ricchissima di oli essenziali e pectina. Si consuma candita, in insalata con sale e olio o nei celebri infusi.',
    curiosita: 'In Calabria, la "Riviera dei Cedri" produce il rinomato Cedro Liscio di Diamante, ricercato dalle comunità ebraiche di tutto il mondo per la festa del Sukkot.'
  },
  {
    id: 'kaki',
    nome: 'Cachi / Diospiro',
    nomeScientifico: 'Diospyros kaki',
    famiglia: 'Ebenaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Albero rustico ed elegante, celebre per lo spettacolo autunnale dei suoi frutti arancione vivo che restano appesi ai rami nudi dopo la caduta delle foglie. Dolcezza vellutata e ricchezza zuccherina impareggiabili.',
    difficolta: 'Facile',
    icona: '🍂',
    coloreTema: 'orange',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 210, max: 260 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [10, 11, 12],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Messa a dimora a radice nuda nel riposo vegetativo invernale a luna calante.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 32
    },
    distanze: {
      traPianteCm: 500,
      traFileCm: 600,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Resistente una volta affrancato. Annaffiare nei primi 2-3 anni dall\'impianto e durante estati particolarmente siccitose.'
    },
    terreno: 'Adattabile a quasi tutti i tipi di terreno, preferibilmente profondo e fresco. Evita solo suoli troppo asfittici.',
    consociazioni: {
      amiche: ['Melo', 'Pero', 'Fragole', 'Consolida'],
      nemiche: ['Noce'],
      motivo: 'La consociazione con piccole bacche o piante erbacee crea un sottobosco umido favorevole.'
    },
    cureColturali: [
      'Potatura di formazione nei primi anni per impostare la chioma a vaso o piramide aperta',
      'I frutti delle varietà astringenti vanno fatti ammezzire (maturare) su graticci vicino a mele',
      'Le varietà "Kaki Mela" (es. Fuyu o Hana Fuyu) si mangiano invece sode e croccanti subito dopo la raccolta'
    ],
    avversita: [
      { nome: 'Mosca della frutta (Ceratitis capitata)', tipo: 'parassita', rimedioBio: 'Trappole a cattura massale con attrattivo alimentare (tipo Spintor Fly o trappole artigianali).' },
      { nome: 'Cocciniglia bianca del cachi', tipo: 'parassita', rimedioBio: 'Olio minerale bianco bio a fine inverno sul tronco.' }
    ],
    proprietaERaccolta: 'Una bomba naturale di energia, potassio, carotenoidi e vitamina C. Ideale contro la spossatezza autunnale.',
    curiosita: 'Il nome botanico Diospyros significa in greco antico "cibo degli dei" o "grano di Zeus".'
  },
  {
    id: 'nespolo',
    nome: 'Nespolo Comune e del Giappone',
    nomeScientifico: 'Eriobotrya japonica / Mespilus germanica',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Il Nespolo del Giappone matura già a inizio primavera con grappoli di frutti ovali dorati e succosi, mentre il Nespolo Comune europeo regala nespole invernali che si gustano ammezzite dopo le prime gelate.',
    difficolta: 'Facile',
    icona: '🍈',
    coloreTema: 'amber',
    giorniGerminazione: { min: 25, max: 50 },
    giorniRaccolto: { min: 180, max: 240 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 2, 3],
    mesiRaccolta: [4, 5, 6, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Impianto a fine inverno prima della ripresa a luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 450,
      traFileCm: 500,
      profonditaSeminaCm: 45
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Regolare nel primo anno dopo il trapianto; successivamente necessita solo di annaffiature estive di soccorso.'
    },
    terreno: 'Tollerante e rustico, predilige suoli profondi, ben drenati e leggermente argillosi o di medio impasto.',
    consociazioni: {
      amiche: ['Aromatica da bordura', 'Calendula', 'Lavanda'],
      nemiche: ['Noce'],
      motivo: 'Le piante da fiore alla base proteggono l\'apparato radicale e attirano api nei periodi di fioritura invernale/primaverile.'
    },
    cureColturali: [
      'Diradamento dei frutti in primavera per ottenere pezzature più grandi e gustose',
      'Protezione degli apici fioriferi dalle gelate tardive se si coltiva la varietà giapponese al Nord',
      'Potatura minima di rimonda per eliminare rami secchi o incrociati'
    ],
    avversita: [
      { nome: 'Ticchiolatura del nespolo', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con rame biologico o bicarbonato di potassio alla caduta delle foglie.' },
      { nome: 'Uccelli golosi di frutta', tipo: 'parassita', rimedioBio: 'Reti antinsetto/antiuccello prima della maturazione completa.' }
    ],
    proprietaERaccolta: 'Frutto rinfrescante, diuretico e astringente se acerbo, regolatore intestinale quando ben maturo.',
    curiosita: 'Il proverbio popolare "Con il tempo e con la paglia maturano le nespole" si riferisce all\'antica usanza di conservare le nespole europee nella paglia per farle ammorbidire.'
  },
  {
    id: 'castagno',
    nome: 'Castagno da Frutto',
    nomeScientifico: 'Castanea sativa',
    famiglia: 'Fagaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Il maestoso "albero del pane" delle montagne e colline italiane. Produce ricci colmi di castagne e marroni prelibati, sostentamento secolare delle comunità rurali.',
    difficolta: 'Media',
    icona: '🌰',
    coloreTema: 'amber',
    giorniGerminazione: { min: 40, max: 90 },
    giorniRaccolto: { min: 210, max: 270 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2, 3],
    mesiRaccolta: [9, 10, 11],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Messa a dimora durante il riposo vegetativo invernale a luna calante.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 5,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 800,
      traFileCm: 1000,
      profonditaSeminaCm: 60
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Pianta collinare e montana abituata alle piogge naturali; irrigare solo giovani astoni nei primi mesi siccitosi.'
    },
    terreno: 'Subacido o acido (pH 5.0 - 6.5), profondo, siliceo, permeabile. Teme assolutamente il calcare attivo e i ristagni d\'acqua.',
    consociazioni: {
      amiche: ['Nocciolo', 'Frutti di bosco', 'Mirtillo'],
      nemiche: ['Noce'],
      motivo: 'Condivide lo stesso habitat collinare e le medesime esigenze di suolo tendenzialmente acido.'
    },
    cureColturali: [
      'Pulizia del sottobosco a fine estate per agevolare la raccolta a terra dei ricci caduti',
      'Curafogliare e trattamenti biologici con funghi antagonisti tipo Trichoderma',
      'Curare con mastice cicatrizzante eventuali tagli per scongiurare il cancro corticale'
    ],
    avversita: [
      { nome: 'Cinipide del castagno', tipo: 'parassita', rimedioBio: 'Lancio del parassitoide antagonista Torymus sinensis (lotta biologica guidata).' },
      { nome: 'Cancro corticale del castagno (Cryphonectria)', tipo: 'malattia', rimedioBio: 'Disinfezione accurata degli attrezzi di potatura e ceppi ipovirulenti.' }
    ],
    proprietaERaccolta: 'Farina e frutti ricchissimi di carboidrati complessi, magnesio, potassio e privi di glutine. Ottimi bolliti (ballotte) o arrostiti (caldarroste).',
    curiosita: 'Il "Castagno dei Cento Cavalli" alle pendici dell\'Etna ha oltre 2.000 anni ed è ritenuto l\'albero più antico e voluminoso d\'Europa.'
  },
  {
    id: 'mandorlo',
    nome: 'Mandorlo',
    nomeScientifico: 'Prunus dulcis',
    famiglia: 'Rosaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'Il primo albero a destarsi dall\'inverno: già tra febbraio e marzo si ricopre di una nuvola di fiori candidi o rosati. Produce drupe contenenti mandorle nutrienti e preziose.',
    difficolta: 'Facile',
    icona: '🌸',
    coloreTema: 'rose',
    giorniGerminazione: { min: 30, max: 60 },
    giorniRaccolto: { min: 180, max: 240 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [11, 12, 1, 2],
    mesiRaccolta: [8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Trapianto a luna crescente a inizio inverno prima che le gemme precoci si gonfino.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 22,
      crescitaMin: 8,
      crescitaMax: 34
    },
    distanze: {
      traPianteCm: 500,
      traFileCm: 600,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Estremamente resistente alla siccità grazie al profondo fittone radicale. Gradisce 2-3 annaffiature estive per massimizzare la resa.'
    },
    terreno: 'Asciutto, calcareo, sassoso e ben arieggiato. Teme fortemente l\'umidità stagnante.',
    consociazioni: {
      amiche: ['Fico', 'Olivo', 'Vite', 'Leguminose da sovescio'],
      nemiche: ['Noce'],
      motivo: 'Forma il classico consorzio agrario mediterraneo tradizionale, scambiando benefici microclimatici.'
    },
    cureColturali: [
      'Scegliere varietà a fioritura tardiva (es. Tuono o Genco) se si coltiva in zone soggette a gelate tardive di marzo',
      'Scuotitura dei rami a fine estate con teli stesi a terra per la raccolta',
      'Smallatura immediata dopo la raccolta e asciugatura al sole su graticci'
    ],
    avversita: [
      { nome: 'Bolla e Monilia', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi al bruno a base di rame e decotto di equiseto.' },
      { nome: 'Verme della mandorla (Eurytoma amygdali)', tipo: 'parassita', rimedioBio: 'Raccolta e distruzione delle mandorle mummificate rimaste sui rami.' }
    ],
    proprietaERaccolta: 'Ricche di vitamina E, calcio, grassi insaturi omega-3 e magnesio. Energetiche e protettive per l\'apparato cardiovascolare.',
    curiosita: 'Nella mitologia greca la fioritura del mandorlo è legata alla struggente favola di Fillide e Demofonte, simbolo della primavera che risorge.'
  },
  {
    id: 'pistacchio',
    nome: 'Pistacchio',
    nomeScientifico: 'Pistacia vera',
    famiglia: 'Anacardiaceae',
    categoria: 'frutto',
    sottoCategoria: 'Albero da frutto',
    descrizione: 'L\'oro verde del Mediterraneo: albero dioico e resistentissimo alla siccità e ai terreni vulcanici e pietrosi. Produce grappoli di frutti che a maturità schiudono il guscio rivelando il prezioso seme color smeraldo.',
    difficolta: 'Esperto',
    icona: '🥜',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 30, max: 70 },
    giorniRaccolto: { min: 160, max: 210 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [],
    mesiTrapianto: [12, 1, 2, 3],
    mesiRaccolta: [8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Messa a dimora a fine inverno a luna crescente. Richiede la presenza di esemplari maschi e femmine (1 maschio ogni 6-8 femmine).',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 26,
      crescitaMin: 10,
      crescitaMax: 38
    },
    distanze: {
      traPianteCm: 600,
      traFileCm: 700,
      profonditaSeminaCm: 50
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Pianta xerofila per eccellenza. Non sopporta irrigazioni eccessive; basta l\'umidità del suolo naturale.'
    },
    terreno: 'Calcareo, sabbioso, sassoso o lavico vulcanico, molto permeabile. Non tollera terreni compatti e umidi.',
    consociazioni: {
      amiche: ['Mandorlo', 'Fico d\'India', 'Rosmarino', 'Timo'],
      nemiche: ['Noce', 'Ortaggi esigenti d\'acqua'],
      motivo: 'Adatto a giardini a zero consumo d\'acqua (dry gardening) insieme alla macchia mediterranea.'
    },
    cureColturali: [
      'Assicurarsi della corretta proporzione tra esemplari maschili e femminili per l\'impollinazione anemofila (tramite vento)',
      'La raccolta avviene tradizionalmente ad anni alterni per favorire il recupero energetico della pianta',
      'Asciugare i semi al sole per 3-4 giorni dopo aver rimosso il mallo esterno'
    ],
    avversita: [
      { nome: 'Verticilliosi', tipo: 'malattia', rimedioBio: 'Utilizzo di portinnesti resistenti (es. terebinto o Pistacia atlantica).' },
      { nome: 'Tignola del pistacchio', tipo: 'parassita', rimedioBio: 'Bacillus thuringiensis e trappole a feromoni sessuali.' }
    ],
    proprietaERaccolta: 'I semi sono ricchi di luteina, polifenoli, fosforo e grassi monoinsaturi benefici. Famosi in pasticceria, pesti e gelati.',
    curiosita: 'In Sicilia il Pistacchio di Bronte DOP viene coltivato direttamente sulle sciare laviche dell\'Etna ed è raccolto interamente a mano.'
  },

  // ==================== LEGUMI ANTICHI E ORTAGGI DA RADICE/FUSTO ====================
  {
    id: 'cicerchia',
    nome: 'Cicerchia Antica',
    nomeScientifico: 'Lathyrus sativus',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Antichissimo legume rustico coltivato già nell\'antica Roma e riscoperto come presidio di biodiversità contadina. Resiste a climi aridi e terreni poveri producendo semi quadrangolari gustosissimi.',
    difficolta: 'Facile',
    icona: '🥣',
    coloreTema: 'amber',
    giorniGerminazione: { min: 8, max: 15 },
    giorniRaccolto: { min: 110, max: 140 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [2, 3, 4],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente in primavera quando il suolo inizia a riscaldarsi.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 10,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 25,
      traFileCm: 45,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Praticamente autosufficiente: bagnare solo in caso di grave siccità durante la fioritura.'
    },
    terreno: 'Povero, ghiaioso, sassoso o argilloso; non richiede alcuna concimazione preventiva.',
    consociazioni: {
      amiche: ['Grano', 'Orzo', 'Mais', 'Rosmarino'],
      nemiche: ['Aglio', 'Cipolla'],
      motivo: 'Le alliacée inibiscono i noduli radicali di azoto-fissazione tipici delle leguminose.'
    },
    cureColturali: [
      'Sarchiatura iniziale per controllare le erbe spontanee fino alla copertura della fila',
      'Non richiede sostegni né concimi azotati',
      'Raccolta estirpando le piante al mattino presto per evitare che i baccelli si aprano disperdendo i semi'
    ],
    avversita: [
      { nome: 'Tonchio dei legumi', tipo: 'parassita', rimedioBio: 'Conservare i semi ben secchi in vasetti chiusi con foglie d\'alloro o pepe in grani.' },
      { nome: 'Oidio (Mal bianco)', tipo: 'malattia', rimedioBio: 'Trattamenti preventivi con zolfo bagnabile o bicarbonato di potassio.' }
    ],
    proprietaERaccolta: 'Proteica e saporita, dal sapore che richiama sia il cece che la fava. Richiede un ammollo di 12-24 ore prima della cottura in zuppe.',
    curiosita: 'In Umbria e nelle Marche è protagonista di sagre tradizionali; la Cicerchia di Serra de\' Conti è un celebre presidio Slow Food.'
  },
  {
    id: 'lupino',
    nome: 'Lupino Bianco',
    nomeScientifico: 'Lupinus albus',
    famiglia: 'Fabaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Legume',
    descrizione: 'Leguminosa tradizionale dai bellissimi fiori a spiga candidi e dai semi tondeggianti dorati. Oltre a fornire uno snack proteico classico, è formidabile per rigenerare e concimare naturalmente i suoli orticoli.',
    difficolta: 'Facile',
    icona: '🟡',
    coloreTema: 'yellow',
    giorniGerminazione: { min: 7, max: 14 },
    giorniRaccolto: { min: 120, max: 150 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 10],
    mesiTrapianto: [],
    mesiRaccolta: [6, 7, 8],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente. Nelle regioni calde si può seminare anche a inizio autunno.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 8,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 20,
      traFileCm: 40,
      profonditaSeminaCm: 3
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Bassa esigenza idrica. Annaffiare solo se non piove per lunghi periodi in fioritura.'
    },
    terreno: 'Terreno acido o subacido, sciolto e sabbioso. Non ama terreni fortemente calcarei.',
    consociazioni: {
      amiche: ['Agrumi', 'Pomodori', 'Zucchine', 'Fragole'],
      nemiche: ['Cipolle', 'Aglio'],
      motivo: 'I lupini macinati sono il miglior concime organico azotato a lenta cessione per agrumi e piante acidofile.'
    },
    cureColturali: [
      'Ottimo da seminare come sovescio miglioratore della struttura del terreno',
      'I semi prima del consumo alimentare richiedono bollitura e salamoia prolungata per eliminare i principi amari',
      'Sarchiatura tra le file nelle prime settimane'
    ],
    avversita: [
      { nome: 'Antracnosi del lupino', tipo: 'malattia', rimedioBio: 'Utilizzare semente sana e certificata ed evitare densità eccessive.' },
      { nome: 'Afidi neri', tipo: 'parassita', rimedioBio: 'Macerato d\'ortica o sapone molle di potassio.' }
    ],
    proprietaERaccolta: 'Uno dei vegetali a più alto tenore proteico in natura (oltre il 35-40%), ricco di fibre e ferro. Ottimo spuntino tradizionale in salamoia.',
    curiosita: 'I marinai romani portavano sempre sacche di lupini durante le lunghe navigazioni per la loro incredibile conservabilità ed energia.'
  },
  {
    id: 'rabarbaro',
    nome: 'Rabarbaro da Orto',
    nomeScientifico: 'Rheum rhabarbarum',
    famiglia: 'Polygonaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Fusto',
    descrizione: 'Spettacolare pianta perenne dai grandi piccioli carnosi di colore rosso rubino e verde brillante. Il sapore fresco e acidulo è amatissimo per confetture, crostate, sciroppi e digestivi.',
    difficolta: 'Media',
    icona: '🌿',
    coloreTema: 'rose',
    giorniGerminazione: { min: 14, max: 25 },
    giorniRaccolto: { min: 120, max: 180 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4],
    mesiTrapianto: [4, 5, 10],
    mesiRaccolta: [4, 5, 6, 7],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina e divisione dei rizomi a luna crescente.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 6,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 80,
      traFileCm: 100,
      profonditaSeminaCm: 2
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Ama l\'umidità costante al piede, soprattutto in estate. Non lasciare mai asciugare completamente il terreno.'
    },
    terreno: 'Profondo, molto ricco di sostanza organica e humus, fresco e ben drenato. pH ideale 6.0 - 6.8.',
    consociazioni: {
      amiche: ['Cavoli', 'Fagiolini', 'Cipolle', 'Aglio'],
      nemiche: ['Finocchio', 'Cetriolo'],
      motivo: 'Le foglie enormi ombreggiano il suolo mantenendo l\'umidità preziosa per i vicini a radice superficiale.'
    },
    cureColturali: [
      'Attenzione: si consumano SOLO i gambi (fusti); le lamine fogliari verdi contengono acido ossalico e non vanno mangiate',
      'Nel primo anno non raccogliere per permettere alla pianta di irrobustire il rizoma sotterraneo',
      'Raccogliere i gambi staccandoli con una torsione alla base anziché tagliarli con la lama per evitare marciumi'
    ],
    avversita: [
      { nome: 'Lumache e chiocciole', tipo: 'parassita', rimedioBio: 'Barriere di cenere di legna, farina di roccia o trappole alla birra.' },
      { nome: 'Marciume del colletto (Phytophthora)', tipo: 'malattia', rimedioBio: 'Migliorare il drenaggio ed evitare ristagni vicino alla corona radicale.' }
    ],
    proprietaERaccolta: 'Digestivo, ricco di polifenoli, calcio e vitamina K. Si prepara cotto con zucchero in marmellate e composte deliziose.',
    curiosita: 'Originario delle steppe asiatiche, il rabarbaro veniva trasportato lungo la Via della Seta ed era pagato a peso d\'oro nelle farmacie del Rinascimento.'
  },
  {
    id: 'rafano',
    nome: 'Rafano / Barbaforte / Cren',
    nomeScientifico: 'Armoracia rusticana',
    famiglia: 'Brassicaceae',
    categoria: 'ortaggio',
    sottoCategoria: 'Radice',
    descrizione: 'Rustica pianta perenne la cui radice bianca e carnosa è celebre per il suo sapore piccante, pungente e balsamico che stuzzica il palato. Ingrediente cardine della salsa cren tradizionale.',
    difficolta: 'Facile',
    icona: '🥢',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 14, max: 25 },
    giorniRaccolto: { min: 150, max: 200 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 10],
    mesiTrapianto: [3, 4],
    mesiRaccolta: [10, 11, 12, 1, 2],
    faseLunare: 'Calante',
    faseLunareDettaglio: 'Impianto delle radici-fittoni a luna calante per stimolare lo sviluppo sotterraneo.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 4,
      crescitaMax: 26
    },
    distanze: {
      traPianteCm: 40,
      traFileCm: 60,
      profonditaSeminaCm: 8
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Moderata e regolare per garantire radici succulente e non legnose o eccessivamente amare.'
    },
    terreno: 'Sciolto, profondo, fresco, sabbioso o franco. Terreni troppo compatti provocano biforcazioni delle radici.',
    consociazioni: {
      amiche: ['Patata', 'Melo', 'Fragole'],
      nemiche: ['Cavoli', 'Ravanelli'],
      motivo: 'Le sostanze solforate secrete dalle radici del rafano tengono lontana la dorifora della patata e i parassiti fungini del melo.'
    },
    cureColturali: [
      'Pianta vigorosa che tende a inselvatichire: delimitare l\'area con bordure o coltivare in fioriere profonde',
      'La raccolta migliore avviene in tardo autunno dopo le prime gelate, quando la radice concentra gli zuccheri e gli aromi',
      'Grattugiare al momento in ambienti ben ventilati perché i vapori sinigrinici fanno lacrimare'
    ],
    avversita: [
      { nome: 'Altica delle crocifere', tipo: 'parassita', rimedioBio: 'Mantenere il suolo costantemente umido e spolverare con polvere di roccia (zeolite o caolino).' },
      { nome: 'Cavolaia', tipo: 'parassita', rimedioBio: 'Raccolta manuale dei bruchi e applicazione di Bacillus thuringiensis.' }
    ],
    proprietaERaccolta: 'Potentissimo antibatterico, digestivo e decongestionante naturale delle vie respiratorie grazie agli isotiocianati.',
    curiosita: 'In Basilicata è l\'ingrediente protagonista della tradizionale "Rafanata", una gustosa frittata rustica tipica del periodo di Carnevale.'
  },

  // ==================== AROMATICHE E OFFICINALI NOBILI ====================
  {
    id: 'dragoncello',
    nome: 'Dragoncello / Estragone',
    nomeScientifico: 'Artemisia dracunculus',
    famiglia: 'Asteraceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Erba aromatica aristocratica dal profumo dolce e speziato, con note delicate di anice, menta e sedano. Pilastro dell\'alta cucina europea e ingrediente segreto della salsa bernese.',
    difficolta: 'Media',
    icona: '🌿',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 10, max: 20 },
    giorniRaccolto: { min: 60, max: 90 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [5, 6, 7, 8, 9, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente; preferibile la propagazione per talea o divisione del cespo del dragoncello francese.',
    temperaturaIdeale: {
      germinazioneMin: 14,
      germinazioneOttimale: 22,
      crescitaMin: 10,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 35,
      traFileCm: 45,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Bagnare quando il terriccio è asciutto in superficie, evitando assolutamente i ristagni d\'acqua alle radici.'
    },
    terreno: 'Fertile, fresco, leggero e ben drenato. Non gradisce terreni troppo argillosi o asfittici.',
    consociazioni: {
      amiche: ['Pomodoro', 'Melanzana', 'Cetriolo', 'Peperone'],
      nemiche: ['Salvia', 'Ruta'],
      motivo: 'L\'aroma pungente tiene lontani insetti dannosi e favorisce la vigoria delle solanacee vicine.'
    },
    cureColturali: [
      'Cimare le cime per stimolare una crescita cespugliosa fitta e vigorosa',
      'Proteggere il cespo in inverno con uno strato di foglie secche o paglia nelle zone a gelo intenso',
      'Utilizzare preferibilmente foglie fresche tritate per non disperdere gli oli essenziali volatili'
    ],
    avversita: [
      { nome: 'Ruggine del dragoncello', tipo: 'malattia', rimedioBio: 'Decotto di equiseto preventivo e diradamento dei fusti per favorire l\'aerazione.' },
      { nome: 'Afidi verdi', tipo: 'parassita', rimedioBio: 'Sapone molle di potassio e getti d\'acqua mirati.' }
    ],
    proprietaERaccolta: 'Digestivo, stimolante dell\'appetito e carminativo. Esalta carni bianche, uova, pesci, sottaceti e burri aromatizzati.',
    curiosita: 'Il nome "dracunculus" deriva dal latino e significa "piccolo drago", sia per la forma arricciata delle sue radici sia perché si credeva curasse i morsi di serpente.'
  },
  {
    id: 'cerfoglio',
    nome: 'Cerfoglio',
    nomeScientifico: 'Anthriscus cerefolium',
    famiglia: 'Apiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Erba aromatica delicatissima dalle foglie frastagliate e smeraldine, che ricordano il prezzemolo ma con un aroma soave e raffinato di anice. Regina delle erbe fini da primavera e autunno.',
    difficolta: 'Facile',
    icona: '☘️',
    coloreTema: 'emerald',
    giorniGerminazione: { min: 8, max: 15 },
    giorniRaccolto: { min: 45, max: 60 },
    mesiSeminaSemenzaio: [],
    mesiSeminaTerra: [3, 4, 8, 9],
    mesiTrapianto: [],
    mesiRaccolta: [4, 5, 6, 9, 10, 11],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina scalare a luna crescente in primavera e a fine estate.',
    temperaturaIdeale: {
      germinazioneMin: 8,
      germinazioneOttimale: 18,
      crescitaMin: 6,
      crescitaMax: 22
    },
    distanze: {
      traPianteCm: 15,
      traFileCm: 25,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Mezz\'ombra',
    irrigazione: {
      livello: 'Costante',
      dettagli: 'Mantenere il terreno costantemente fresco. Se soffre la sete o il caldo eccessivo va subito a seme.'
    },
    terreno: 'Morbido, umifero, ben lavorato e fresco. Ottimo anche in vaso sul davanzale esposto a nord o est.',
    consociazioni: {
      amiche: ['Lattuga', 'Ravanello', 'Carote', 'Pomodori'],
      nemiche: ['Finocchio'],
      motivo: 'Allontana le lumache e afidi dagli ortaggi a foglia vicini migliorandone la tenerezza.'
    },
    cureColturali: [
      'Seminare a spaglio o a file strette all\'ombra di piante più alte durante i mesi caldi',
      'Raccogliere tagliando gli steli esterni lasciando intatto il cuore per favorire nuovi germogli',
      'Aggiungere sempre a crudo a fine cottura per preservare le vitamine e la fragranza anisata'
    ],
    avversita: [
      { nome: 'Mosca della carota', tipo: 'parassita', rimedioBio: 'Consociazione con agliacee e barriere tessute anti-insetto.' },
      { nome: 'Oidio estivo', tipo: 'malattia', rimedioBio: 'Bicarbonato di sodio e posizionamento al riparo dal sole cocente.' }
    ],
    proprietaERaccolta: 'Diuretico, ricco di ferro, calcio e vitamina C. Ideale in omelette, vellutate di verdura, insalate e salse fredde.',
    curiosita: 'Nel Medioevo veniva consumato durante il digiuno pasquale come erba purificatrice del sangue dopo i rigori invernali.'
  },
  {
    id: 'issopo',
    nome: 'Issopo Officinale',
    nomeScientifico: 'Hyssopus officinalis',
    famiglia: 'Lamiaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Piccolo arbusto perenne aromatico dai bellissimi fiori blu-violacei fittissimi, amatissimo dalle api e dai bombi. Foglie e fiori hanno un profumo caldo, balsamico e speziato tra la menta e il timo.',
    difficolta: 'Facile',
    icona: '🫐',
    coloreTema: 'blue',
    giorniGerminazione: { min: 10, max: 20 },
    giorniRaccolto: { min: 70, max: 100 },
    mesiSeminaSemenzaio: [3, 4],
    mesiSeminaTerra: [4, 5],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [5, 6, 7, 8, 9],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina primaverile a luna crescente per incentivare una fioritura copiosa.',
    temperaturaIdeale: {
      germinazioneMin: 12,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 30
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 0.5
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Bassa',
      dettagli: 'Poco esigente; tollera siccità e sole forte. Bagnare solo durante le ondate di calore estivo.'
    },
    terreno: 'Asciutto, calcareo, sassoso, permeabile. Teme l\'eccesso d\'umidità e i ristagni invernali.',
    consociazioni: {
      amiche: ['Cavoli', 'Vite', 'Lavanda', 'Rosmarino'],
      nemiche: ['Ravanelli'],
      motivo: 'È una delle piante compagne più prodigiose dell\'orto: attira orde di impollinatori e scaccia la cavolaia dai cavoli.'
    },
    cureColturali: [
      'Potare energicamente a fine inverno a 10-15 cm da terra per ringiovanire il cespuglio',
      'Raccogliere le sommità fiorite ed essiccarle all\'ombra per tisane invernali balsamiche',
      'Splendida bordura rustica per delimitare le aiuole dell\'orto o i vialetti'
    ],
    avversita: [
      { nome: 'Marciume radicale da ristagno', tipo: 'malattia', rimedioBio: 'Coltivare su aiuole rialzate o aggiungere ghiaietto al fondo di semina.' },
      { nome: 'Cavallette e bruchi', tipo: 'parassita', rimedioBio: 'Rara suscettibilità grazie agli oli essenziali repellenti.' }
    ],
    proprietaERaccolta: 'Balsamico, espettorante e tonico gastrico. Le foglie insaporiscono carni in umido, legumi, formaggi freschi e liquori digestivi.',
    curiosita: 'Citato più volte nella Bibbia come pianta purificatrice degli altari e dei templi, è uno degli ingredienti botanici base del celebre liquore Chartreuse.'
  },
  {
    id: 'borragine',
    nome: 'Borragine',
    nomeScientifico: 'Borago officinalis',
    famiglia: 'Boraginaceae',
    categoria: 'aromatica',
    sottoCategoria: 'Erba aromatica',
    descrizione: 'Inconfondibile pianta rustica dai meravigliosi fiori a stella di un blu cobalto intenso e dalle foglie vellutate dal gusto fresco che ricorda il cetriolo. Fiori e cime tenere sono prelibati in cucina ed eccezionali per le api.',
    difficolta: 'Facile',
    icona: '💠',
    coloreTema: 'blue',
    giorniGerminazione: { min: 7, max: 14 },
    giorniRaccolto: { min: 45, max: 65 },
    mesiSeminaSemenzaio: [2, 3],
    mesiSeminaTerra: [3, 4, 5, 9],
    mesiTrapianto: [4, 5],
    mesiRaccolta: [4, 5, 6, 7, 8, 10],
    faseLunare: 'Crescente',
    faseLunareDettaglio: 'Semina a luna crescente; una volta introdotta nell\'orto si risemina spontaneamente ogni anno.',
    temperaturaIdeale: {
      germinazioneMin: 10,
      germinazioneOttimale: 20,
      crescitaMin: 8,
      crescitaMax: 28
    },
    distanze: {
      traPianteCm: 30,
      traFileCm: 40,
      profonditaSeminaCm: 1
    },
    esposizione: 'Pieno sole',
    irrigazione: {
      livello: 'Moderata',
      dettagli: 'Regolare senza eccessi per mantenere tenere le foglie. Resiste bene anche a brevi periodi asciutti.'
    },
    terreno: 'Qualsiasi terreno d\'orto, purché sciolto e privo di ristagni. Cresce rigogliosa anche nei terreni incolti.',
    consociazioni: {
      amiche: ['Fragole', 'Pomodori', 'Zucchine', 'Alberi da frutto'],
      nemiche: [],
      motivo: 'Migliora il sapore e la resa delle fragole vicine, apporta potassio al terreno e attira instancabilmente api e sirfidi.'
    },
    cureColturali: [
      'Raccogliere i fiori a stella per decorare insalate, risotti e cubetti di ghiaccio aromatici',
      'Le foglie tenere vanno lessate per frittate, ripieni di ravioli liguri e pansoti, torte pasqualine',
      'Lasciare andare a seme qualche fiore a fine stagione per avere nuove piantine spontanee a costo zero l\'anno successivo'
    ],
    avversita: [
      { nome: 'Oidio (Mal bianco tardivo)', tipo: 'malattia', rimedioBio: 'Bicarbonato di sodio o latte diluito al 10% sulle foglie.' },
      { nome: 'Lumache sulle giovani piantine', tipo: 'parassita', rimedioBio: 'Cenere attorno al colletto e trappole con birra.' }
    ],
    proprietaERaccolta: 'Depurativa, emolliente e ricca di acido gamma-linolenico (GLA), omega-6 e antiossidanti preziosi.',
    curiosita: 'I Celti e i Romani aggiungevano i fiori di borragine al vino prima delle battaglie perché ritenevano donasse coraggio e scacciasse la tristezza.'
  }
];
