import { Plant } from '../types';

export const DEFAULT_PAGE_TITLE = "Enciclopedia dell'Orto & Frutteto – Guida Botanica, Semine e Difesa Bio";
export const DEFAULT_META_DESC = "Guida botanica completa per l'orto con oltre 130 piante: scopri quando coltivare, seminare, trapiantare e raccogliere ortaggi, frutti ed erbe aromatiche con difesa biologica e calendario lunare.";

/**
 * Normalizes strings to match slugs (e.g. "pomodoro-ciliegino" or "Pomodoro Ciliegino")
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Searches the URL (query param or hash) to find if a specific plant was requested
 */
export const getPlantFromUrl = (plants: Plant[]): Plant | null => {
  if (typeof window === 'undefined') return null;

  const urlObj = new URL(window.location.href);
  const plantParam = urlObj.searchParams.get('pianta') || 
                     urlObj.searchParams.get('plant') || 
                     urlObj.searchParams.get('coltivare') || 
                     urlObj.searchParams.get('id');

  let hashParam = window.location.hash.replace(/^#/, '').trim();
  if (hashParam.startsWith('pianta=')) {
    hashParam = hashParam.replace('pianta=', '');
  } else if (hashParam.startsWith('coltivare=')) {
    hashParam = hashParam.replace('coltivare=', '');
  }

  const rawQuery = plantParam || hashParam;
  if (!rawQuery) return null;

  const query = decodeURIComponent(rawQuery).trim().toLowerCase();
  const querySlug = slugify(query);

  // 1. Exact ID match
  const exactId = plants.find((p) => p.id.toLowerCase() === query || p.id.toLowerCase() === querySlug);
  if (exactId) return exactId;

  // 2. Slug match against plant name
  const slugMatch = plants.find((p) => slugify(p.nome) === querySlug);
  if (slugMatch) return slugMatch;

  // 3. Name starts with query or contains query (e.g. "melanzana" matches "Melanzana")
  const partialMatch = plants.find((p) => {
    const pSlug = slugify(p.nome);
    return pSlug.includes(querySlug) || querySlug.includes(pSlug) || p.nome.toLowerCase().includes(query);
  });

  return partialMatch || null;
};

/**
 * Generates the absolute direct deep link for a plant
 */
export const getPlantDirectUrl = (plantId: string): string => {
  if (typeof window === 'undefined') return `?pianta=${plantId}`;
  const url = new URL(window.location.href);
  url.searchParams.set('pianta', plantId);
  url.hash = '';
  return url.toString();
};

/**
 * Synchronizes the browser address bar with the currently open plant
 */
export const syncUrlWithPlant = (plant: Plant | null): void => {
  if (typeof window === 'undefined' || !window.history) return;

  const url = new URL(window.location.href);

  if (plant) {
    url.searchParams.set('pianta', plant.id);
    // Remove hash if any to keep URL clean
    url.hash = '';
    window.history.replaceState({ plantId: plant.id }, '', url.toString());
  } else {
    // If closing modal, clean up plant query parameter
    if (url.searchParams.has('pianta') || url.searchParams.has('plant') || url.searchParams.has('id')) {
      url.searchParams.delete('pianta');
      url.searchParams.delete('plant');
      url.searchParams.delete('coltivare');
      url.searchParams.delete('id');
      const cleanUrl = url.pathname + (url.search ? url.search : '') + (url.hash ? url.hash : '');
      window.history.replaceState({}, '', cleanUrl);
    }
  }
};

/**
 * Updates dynamic meta tags and Schema.org JSON-LD for search engine crawlers (Google)
 */
export const updateSeoForPlant = (plant: Plant | null): void => {
  if (typeof document === 'undefined') return;

  const metaDesc = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');

  if (plant) {
    // High-CTR SEO title targeted at questions like "come coltivare [pianta]" or "quando si semina [pianta]"
    const customTitle = `Come coltivare ${plant.nome}: Semina, Cura e Raccolta | Enciclopedia dell'Orto`;
    const customDesc = `Guida completa su come coltivare ${plant.nome} (${plant.nomeScientifico}). Calendario di semina, trapianto, terreno ideale, fabbisogno d'acqua, consociazioni e difesa biologica.`;

    document.title = customTitle;

    if (metaDesc) metaDesc.setAttribute('content', customDesc);
    if (ogTitle) ogTitle.setAttribute('content', customTitle);
    if (ogDesc) ogDesc.setAttribute('content', customDesc);
    if (ogUrl) ogUrl.setAttribute('content', getPlantDirectUrl(plant.id));
    if (twitterTitle) twitterTitle.setAttribute('content', customTitle);
    if (twitterDesc) twitterDesc.setAttribute('content', customDesc);

    // Dynamic Schema.org JSON-LD (HowTo / Article)
    let schemaTag = document.getElementById('plant-dynamic-jsonld') as HTMLScriptElement | null;
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.id = 'plant-dynamic-jsonld';
      schemaTag.type = 'application/ld+json';
      document.head.appendChild(schemaTag);
    }

    schemaTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `Come coltivare ${plant.nome}`,
      description: `Guida agronomica completa per coltivare ${plant.nome} (${plant.nomeScientifico}).`,
      totalTime: `P${plant.giorniRaccolto.max}D`,
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'EUR',
        value: '0'
      },
      step: [
        {
          '@type': 'HowToStep',
          name: 'Periodo e Metodo di Semina',
          text: `Semina in semenzaio o piena terra. Terreno ideale: ${plant.terreno}.`
        },
        {
          '@type': 'HowToStep',
          name: 'Irrigazione e Cura',
          text: `Irrigazione (${plant.irrigazione.livello}): ${plant.irrigazione.dettagli}`
        },
        {
          '@type': 'HowToStep',
          name: 'Raccolta',
          text: `${plant.proprietaERaccolta || `La raccolta avviene mediamente tra ${plant.giorniRaccolto.min} e ${plant.giorniRaccolto.max} giorni dalla semina.`}`
        }
      ]
    });
  } else {
    // Reset to default
    document.title = DEFAULT_PAGE_TITLE;

    if (metaDesc) metaDesc.setAttribute('content', DEFAULT_META_DESC);
    if (ogTitle) ogTitle.setAttribute('content', DEFAULT_PAGE_TITLE);
    if (ogDesc) ogDesc.setAttribute('content', DEFAULT_META_DESC);
    if (ogUrl) ogUrl.setAttribute('content', window.location.origin + window.location.pathname);
    if (twitterTitle) twitterTitle.setAttribute('content', DEFAULT_PAGE_TITLE);
    if (twitterDesc) twitterDesc.setAttribute('content', DEFAULT_META_DESC);

    const schemaTag = document.getElementById('plant-dynamic-jsonld');
    if (schemaTag) {
      schemaTag.remove();
    }
  }
};
