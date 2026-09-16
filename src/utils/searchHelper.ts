import { Plant } from '../types';

/**
 * Remove diacritics / accents from text: 'è' -> 'e', 'à' -> 'a', etc.
 */
export function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/**
 * Common Italian stopwords to ignore in search queries if there are other keywords
 */
export const ITALIAN_STOPWORDS = new Set([
  'il', 'lo', 'la', 'i', 'gli', 'le', 'l',
  'un', 'uno', 'una', 'un\'',
  'di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra', 'd',
  'del', 'dello', 'della', 'dei', 'degli', 'delle',
  'al', 'allo', 'alla', 'ai', 'agli', 'alle',
  'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle',
  'nel', 'nello', 'nella', 'nei', 'negli', 'nelle',
  'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle',
  'e', 'ed', 'o', 'od', 'ma', 'se', 'che', 'non',
  'come', 'cosa', 'dove', 'quando', 'perche', 'quale', 'quali', 'chi',
  'coltivare', 'coltivazione', 'piantare', 'semina', 'pianta', 'piante'
]);

/**
 * Direct singular/plural/variant mappings for common Italian garden crops
 */
const SPECIFIC_CROP_VARIANTS: Record<string, string[]> = {
  // Frutta
  melo: ['mela', 'mele', 'melo'],
  mela: ['mele', 'melo', 'mela'],
  mele: ['mela', 'melo', 'mele'],
  pero: ['pera', 'pere', 'pero'],
  pera: ['pere', 'pero', 'pera'],
  pere: ['pera', 'pero', 'pere'],
  pesco: ['pesca', 'pesche', 'pesco', 'nettarina', 'nettarine', 'percoca'],
  pesca: ['pesche', 'pesco', 'pesca'],
  pesche: ['pesca', 'pesco', 'pesche'],
  albicocco: ['albicocca', 'albicocche', 'albicocco'],
  albicocca: ['albicocche', 'albicocco', 'albicocca'],
  albicocche: ['albicocca', 'albicocco', 'albicocche'],
  susino: ['susina', 'susine', 'prugna', 'prugne', 'prugno', 'susino'],
  susina: ['susine', 'susino', 'prugna', 'prugne', 'susina'],
  susine: ['susina', 'susino', 'prugne', 'prugna', 'susine'],
  prugna: ['prugne', 'susina', 'susine', 'susino', 'prugna'],
  prugne: ['prugna', 'susine', 'susina', 'susino', 'prugne'],
  ciliegio: ['ciliegia', 'ciliegie', 'ciliegio', 'duroni', 'durone'],
  ciliegia: ['ciliegie', 'ciliegio', 'ciliegia'],
  ciliegie: ['ciliegia', 'ciliegio', 'ciliegie'],
  fico: ['fichi', 'fico', 'fioroni'],
  fichi: ['fico', 'fichi'],
  limone: ['limoni', 'limone', 'agrume', 'agrumi'],
  limoni: ['limone', 'limoni'],
  arancio: ['arancia', 'arance', 'arancio', 'agrume', 'agrumi'],
  arancia: ['arance', 'arancio', 'arancia'],
  arance: ['arancia', 'arancio', 'arance'],
  melograno: ['melagrana', 'melagrano', 'melagrane', 'melograni', 'melograno'],
  melagrana: ['melograno', 'melagrane', 'melagrana'],
  melagrane: ['melograno', 'melagrana', 'melagrane'],
  noce: ['noci', 'noce'],
  noci: ['noce', 'noci'],
  nocciolo: ['nocciola', 'nocciole', 'nocciolo'],
  nocciola: ['nocciole', 'nocciolo', 'nocciola'],
  nocciole: ['nocciola', 'nocciolo', 'nocciole'],
  vite: ['uva', 'uve', 'vite', 'tralcio', 'grappolo'],
  uva: ['vite', 'uve', 'uva'],
  kiwi: ['actinidia', 'chivi', 'kivi'],
  mandarino: ['mandarini', 'clementina', 'clementine', 'mandancio', 'agrume', 'agrumi', 'mandarino'],
  mandarini: ['mandarino', 'clementina', 'clementine'],
  clementina: ['clementine', 'mandarino', 'mandarini'],
  clementine: ['clementina', 'mandarino', 'mandarini'],
  pompelmo: ['pompelmi', 'agrume', 'agrumi', 'pompelmo'],
  pompelmi: ['pompelmo'],
  cedro: ['cedri', 'agrume', 'agrumi', 'cedro'],
  cedri: ['cedro'],
  kaki: ['cachi', 'caco', 'diospiro', 'diospero', 'kaki', 'loti', 'loto'],
  cachi: ['kaki', 'caco', 'diospiro', 'diospero'],
  caco: ['cachi', 'kaki', 'diospiro'],
  diospiro: ['cachi', 'kaki'],
  nespolo: ['nespole', 'nespola', 'nespoli', 'nespolo'],
  nespole: ['nespolo', 'nespola', 'nespoli'],
  nespola: ['nespole', 'nespolo'],
  castagno: ['castagna', 'castagne', 'marroni', 'marrone', 'castagno'],
  castagna: ['castagne', 'castagno', 'marroni', 'marrone'],
  castagne: ['castagna', 'castagno', 'marroni', 'marrone'],
  marroni: ['marrone', 'castagne', 'castagna', 'castagno'],
  mandorlo: ['mandorla', 'mandorle', 'mandorlo'],
  mandorla: ['mandorle', 'mandorlo', 'mandorla'],
  mandorle: ['mandorla', 'mandorlo', 'mandorle'],
  pistacchio: ['pistacchi', 'pistacchio'],
  pistacchi: ['pistacchio'],
  cicerchia: ['cicerchie', 'cicerchia'],
  cicerchie: ['cicerchia'],
  lupino: ['lupini', 'lupinella', 'lupino'],
  lupini: ['lupino'],
  rabarbaro: ['rabarbaro', 'reum'],
  rafano: ['cren', 'barbaforte', 'kren', 'rafano'],
  cren: ['rafano', 'barbaforte', 'kren'],
  dragoncello: ['estragone', 'dragoncello'],
  estragone: ['dragoncello'],
  cerfoglio: ['cerfoglio'],
  issopo: ['issopo', 'hyssopus'],
  borragine: ['borragini', 'borraggine', 'boragine', 'borragine'],

  // Ortaggi a frutto
  pomodoro: ['pomodori', 'pomodorino', 'pomodorini', 'ciliegino', 'datterino', 'san marzano', 'pomodoro'],
  pomodori: ['pomodoro', 'pomodorini', 'pomodorino', 'pomodori'],
  zucchina: ['zucchine', 'zucchino', 'zucchini', 'zucchina'],
  zucchine: ['zucchina', 'zucchino', 'zucchini', 'zucchine'],
  zucchino: ['zucchine', 'zucchina', 'zucchini', 'zucchino'],
  zucchini: ['zucchina', 'zucchine', 'zucchino', 'zucchini'],
  melanzana: ['melanzane', 'melanzana'],
  melanzane: ['melanzana', 'melanzane'],
  peperone: ['peperoni', 'peperoncino', 'peperoncini', 'peperone'],
  peperoni: ['peperone', 'peperoncino', 'peperoncini', 'peperoni'],
  peperoncino: ['peperoncini', 'peperone', 'peperoni', 'habanero', 'cayenna', 'peperoncino'],
  peperoncini: ['peperoncino', 'peperoncini'],
  cetriolo: ['cetrioli', 'cetriolo'],
  cetrioli: ['cetriolo', 'cetrioli'],
  zucca: ['zucche', 'zucca'],
  zucche: ['zucca', 'zucche'],
  anguria: ['angurie', 'cocomero', 'cocomeri', 'anguria'],
  angurie: ['anguria', 'cocomero', 'angurie'],
  cocomero: ['cocomeri', 'anguria', 'angurie', 'cocomero'],
  cocomeri: ['cocomero', 'anguria', 'cocomeri'],
  melone: ['meloni', 'melone', 'cantalupo'],
  meloni: ['melone', 'meloni'],

  // Legumi
  cece: ['ceci', 'cece'],
  ceci: ['cece', 'ceci'],
  fagiolo: ['fagioli', 'fagiolino', 'fagiolini', 'fagiolo', 'borlotti', 'cannellini'],
  fagioli: ['fagiolo', 'fagiolini', 'fagiolino', 'fagioli'],
  fagiolino: ['fagiolini', 'fagiolo', 'mangiatutto', 'cornetto', 'fagiolino'],
  fagiolini: ['fagiolino', 'fagiolo', 'fagiolini'],
  pisello: ['piselli', 'pisello', 'taccole', 'taccola'],
  piselli: ['pisello', 'piselli'],
  fava: ['fave', 'fava'],
  fave: ['fava', 'fave'],
  lenticchia: ['lenticchie', 'lenticchia'],
  lenticchie: ['lenticchia', 'lenticchie'],

  // Radici e tuberi
  carota: ['carote', 'carota'],
  carote: ['carota', 'carote'],
  patata: ['patate', 'patata', 'batata', 'patate dolci'],
  patate: ['patata', 'patate'],
  batata: ['patata dolce', 'patate dolci', 'batata'],
  topinambur: ['carciofo di gerusalemme', 'ciena'],
  ravanello: ['ravanelli', 'ravanello'],
  ravanelli: ['ravanello', 'ravanelli'],
  barbabietola: ['barbabietole', 'rapa rossa', 'rape rosse', 'barbabietola'],
  barbabietole: ['barbabietola', 'barbabietole'],
  pastinaca: ['pastinache', 'pastinaca'],
  pastinache: ['pastinaca', 'pastinache'],
  scorzonera: ['scorzonere', 'scorza nera'],
  sedano_rapa: ['sedano rapa', 'sedani rapa'],

  // Foglie e insalate
  lattuga: ['lattughe', 'insalata', 'insalate', 'canasta', 'cappuccio', 'lattuga'],
  lattughe: ['lattuga', 'insalate', 'lattughe'],
  spinacio: ['spinaci', 'spinacio'],
  spinaci: ['spinacio', 'spinaci'],
  rucola: ['rucole', 'rughetta', 'rucola'],
  bietola: ['bietole', 'coste', 'erbetta', 'bietola'],
  bietole: ['bietola', 'coste', 'bietole'],
  radicchio: ['radicchi', 'treviso', 'chioggia', 'radicchio'],
  radicchi: ['radicchio', 'radicchi'],
  scarola: ['scarole', 'indivia', 'indivie', 'scarola'],
  scarole: ['scarola', 'scarole'],
  valeriana: ['valerianella', 'songino', 'valeriana'],
  songino: ['valerianella', 'valeriana', 'songino'],

  // Cavoli
  cavolo: ['cavoli', 'verza', 'cappuccio', 'cavolfiore', 'broccolo', 'romanesco', 'kale', 'cavolo'],
  cavoli: ['cavolo', 'cavoli'],
  broccolo: ['broccoli', 'calabrese', 'cime', 'broccolo'],
  broccoli: ['broccolo', 'broccoli'],
  cavolfiore: ['cavolfiori', 'cavolfiore'],
  cavolfiori: ['cavolfiore', 'cavolfiori'],
  verza: ['verze', 'cavolo verza', 'verza'],
  romanesco: ['broccolo romanesco', 'cavolo romanesco', 'romanesco'],
  cappuccio: ['cavolo cappuccio', 'cappuccio'],
  kale: ['cavolo riccio', 'kale'],

  // Bulbi
  cipolla: ['cipolle', 'dorata', 'rossa', 'tropea', 'cipolla'],
  cipolle: ['cipolla', 'cipolle'],
  cipollotto: ['cipollotti', 'cipollotto'],
  cipollotti: ['cipollotto', 'cipollotti'],
  aglio: ['agli', 'spicchi', 'spicchio', 'aglio'],
  agli: ['aglio', 'agli'],
  porro: ['porri', 'porro'],
  porri: ['porro', 'porri'],
  scalogno: ['scalogni', 'scalogno'],
  scalogni: ['scalogno', 'scalogni'],

  // Aromatiche
  basilico: ['basilici', 'genovese', 'basilico'],
  rosmarino: ['rosmarini', 'rosmarino'],
  salvia: ['salvie', 'officinale', 'salvia'],
  timo: ['timi', 'timo'],
  menta: ['mente', 'piperita', 'menta'],
  origano: ['origani', 'origano'],
  prezzemolo: ['prezzemoli', 'prezzemolo'],
  lavanda: ['lavande', 'lavanda'],
  alloro: ['lauro', 'alloro'],
  aneto: ['aneti', 'aneto'],
  santoreggia: ['santoreggie', 'santoreggia'],

  // Piccoli frutti
  fragola: ['fragole', 'fragola'],
  fragole: ['fragola', 'fragole'],
  lampone: ['lamponi', 'lampone'],
  lamponi: ['lampone', 'lamponi'],
  mirtillo: ['mirtilli', 'mirtillo'],
  mirtilli: ['mirtillo', 'mirtilli'],
  mora: ['more', 'mora'],
  more: ['mora', 'more'],
  ribes: ['uva spina', 'ribes rosso', 'ribes nero', 'ribes']
};

