export type PlantCategory = 'ortaggio' | 'frutto' | 'aromatica';

export type SubCategory = 
  | 'Frutto' 
  | 'Foglia' 
  | 'Radice' 
  | 'Tubero' 
  | 'Bulbo' 
  | 'Fusto' 
  | 'Legume' 
  | 'Infiorescenza'
  | 'Piccolo frutto' 
  | 'Albero da frutto' 
  | 'Erba aromatica';

export type Difficulty = 'Facile' | 'Media' | 'Esperto';

export type Sunlight = 'Pieno sole' | 'Mezz\'ombra' | 'Ombra';

export type WateringLevel = 'Bassa' | 'Moderata' | 'Costante' | 'Abbondante';

export type LunarPhase = 'Crescente' | 'Calante' | 'Indifferente';

export type ClimateZone = 'nord' | 'centro' | 'sud';

export interface ClimateInfo {
  id: ClimateZone;
  nome: string;
  titoloBreve: string;
  descrizione: string;
  caratteristiche: string;
  offsetMesiPrimavera: number;
  offsetMesiAutunno: number;
  consiglio: string;
}

export interface PlantAdversity {
  nome: string;
  tipo: 'parassita' | 'malattia' | 'fisiopatia';
  rimedioBio: string;
  diseaseId?: string; // Link to full disease profile
}

export interface Plant {
  id: string;
  nome: string;
  nomeScientifico: string;
  famiglia: string;
  categoria: PlantCategory;
  sottoCategoria: SubCategory;
  descrizione: string;
  difficolta: Difficulty;
  icona: string;
  coloreTema: string;
  
  // Tempi in giorni
  giorniGerminazione: { min: number; max: number };
  giorniRaccolto: { min: number; max: number };
  
  // Calendario mesi (1-12) - Base standard Italia centrale
  mesiSeminaSemenzaio: number[];
  mesiSeminaTerra: number[];
  mesiTrapianto: number[];
  mesiRaccolta: number[];
  
  // Condizioni
  faseLunare: LunarPhase;
  faseLunareDettaglio: string;
  temperaturaIdeale: {
    germinazioneMin: number;
    germinazioneOttimale: number;
    crescitaMin: number;
    crescitaMax: number;
  };
  distanze: {
    traPianteCm: number;
    traFileCm: number;
    profonditaSeminaCm: number;
  };
  esposizione: Sunlight;
  irrigazione: {
    livello: WateringLevel;
    dettagli: string;
  };
  terreno: string;
  
  // Consociazioni
  consociazioni: {
    amiche: string[];
    nemiche: string[];
    motivo: string;
  };
  
  // Cura e segreti
  cureColturali: string[];
  avversita: PlantAdversity[];
  proprietaERaccolta: string;
  curiosita: string;
}

export interface PlantReminder {
  id: string;
  tipo: 'irrigazione' | 'concimazione' | 'difesa' | 'cura';
  titolo: string;
  descrizione: string;
  frequenzaGiorni: number;
  urgente: boolean;
  completato: boolean;
}

export interface ActivePlanting {
  id: string;
  plantId: string;
  nomePersonalizzato: string;
  dataSemina: string; // ISO date YYYY-MM-DD
  tipoAvvio: 'seme' | 'trapianto';
  giorniStimatiRaccolto: number;
  note: string;
  completata: boolean;
  dataRaccoltoEffettivo?: string;
  creatoIl: string;
  ultimoAnnaffiato?: string; // ISO date string
  ultimoConcimato?: string;  // ISO date string
  ultimoTrattamentoBio?: string; // ISO date string
  promemoriaCompletati?: string[]; // IDs or timestamps of completed actions
}

export type ViewTab = 'enciclopedia' | 'orto' | 'calendario' | 'malattie' | 'consociazioni' | 'fiori';

export type FlowerType = 'Annuale' | 'Perenne' | 'Bulbosa' | 'Biennale' | 'Rampicante' | 'Arbusto da fiore';

export interface Flower {
  id: string;
  nome: string;
  nomeScientifico: string;
  famiglia: string;
  tipo: FlowerType;
  icona: string;
  coloriPrincipali: string[];
  mesiFioritura: number[]; // 1-12
  mesiSeminaPiantagione: number[]; // 1-12
  altezzaMediaCm: { min: number; max: number };
  esposizione: Sunlight;
  irrigazione: {
    livello: WateringLevel;
    dettagli: string;
  };
  difficolta: Difficulty;
  profumata: boolean;
  attiraImpollinatori: boolean;
  edule: boolean; // fiori commestibili
  amicoOrto: boolean; // benefico per orto (antiparassitario, trappola o impollinazione)
  beneficioOrtoDescrizione?: string;
  descrizione: string;
  terreno: string;
  consigliColtivazione: string[];
  potaturaECura: string;
  avversitaComuni: string[];
  curiosita: string;
}

export interface FlowerFilterState {
  ricerca: string;
  tipo: FlowerType | 'tutti';
  esposizione: Sunlight | 'tutti';
  difficolta: Difficulty | 'tutti';
  meseFioritura: number | null; // 1-12 or null
  soloImpollinatori: boolean;
  soloEduli: boolean;
  soloAmiciOrto: boolean;
  soloProfumati: boolean;
  ordinamento: 'nome' | 'altezza' | 'fioritura';
}

export interface FilterState {
  ricerca: string;
  categoria: PlantCategory | 'tutti';
  sottoCategoria: SubCategory | 'tutti';
  difficolta: Difficulty | 'tutti';
  meseAttivo: number | null; // 1-12 or null
  soloSeminaOra: boolean;
  esposizione: Sunlight | 'tutti';
  ordinamento: 'nome' | 'giorniRaccolto' | 'difficolta';
}

export interface PestDisease {
  id: string;
  nome: string;
  nomeScientifico: string;
  tipo: 'malattia' | 'parassita' | 'fisiopatia';
  categoria: 'Fungo / Muffa' | 'Insetto / Acari' | 'Mollusco / Terricolo' | 'Fisiopatia / Carenza' | 'Batterio / Virus';
  icona: string;
  pianteColpiteIds: string[];
  pianteColpiteNomi: string[];
  descrizione: string;
  sintomi: string[];
  condizioniFavorevoli: string;
  prevenzione: string[];
  rimediBio: {
    titolo: string;
    ingredientiEDosi: string;
    istruzioniUso: string;
    frequenza: string;
  }[];
}
