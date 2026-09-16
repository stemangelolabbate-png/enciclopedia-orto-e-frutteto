import { PestDisease } from '../types';

export const DISEASES_DATA: PestDisease[] = [
  // ==================== FUNGHI E MALATTIE CRITTOGAMICHE ====================
  {
    id: 'peronospora',
    nome: 'Peronospora',
    nomeScientifico: 'Phytophthora infestans / Plasmopara',
    tipo: 'malattia',
    categoria: 'Fungo / Muffa',
    icona: '🍂',
    pianteColpiteIds: ['pomodoro', 'patata', 'melanzana', 'peperone', 'vite'],
    pianteColpiteNomi: ['Pomodoro', 'Patata', 'Melanzana', 'Peperone'],
    descrizione: 'La più temuta malattia fungina delle Solanacee e dell\'orto estivo. Si diffonde con rapidità fulminea in presenza di piogge persistenti e umidità elevata, distruggendo foglie, fusti e frutti.',
    sintomi: [
      'Sulla pagina superiore delle foglie compaiono chiazze traslucide giallastre dette "a macchia d\'olio".',
      'Sulla pagina inferiore della foglia in corrispondenza delle macchie appare una muffa grigio-biancastra feltrata.',
      'Le foglie necrotizzano rapidamente, accartocciandosi come bruciate dal fuoco.',
      'I frutti del pomodoro sviluppano chiazze brune dure, rugose e depresse che impediscono la maturazione e causano marciume.'
    ],
    condizioniFavorevoli: 'Umidità relativa superiore al 90%, presenza di bagnatura fogliare per oltre 6 ore consecutive e temperature comprese tra 18°C e 24°C (tipiche piogge primaverili-estive).',
    prevenzione: [
      'Mai bagnare le foglie durante l\'irrigazione: bagnare esclusivamente la terra alla base della pianta.',
      'Rispettare ampie distanze d\'impianto (almeno 50-70 cm) per permettere al vento di arieggiare la chioma.',
      'Sfemminellare e diradare le foglie basali a contatto col suolo umido.',
      'Pacciamare con paglia asciutta per evitare che gli schizzi di pioggia rimbalzino dal terreno infetto sulle foglie basse.',
      'Rispettare rotazioni colturali di almeno 3-4 anni per le Solanacee.'
    ],
    rimediBio: [
      {
        titolo: 'Trattamento Preventivo con Rame / Poltiglia Bordolese',
        ingredientiEDosi: 'Poltiglia bordolese o Idrossido di rame: 4-5 grammi per litro d\'acqua.',
        istruzioniUso: 'Applicare preventivamente prima di piogge prolungate o subito dopo una grandinata. Il rame agisce solo per contatto preventivo bloccando la germinazione delle spore.',
        frequenza: 'Ogni 10-14 giorni in periodi critici piovosi (rispettare 3 giorni di carenza prima della raccolta).'
      },
      {
        titolo: 'Decotto di Equiseto (Coda Cavallina) Ricco di Silicio',
        ingredientiEDosi: '100g di pianta fresca (o 20g essiccata) bollita per 30 minuti in 1 litro d\'acqua, poi diluito 1:5 con acqua.',
        istruzioniUso: 'Nebulizzare finemente su tutta la chioma. L\'acido silicico irrobustisce la cuticola cellulare della foglia rendendola impenetrabile alle ife fungine.',
        frequenza: 'Una volta alla settimana durante la crescita vegetativa.'
      },
      {
        titolo: 'Bicarbonato di Sodio o di Potassio',
        ingredientiEDosi: '5 grammi di bicarbonato per litro d\'acqua con 5 ml di sapone molle di potassio come bagnante.',
        istruzioniUso: 'Alza il pH sulla superficie fogliare rendendo l\'ambiente inospitale per il fungo.',
        frequenza: 'Subito ai primi sintomi isolati.'
      }
    ]
  },
  {
    id: 'oidio',
    nome: 'Oidio (Mal Bianco)',
    nomeScientifico: 'Erysiphales / Podosphaera',
    tipo: 'malattia',
    categoria: 'Fungo / Muffa',
    icona: '⚪',
    pianteColpiteIds: ['zucchina', 'zucca', 'cetriolo', 'melone', 'pomodoro', 'peperoncino', 'salvia', 'fragola'],
    pianteColpiteNomi: ['Zucchina', 'Zucca', 'Cetriolo', 'Melone', 'Salvia', 'Fragola'],
    descrizione: 'Malattia fungina detta volgarmente "nebbia" o "mal bianco". A differenza della peronospora, prospera anche in climi caldi e con bassa umidità se l\'aria è stagnante.',
    sintomi: [
      'Comparsa di una polvere bianca o grigio-chiara opaca, simile a farina o borotalco, sulla superficie delle foglie.',
      'Le foglie colpite ingialliscono, si deformano a coppa e seccano precocemente.',
      'I frutti rimangono nani, scottati dal sole a causa della defogliazione e perdono sapore e zuccheri.'
    ],
    condizioniFavorevoli: 'Clima caldo-asciutto (22°C - 30°C) con notti umide e scarsa circolazione d\'aria tra le piante.',
    prevenzione: [
      'Garantire pieno sole e ampie distanze tra i cespi di cucurbitacee (almeno 80-100 cm).',
      'Asportare tempestivamente le vecchie foglie inferiori ingiallite colpite con cesoie disinfettate.',
      'Evitare concimazioni con azoto in eccesso, che provocano tessuti teneri e facilmente attaccabili.'
    ],
    rimediBio: [
      {
        titolo: 'Bicarbonato di Potassio (Il rimedio bio n.1)',
        ingredientiEDosi: '5g di bicarbonato di potassio (o comune bicarbonato di sodio) per litro d\'acqua.',
        istruzioniUso: 'Nebulizzare la sera sopra e sotto le foglie. L\'alcalinità brucia il micelio fungino in poche ore.',
        frequenza: 'Ogni 7 giorni ai primi puntini bianchi.'
      },
      {
        titolo: 'Zolfo Bagnabile Biologico',
        ingredientiEDosi: '2-4g di zolfo ventilato o bagnabile per litro d\'acqua.',
        istruzioniUso: 'Trattamento classico preventivo e curativo. Attenzione: non trattare a temperature superiori a 28-30°C per evitare fitotossicità.',
        frequenza: 'Ogni 10-12 giorni nelle ore fresche del tramonto.'
      },
      {
        titolo: 'Latte o Siero di Latte Diluito',
        ingredientiEDosi: '1 parte di latte vaccino scremato o siero in 9 parti d\'acqua (soluzione al 10%).',
        istruzioniUso: 'Le proteine del latte e i fermenti lattici creano una barriera naturale e rilasciano radicali liberi con la luce solare che distruggono il fungo.',
        frequenza: 'Ogni 5-7 giorni all\'inizio della primavera ed estate.'
      }
    ]
  },
  {
    id: 'botrite',
    nome: 'Botrite (Muffa Grigia)',
    nomeScientifico: 'Botrytis cinerea',
    tipo: 'malattia',
    categoria: 'Fungo / Muffa',
    icona: '🌫️',
    pianteColpiteIds: ['fragola', 'lampone', 'pomodoro', 'lattuga', 'cipolla'],
    pianteColpiteNomi: ['Fragola', 'Lampone', 'Pomodoro', 'Lattuga'],
    descrizione: 'Fungo parassita che attacca prevalentemente tessuti teneri, fiori e frutti in fase di maturazione, ricoprendoli di un caratteristico feltro grigio polveroso.',
    sintomi: [
      'Marciscenza morbida e acquosa dei frutti (soprattutto fragole e pomodori a contatto col terreno).',
      'Formazione di una fitta peluria color cenere polverosa sui tessuti decomposti.',
      'Sui fusti di pomodoro provoca lesioni cancerose allungate color marrone chiaro.'
    ],
    condizioniFavorevoli: 'Umidità molto alta (>85%), piogge continue, ristagno idrico e temperature tra 15°C e 20°C.',
    prevenzione: [
      'Pacciamare le fragole con paglia spessa per tenerle sollevate dal suolo bagnato.',
      'Diradare le foglie dense per garantire massima aerazione solare.',
      'Eliminare immediatamente i frutti marci dal campo (non metterli nel compost!).'
    ],
    rimediBio: [
      {
        titolo: 'Polvere di Roccia (Zeolite o Caolino) Idrorepellente',
        ingredientiEDosi: '30-40g di polvere di roccia micronizzata (chabasite o zeolite) per litro.',
        istruzioniUso: 'Crea una pellicola protettiva meccanica che assorbe l\'umidità residua sulla buccia dei frutti e asciuga le spore.',
        frequenza: 'Dopo ogni pioggia durante la fioritura e l\'invaiatura dei frutti.'
      },
      {
        titolo: 'Propoli Agricola Biologica',
        ingredientiEDosi: '2-3 ml di tintura idroalcolica di propoli per litro d\'acqua.',
        istruzioniUso: 'Cicatrizza ferite di potatura o grandine impedendo l\'ingresso del patogeno.',
        frequenza: 'All\'occorrenza dopo tagli o traumi meteorologici.'
      }
    ]
  },
  {
    id: 'ruggine',
    nome: 'Ruggine delle Piante',
    nomeScientifico: 'Pucciniales / Uromyces',
    tipo: 'malattia',
    categoria: 'Fungo / Muffa',
    icona: '🟠',
    pianteColpiteIds: ['aglio', 'cipolla', 'porro', 'fagiolo', 'erba-cipollina', 'menta'],
    pianteColpiteNomi: ['Aglio', 'Cipolla', 'Porro', 'Fagiolo', 'Menta'],
    descrizione: 'Malattia fungina inconfondibile che colpisce in particolare le liliacee (aglio, cipolla, porro) e le leguminose, indebolendo drasticamente la fotosintesi.',
    sintomi: [
      'Comparsa di piccole pustole rilevate color ruggine, arancione vivo o bruno-rossastre sulle foglie e sui fusti.',
      'Le pustole rilasciano una polvere arancione (spore) al tocco.',
      'Ingiallimento e disseccamento precoce delle foglie con bulbi o baccelli rachitici.'
    ],
    condizioniFavorevoli: 'Primavere e autunni umidi con temperature comprese tra 16°C e 22°C con nebbia o rugiada persistente.',
    prevenzione: [
      'Rotazioni colturali rigorose per aglio e cipolle (non ripiantarli nello stesso punto per 3 anni).',
      'Evitare terreni argillosi e asfittici che provocano ristagni radicali.',
      'Raccogliere ed eliminare le foglie basali infette al primo accenno.'
    ],
    rimediBio: [
      {
        titolo: 'Macerato di Ortica e Decotto di Equiseto',
        ingredientiEDosi: 'Miscela al 50% di macerato di ortica diluito 1:10 e decotto d\'equiseto diluito 1:5.',
        istruzioniUso: 'Rinforza le difese immunitarie della pianta e inibisce la penetrazione delle spore.',
        frequenza: 'Ogni 10 giorni nei mesi a rischio.'
      },
      {
        titolo: 'Ossicloruro di Rame a Basso Dosaggio',
        ingredientiEDosi: '2-3 grammi per litro d\'acqua.',
        istruzioniUso: 'Trattamento d\'arresto sulle leguminose o cipolle prima dell\'ingrossamento del bulbo.',
        frequenza: '1 intervento mirato a inizio attacco.'
      }
    ]
  },

  // ==================== INSETTI E ACARI ====================
  {
    id: 'afidi',
    nome: 'Afidi (Pidocchi delle Piante)',
    nomeScientifico: 'Aphis fabae / Myzus persicae / Macrosiphum',
    tipo: 'parassita',
    categoria: 'Insetto / Acari',
    icona: '🦗',
    pianteColpiteIds: ['pomodoro', 'peperone', 'melanzana', 'zucchina', 'fava', 'fagiolo', 'lattuga', 'rosmarino', 'basilico'],
    pianteColpiteNomi: ['Fava', 'Pomodoro', 'Peperone', 'Lattuga', 'Zucchina', 'Rosa'],
    descrizione: 'Piccoli insetti succhiatori gregari, neri, verdi o grigiastri. Si insediano a colonie fittissime sui germogli teneri e sul retro delle foglie, succhiando la linfa vitale e trasmettendo virosi.',
    sintomi: [
      'Foglie deformate, accartocciate e ingiallite sui nuovi germogli apicali.',
      'Presenza di secrezione zuccherina appiccicosa sulle foglie (melata).',
      'Comparsa di fumaggine (muffa nera fuligginosa) sopra la melata.',
      'Presenza sospetta di una fitta processione di formiche che "allevano" gli afidi per nutrirsi della melata.'
    ],
    condizioniFavorevoli: 'Primavera e inizio estate con temperature miti (18-25°C) ed eccesso di concimazioni azotate che inteneriscono la vegetazione.',
    prevenzione: [
      'Favorire insetti utili predatori: coccinelle (una larva divora fino a 100 afidi al giorno!), sirfidi e crisope.',
      'Seminare nei bordi dell\'orto fiori attrattori: tagete, calendula, facelia e nasturzio.',
      'Lavare con getto d\'acqua fredda la cima delle fave ai primi individui isolati.'
    ],
    rimediBio: [
      {
        titolo: 'Sapone Molle di Potassio (Sapone di Marsiglia puro)',
        ingredientiEDosi: '15-20 ml di sapone molle di potassio per litro d\'acqua tiepida.',
        istruzioniUso: 'Scioglie la cuticola cerosa protettiva degli afidi provocandone la rapida asfissia. Non ha residui tossici ed è innocuo per l\'uomo.',
        frequenza: 'Irrorare al tramonto direttamente sulla colonia; ripetere dopo 3 giorni se necessario.'
      },
      {
        titolo: 'Olio di Neem Puro Idrosolubile',
        ingredientiEDosi: '4-5 ml di olio di neem puro + 2 ml di sapone come emulsionante per litro d\'acqua.',
        istruzioniUso: 'L\'azadiractina blocca la muta degli insetti e inibisce il loro stimolo alla nutrizione con effetto repellente e sistemico naturale.',
        frequenza: 'Ogni 7 giorni per 2-3 trattamenti.'
      },
      {
        titolo: 'Macerato Casalingo di Aglio e Peperoncino',
        ingredientiEDosi: '1 testa d\'aglio tritata + 2 cucchiaini di polvere di peperoncino forte macerati per 24 ore in 1 litro d\'acqua.',
        istruzioniUso: 'Filtrare e spruzzare puro. L\'allicina e la capsaicina fungono da potentissimi repellenti naturali istantanei.',
        frequenza: 'Ogni 5 giorni.'
      }
    ]
  },
  {
    id: 'mosca-bianca',
    nome: 'Mosca Bianca (Aleurodide)',
    nomeScientifico: 'Trialeurodes vaporariorum / Bemisia tabaci',
    tipo: 'parassita',
    categoria: 'Insetto / Acari',
    icona: '🪰',
    pianteColpiteIds: ['pomodoro', 'melanzana', 'peperone', 'zucchina', 'cetriolo'],
    pianteColpiteNomi: ['Pomodoro', 'Melanzana', 'Peperone', 'Zucchina'],
    descrizione: 'Minuscoli moscerini candidi lunghi 1-2 mm che si librano a nuvola scuotendo la pianta. Vivono e depongono uova sulla pagina inferiore delle foglie.',
    sintomi: [
      'Scuotendo i rami si alza una nuvola di microscopici insetti bianchi svolazzanti.',
      'Foglie macchiate di giallo, avvizzite e coperte da melata lucida e appiccicosa.',
      'Sviluppo di fumaggine scura che riduce la capacità fotosintetica della pianta.'
    ],
    condizioniFavorevoli: 'Clima caldo e poco ventilato, serre calde, tunnel o orti urbani riparati (25°C - 35°C).',
    prevenzione: [
      'Trappole cromotropiche gialle: fogli adesivi gialli posizionati all\'altezza delle cime per monitoraggio e cattura massale.',
      'Consociare con basilico, menta e calendula dal profumo sgradito.',
      'Mantenere un\'ottima ventilazione tra le piante.'
    ],
    rimediBio: [
      {
        titolo: 'Sapone di Potassio + Olio di Neem',
        ingredientiEDosi: '15 ml di sapone molle di potassio + 3 ml di olio di neem per litro d\'acqua.',
        istruzioniUso: 'Spruzzare con cura insistendo SOTTO le foglie dove si annidano neanidi e adulti.',
        frequenza: 'Ogni 4-5 giorni nelle ore serali.'
      },
      {
        titolo: 'Lancio di Insetti Utili Ausiliari (Encarsia formosa)',
        ingredientiEDosi: 'Vespine parassitoidi ecologiche acquistabili per serre e tunnel.',
        istruzioniUso: 'Depongono le loro uova all\'interno delle pupe della mosca bianca neutralizzandole.',
        frequenza: 'All\'avvio della stagione calda.'
      }
    ]
  },
  {
    id: 'dorifora',
    nome: 'Dorifora della Patata e Melanzana',
    nomeScientifico: 'Leptinotarsa decemlineata',
    tipo: 'parassita',
    categoria: 'Insetto / Acari',
    icona: '🐞',
    pianteColpiteIds: ['patata', 'melanzana', 'pomodoro'],
    pianteColpiteNomi: ['Patata', 'Melanzana', 'Pomodoro'],
    descrizione: 'Coleottero caratterizzato da 10 bande nere longitudinali su fondo giallo/arancio. Le voracissime larve rossastre sono in grado di defogliare completamente un appezzamento di patate in pochi giorni.',
    sintomi: [
      'Foglie vistosamente rosicchiate a partire dai margini, lasciando intatte solo le nervature principali ("scheletrizzazione").',
      'Presenza di uova ovali color giallo-arancio brillante deposte a grappolo sul retro delle foglie.',
      'Larve arcuate panciute arancioni con puntini neri laterali che divorano i fusti.'
    ],
    condizioniFavorevoli: 'Terreni caldi e asciutti da maggio a luglio con temperature attorno ai 20-25°C.',
    prevenzione: [
      'Raccolta manuale tempestiva all\'inizio della primavera degli adulti svernanti e schiacciamento dei grappoli di uova arancioni sotto le foglie.',
      'Rotazione colturale ferrea: mai patate o melanzane dove sono state coltivate l\'anno precedente.',
      'Rincalzatura frequente per ostacolare l\'uscita degli adulti dal suolo.'
    ],
    rimediBio: [
      {
        titolo: 'Bacillus thuringiensis varietà tenebrionis',
        ingredientiEDosi: '1.5 - 2g per litro d\'acqua secondo etichetta biologica.',
        istruzioniUso: 'Batterio naturale altamente selettivo che uccide per ingestione le giovani larve di dorifora senza arrecare alcun danno a insetti utili, api o persone.',
        frequenza: 'Trattare alla comparsa delle prime larvette rosse, preferibilmente al tramonto.'
      },
      {
        titolo: 'Spinosad o Olio di Neem',
        ingredientiEDosi: 'Spinosad bio (batterio del suolo): dosaggi da etichetta (circa 0.8 ml/litro).',
        istruzioniUso: 'Efficace anche su adulti e larve avanzate quando l\'infestazione è estesa.',
        frequenza: 'Massimo 2 trattamenti a stagione per preservare l\'efficacia.'
      }
    ]
  },
  {
    id: 'tuta-absoluta',
    nome: 'Tuta Absoluta (Tignola del Pomodoro)',
    nomeScientifico: 'Tuta absoluta',
    tipo: 'parassita',
    categoria: 'Insetto / Acari',
    icona: '🐛',
    pianteColpiteIds: ['pomodoro', 'melanzana', 'peperone'],
    pianteColpiteNomi: ['Pomodoro', 'Melanzana'],
    descrizione: 'Microlepidottero devastante originario del Sudamerica. I piccoli bruchi scavano gallerie trasparenti ("mine fogliari") nel parenchima della foglia e penetrano direttamente dentro i pomodori.',
    sintomi: [
      'Gallerie traslucide allargate irregolari sulle foglie, con all\'interno residui di escrementi neri granulosi.',
      'Forellini scuri sul calice del pomodoro con marcescenza interna del frutto verde o maturo.',
      'Apici vegetativi disseccati e fusti scavati all\'interno.'
    ],
    condizioniFavorevoli: 'Clima caldo estivo (>25°C); si riproduce fino a 10-12 generazioni all\'anno se non controllata.',
    prevenzione: [
      'Installazione precoce di trappole a feromoni sessuali a inizio maggio per monitorare e catturare i maschi adulti.',
      'Copertura delle piantine giovani con reti anti-insetto a maglia fitta.',
      'Distruzione accurata dei residui di coltivazione infetti fine stagione.'
    ],
    rimediBio: [
      {
        titolo: 'Bacillus thuringiensis varietà kurstaki',
        ingredientiEDosi: '1-2 grammi per litro d\'acqua.',
        istruzioniUso: 'Trattare la sera quando i bruchi sono attivi all\'esterno o all\'ingresso delle gallerie fogliari.',
        frequenza: 'Ogni 7-10 giorni da inizio fioritura.'
      },
      {
        titolo: 'Polvere di Roccia (Zeolite Cubana o Caolino)',
        ingredientiEDosi: '25-30g per litro d\'acqua.',
        istruzioniUso: 'Crea una barriera minerale abrasiva sulle foglie che scoraggia la femmina dal deporre le uova.',
        frequenza: 'Ogni 15 giorni.'
      }
    ]
  },
  {
    id: 'cavolaia',
    nome: 'Cavolaia (Bruco dei Cavoli)',
    nomeScientifico: 'Pieris brassicae / Pieris rapae',
    tipo: 'parassita',
    categoria: 'Insetto / Acari',
    icona: '🦋',
    pianteColpiteIds: ['cavolo', 'cavolfiore', 'verza', 'broccolo', 'cima-di-rapa', 'rucola', 'ravanello'],
    pianteColpiteNomi: ['Cavolo Cappuccio', 'Verza', 'Cavolfiore', 'Broccolo', 'Rucola'],
    descrizione: 'La comune farfalla bianca con puntini neri. Depone grappoli di uova gialle sulle Brassicacee; le larve verde-giallastre voraci scheletrizzano i cespi.',
    sintomi: [
      'Grandi fori irregolari sulle foglie di cavolo, fino a lasciare solo le nervature dure.',
      'Presenza di feci scure a pallina tra le pieghe del cespo.',
      'Volo insistente di farfalle bianche sopra le aiuole dei cavoli da primavera ad autunno inoltrato.'
    ],
    condizioniFavorevoli: 'Primavera ed estate inoltrata, soprattutto da fine agosto a ottobre quando si concentrano i trapianti autunnali.',
    prevenzione: [
      'Consociare con piante aromatiche repellenti: timo, salvia, rosmarino, menta e sedano che confondono il senso dell\'olfatto della farfalla.',
      'Controllo manuale settimanale del retro delle foglie per schiacciare le uova dorate.',
      'Coprire con rete antinsetto trasparente.'
    ],
    rimediBio: [
      {
        titolo: 'Bacillus thuringiensis kurstaki (Rimedio d\'elezione)',
        ingredientiEDosi: '1.5g per litro d\'acqua.',
        istruzioniUso: 'Innocuo per l\'uomo e gli animali domestici, tossico esclusivamente per i bruchi di lepidottero che cessano di nutrirsi entro poche ore.',
        frequenza: 'Ai primi morsi evidenti delle larve.'
      },
      {
        titolo: 'Macerato di Foglie di Pomodoro',
        ingredientiEDosi: '300g di femminelle e foglie di pomodoro macerate per 24 ore in 2 litri d\'acqua.',
        istruzioniUso: 'La solanina naturale contenuta nelle foglie agisce da repellente amaro sulla cavolaia.',
        frequenza: 'Spruzzare ogni 5 giorni.'
      }
    ]
  },
  {
    id: 'lumache',
    nome: 'Lumache e Chiocciole',
    nomeScientifico: 'Deroceras reticulatum / Helix aspersa / Arion',
    tipo: 'parassita',
    categoria: 'Mollusco / Terricolo',
    icona: '🐌',
    pianteColpiteIds: ['lattuga', 'spinacio', 'bietola', 'fragola', 'zucchina', 'basilico'],
    pianteColpiteNomi: ['Lattuga', 'Fragola', 'Bietola', 'Spinacio', 'Basilico', 'Zucchina'],
    descrizione: 'Molluschi gasteropodi con guscio (chiocciole) o nudi (lumaconi rossi o grigi). Attivi di notte o dopo la pioggia, sono capaci di divorare un\'intera aiuola di piantine neonate in una sola notte.',
    sintomi: [
      'Piantine giovani appena trapiantate o seminate rase completamente al suolo al mattino.',
      'Grandi fori lisci al centro delle foglie e sui frutti maturi di fragola.',
      'Tracce luccicanti di bava argentata essiccata sul terreno e sui sassi vicini.'
    ],
    condizioniFavorevoli: 'Clima piovoso, umidità notturna elevata, terreni coperti da erbacce e mucchi di sassi o tavole dove ripararsi durante il giorno.',
    prevenzione: [
      'Arieggiare il suolo sarchiando superficialmente nelle ore calde per far seccare le uova al sole.',
      'Creare barriere insormontabili attorno alle aiuole con cenere di legna asciutta, fondi di caffè, gusci d\'uovo tritati o sabbia grossolana.',
      'Irrigare al mattino presto anziché la sera per lasciare il suolo asciutto durante la notte.'
    ],
    rimediBio: [
      {
        titolo: 'Trappole alla Birra (Metodo Tradizionale)',
        ingredientiEDosi: 'Bicchieri di plastica interrati a livello del suolo riempiti per metà con birra economica.',
        istruzioniUso: 'Il lievito della birra attira irresistibilmente le lumache anche da diversi metri di distanza, facendole annegare.',
        frequenza: 'Svuotare e rinnovare la birra ogni 3-4 giorni o dopo forti piogge.'
      },
      {
        titolo: 'Fosfato Ferrico Biologico (Esca lumachicida naturale)',
        ingredientiEDosi: 'Granuli di fosfato ferrico (3-5 grammi al metro quadro).',
        istruzioniUso: 'Composto minerale approvato in agricoltura biologica. A differenza del vecchio metaldeide velenoso, non è tossico per cani, gatti, ricci e uccelli. Se non consumato si degrada in ferro e fosforo fertilizzante per il suolo.',
        frequenza: 'Distribuire lungo il perimetro delle aiuole delicate.'
      }
    ]
  },
  {
    id: 'ragnetto-rosso',
    nome: 'Ragnetto Rosso (Acaro Tetranichide)',
    nomeScientifico: 'Tetranychus urticae',
    tipo: 'parassita',
    categoria: 'Insetto / Acari',
    icona: '🕷️',
    pianteColpiteIds: ['pomodoro', 'peperone', 'melanzana', 'fagiolo', 'fragola'],
    pianteColpiteNomi: ['Pomodoro', 'Melanzana', 'Peperone', 'Fagiolo', 'Fragola'],
    descrizione: 'Minuscolo acaro invisibile a occhio nudo (lungo 0.5 mm). Vive in colonie sotto le foglie producendo finissime ragnatele protettive. Svuota le cellule vegetali portando la pianta a completo deperimento.',
    sintomi: [
      'Foglie che assumono un aspetto bronzato, rugginoso, fittamente punteggiate di bianco-giallo.',
      'Presenza di finissime ragnatele tra le nervature e agli apici dei rami.',
      'Defogliazione precoce e blocco completo della crescita.'
    ],
    condizioniFavorevoli: 'Caldo torrido (>30°C) combinato con aria secchissima e assenza di piogge (tipica canicola estiva di luglio e agosto).',
    prevenzione: [
      'Evitare la siccità estrema nell\'orto: bagnare periodicamente anche i camminamenti per mantenere umidità ambientale.',
      'Trattare con polveri di roccia (zeolite o caolino) che creano ambiente polveroso sfavorevole.',
      'Non abusare di insetticidi a largo spettro che uccidono i fitoseidi (acari predatori naturali).'
    ],
    rimediBio: [
      {
        titolo: 'Nebulizzazione di Acqua Fredda o Sapone Molle',
        ingredientiEDosi: 'Docce di acqua fresca sulla pagina inferiore della foglia nelle ore serali, oppure sapone di potassio a 10 ml/L.',
        istruzioniUso: 'L\'umidità elevata e l\'acqua bloccano istantaneamente la moltiplicazione degli acari e ne distruggono le ragnatele.',
        frequenza: 'Quotidianamente durante le ondate di calore estivo.'
      },
      {
        titolo: 'Olio di Soia o Olio di Colza Emulsionato',
        ingredientiEDosi: '10 ml di olio vegetale con 5 ml di sapone liquido per litro.',
        istruzioniUso: 'Soffoca gli acari e le loro uova senza creare resistenze chimiche.',
        frequenza: 'Ogni 5-7 giorni.'
      }
    ]
  },

  // ==================== FISIOPATIE E CARENZE ====================
  {
    id: 'marciume-apicale',
    nome: 'Marciume Apicale del Pomodoro ("Culo Nero")',
    nomeScientifico: 'Fisiopatia da Carenza di Calcio / Stress Idrico',
    tipo: 'fisiopatia',
    categoria: 'Fisiopatia / Carenza',
    icona: '🌑',
    pianteColpiteIds: ['pomodoro', 'peperone'],
    pianteColpiteNomi: ['Pomodoro', 'Peperone'],
    descrizione: 'GRAVE ERRORE COMUNE: NON È UN FUNGO O UN PARASSITA! È una disfunzione fisiologica dovuta all\'incapacità della pianta di trasportare calcio fino all\'apice estremo del frutto in fase di rapida espansione.',
    sintomi: [
      'Comparsa di una macchia circolare scura, depressa, cuoiosa e nerastra sulla parte inferiore del pomodoro (il fondo opposto al picciolo).',
      'Il tessuto lesionato si appiattisce, diventa duro e asciutto come cuoio nero.',
      'I pomodori allungati (tipo San Marzano o Cuore di Bue) sono i più sensibili.'
    ],
    condizioniFavorevoli: 'Alternanza di periodi di grave siccità con annaffiature abbondanti e improvvise, caldo intenso, terreni poveri di calcio o con eccesso di potassio/azoto ammoniacale.',
    prevenzione: [
      'REGOLARITÀ IDRICA ASSOLUTA: bagnare sempre con la stessa frequenza e quantità, evitando il ciclo "terreno arido spaccato -> allagamento".',
      'Pacciamare con paglia per mantenere costante l\'umidità del terreno e non far evaporare l\'acqua.',
      'Aggiungere calce spenta, carbonato di calcio o gusci d\'uovo polverizzati finemente al terreno prima del trapianto.'
    ],
    rimediBio: [
      {
        titolo: 'Regolarizzazione dell\'Irrigazione (La vera cura)',
        ingredientiEDosi: 'Irrigazione a goccia quotidiana o costante alla radice.',
        istruzioniUso: 'Il calcio si sposta nella pianta SOLO attraverso il flusso traspiratorio dell\'acqua. Se la terra si asciuga, il flusso si arresta e le cellule all\'apice del frutto collassano.',
        frequenza: 'Costante e regolare.'
      },
      {
        titolo: 'Trattamento Fogliare con Calcio Biologico',
        ingredientiEDosi: 'Cloruro di calcio o chelato di calcio biologico idrosolubile (2-3g/L).',
        istruzioniUso: 'Nebulizzare direttamente sulle foglie e sui frutti piccoli per bypassare le radici in periodi di forte caldo.',
        frequenza: 'Ogni 10 giorni.'
      }
    ]
  },
  {
    id: 'clorosi-ferrica',
    nome: 'Clorosi Ferrica (Carenza di Ferro)',
    nomeScientifico: 'Fisiopatia Nutrizionale da pH Elevato',
    tipo: 'fisiopatia',
    categoria: 'Fisiopatia / Carenza',
    icona: '🟡',
    pianteColpiteIds: ['fragola', 'lampone', 'mirtillo', 'rosmarino', 'salvia', 'peperone'],
    pianteColpiteNomi: ['Fragola', 'Mirtillo', 'Lampone', 'Rosmarino'],
    descrizione: 'Impossibilità per la pianta di assorbire il ferro presente nel suolo, solitamente perché il terreno è troppo calcareo (pH > 7.5) o compattato e asfittico.',
    sintomi: [
      'Ingiallimento marcato delle foglie più giovani partendo dall\'apice, mentre le nervature rimangono di un verde scuro brillante ("aspetto a ragnatela o mosaico verde").',
      'Crescita stentata, fioritura scarsa e ingiallimento generale della chioma.'
    ],
    condizioniFavorevoli: 'Terreni molto calcarei, irrigazione con acqua di rubinetto dura e ricca di calcare, ristagni radicali prolungati.',
    prevenzione: [
      'Apportare abbondante sostanza organica acida (terriccio di foglie, corteccia di pino o torba acida) per mirtilli e piccoli frutti.',
      'Usare preferibilmente acqua piovana decantata per l\'irrigazione.'
    ],
    rimediBio: [
      {
        titolo: 'Chelato di Ferro Rinverdente (EDDHA)',
        ingredientiEDosi: '3-5 grammi per 10 litri d\'acqua distribuiti al suolo.',
        istruzioniUso: 'Il ferro chelato resiste al calcare e viene immediatamente assorbito dalle radici ripristinando il verde brillante in 5-7 giorni.',
        frequenza: '1-2 volte all\'anno a inizio primavera.'
      },
      {
        titolo: 'Macerato d\'Ortica al Suolo',
        ingredientiEDosi: 'Macerato fermentato 14 giorni diluito 1:10.',
        istruzioniUso: 'Ricchissimo di ferro e azoto assimilabile, acidifica leggermente il terreno attorno alla radice.',
        frequenza: 'Ogni 2 settimane.'
      }
    ]
  }
];