/**
 * Tokenize search query with proper Italian elision & punctuation handling
 */
export function tokenizeItalianQuery(query: string): string[] {
  if (!query) return [];

  let clean = removeAccents(query);

  // Strip Italian elisions and article contractions:
  // "l'aglio" -> " aglio", "dell'orto" -> " orto", "mezz'ombra" -> "mezz ombra"
  clean = clean.replace(/\b(?:l|d|un|dell|dall|nell|sull|all)'/gi, ' ');
  // Replace punctuation, symbols, brackets, commas, quotes with spaces
  clean = clean.replace(/[^a-z0-9\s]/g, ' ');

  const allTokens = clean
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length > 0);

  if (allTokens.length === 0) return [];

  // Filter out stop words if other meaningful tokens exist
  const meaningfulTokens = allTokens.filter(t => t.length >= 2 && !ITALIAN_STOPWORDS.has(t));

  return meaningfulTokens.length > 0 ? meaningfulTokens : allTokens;
}

/**
 * Levenshtein distance for fuzzy matching typos
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

/**
 * Returns grammatical morphological variants of a word (singular, plural, common stems)
 */
export function getWordVariants(word: string): string[] {
  const clean = removeAccents(word.trim());
  if (clean.length < 3) return [clean];

  const variants = new Set<string>();
  variants.add(clean);

  // Check specific crop dictionary first
  if (SPECIFIC_CROP_VARIANTS[clean]) {
    for (const v of SPECIFIC_CROP_VARIANTS[clean]) {
      variants.add(v);
    }
  }

  // Standard Italian grammatical inflection endings
  // -i -> -o / -e
  if (clean.endsWith('i') && clean.length > 3) {
    variants.add(clean.slice(0, -1) + 'o');
    variants.add(clean.slice(0, -1) + 'e');
  }
  // -e -> -a / -i / -o
  if (clean.endsWith('e') && clean.length > 3) {
    variants.add(clean.slice(0, -1) + 'a');
    variants.add(clean.slice(0, -1) + 'i');
    variants.add(clean.slice(0, -1) + 'o');
  }
  // -o -> -i
  if (clean.endsWith('o') && clean.length > 3) {
    variants.add(clean.slice(0, -1) + 'i');
  }
  // -a -> -e
  if (clean.endsWith('a') && clean.length > 3) {
    variants.add(clean.slice(0, -1) + 'e');
  }
  // -chi -> -co / -chio
  if (clean.endsWith('chi') && clean.length > 4) {
    variants.add(clean.slice(0, -3) + 'co');
    variants.add(clean.slice(0, -3) + 'chio');
  }
  // -ghi -> -go / -ga
  if (clean.endsWith('ghi') && clean.length > 4) {
    variants.add(clean.slice(0, -3) + 'go');
    variants.add(clean.slice(0, -3) + 'ga');
  }
  // -ci -> -ce / -cio / -cia
  if (clean.endsWith('ci') && clean.length > 3) {
    variants.add(clean.slice(0, -2) + 'ce');
    variants.add(clean.slice(0, -2) + 'cio');
    variants.add(clean.slice(0, -2) + 'cia');
  }

  // Filter out any accidental stop words or too short strings
  const valid = Array.from(variants).filter(v => v.length >= 3 && !ITALIAN_STOPWORDS.has(v));
  return valid.length > 0 ? valid : [clean];
}

