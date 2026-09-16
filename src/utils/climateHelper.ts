import { ClimateInfo, ClimateZone } from '../types';

export const CLIMATE_ZONES: Record<ClimateZone, ClimateInfo> = {
  nord: {
    id: 'nord',
    nome: 'Nord Italia & Clima Freddo',
    titoloBreve: 'Nord & Freddo',
    descrizione: 'Pianura Padana, zone prealpine e collinari fredde con inverni rigidi e gelate tardive possibili fino a metà aprile.',
    caratteristiche: 'Le semine all\'aperto iniziano circa 3-4 settimane più tardi (aprile/maggio invece di marzo). In autunno le gelate arrivano prima (ottobre/novembre). Fondamentale l\'uso del semenzaio protetto e pacciamatura.',
    offsetMesiPrimavera: 1, // shifts sowing 1 month later
    offsetMesiAutunno: -1,
    consiglio: 'Non affrettare le semine in piena terra prima di metà aprile. Per pomodori, peperoni e melanzane usa semenzai caldi a fine inverno.'
  },
  centro: {
    id: 'centro',
    nome: 'Centro Italia & Fascia Collinare',
    titoloBreve: 'Centro Temperato',
    descrizione: 'Toscana, Umbria, Marche, Lazio, zone collinari con clima temperato equilibrato.',
    caratteristiche: 'Rappresenta il calendario standard della tradizione agronomica italiana: primavera mite da fine marzo e autunni temperati con buone piogge.',
    offsetMesiPrimavera: 0,
    offsetMesiAutunno: 0,
    consiglio: 'Calendario standard ottimale: semine all\'aperto da fine marzo e trapianti a pieno regime in aprile e maggio.'
  },
  sud: {
    id: 'sud',
    nome: 'Sud Italia, Coste & Isole',
    titoloBreve: 'Sud & Isole',
    descrizione: 'Campania, Puglia, Calabria, Sicilia, Sardegna e fasce costiere mediterranee a clima caldo e inverni miti.',
    caratteristiche: 'Inverni miti e senza gelate prolungate: semine all\'aperto anticipate già a febbraio/marzo. In estate sole caldissimo e siccità (indispensabile ombreggiatura e irrigazione al piede). Coltivazioni autunnali prolungate fino a gennaio.',
    offsetMesiPrimavera: -1, // shifts sowing 1 month earlier
    offsetMesiAutunno: 1,
    consiglio: 'Approfitta del clima mite per anticipare le semine estive a fine febbraio. In estate ombreggia le colture delicate come lattughe e pomodori.'
  }
};

/**
 * Get adjusted calendar months for a specific plant based on climate zone
 */
export function getAdjustedMonths(
  months: number[],
  zone: ClimateZone | string = 'centro',
  stage: 'semina' | 'seminaSemenzaio' | 'seminaTerra' | 'trapianto' | 'raccolta' = 'semina'
): number[] {
  const normalizedZone: ClimateZone = (zone === 'nord' || zone === 'sud') ? zone : 'centro';

  if (normalizedZone === 'centro' || !months || months.length === 0) {
    return months;
  }

  const offset = normalizedZone === 'nord' ? 1 : -1;
  const result = new Set<number>();

  for (const m of months) {
    // If Spring month (Feb-May)
    if (m >= 2 && m <= 5) {
      const adjusted = m + offset;
      if (adjusted >= 1 && adjusted <= 12) {
        result.add(adjusted);
      }
    } 
    // If Autumn/Winter extension for Sud
    else if (normalizedZone === 'sud' && (m >= 9 && m <= 11)) {
      result.add(m);
      if (m + 1 <= 12) result.add(m + 1); // extend 1 month
    }
    // If Autumn curtail for Nord
    else if (normalizedZone === 'nord' && m === 11 && stage === 'raccolta') {
      // November frost might curtail harvest
      result.add(m - 1);
    } 
    else {
      result.add(m);
    }
  }

  return Array.from(result).sort((a, b) => a - b);
}

export const CLIMATE_STORAGE_KEY = 'orto_virtuale_climate_zone_v1';

export function getSavedClimateZone(): ClimateZone {
  try {
    const saved = localStorage.getItem(CLIMATE_STORAGE_KEY) as ClimateZone;
    if (saved && (saved === 'nord' || saved === 'centro' || saved === 'sud')) {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'centro';
}

export function saveClimateZone(zone: ClimateZone): void {
  try {
    localStorage.setItem(CLIMATE_STORAGE_KEY, zone);
  } catch {
    // ignore
  }
}