/**
 * Builds a comprehensive search index corpus for a plant
 */
export function getPlantSearchCorpus(plant: Plant): string {
  const parts: string[] = [
    plant.nome,
    plant.nomeScientifico,
    plant.famiglia,
    plant.categoria,
    plant.sottoCategoria,
    plant.descrizione,
    plant.terreno,
    plant.proprietaERaccolta,
    plant.curiosita,
    plant.esposizione,
    plant.difficolta,
    plant.consociazioni.motivo,
    ...plant.consociazioni.amiche,
    ...plant.consociazioni.nemiche,
    ...plant.cureColturali,
    ...plant.avversita.map(a => `${a.nome} ${a.tipo} ${a.rimedioBio}`)
  ];

  return removeAccents(parts.join(' '));
}

/**
 * Checks category or high-level concept matches (e.g. searching 'legumi', 'frutta', 'agrumi', 'erbe', 'radici')
 */
function matchesCategoryConcept(token: string, plant: Plant): boolean {
  const t = removeAccents(token);

  if (t === 'legume' || t === 'legumi') {
    return plant.sottoCategoria === 'Legume' || plant.famiglia === 'Fabaceae';
  }
  if (t === 'frutta' || t === 'frutto' || t === 'frutti') {
    return plant.categoria === 'frutto';
  }
  if (t === 'ortaggio' || t === 'ortaggi' || t === 'verdura' || t === 'verdure') {
    return plant.categoria === 'ortaggio';
  }
  if (t === 'aromatica' || t === 'aromatiche' || t === 'erba' || t === 'erbe' || t === 'odori') {
    return plant.categoria === 'aromatica' || plant.sottoCategoria === 'Erba aromatica';
  }
  if (t === 'albero' || t === 'alberi' || t === 'frutteto') {
    return plant.sottoCategoria === 'Albero da frutto';
  }
  if (t === 'bacche' || t === 'piccolo frutto' || t === 'piccoli frutti') {
    return plant.sottoCategoria === 'Piccolo frutto';
  }
  if (t === 'tubero' || t === 'tuberi') {
    return plant.sottoCategoria === 'Tubero';
  }
  if (t === 'radice' || t === 'radici') {
    return plant.sottoCategoria === 'Radice';
  }
  if (t === 'bulbo' || t === 'bulbi') {
    return plant.sottoCategoria === 'Bulbo';
  }
  if (t === 'foglia' || t === 'foglie') {
    return plant.sottoCategoria === 'Foglia';
  }
  if (t === 'insalata' || t === 'insalate') {
    return ['lattuga', 'scarola', 'valeriana', 'radicchio', 'puntarelle', 'rucola', 'pak_choi'].includes(plant.id);
  }
  if (t === 'cavolo' || t === 'cavoli') {
    return plant.famiglia === 'Brassicaceae' || plant.nome.toLowerCase().includes('cavolo');
  }

  return false;
}

/**
 * Checks if a token matches the plant via exact word, prefix (if len >= 5), category concept, or typo tolerance (Levenshtein)
 */
function tokenMatchesPlant(token: string, plant: Plant, corpusWords: string[], corpusString: string): boolean {
  if (!token) return true;

  // 1. Category / concept check (e.g. 'legumi', 'frutta', 'erbe')
  if (matchesCategoryConcept(token, plant)) return true;

  // 2. Direct exact or prefix word check against all words in the corpus
  const variants = getWordVariants(token);

  for (const v of variants) {
    if (v.length < 3) continue;

    // Check exact word matches in corpus words
    if (corpusWords.includes(v)) return true;

    // If variant is 5+ letters, allow word prefix match (e.g. 'pomod' -> 'pomodoro', 'basilic' -> 'basilico')
    if (v.length >= 5) {
      if (corpusWords.some(cw => cw.startsWith(v))) return true;
    }
  }

  // 3. Substring check in full corpus for longer multi-word phrases or terms (len >= 6)
  if (token.length >= 6 && corpusString.includes(token)) {
    return true;
  }

  // 4. Typo tolerance on plant name or scientific name (Levenshtein <= 1 for 4-6 chars, <= 2 for >= 7)
  const plantNameClean = removeAccents(plant.nome);
  const plantSciClean = removeAccents(plant.nomeScientifico);
  const plantWords = [...plantNameClean.split(/\s+/), ...plantSciClean.split(/\s+/)].filter(w => w.length >= 4);

  const maxAllowedDist = token.length >= 7 ? 2 : (token.length >= 4 ? 1 : 0);

  if (maxAllowedDist > 0) {
    for (const pw of plantWords) {
      if (Math.abs(pw.length - token.length) <= maxAllowedDist) {
        if (levenshteinDistance(token, pw) <= maxAllowedDist) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Matches a query against a plant.
 * Returns true if EVERY meaningful token of the query matches the plant.
 */
export function matchesPlantQuery(plant: Plant, query: string): boolean {
  if (!query || !query.trim()) return true;

  const tokens = tokenizeItalianQuery(query);
  if (tokens.length === 0) return true;

  const corpusString = getPlantSearchCorpus(plant);
  const corpusWords = corpusString.split(/[^a-z0-9]+/).filter(w => w.length > 0);

  // Every token must match at least one aspect of the plant
  return tokens.every(token => tokenMatchesPlant(token, plant, corpusWords, corpusString));
}

/**
 * Calculates a search relevance score for a plant given a query string.
 * Higher score places direct hits (name, variety, keyword) at the top of results.
 */
export function calculatePlantRelevanceScore(plant: Plant, query: string): number {
  if (!query || !query.trim()) return 0;

  const tokens = tokenizeItalianQuery(query);
  if (tokens.length === 0) return 0;

  const rawQueryClean = removeAccents(query.trim());
  const plantNameClean = removeAccents(plant.nome);
  const plantSciClean = removeAccents(plant.nomeScientifico);
  const plantCategoryClean = removeAccents(plant.categoria);
  const plantSubCatClean = removeAccents(plant.sottoCategoria);

  let score = 0;

  // Exact full name match
  if (plantNameClean === rawQueryClean) {
    score += 5000;
  }
  // Plant ID match (e.g. 'cece', 'melo', 'pero')
  else if (plant.id === rawQueryClean) {
    score += 4500;
  }
  // Direct variant match on plant name (e.g. query='ceci' -> variant='cece', query='mele' -> variant='melo')
  const queryVariants = getWordVariants(rawQueryClean);
  if (queryVariants.some(v => plantNameClean === v || plant.id === v)) {
    score += 4000;
  }
  // Plant name starts with the query
  else if (plantNameClean.startsWith(rawQueryClean)) {
    score += 3000;
  }
  // Plant name contains the query as a whole
  else if (plantNameClean.includes(rawQueryClean)) {
    score += 2000;
  }

  // Category / Concept match (e.g. 'legumi', 'frutta', 'agrumi')
  if (tokens.some(t => matchesCategoryConcept(t, plant))) {
    score += 1500;
  }

  // Scientific name match
  if (plantSciClean.includes(rawQueryClean)) {
    score += 1200;
  }

  // Category or SubCategory text match
  if (plantCategoryClean.includes(rawQueryClean) || plantSubCatClean.includes(rawQueryClean)) {
    score += 1000;
  }

  // Individual tokens matching
  const plantWords = plantNameClean.split(/\s+/);
  for (const token of tokens) {
    const tokenVariants = getWordVariants(token);

    // If token directly matches a word in the plant name
    if (plantWords.some(pw => pw === token || tokenVariants.includes(pw))) {
      score += 800;
    } else if (plantWords.some(pw => pw.startsWith(token))) {
      score += 400;
    }

    // Adversity / Disease match (e.g. user searching "peronospora" or "afidi")
    const adversityMatch = plant.avversita.some(a => 
      removeAccents(a.nome).includes(token) || 
      removeAccents(a.rimedioBio).includes(token)
    );
    if (adversityMatch) {
      score += 300;
    }
  }

  return score;
}
